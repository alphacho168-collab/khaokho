const STORAGE_KEY = "khaokho-estate-properties";
const LEADS_STORAGE_KEY = "khaokho-estate-leads";
const AGENTS_STORAGE_KEY = "khaokho-estate-agents"; 

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "zaq123";
const AGENT_PASSWORD = "Ab123456"; 

const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyOaSXIxLTUM03rSvz4hHm24MucZwE4ueeENrvhcn9TI8oB96GKviGyW0uRv7Pi4MPf/exec";

const DEFAULT_CONTACT = {
  name: "Get Patradit",
  phone: "063 978 9356",
  line: "@812fqegp",
  facebook: "https://facebook.com"
};

const demoProperties = [
  {
    id: "prop-demo-1",
    type: "villa",
    title: "พูลวิลล่าชมหมอก Swiss Ridge",
    location: "แคมป์สน เขาค้อ เพชรบูรณ์",
    price: "18,900,000 บาท",
    description: "พูลวิลล่าพร้อมสระว่ายน้ำส่วนตัว ตั้งอยู่บนเนินรับวิวภูเขา 180 องศา เหมาะทำบ้านพักตากอากาศหรือปล่อยเช่าระดับพรีเมียม ใกล้คาเฟ่และแหล่งท่องเที่ยวสำคัญของเขาค้อ",
    features: ["4 ห้องนอน", "5 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "พื้นที่ใช้สอย 420 ตร.ม.", "ที่ดิน 1 ไร่"],
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"]
  },
  {
    id: "prop-demo-2",
    type: "land",
    title: "ที่ดินวิวสวิส Green Valley",
    location: "ทุ่งสมอ เขาค้อ เพชรบูรณ์",
    price: "เริ่มต้น 3,200,000 บาท/ไร่",
    description: "ที่ดินโฉนดพร้อมโอน วิวภูเขาสลับซับซ้อน อากาศเย็นสบายทั้งปี เหมาะสร้างพูลวิลล่า รีสอร์ตขนาดเล็ก คาเฟ่วิวหมอก หรือถือครองเพื่อการลงทุน",
    features: ["โฉนดครุฑแดง", "แบ่งขาย 2-12 ไร่", "ถนนเข้าถึง"],
    images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85"]
  }
];

let properties = loadProperties();
let agents = loadAgents();
let activeFilter = "all";
let currentAgent = null;

const propertyContainer = document.querySelector("#properties");
const statCount = document.querySelector("#stat-count");
const detailPanel = document.querySelector("#detail-panel");
const adminModal = document.querySelector("#admin-modal");
const adminPanel = document.querySelector("#admin-panel");
const adminLogin = document.querySelector("#admin-login");
const adminItems = document.querySelector("#admin-items");
const propertyForm = document.querySelector("#property-form");
const leadForm = document.querySelector("#lead-form");
const leadMessage = document.querySelector("#lead-message");

const agentRegisterModal = document.querySelector("#agent-register-modal");
const agentRegisterForm = document.querySelector("#agent-register-form");
const regMessage = document.querySelector("#reg-message");
const adminAgentsList = document.querySelector("#admin-agents-list");

function createId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadProperties() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) { localStorage.setItem(STORAGE_KEY, JSON.stringify(demoProperties)); return [...demoProperties]; }
  try { return JSON.parse(saved); } catch { return [...demoProperties]; }
}

function saveProperties() { localStorage.setItem(STORAGE_KEY, JSON.stringify(properties)); }
function loadAgents() { const saved = localStorage.getItem(AGENTS_STORAGE_KEY); return saved ? JSON.parse(saved) : []; }
function saveAgents() { localStorage.setItem(AGENTS_STORAGE_KEY, JSON.stringify(agents)); }
function propertyTypeLabel(type) { return type === "land" ? "ที่ดิน" : "พูลวิลล่า"; }
function splitList(value) { return value.split("|").map((item) => item.trim()).filter(Boolean); }

function checkAgentRoute() {
  const urlParams = new URLSearchParams(window.location.search);
  const agentId = urlParams.get('agent');
  if (agentId) {
    const agent = agents.find(a => a.id === agentId && a.status === "approved");
    if (agent) { currentAgent = agent; applyAgentContact(agent); return; }
  }
  currentAgent = null;
  applyAgentContact(DEFAULT_CONTACT);
}

