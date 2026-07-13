const STORAGE_KEY = "khaokho-estate-properties";
const LEADS_STORAGE_KEY = "khaokho-estate-leads";
const AGENTS_STORAGE_KEY = "khaokho-estate-agents"; 

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "zaq123";
const AGENT_PASSWORD = "Ab123456"; 

const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyOaSXIxLTUM03rSvz4hHm24MucZwE4ueeENrvhcn9TI8oB96GKviGyW0uRv7Pi4MPf/exec";

const DEFAULT_CONTACT = { name: "Get Patradit", phone: "063 978 9356", line: "@812fqegp", facebook: "https://facebook.com" };
const demoProperties = [
  { id: "prop-demo-1", type: "villa", title: "พูลวิลล่าชมหมอก Swiss Ridge", location: "แคมป์สน เขาค้อ", price: "18,900,000 บาท", description: "พูลวิลล่าพร้อมสระว่ายน้ำส่วนตัว", features: ["4 ห้องนอน"], images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"] }
];

let properties = loadProperties();
let agents = []; 
let activeFilter = "all";
let currentAgent = null;

function createId() { return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`; }
function loadProperties() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [...demoProperties];
  try { return JSON.parse(saved); } catch(e) { return [...demoProperties]; }
}
function saveProperties() { localStorage.setItem(STORAGE_KEY, JSON.stringify(properties)); }
function propertyTypeLabel(type) { return type === "land" ? "ที่ดิน" : "พูลวิลล่า"; }
function splitList(value) { if (!value) return []; return value.split("|").map(i => i.trim()).filter(Boolean); }

function checkAgentRoute() {
  const urlParams = new URLSearchParams(window.location.search);
  const agentId = urlParams.get('agent');
  if (agentId && agents.length > 0) {
    const agent = agents.find(a => a.id === agentId && a.status === "approved");
    if (agent) { currentAgent = agent; applyAgentContact(agent); return; }
  }
  currentAgent = null; applyAgentContact(DEFAULT_CONTACT);
}

function applyAgentContact(contact) {
  const phoneBtn = document.querySelector("#display-phone-link");
  if (phoneBtn) { phoneBtn.href = "javascript:void(0);"; phoneBtn.onclick = function() { alert("เบอร์โทรทีมงาน: " + contact.phone); }; }
  const lineBtn = document.querySelector("#display-line-link");
  if (lineBtn) lineBtn.href = contact.line.startsWith('http') ? contact.line : `https://line.me/R/ti/p/${contact.line.replace('@', '')}`;
  const fbBtn = document.querySelector("#display-facebook-link");
  if (fbBtn) fbBtn.href = contact.facebook || "#";
}

function renderProperties() {
  const container = document.querySelector("#properties");
  if (!container) return;
  const visible = activeFilter === "all" ? properties : properties.filter(i => i.type === activeFilter);
  document.querySelector("#stat-count").textContent = properties.length;

  container.innerHTML = visible.map(item => {
    const image = item.images?.[0] || "khao-kho-hero.png";
    const features = (item.features || []).slice(0, 3).map(f => `<span>${f}</span>`).join("");
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

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-click-detail");
  if (btn) { e.preventDefault(); openDetail(btn.dataset.detail); }
});

function openDetail(id) {
  const detailPanel = document.querySelector("#detail-panel");
  const item = properties.find(p => p.id === id);
  if (!detailPanel || !item) return;

  const detailFeaturesHtml = (item.features || []).map(f => `<li>${f}</li>`).join("");
  const detailGalleryHtml = (item.images || []).map(img => `<div class="gallery-item-wrap"><img src="${img}" /></div>`).join("");

  detailPanel.innerHTML = `
    <div class="detail-shell">
      <button class="icon-button close-detail" type="button" onclick="document.querySelector('#detail-panel').hidden = true;">×</button>
      <div class="detail-gallery">${detailGalleryHtml}</div>
      <div class="detail-copy">
        <h2>${item.title}</h2><p class="detail-price">${item.price}</p><p>${item.description}</p>
        <ul class="feature-list">${detailFeaturesHtml}</ul>
        <button type="button" class="button primary" onclick="document.querySelector('#lead-section')?.scrollIntoView({behavior:'smooth'}); document.querySelector('#detail-panel').hidden = true;">สนใจทรัพย์นี้</button>
      </div>
    </div>
  `;
  detailPanel.hidden = false;
}

// ผูกอีเวนต์ปุ่มเปิดหน้าต่างแผงควบคุมหลักอย่างถูกต้อง
document.querySelector("#admin-open").addEventListener("click", () => { document.querySelector("#admin-modal").hidden = false; });
document.querySelector("#admin-close").addEventListener("click", () => { document.querySelector("#admin-modal").hidden = true; });
document.querySelector("#agent-register-open").addEventListener("click", () => { document.querySelector("#agent-register-modal").hidden = false; });
document.querySelector("#agent-register-close").addEventListener("click", () => { document.querySelector("#agent-register-modal").hidden = true; });

async function fetchOnlineAgents() {
  try {
    const response = await fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getAgents`);
    if (response.ok) { const onlineAgents = await response.json(); if (onlineAgents) { agents = onlineAgents; checkAgentRoute(); } }
  } catch (e) {}
}

// สั่งรันชุดข้อมูลคลัง 9 ทรัพย์สินในเครื่องทันที และห้ามมอดอลเด้งเปิดเองเด็ดขาด
renderProperties();
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#admin-modal").hidden = true;
  document.querySelector("#agent-register-modal").hidden = true;
  fetchOnlineAgents();
});
