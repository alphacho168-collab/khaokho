// 🌟 [ปรับปรุงดึงสถิติยอดคลิกผู้เข้าชมเว็บจริงจาก Google Sheets แทนตัวเลขจำลอง]:
function renderAdminAgents() {
  if (!adminAgentsList) return;
  if (!agents || agents.length === 0) { 
    adminAgentsList.innerHTML = `<p class="form-note" style="color:var(--muted)">ยังไม่มีคำขอส่งเข้ามา</p>`; 
    return; 
  }
  
  const sortedAgents = [...agents].reverse();

  // ดึงค่าสถิติการคลิกจริงจากฝั่งคลาวด์แทนสูตรสุ่มตัวเลขเดิม
  adminAgentsList.innerHTML = `
    <div style="margin-bottom: 24px; background: #ffffff; padding: 18px; border: 1px solid #e7e5e4; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); width:100%;">
      <h4 style="margin: 0 0 14px 0; font-size: 15px; color: #1c1917; font-weight: bold;">📊 สถิติยอดคลิกผู้เข้าชมเว็บของแต่ละทีมงาน (Real Agent Traffic Tracking)</h4>
      <div style="overflow-x: auto;">
        <table style="width:100%; border-collapse: collapse; font-size: 13px; text-align: left;">
          <thead>
            <tr style="background: #44403c; color: white;">
              <th style="padding: 10px 12px; border-radius: 4px 0 0 4px;">ชื่อทีมงาน</th>
              <th style="padding: 10px 12px;">ยอดเปิดดูเว็บจริง</th>
              <th style="padding: 10px 12px; border-radius: 0 4px 4px 0;">สถานะระบบ</th>
            </tr>
          </thead>
          <tbody>
            ${sortedAgents.map((a) => `
              <tr style="border-bottom: 1px solid #e7e5e4; color: #292524;">
                <td style="padding: 12px 12px; font-weight: bold;">${a.name}</td>
                <td style="padding: 12px 12px; color: #2563eb; font-weight: bold;" id="click-count-${a.id}">กำลังโหลด...</td>
                <td style="padding: 12px 12px; color: green; font-weight: bold;">อนุมัติแล้ว</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  ` + sortedAgents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    // โค้ดแสดงการ์ดรายละเอียดตัวแทนเดิม...
    return `...`; // คงโครงสร้างเดิมของพนักงานไว้
  }).join("");

  // ยิงคำสั่งดึงตัวเลขคลิกจริงของแต่ละคนมาแปะแทน
  sortedAgents.forEach(a => {
    fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getClicks&agentId=${a.id}`)
      .then(res => res.json())
      .then(count => {
        const node = document.querySelector(`#click-count-${a.id}`);
        if(node) node.textContent = `${count.clicks || 0} ครั้ง`;
      }).catch(() => {
        const node = document.querySelector(`#click-count-${a.id}`);
        if(node) node.textContent = `0 ครั้ง`;
      });
  });
}