function applyAgentContact(contact) {
  const phoneBtn = document.querySelector("#display-phone-link");
  if (phoneBtn) {
    phoneBtn.href = "javascript:void(0);";
    phoneBtn.onclick = function() {
      alert("หมายเลขโทรศัพท์ติดต่อทีมงาน:\n👉 " + contact.phone + " 👈");
    };
    phoneBtn.setAttribute("title", "คลิกเพื่อดูเบอร์โทรศัพท์: " + contact.phone);
  }
  document.querySelector("#display-line-link").href = contact.line.startsWith('http') ? contact.line : `https://line.me/R/ti/p/${contact.line.includes('@') ? '' : '@'}${contact.line.replace('@', '')}`;
  document.querySelector("#display-facebook-link").href = contact.facebook || "#";
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function renderProperties() {
  if (!propertyContainer) return;
  const visible = activeFilter === "all" ? properties : properties.filter((item) => item.type === activeFilter);
  if (statCount) statCount.textContent = properties.length.toString();

  propertyContainer.innerHTML = visible.map((item) => {
    const image = item.images?.[0] || "khao-kho-hero.png";
    const features = (item.features || []).slice(0, 3).map((f) => `<span>${f}</span>`).join("");
    return `
      <article class="property-card">
        <figure><img src="${image}" alt="${item.title}" loading="lazy" /><span class="badge">${propertyTypeLabel(item.type)}</span></figure>
        <div class="card-body">
          <h3>${item.title}</h3>
          <p class="location">${item.location}</p>
          <p class="price">${item.price}</p>
          <div class="mini-features">${features}</div>
          <button class="button neutral" type="button" data-detail="${item.id}">ดูรายละเอียด</button>
        </div>
      </article>
    `;
  }).join("");
}

if (propertyContainer) {
  propertyContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-detail]");
    if (button) openDetail(button.dataset.detail);
  });
}

function openDetail(id) {
  const item = properties.find((property) => property.id === id);
  if (!item) return;

  const detailFeaturesHtml = (item.features || []).map((feature) => `<li>${feature}</li>`).join("");
  const detailGalleryHtml = (item.images || []).map((image) => `<img src="${image}" alt="${item.title}" loading="lazy" />`).join("");
  const detailVideoHtml = item.video ? `<iframe src="${item.video}" title="วิดีโอ ${item.title}" allowfullscreen loading="lazy"></iframe>` : "";

  detailPanel.innerHTML = `
    <div class="detail-shell">
      <button class="icon-button close-detail" type="button" onclick="document.querySelector('#detail-panel').hidden = true;" aria-label="ปิดรายละเอียด">×</button>
      <div class="detail-gallery">${detailGalleryHtml}</div>
      <div class="detail-copy">
        <p class="section-kicker">${propertyTypeLabel(item.type)}</p>
        <h2>${item.title}</h2>
        <p class="detail-location">${item.location}</p>
        <p class="detail-price">${item.price}</p>
        <p>${item.description}</p>
        <ul class="feature-list">${detailFeaturesHtml}</div>
        <div class="video-wrap">${detailVideoHtml}</div>
        <div style="display:flex; flex-direction:column; gap:12px; margin-top:24px;">
          <button class="button primary" id="popup-interest-cta" type="button" style="width:100%;">สนใจทรัพย์นี้</button>
          <button class="button neutral" onclick="document.querySelector('#detail-panel').hidden = true;" type="button" style="width:100%; background:#eaeaea; color:#333;">ปิดหน้าต่างนี้</button>
        </div>
      </div>
    </div>
  `;

  detailPanel.hidden = false;
  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  document.querySelector("#popup-interest-cta").addEventListener("click", () => {
    detailPanel.hidden = true;
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { document.querySelector("#lead-name").focus(); }, 400);
    }
  });
}

