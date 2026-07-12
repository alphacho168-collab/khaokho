const STORAGE_KEY = "khaokho-estate-properties";
const LEADS_STORAGE_KEY = "khaokho-estate-leads";
const AGENTS_STORAGE_KEY = "khaokho-estate-agents"; 

// เปลี่ยนข้อมูลการล็อกอินแอดมินตามที่สั่ง
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "zaq123";

const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxd2zuH-tW83L9yFrq1QpthcPI-KHEzgApVe78BFUGdY8R7MaJOc9gAx44S8Fu4mSulyQ/exec";

const DEFAULT_CONTACT = {
  name: "Get Patradit",
  phone: "063 978 9356",
  line: "@812fqegp",
  facebook: "https://facebook.com"
};

const demoProperties = [
  {
    id: createId(),
    type: "villa",
    title: "พูลวิลล่าชมหมอก Swiss Ridge",
    location: "แคมป์สน เขาค้อ เพชรบูรณ์",
    price: "18,900,000 บาท",
    description:
      "พูลวิลล่าพร้อมสระว่ายน้ำส่วนตัว ตั้งอยู่บนเนินรับวิวภูเขา 180 องศา เหมาะทำบ้านพักตากอากาศหรือปล่อยเช่าระดับพรีเมียม ใกล้คาเฟ่และแหล่งท่องเที่ยวสำคัญของเขาค้อ",
    features: ["4 ห้องนอน", "5 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "พื้นที่ใช้สอย 420 ตร.ม.", "ที่ดิน 1 ไร่"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
    ],
    video: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    id: createId(),
    type: "land",
    title: "ที่ดินวิวสวิส Green Valley",
    location: "ทุ่งสมอ เขาค้อ เพชรบูรณ์",
    price: "เริ่มต้น 3,200,000 บาท/ไร่",
    description:
      "ที่ดินโฉนดพร้อมโอน วิวภูเขาสลับซับซ้อน อากาศเย็นสบายทั้งปี เหมาะสร้างพูลวิลล่า รีสอร์ตขนาดเล็ก คาเฟ่วิวหมอก หรือถือครองเพื่อการลงทุน",
    features: ["โฉนดครุฑแดง", "แบ่งขาย 2-12 ไร่", "ถนนเข้าถึง", "ไฟฟ้าพร้อม"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"
    ],
    video: ""
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
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoProperties));
    return [...demoProperties];
  }
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
  const agentDashboardPanel = document.querySelector("#agent-dashboard-panel");
  const agentDashboardName = document.querySelector("#agent-dashboard-name");
  
  if (agentId) {
    const agent = agents.find(a => a.id === agentId && a.status === "approved");
    if (agent) {
      currentAgent = agent;
      applyAgentContact(agent);
      if (agentDashboardPanel && agentDashboardName) {
        agentDashboardPanel.hidden = false;
        agentDashboardName.textContent = agent.name;
        renderAgentLeads(agent.id);
      }
      return;
    }
  }
  currentAgent = null;
  applyAgentContact(DEFAULT_CONTACT);
  if (agentDashboardPanel) agentDashboardPanel.hidden = true;
}

function applyAgentContact(contact) {
  document.querySelector("#display-phone").textContent = contact.phone;
  document.querySelector("#display-phone-link").href = `tel:${contact.phone.replace(/\s+/g, '')}`;
  document.querySelector("#display-line").textContent = contact.line;
  document.querySelector("#display-line-link").href = contact.line.startsWith('http') ? contact.line : `https://line.me/R/ti/p/${contact.line.includes('@') ? '' : '@'}${contact.line.replace('@', '')}`;
  document.querySelector("#display-facebook").textContent = contact.name;
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

  propertyContainer.innerHTML = visible
    .map((item) => {
      // ปรับภาพปกหลักสำรองให้ชี้ไปที่รูป khao-kho-hero.png หน้าแรกของ GitHub
      const image = item.images?.[0] || "khao-kho-hero.png";
      const features = (item.features || []).slice(0, 3).map((feature) => `<span>${feature}</span>`).join("");
      return `
        <article class="property-card">
          <figure>
            <img src="${image}" alt="${item.title}" loading="lazy" />
            <span class="badge">${propertyTypeLabel(item.type)}</span>
          </figure>
          <div class="card-body">
            <h3>${item.title}</h3>
            <p class="location">${item.location}</p>
            <p class="price">${item.price}</p>
            <div class="mini-features">${features}</div>
            <button class="button neutral" type="button" data-detail="${item.id}">ดูรายละเอียด</button>
          </div>
        </article>
      `;
    })
    .join("");

  if (!visible.length) {
    propertyContainer.innerHTML = `<p class="form-note">ยังไม่มีรายการในหมวดนี้</p>`;
  }
}

