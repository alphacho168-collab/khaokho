
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
let agents = []; 
let activeFilter = "all";
let currentAgent = null;

function createId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadProperties() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) { localStorage.setItem(STORAGE_KEY, JSON.stringify(demoProperties)); return [...demoProperties]; }
  try { return JSON.parse(saved); } catch(e) { return [...demoProperties]; }
}

function saveProperties() { localStorage.setItem(STORAGE_KEY, JSON.stringify(properties)); }
function propertyTypeLabel(type) { return type === "land" ? "ที่ดิน" : "พูลวิลล่า"; }

function splitList(value) { 
  if (!value) return [];
  return value.split("|").map((item) => item.trim()).filter(Boolean); 
}

function checkAgentRoute() {
  const urlParams = new URLSearchParams(window.location.search);
  const agentId = urlParams.get('agent');
  if (agentId && agents && agents.length > 0) {
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
    phoneBtn.onclick = function() { alert("หมายเลขโทรศัพท์ติดต่อทีมงาน:\n👉 " + contact.phone + " 👈"); };
  }
  const lineBtn = document.querySelector("#display-line-link");
  if (lineBtn) {
    lineBtn.href = contact.line.startsWith('http') ? contact.line : `https://line.me/R/ti/p/${contact.line.includes('@') ? '' : '@'}${contact.line.replace('@', '')}`;
  }
  const fbBtn = document.querySelector("#display-facebook-link");
  if (fbBtn) fbBtn.href = contact.facebook || "#";
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
  const propertyContainer = document.querySelector("#properties");
  if (!propertyContainer) return;
  const visible = activeFilter === "all" ? properties : properties.filter((item) => item.type === activeFilter);
  
  const statCount = document.querySelector("#stat-count");
  if (statCount) statCount.textContent = properties.length.toString();

  propertyContainer.innerHTML = visible.map((item) => {
    const image = item.images?.[0] || "khao-kho-hero.png";
    const features = (item.features || []).slice(0, 3).map((f) => `<span>${f}</span>`).join("");
    return `
      <article class="property-card">
        <figure><img src="${image}" alt="${item.title}" /><span class="badge">${propertyTypeLabel(item.type)}</span></figure>
        <div class="card-body">
          <h3>${item.title}</h3>
          <p class="location">${item.location}</p>
          <p class="price">${item.price}</p>
          <div class="mini-features">${features}</div>
          <button class="button neutral btn-click-detail" type="button" data-detail="${item.id}">ดูรายละเอียด</button>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-click-detail");
  if (button) {
    event.preventDefault();
    openDetail(button.dataset.detail);
  }
});

function openDetail(id) {
  const detailPanel = document.querySelector("#detail-panel");
  if (!detailPanel) return;

  const item = properties.find((property) => property.id === id);
  if (!item) return;

  const detailFeaturesHtml = (item.features || []).map((feature) => `<li>${feature}</li>`).join("");
  const detailGalleryHtml = (item.images || []).map((image) => `
    <div class="gallery-item-wrap" style="margin-bottom: 8px;">
      <img src="${image}" alt="${item.title}" loading="lazy" style="width:100%; border-radius:8px; object-fit:cover;" />
    </div>
  `).join("");
  
  const detailVideoHtml = item.video ? `<iframe src="${item.video}" title="วิดีโอ ${item.title}" allowfullscreen loading="lazy"></iframe>` : "";

  detailPanel.innerHTML = `
    <div class="detail-shell">
      <button class="icon-button close-detail" type="button" onclick="document.querySelector('#detail-panel').hidden = true;">×</button>
      <div class="detail-gallery">${detailGalleryHtml}</div>
      <div class="detail-copy">
        <p class="section-kicker">${propertyTypeLabel(item.type)}</p>
        <h2>${item.title}</h2>
        <p class="detail-location">${item.location}</p>
        <p class="detail-price">${item.price}</p>
        <p>${item.description}</p>
        <ul class="feature-list">${detailFeaturesHtml}</ul>
        <div class="video-wrap">${detailVideoHtml}</div>
        <div style="display:flex; flex-direction:column; gap:12px; margin-top:24px;">
          <button type="button" class="button primary" onclick="document.querySelector('#lead-section')?.scrollIntoView({behavior:'smooth'}); document.querySelector('#detail-panel').hidden = true;">สนใจทรัพย์นี้</button>
          <button onclick="document.querySelector('#detail-panel').hidden = true;" type="button" class="button neutral" style="background:#eaeaea; color:#333;">ปิดหน้าต่างนี้</button>
        </div>
      </div>
    </div>
  `;
  detailPanel.hidden = false;
  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

const agentRegisterForm = document.querySelector("#agent-register-form");
if (agentRegisterForm) {
  agentRegisterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const regMessage = document.querySelector("#reg-message");
    if (regMessage) { regMessage.style.color = "green"; regMessage.textContent = "กำลังส่งข้อมูลลงทะเบียนเว็บลูก..."; }

    const fileInput = document.querySelector("#reg-slip").files[0];
    let slipBase64 = "";
    if (fileInput) slipBase64 = await fileToBase64(fileInput);

    const newAgent = {
      id: "", 
      type: "agent_registration",
      name: document.querySelector("#reg-name").value.trim(),
      phone: document.querySelector("#reg-phone").value.trim(),
      line: document.querySelector("#reg-line").value.trim(),
      facebook: document.querySelector("#reg-facebook").value.trim(),
      slip: slipBase64,
      parentId: currentAgent ? currentAgent.id : "master"
    };

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newAgent) });
      if (regMessage) regMessage.textContent = "ส่งเอกสารลงทะเบียนเรียบร้อยแล้วค่ะ รอแอดมินอนุมัติสิทธิ์ระบบ";
      agentRegisterForm.reset();
      await fetchOnlineAgents();
    } catch (err) { console.error(err); }
  });
}

const leadForm = document.querySelector("#lead-form");
if (leadForm) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const leadMessage = document.querySelector("#lead-message");
    const lead = {
      name: document.querySelector("#lead-name").value.trim(),
      phone: document.querySelector("#lead-phone").value.trim(),
      line: document.querySelector("#lead-line").value.trim(),
      interest: document.querySelector("#lead-interest").value,
      agentId: currentAgent ? currentAgent.id : "master",
      submittedAt: new Date().toISOString()
    };

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
      if (leadMessage) { leadMessage.style.color = "green"; leadMessage.textContent = "บันทึกข้อมูลออนไลน์เรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว"; }
      leadForm.reset();
    } catch { 
      if (leadMessage) { leadMessage.style.color = "red"; leadMessage.textContent = "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"; }
    }
  });
}

function renderAgentLeads(agentId) {
  const tableBody = document.querySelector("#agent-leads-table-body");
  if (!tableBody) return;
  tableBody.innerHTML = `<tr><td colspan="4" style="padding:14px; text-align:center; color:#666;">ยังไม่มีข้อมูลลูกค้าลงทะเบียนเข้ามา</td></tr>`;
}

function viewSlipInModal(base64Data) {
  const modal = document.querySelector("#slip-preview-modal");
  const img = document.querySelector("#slip-preview-img");
  if (modal && img) { img.src = base64Data; modal.hidden = false; }
}

function renderAdminAgents() {
  const adminAgentsList = document.querySelector("#admin-agents-list");
  if (!adminAgentsList) return;
  if (!agents || agents.length === 0) { adminAgentsList.innerHTML = `<p style="color:#666">ยังไม่มีคำขอส่งเข้ามา</p>`; return; }
  adminAgentsList.innerHTML = agents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    return `<div style="background:#f9f9f9; padding:14px; border:1px solid #ccc; border-radius:8px; margin-bottom:12px; font-size:14px; color:#333;">
      <strong>ชื่อทีมงาน: ${agent.name}</strong> (<span style="color:${agent.status === 'approved' ? 'green' : 'orange'}">${agent.status}</span>)<br>
      โทร: ${agent.phone} \vert{} Line:${agent.line}<br>
      <span style="color: green; font-weight:bold;">📆 วันหมดอายุสิทธิ์: ${agent.expireAt}</span><br>
      <span style="color: #666">ผู้แนะนำ: ${agent.parentId}</span><br>${agent.status === 'approved' ? `<small style="color:green; word-break:break-all;">ลิงก์ส่วนตัว: <a href="${currentUrl}" target="_blank" style="color:blue; text-decoration:underline;">${currentUrl}</a></small>` : ''}
      <div style="margin-top:10px; display:flex; gap:8px;">
        ${agent.slip ? `<button type="button" class="btn-only-view-slip" data-slipdata="${agent.slip}" style="padding:4px 8px; font-size:12px; cursor:pointer;">ดูรูปสลิป</button>` : ''}
        ${agent.status === 'pending' ? `<button type="button" class="btn-approve-agent" data-id="${agent.id}" style="padding:4px 8px; font-size:12px; cursor:pointer; background:green; color:#fff; border:none; border-radius:4px;">อนุมัติเปิดระบบ</button>` : ''}
        <button type="button" class="btn-delete-agent" data-id="${agent.id}" style="padding:4px 8px; font-size:12px; cursor:pointer; background:red; color:#fff; border:none; border-radius:4px;">ลบ</button>
      </div>
    </div>`;
  }).join("");
}

async function fetchOnlineAgents() {
  try {
    const response = await fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getAgents`, { method: "GET" });
    if (response.ok) {
      const onlineAgents = await response.json();
      if (onlineAgents) { 
        agents = onlineAgents; 
        checkAgentRoute(); 
        const adminPanel = document.querySelector("#admin-panel");
        if (adminPanel && !adminPanel.hidden) renderAdminAgents(); 
      }
    }
  } catch (err) { console.log(err); }
}