if (agentRegisterForm) {
  agentRegisterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    regMessage.style.color = "var(--forest)";
    regMessage.textContent = "กำลังส่งข้อมูลลงทะเบียนเว็บลูก...";

    const fileInput = document.querySelector("#reg-slip").files[0];
    let slipBase64 = "";
    if (fileInput) slipBase64 = await fileToBase64(fileInput);

    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    const initialExpireStr = nextYear.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });

    const newAgent = {
      id: 'ag-' + Math.random().toString(36).substr(2, 9),
      type: "agent_registration",
      name: document.querySelector("#reg-name").value.trim(),
      phone: document.querySelector("#reg-phone").value.trim(),
      line: document.querySelector("#reg-line").value.trim(),
      facebook: document.querySelector("#reg-facebook").value.trim(),
      slip: slipBase64,
      status: "pending",
      parentId: currentAgent ? currentAgent.id : "master",
      expireAt: initialExpireStr,
      submittedAt: new Date().toISOString()
    };

    agents.push(newAgent);
    saveAgents();
    regMessage.textContent = "ส่งเอกสารลงทะเบียนเรียบร้อยแล้วค่ะ รอแอดมินอนุมัติสิทธิ์ระบบ";
    agentRegisterForm.reset();

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newAgent) });
      await fetchOnlineAgents();
    } catch (err) { console.error(err); }
  });
}

if (leadForm) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lead = {
      name: document.querySelector("#lead-name").value.trim(),
      phone: document.querySelector("#lead-phone").value.trim(),
      line: document.querySelector("#lead-line").value.trim(),
      interest: document.querySelector("#lead-interest").value,
      agentId: currentAgent ? currentAgent.id : "master",
      submittedAt: new Date().toISOString()
    };

    const savedLeads = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || "[]");
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([lead, ...savedLeads]));
    leadMessage.classList.remove("error");
    leadMessage.textContent = "บันทึกข้อมูลเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว";
    leadForm.reset();

    if (currentAgent) renderAgentLeads(currentAgent.id);
    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    } catch { leadMessage.classList.add("error"); }
  });
}

function renderAgentLeads(agentId) {
  const tableBody = document.querySelector("#agent-leads-table-body");
  if (!tableBody) return;
  const allLeads = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || "[]");
  const agentLeads = allLeads.filter(lead => lead.agentId === agentId);

  if (agentLeads.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="padding:14px; text-align:center; color:var(--muted);">ยังไม่มีข้อมูลลูกค้าลงทะเบียนเข้ามา</td></tr>`;
    return;
  }
  tableBody.innerHTML = agentLeads.map(lead => {
    const dateValue = lead.submittedAt || lead.date || new Date().toISOString();
    const formattedDate = new Date(dateValue).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
    return `<tr style="border-bottom: 1px solid var(--line); color: var(--ink);">
      <td style="padding:14px; font-weight:bold;">${lead.name || '-'}</td>
      <td style="padding:14px;">${lead.phone || '-'}</td>
      <td style="padding:14px;">${lead.line || '-'}</td>
      <td style="padding:14px;">${lead.interest || '-'}</td>
      <td style="padding:14px; color:var(--muted); font-size:13px;">${formattedDate}</td>
    </tr>`;
  }).join("");
}

function renderSubTeams(agentId) {
  const tableBody = document.querySelector("#agent-subteams-table-body");
  if (!tableBody) return;
  const subAgents = agents.filter(a => a.parentId === agentId);

  if (subAgents.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="padding:12px; text-align:center; color:var(--muted);">ยังไม่มีลูกทีมสมัครต่อสายงานจากลิงก์ของคุณในขณะนี้</td></tr>`;
    return;
  }
  tableBody.innerHTML = subAgents.map(sa => {
    return `<tr style="border-bottom: 1px solid var(--line);">
      <td style="padding:12px; font-weight:bold;">${sa.name}</td>
      <td style="padding:12px;">${sa.phone}</td>
      <td style="padding:12px;">${sa.line}</td>
      <td style="padding:12px;"><a href="${sa.facebook}" target="_blank" style="color: var(--forest-2); text-decoration:underline;">เปิดโปรไฟล์</a></td>
      <td style="padding:12px; font-weight:bold; color:var(--danger);">${sa.expireAt || '-'}</td>
      <td style="padding:12px;"><span style="color:${sa.status === 'approved' ? 'green' : 'orange'}; font-weight:bold;">${sa.status === 'approved' ? 'อนุมัติแล้ว' : 'รอแอดมินอนุมัติ'}</span></td>
    </tr>`;
  }).join("");
}

