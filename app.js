const STORAGE_KEY = "khaokho-estate-properties";
const LEADS_STORAGE_KEY = "khaokho-estate-leads";
const AGENTS_STORAGE_KEY = "khaokho-estate-agents"; 
const ADMIN_PASSWORD = "khaokho";
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxd2zuH-tW83L9yFrq1QpthcPI-KHEzgApVe78BFUGdY8R7MaJOc9gAx44S8Fu4mSulyQ/exec";

const DEFAULT_CONTACT = {
  name: "Get Patradit",
  phone: "063 978 9356",
  line: "@812fqegp",
  facebook: "https://facebook.com"
};

const demoProperties = [
  {
    id: "demo-1",
    type: "villa",
    title: "พูลวิลล่าชมหมอก Swiss Ridge",
    location: "แคมป์สน เขาค้อ เพชรบูรณ์",
    price: "18,900,000 บาท",
    description: "พูลวิลล่าพร้อมสระว่ายน้ำส่วนตัว ตั้งอยู่บนเนินรับวิวภูเขา 180 องศา เหมาะทำบ้านพักตากอากาศหรือปล่อยเช่าระดับพรีเมียม ใกล้คาเฟ่และแหล่งท่องเที่ยวสำคัญของเขาค้อ",
    features: ["4 ห้องนอน", "5 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "พื้นที่ใช้สอย 420 ตร.ม.", "ที่ดิน 1 ไร่"],
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"]
  },
  {
    id: "demo-2",
    type: "land",
    title: "ที่ดินเนินเขา วิวพาโนรามา ไฮแลนด์",
    location: "ทุ่งสมอ เขาค้อ เพชรบูรณ์",
    price: "4,500,000 บาท",
    description: "ที่ดินโฉนดครุฑแดง ถมแล้ว เอกสารสิทธิ์ครบถ้วนแปลงสวยรูปถุงเงิน ติดทางสาธารณะ ไฟฟ้าประปาเข้าถึงพร้อมสร้างวิลล่าตากอากาศรับโอโซนบริสุทธิ์ตลอดทั้งปี",
    features: ["แปลงหัวมุม", "มีโฉนดครุฑแดง", "หน้ากว้าง 40 เมตร", "สูงกว่าระดับน้ำทะเล 750 ม."],
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"]
  }
];

let properties = loadProperties();
let agents = loadAgents();
let activeFilter = "all";
let currentAgent = null;

// จับคู่ DOM Elements ป้องกัน Null Pointer
const agentRegisterModal = document.querySelector("#agent-register-modal");
const agentRegisterForm = document.querySelector("#agent-register-form");
const regMessage = document.querySelector("#reg-message");
const adminAgentsList = document.querySelector("#admin-agents-list");

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

if (agentRegisterForm) {
  agentRegisterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    regMessage.style.color = "var(--forest)";
    regMessage.textContent = "กำลังเข้ารหัสภาพสลิปและส่งข้อมูลลงทะเบียน...";

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
    regMessage.textContent = "ลงทะเบียนเสร็จเรียบร้อย! โปรดรอการยืนยันอนุมัติสิทธิ์จากแอดมินค่ะ";
    agentRegisterForm.reset();

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newAgent) });
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
    leadMessage.textContent = "ส่งคำขอนัดหมายลงทะเบียนเข้าชมสำเร็จ!";
    leadForm.reset();

    if (currentAgent) renderAgentLeads(currentAgent.id);
    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    } catch (err) { leadMessage.classList.add("error"); }
  });
}

function renderAgentLeads(agentId) {
  const tableBody = document.querySelector("#agent-leads-table-body");
  if (!tableBody) return;
  const allLeads = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || "[]");
  const agentLeads = allLeads.filter(lead => lead.agentId === agentId);

  if (agentLeads.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="padding:12px; text-align:center; color:var(--muted);">ยังไม่มีลูกค้านัดหมายลงทะเบียนเข้ามาในระบบ</td></tr>`;
    return;
  }
  tableBody.innerHTML = agentLeads.map(lead => {
    return `<tr>
      <td style="padding:12px; font-weight:bold;">${lead.name}</td>
      <td style="padding:12px;">${lead.phone}</td>
      <td style="padding:12px;">${lead.line || '-'}</td>
      <td style="padding:12px;">${lead.interest}</td>
      <td style="padding:12px; font-size:14px; color:var(--muted);">${new Date(lead.submittedAt).toLocaleDateString('th-TH')}</td>
    </tr>`;
  }).join("");
}

function renderAdminAgents() {
  if (!adminAgentsList) return;
  if (agents.length === 0) {
    adminAgentsList.innerHTML = `<p class="form-note">ยังไม่มีทีมงานลงทะเบียนเข้ามา</p>`;
    return;
  }
  adminAgentsList.innerHTML = agents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    return `<div style="background:#fff; padding:16px; border:1px solid var(--line); border-radius:8px; margin-bottom:12px;">
      <strong>คุณ: ${agent.name}</strong> (<span style="color:orange">${agent.status}</span>)<br>
      โทร: ${agent.phone} | Line: ${agent.line}<br>
      ${agent.status === 'approved' ? `<small style="color:green;">ลิงก์: <a href="${currentUrl}" target="_blank">${currentUrl}</a></small>` : ''}
      <div style="margin-top:8px;">
        ${agent.status === 'pending' ? `<button class="button primary" data-approve="${agent.id}" style="padding:4px 8px; font-size:12px; margin-right:6px;">อนุมัติสิทธิ์</button>` : ''}
        <button class="button danger" data-delagent="${agent.id}" style="padding:4px 8px; font-size:12px;">ลบสิทธิ์</button>
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
      if (confirm("ต้องการลบสิทธิ์ตัวแทนรายนี้หรือไม่?")) {
        agents = agents.filter(a => a.id !== id);
        saveAgents(); renderAdminAgents(); checkAgentRoute();
      }
    }
  });
}