const adminAgentsList = document.querySelector("#admin-agents-list");
if (adminAgentsList) {
  adminAgentsList.addEventListener("click", async (event) => {
    const viewSlipBtn = event.target.closest(".btn-only-view-slip");
    const approveBtn = event.target.closest(".btn-approve-agent");
    const deleteBtn = event.target.closest(".btn-delete-agent");
    
    if (viewSlipBtn) { event.preventDefault(); viewSlipInModal(viewSlipBtn.dataset.slipdata); }
    if (approveBtn) {
      event.preventDefault();
      const id = approveBtn.dataset.id;
      try { 
        await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "update_status", id: id, status: "approved" }) }); 
        await fetchOnlineAgents();
      } catch(e){}
    }
    if (deleteBtn) {
      event.preventDefault();
      const id = deleteBtn.dataset.id;
      if (confirm("ยืนยันการลบสิทธิ์ตัวแทนรายนี้ออกหรือไม่?")) {
        try { 
          await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "delete_agent", id: id }) }); 
          await fetchOnlineAgents();
        } catch(e){}
      }
    }
  });
}

document.addEventListener("click", (e) => {
  const filterBtn = e.target.closest(".filter");
  if (filterBtn) {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    filterBtn.classList.add("active");
    activeFilter = filterBtn.dataset.filter;
    renderProperties();
  }
});