function openDetail(id) {
  const item = properties.find((property) => property.id === id);
  if (!item) return;

  document.querySelector("#detail-type").textContent = propertyTypeLabel(item.type);
  document.querySelector("#detail-title").textContent = item.title;
  document.querySelector("#detail-location").textContent = item.location;
  document.querySelector("#detail-price").textContent = item.price;
  document.querySelector("#detail-description").textContent = item.description;
  document.querySelector("#detail-features").innerHTML = (item.features || []).map((feature) => `<li>${feature}</li>`).join("");
  document.querySelector("#detail-gallery").innerHTML = (item.images || [])
    .map((image) => `<img src="${image}" alt="${item.title}" loading="lazy" />`)
    .join("");
  document.querySelector("#detail-video").innerHTML = item.video
    ? `<iframe src="${item.video}" title="วิดีโอ ${item.title}" allowfullscreen loading="lazy"></iframe>`
    : "";

  detailPanel.hidden = false;
  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAdminItems() {
  adminItems.innerHTML = properties
    .map((item) => `
      <article class="admin-item">
        <img src="${item.images?.[0] || "khao-kho-hero.png"}" alt="${item.title}" />
        <div>
          <h4>${item.title}</h4>
          <p>${propertyTypeLabel(item.type)} · ${item.price}</p>
          <div class="admin-actions">
            <button class="button neutral" type="button" data-edit="${item.id}">แก้ไข</button>
            <button class="button danger" type="button" data-delete="${item.id}">ลบ</button>
          </div>
        </div>
      </article>
    `)
    .join("");
}

function fillForm(item) {
  document.querySelector("#property-id").value = item.id;
  document.querySelector("#property-type").value = item.type;
  document.querySelector("#property-price").value = item.price;
  document.querySelector("#property-title").value = item.title;
  document.querySelector("#property-location").value = item.location;
  document.querySelector("#property-description").value = item.description;
  document.querySelector("#property-features").value = (item.features || []).join(" | ");
  document.querySelector("#property-images").value = (item.images || []).join(" | ");
  document.querySelector("#property-video").value = item.video || "";
}

function resetForm() {
  propertyForm.reset();
  document.querySelector("#property-id").value = "";
}

function handlePropertySubmit(event) {
  event.preventDefault();
  const id = document.querySelector("#property-id").value || createId();
  const nextProperty = {
    id,
    type: document.querySelector("#property-type").value,
    price: document.querySelector("#property-price").value.trim(),
    title: document.querySelector("#property-title").value.trim(),
    location: document.querySelector("#property-location").value.trim(),
    description: document.querySelector("#property-description").value.trim(),
    features: splitList(document.querySelector("#property-features").value),
    images: splitList(document.querySelector("#property-images").value),
    video: document.querySelector("#property-video").value.trim()
  };

  properties = properties.some((item) => item.id === id)
    ? properties.map((item) => (item.id === id ? nextProperty : item))
    : [nextProperty, ...properties];

  saveProperties();
  renderProperties();
  renderAdminItems();
  resetForm();
}

if (agentRegisterForm) {
  agentRegisterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    regMessage.style.color = "var(--forest)";
    regMessage.textContent = "กำลังส่งข้อมูลลงทะเบียนเว็บลูก...";

    const fileInput = document.querySelector("#reg-slip").files[0];
    let slipBase64 = "";
    if (fileInput) slipBase64 = await fileToBase64(fileInput);

    const newAgent = {
      id: 'ag-' + Math.random().toString(36).substr(2, 9),
      type: "agent_registration",
      name: document.querySelector("#reg-name").value.trim(),
      phone: document.querySelector("#reg-phone").value.trim(),
      line: document.querySelector("#reg-line").value.trim(),
      facebook: document.querySelector("#reg-facebook").value.trim(),
      slip: slipBase64,
      status: "pending",
      submittedAt: new Date().toISOString()
    };

    agents.push(newAgent);
    saveAgents();
    regMessage.textContent = "ส่งเอกสารลงทะเบียนเรียบร้อยแล้วค่ะ รอแอดมินอนุมัติสิทธิ์ระบบ";
    agentRegisterForm.reset();

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newAgent) });
    } catch (err) { console.error(err); }
  });
}

async function handleLeadSubmit(event) {
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
    return `<tr style="border-bottom: 1px solid var(--line);">
      <td style="padding:14px; font-weight:bold;">${lead.name}</td>
      <td style="padding:14px;">${lead.phone}</td>
      <td style="padding:14px;">${lead.line || '-'}</td>
      <td style="padding:14px;">${lead.interest}</td>
      <td style="padding:14px; color:var(--muted); font-size:14px;">${new Date(lead.submittedAt).toLocaleDateString('th-TH')}</td>
    </tr>`;
  }).join("");
}