// ควบคุมหน้าต่างปุ่มกด Sign up & Login ใช้งานได้จริง
document.querySelector("#agent-register-open").addEventListener("click", () => { agentRegisterModal.hidden = false; });
document.querySelector("#agent-register-close").addEventListener("click", () => { agentRegisterModal.hidden = true; });
document.querySelector("#admin-open").addEventListener("click", () => { adminModal.hidden = false; });
document.querySelector("#admin-close").addEventListener("click", () => { adminModal.hidden = true; });

document.querySelector("#login-button").addEventListener("click", () => {
  const password = document.querySelector("#admin-password").value;
  const message = document.querySelector("#login-message");
  if (password !== ADMIN_PASSWORD) { message.textContent = "รหัสผ่านไม่ถูกต้อง"; return; }
  message.textContent = ""; adminLogin.hidden = true; adminPanel.hidden = false;
  renderAdminItems(); renderAdminAgents();
});

function propertyTypeLabel(type) { return type === "land" ? "ที่ดิน" : "พูลวิลล่า"; }
function splitList(value) { return value.split("|").map((item) => item.trim()).filter(Boolean); }

function renderProperties() {
  if (!propertyContainer) return;
  const visible = activeFilter === "all" ? properties : properties.filter((item) => item.type === activeFilter);
  if (statCount) statCount.textContent = properties.length.toString();
  
  propertyContainer.innerHTML = visible.map((item) => {
    const image = item.images?.[0] || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80";
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
  if (!visible.length) propertyContainer.innerHTML = `<p class="form-note">ยังไม่มีรายการแสดงข้อมูลทรัพย์</p>`;
}

function renderAdminItems() {
  if (!adminItems) return;
  adminItems.innerHTML = properties.map((item) => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid var(--line);">
      <span>${item.title}</span>
      <button class="button danger" data-delete="${item.id}" type="button" style="padding:4px 8px; font-size:12px;">ลบ</button>
    </div>
  `).join("");
}

if (propertyForm) {
  propertyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemData = {
      id: createId(),
      type: document.querySelector("#property-type").value,
      title: document.querySelector("#property-title").value.trim(),
      location: document.querySelector("#property-location").value.trim(),
      price: document.querySelector("#property-price").value.trim(),
      description: document.querySelector("#property-description").value.trim(),
      features: splitList(document.querySelector("#property-features").value),
      images: splitList(document.querySelector("#property-images").value)
    };
    properties.push(itemData); saveProperties(); renderProperties(); renderAdminItems(); propertyForm.reset();
  });
}

if (adminItems) {
  adminItems.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete]");
    if (deleteButton) {
      properties = properties.filter((p) => p.id !== deleteButton.dataset.delete);
      saveProperties(); renderProperties(); renderAdminItems();
    }
  });
}

if (propertyContainer) {
  propertyContainer.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-detail]");
    if (!detailButton) return;
    const item = properties.find((p) => p.id === detailButton.dataset.detail);
    if (!item) return;

    const imagesHtml = (item.images || []).map(img => `<img src="${img}" style="width:100%; border-radius:8px; margin-bottom:10px; object-fit:cover;"/>`).join("");
    const featuresHtml = (item.features || []).map(f => `<span class="badge" style="position:static; margin-right:6px; display:inline-block; background:var(--forest);">${f}</span>`).join("");

    detailPanel.innerHTML = `
      <div class="admin-dialog" style="max-width:700px;">
        <button class="icon-button" onclick="document.querySelector('#detail-panel').hidden = true">×</button>
        <h2>${item.title}</h2>
        <p style="color:var(--gold); font-size:1.6rem; font-weight:bold; margin:10px 0;">${item.price}</p>
        <p style="color:var(--muted); margin-bottom:15px;">📍 ${item.location}</p>
        <div style="margin-bottom:20px;">${imagesHtml}</div>
        <p style="line-height:1.6; white-space:pre-line;">${item.description}</p>
        <div style="margin-top:10px;">${featuresHtml}</div>
      </div>
    `;
    detailPanel.hidden = false;
  });
}

document.querySelector("#restore-demo").addEventListener("click", () => {
  properties = demoProperties.map((item) => ({ ...item, id: createId() }));
  saveProperties(); renderProperties(); renderAdminItems();
});

checkAgentRoute();
renderProperties();