function viewSlipInModal(base64Data) {
  const modal = document.querySelector("#slip-preview-modal");
  const img = document.querySelector("#slip-preview-img");
  if (modal && img) { img.src = base64Data; modal.hidden = false; }
}

function renderAdminAgents() {
  if (!adminAgentsList) return;
  if (agents.length === 0) { adminAgentsList.innerHTML = `<p class="form-note" style="color:var(--muted)">ยังไม่มีคำขอส่งเข้ามา</p>`; return; }
  adminAgentsList.innerHTML = agents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    let displayExpire = agent.expireAt || "1 ปีนับจากวันอนุมัติ";

    return `<div style="background:#f9f9f9; padding:14px; border:1px solid var(--line); border-radius:8px; margin-bottom:12px; font-size:14px; color:var(--ink);">
      <strong>ชื่อทีมงาน: ${agent.name}</strong> (<span style="color:${agent.status === 'approved' ? 'green' : 'orange'}">${agent.status}</span>)<br>
      โทร: ${agent.phone} | Line: ${agent.line}<br>
      <span style="color: var(--forest-2); font-weight:bold;">📆 วันหมดอายุสิทธิ์: ${displayExpire}</span><br>
      <span style="color: var(--muted)">ผู้แนะนำ: ${agent.parentId || 'master'}</span><br>
      ${agent.status === 'approved' ? `<small style="color:green; word-break:break-all;">ลิงก์ส่วนตัว: <a href="${currentUrl}" target="_blank" style="color:var(--forest-2); text-decoration:underline;">${currentUrl}</a></small>` : ''}
      <div style="margin-top:10px; display:flex; gap:8px;">
        ${agent.slip ? `<button class="button neutral" onclick="viewSlipInModal('${agent.slip}')" style="min-height:30px; padding:4px 8px; font-size:12px;">ดูรูปสลิป</button>` : ''}
        ${agent.status === 'pending' ? `<button class="button primary" data-approve="${agent.id}" style="min-height:30px; padding:4px 8px; font-size:12px;">อนุมัติเปิดระบบ</button>` : ''}
        <button class="button danger" data-delagent="${agent.id}" style="min-height:30px; padding:4px 8px; font-size:12px;">ลบ</button>
      </div>
    </div>`;
  }).join("");
}