const adminOpenBtn = document.querySelector("#admin-open");
if (adminOpenBtn) {
  adminOpenBtn.addEventListener("click", async () => { 
    document.querySelector("#admin-login").hidden = false; 
    document.querySelector("#admin-panel").hidden = true; 
    document.querySelector("#admin-modal").hidden = false; 
    await fetchOnlineAgents();
  });
}

document.querySelector("#admin-close")?.addEventListener("click", () => {
  document.querySelector("#admin-modal").hidden = true;
});

document.querySelector("#agent-register-open")?.addEventListener("click", () => {
  document.querySelector("#agent-register-modal").hidden = false; 
});

document.querySelector("#agent-register-close")?.addEventListener("click", () => {
  document.querySelector("#agent-register-modal").hidden = true;
});

const loginBtn = document.querySelector("#login-button");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const username = document.querySelector("#admin-username").value.trim();
    const password = document.querySelector("#admin-password").value;
    const message = document.querySelector("#login-message");
    const headingTitle = document.querySelector("#admin-title-heading");

    if (message) message.textContent = "กำลังเชื่อมต่อคลาวด์เซิร์ฟเวอร์...";
    await fetchOnlineAgents();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      if (message) message.textContent = ""; 
      document.querySelector("#admin-login").hidden = true; 
      document.querySelector("#admin-panel").hidden = false; 
      if (headingTitle) headingTitle.textContent = "ระบบหลังบ้านแอดมิน (เว็บแม่)";
      renderAdminItems(); renderAdminAgents(); return;
    }

    const memberAgent = agents.find(a => a.phone === username && a.status === "approved");
    if (memberAgent && password === AGENT_PASSWORD) {
      if (message) message.textContent = ""; 
      document.querySelector("#admin-login").hidden = true; 
      document.querySelector("#admin-panel").hidden = true;
      
      const agentDashboardPanel = document.querySelector("#agent-dashboard-panel");
      
      document.querySelector("#back-agent-full-url").textContent = `${window.location.origin}${window.location.pathname}?agent=${memberAgent.id}`;
      document.querySelector("#back-agent-expire").textContent = memberAgent.expireAt;

      if (agentDashboardPanel) agentDashboardPanel.hidden = false;
      if (document.querySelector("#agent-dashboard-name")) document.querySelector("#agent-dashboard-name").textContent = memberAgent.name;
      if (headingTitle) headingTitle.textContent = "ระบบหลังบ้านตัวแทน (เว็บลูก)";
      
      renderAgentLeads(memberAgent.id);
      return;
    }
    if (message) message.textContent = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง หรือสิทธิ์ท่านยังไม่ได้รับการอนุมัติ";
  });
}

function renderAdminItems() { 
  const adminItems = document.querySelector("#admin-items");
  if (!adminItems) return; 
  adminItems.innerHTML = properties.map((item) => `
    <article class="admin-item" style="display:grid; grid-template-columns: 80px 1fr; gap:12px; padding:10px 0; border-top:1px solid #eee;"> 
      <img src="${item.images?.[0] || 'khao-kho-hero.png'}" style="width:80px; height:60px; object-fit:cover; border-radius:6px;" /> 
      <div> 
        <h4 style="margin:0 0 4