function renderAdminAgents() {
  if (!adminAgentsList) return;
  if (agents.length === 0) {
    adminAgentsList.innerHTML = `<p class="form-note" style="color:var(--muted)">ยังไม่มีคำขอส่งเข้ามา</p>`;
    return;
  }
  adminAgentsList.innerHTML = agents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    return `<div style="background:#f9f9f9; padding:14px; border:1px solid var(--line); border-radius:8px; margin-bottom:12px; font-size:14px; color:var(--ink);">
      <strong>ชื่อทีมงาน: ${agent.name}</strong> (<span style="color:${agent.status === 'approved' ? 'green' : 'orange'}">${agent.status}</span>)<br>
      โทร: ${agent.phone} | Line: ${agent.line}<br>
      ${agent.status === 'approved' ? `<small style="color:green; word-break:break-all;">ลิงก์ส่วนตัว: <a href="${currentUrl}" target="_blank" style="color:var(--forest-2); text-decoration:underline;">${currentUrl}</a></small>` : ''}
      <div style="margin-top:10px; display:flex; gap:8px;">
        ${agent.slip ? `<button class="button neutral" onclick="window.open('${agent.slip}')" style="min-height:30px; padding:4px 8px; font-size:12px;">ดูสลิป</button>` : ''}
        ${agent.status === 'pending' ? `<button class="button primary" data-approve="${agent.id}" style="min-height:30px; padding:4px 8px; font-size:12px;">อนุมัติ</button>` : ''}
        <button class="button danger" data-delagent="${agent.id}" style="min-height:30px; padding:4px 8px; font-size:12px;">ลบ</button>
      </div>
    </div>`;
  }).join("");
}

if (adminAgentsList) {
  adminAgentsList.addEventListener("click", (event) => {
    const approveBtn = event.target.closest("[data-approve]");
    const deleteBtn = event.target.closest("[data-delagent]");
    if (approveBtn) {
      const id = approveBtn.dataset.approve;
      agents = agents.map(a => a.id === id ? { ...a, status: "approved" } : a);
      saveAgents(); renderAdminAgents(); checkAgentRoute();
    }
    if (deleteBtn) {
      const id = deleteBtn.dataset.delagent;
      if (confirm("ยืนยันการลบตัวแทนรายนี้ออกหรือไม่?")) {
        agents = agents.filter(a => a.id !== id);
        saveAgents(); renderAdminAgents(); checkAgentRoute();
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

propertyContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail]");
  if (button) openDetail(button.dataset.detail);
});

document.querySelector(".close-detail").addEventListener("click", () => { detailPanel.hidden = true; });
document.querySelector("#admin-open").addEventListener("click", () => { adminModal.hidden = false; });
document.querySelector("#admin-close").addEventListener("click", () => { adminModal.hidden = true; });

// จัดการปุ่มเปิดปิดสำหรับ Modal Sign up ทีมงานให้ตอบสนองสมบูรณ์
document.querySelector("#agent-register-open").addEventListener("click", () => { agentRegisterModal.hidden = false; });
document.querySelector("#agent-register-close").addEventListener("click", () => { agentRegisterModal.hidden = true; });

// ฟังก์ชัน Login แอดมินหลักแบบระบุ 2 ช่อง Username & Password
document.querySelector("#login-button").addEventListener("click", () => {
  const username = document.querySelector("#admin-username").value.trim();
  const password = document.querySelector("#admin-password").value;
  const message = document.querySelector("#login-message");

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    message.textContent = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง";
    return;
  }

  message.textContent = "";
  adminLogin.hidden = true;
  adminPanel.hidden = false;
  renderAdminItems();
  renderAdminAgents();
});

adminItems.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit]");
  const deleteButton = event.target.closest("[data-delete]");
  if (editButton) {
    const item = properties.find((property) => property.id === editButton.dataset.edit);
    if (item) fillForm(item);
  }
  if (deleteButton) {
    properties = properties.filter((property) => property.id !== deleteButton.dataset.delete);
    saveProperties(); renderProperties(); renderAdminItems();
  }
});

document.querySelector("#restore-demo").addEventListener("click", () => {
  properties = demoProperties.map((item) => ({ ...item, id: createId() }));
  saveProperties(); renderProperties(); renderAdminItems(); resetForm();
});

document.querySelector("#reset-form").addEventListener("click", resetForm);
propertyForm.addEventListener("submit", handlePropertySubmit);
leadForm.addEventListener("submit", handleLeadSubmit);

checkAgentRoute();
renderProperties();
