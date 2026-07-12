const STORAGE_KEY = "khaokho-estate-properties";
const LEADS_STORAGE_KEY = "khaokho-estate-leads";
const ADMIN_PASSWORD = "khaokho";
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxd2zuH-tW83L9yFrq1QpthcPI-KHEzgApVe78BFUGdY8R7MaJOc9gAx44S8Fu4mSulyQ/exec";

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
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85"
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
    features: ["โฉนดครุฑแดง", "แบ่งขาย 2-12 ไร่", "ถนนเข้าถึง", "ไฟฟ้าพร้อม", "มุมมองพระอาทิตย์ขึ้น"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=85"
    ],
    video: ""
  },
  {
    id: createId(),
    type: "villa",
    title: "Mountain Glass Pool Villa",
    location: "เขาค้อ ใกล้จุดชมวิวทะเลหมอก",
    price: "24,500,000 บาท",
    description:
      "บ้านกระจกดีไซน์โมเดิร์น เปิดรับวิวรอบด้าน มีดาดฟ้าชมดาว โซนปาร์ตี้ส่วนตัว และห้องนอนทุกห้องหันออกสู่ภูเขา เหมาะสำหรับลูกค้าที่ต้องการทรัพย์มีเอกลักษณ์สูง",
    features: ["5 ห้องนอน", "วิว 360 องศา", "ดาดฟ้าชมดาว", "รองรับ 14-18 คน", "พร้อมเฟอร์นิเจอร์"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
    ],
    video: ""
  }
];

let properties = loadProperties();
let activeFilter = "all";

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
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoProperties));
    return [...demoProperties];
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoProperties));
    return [...demoProperties];
  }
}

function saveProperties() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
}

function propertyTypeLabel(type) {
  return type === "land" ? "ที่ดิน" : "พูลวิลล่า";
}

function splitList(value) {
  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderProperties() {
  const visible = activeFilter === "all" ? properties : properties.filter((item) => item.type === activeFilter);
  statCount.textContent = properties.length.toString();

  propertyContainer.innerHTML = visible
    .map((item) => {
      const image = item.images?.[0] || "assets/khao-kho-hero.png";
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
        <img src="${item.images?.[0] || "assets/khao-kho-hero.png"}" alt="${item.title}" />
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

async function handleLeadSubmit(event) {
  event.preventDefault();

  const lead = {
    name: document.querySelector("#lead-name").value.trim(),
    phone: document.querySelector("#lead-phone").value.trim(),
    line: document.querySelector("#lead-line").value.trim(),
    interest: document.querySelector("#lead-interest").value,
    submittedAt: new Date().toISOString()
  };

  const savedLeads = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || "[]");
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([lead, ...savedLeads]));

  leadMessage.classList.remove("error");
  leadMessage.textContent = "บันทึกข้อมูลเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว";
  leadForm.reset();

  try {
    await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });
  } catch {
    leadMessage.classList.add("error");
    leadMessage.textContent = "บันทึกในเครื่องแล้ว แต่ยังส่งไป Google Sheets ไม่สำเร็จ";
  }
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

document.querySelector(".close-detail").addEventListener("click", () => {
  detailPanel.hidden = true;
});

document.querySelector("#admin-open").addEventListener("click", () => {
  adminModal.hidden = false;
});

document.querySelector("#admin-close").addEventListener("click", () => {
  adminModal.hidden = true;
});

document.querySelector("#login-button").addEventListener("click", () => {
  const password = document.querySelector("#admin-password").value;
  const message = document.querySelector("#login-message");

  if (password !== ADMIN_PASSWORD) {
    message.textContent = "รหัสผ่านไม่ถูกต้อง";
    return;
  }

  message.textContent = "";
  adminLogin.hidden = true;
  adminPanel.hidden = false;
  renderAdminItems();
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
    saveProperties();
    renderProperties();
    renderAdminItems();
  }
});

document.querySelector("#restore-demo").addEventListener("click", () => {
  properties = demoProperties.map((item) => ({ ...item, id: createId() }));
  saveProperties();
  renderProperties();
  renderAdminItems();
  resetForm();
});

document.querySelector("#reset-form").addEventListener("click", resetForm);
propertyForm.addEventListener("submit", handlePropertySubmit);
leadForm.addEventListener("submit", handleLeadSubmit);

renderProperties();