async function fetchOnlineAgents() {
  try {
    const response = await fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getAgents`, { method: "GET" });
    if (response.ok) {
      const onlineAgents = await response.json();
      if (onlineAgents && onlineAgents.length > 0) { 
        agents = onlineAgents; 
        saveAgents(); 
        checkAgentRoute(); 
        if (!adminPanel.hidden) renderAdminAgents(); 
      }
    }
  } catch (err) { 
    console.log("Hybrid Sync Active:", err);
    agents = loadAgents(); 
  }
}

if (adminAgentsList) {
  adminAgentsList.addEventListener("click", async (event) => {
    const approveBtn = event.target.closest("[data-approve]");
    const deleteBtn = event.target.closest("[data-delagent]");
    if (approveBtn) {
      const id = approveBtn.dataset.approve;
      agents = agents.map(a => a.id === id ? { ...a, status: "approved" } : a);
      saveAgents(); renderAdminAgents(); checkAgentRoute();
      try { await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "update_status", id: id, status: "approved" }) }); } catch(e){}
    }
    if (deleteBtn) {
      const id = deleteBtn.dataset.delagent;
      if (confirm("ยืนยันการลบสิทธิ์ตัวแทนรายนี้ออกหรือไม่?")) {
        agents = agents.filter(a => a.id !== id); saveAgents(); renderAdminAgents(); checkAgentRoute();
        try { await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "delete_agent", id: id }) }); } catch(e){}
      }
    }
  });
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProperties();
  });
});

document.querySelector("#admin-open").addEventListener("click", async () => { 
  adminLogin.hidden = false; adminPanel.hidden = true; document.querySelector("#agent-dashboard-panel").hidden = true;
  document.querySelector("#admin-title-heading").textContent = "เข้าสู่ระบบจัดการข้อมูล"; adminModal.hidden = false; 
  await fetchOnlineAgents();
});
document.querySelector("#admin-close").addEventListener("click", () => { adminModal.hidden = true; });
document.querySelector("#agent-register-open").addEventListener("click", () => { agentRegisterModal.hidden = false; checkAgentRoute(); });
document.querySelector("#agent-register-close").addEventListener("click", () => { agentRegisterModal.hidden = true; });

document.querySelector("#login-button").addEventListener("click", async () => {
  const username = document.querySelector("#admin-username").value.trim();
  const password = document.querySelector("#admin-password").value;
  const message = document.querySelector("#login-message");
  const headingTitle = document.querySelector("#admin-title-heading");

  if (message) message.textContent = "กำลังซิงค์ฐานข้อมูลสายงาน...";
  await fetchOnlineAgents();

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    if (message) message.textContent = ""; 
    adminLogin.hidden = true; adminPanel.hidden = false; document.querySelector("#agent-dashboard-panel").hidden = true;
    headingTitle.textContent = "ระบบหลังบ้านแอดมิน (เว็บแม่)";
    renderAdminItems(); renderAdminAgents(); return;
  }

  const memberAgent = agents.find(a => a.phone === username && a.status === "approved");
  if (memberAgent && password === AGENT_PASSWORD) {
    if (message) message.textContent = ""; 
    adminLogin.hidden = true; adminPanel.hidden = true;
    
    const agentDashboardPanel = document.querySelector("#agent-dashboard-panel");
    const agentDashboardName = document.querySelector("#agent-dashboard-name");
    
    const myShareLink = `${window.location.origin}${window.location.pathname}?agent=${memberAgent.id}`;
    document.querySelector("#back-agent-full-url").textContent = myShareLink;
    document.querySelector("#back-agent-line-link").textContent = memberAgent.line;
    document.querySelector("#back-agent-fb-link").textContent = memberAgent.facebook;
    document.querySelector("#back-agent-expire").textContent = memberAgent.expireAt || "1 ปีนับจากวันอนุมัติ";

    agentDashboardPanel.hidden = false;
    agentDashboardName.textContent = memberAgent.name;
    headingTitle.textContent = "ระบบหลังบ้านตัวแทน (เว็บลูก)";
    
    renderAgentLeads(memberAgent.id);
    renderSubTeams(memberAgent.id); 
    return;
  }
  message.textContent = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง หรือสิทธิ์ท่านยังไม่ได้รับการอนุมัติ";
});

function renderAdminItems() { if (!adminItems) return; adminItems.innerHTML = properties.map((item) => ` <article class="admin-item" style="display:grid; grid-template-columns: 80px 1fr; gap:12px; padding:10px 0; border-top:1px solid var(--line);"> <img src="${item.images?.[0] || 'khao-kho-hero.png'}" style="width:80px; height:60px; object-fit:cover; border-radius:6px;" /> <div> <h4 style="margin:0 0 4px 0;">${item.title}</h4> <p style="margin:0 0 6px 0; font-size:13px; color:var(--muted);">${propertyTypeLabel(item.type)} · ${item.price}</p> <div class="admin-actions"> <button class="button neutral" type="button" data-edit="${item.id}" style="padding:4px 8px; font-size:12px; min-height:auto;">แก้ไข</button> <button class="button danger" type="button" data-delete="${item.id}" style="padding:4px 8px; font-size:12px; min-height:auto;">ลบ</button> </div> </div> </article> `).join(""); }
function fillForm(item) { document.querySelector("#property-id").value = item.id; document.querySelector("#property-type").value = item.type; document.querySelector("#property-price").value = item.price; document.querySelector("#property-title").value = item.title; document.querySelector("#property-location").value = item.location; document.querySelector("#property-description").value = item.description; document.querySelector("#property-features").value = (item.features || []).join(" | "); document.querySelector("#property-images").value = (item.images || []).join(" | "); document.querySelector("#property-video").value = item.video || ""; }
function resetForm() { if (propertyForm) propertyForm.reset(); document.querySelector("#property-id").value = ""; }

checkAgentRoute();
renderProperties();
fetchOnlineAgents();
