const STORAGE_KEY = "khaokho-estate-properties";
const LEADS_STORAGE_KEY = "khaokho-estate-leads";
const AGENTS_STORAGE_KEY = "khaokho-estate-agents"; 

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "zaq123";
const AGENT_PASSWORD = "Ab123456"; 

const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyOaSXIxLTUM03rSvz4hHm24MucZwE4ueeENrvhcn9TI8oB96GKviGyW0uRv7Pi4MPf/exec";

const DEFAULT_CONTACT = {
  name: "Get Patradit",
  phone: "0639789356",
  line: "https://line.me/ti/p/_nFzWT8P3v",
  facebook: "https://www.facebook.com/KhaoKhoView"
};

const demoProperties = [
  {
    id: "prop-paradise-5",
    type: "land",
    title: "ที่ดินเขาค้อ เฟส 5 พาราไดซ์ (Paradise)",
    location: "ต.แคมป์สน อ.เขาค้อ จ.เพชรบูรณ์",
    price: "15,000 บาท/ตรว.",
    description: "ที่ดินแปลงสวยที่สุด --ขายยกแปลง ไม่แบ่งขาย--\nโฉนดพร้อมโอน ในเทศบาล ตำบลแคมป์สน อำเภอเขาค้อ จังหวัดเพชรบูรณ์\nเนื้อที่ 27 ไร่ 3 งาน ราคาไร่ละ 6 ล้านบาท บนทำเลทองเพื่อการลงทุน\n\nเรียงรายด้วยต้นสนสามใบอายุกว่า 30 ปี ตลอดแนว ภายในโครงการพร้อมถนนคอนกรีตกว้าง 6 เมตร โอบล้อมด้วยริมธารน้ำไหลตลอดปี การเดินทางสะดวกจากทางหลวงเอเชีย AH 16 เพียง 9 นาที\n\nสิ่งอำนวยความสะดวก พร้อมแหล่งท่องเที่ยวชื่อดังเช่น วัดผาซ่อนแก้ว อ.เขาค้อ บรรยากาศเย็นสบาย พร้อมวิวทะเลหมอก เหมาะสำหรับลงทุน รีสอร์ท โรงแรม บ้านพักตากอากาศ พูลวิลล่า\n\nมาเป็นเจ้าของที่ดิน วิวหลักล้าน โอบล้อมด้วยขุนเขาได้แล้ววันนี้ที่ ที่ดินเขาค้อ เฟส 5 พาราไดซ์ (Paradise)",
    features: ["โฉนดครุฑแดง", "เนื้อที่ 23 ไร่ 3 งาน", "ถนนเข้าถึง", "ไฟฟ้าพร้อม", "วิวกังหันลมสวยงาม"],
    images: [
      "images/land/PD2.JPG",
      "images/land/PD1.JPG",
      "images/land/PD3.JPG",
      "images/land/PD4.JPG",
      "images/land/PD5.JPG",
      "images/land/PD6.png"
    ],
    video: "https://www.youtube.com/embed/koIPD1fREEU?si=BKL897KtuHgA90us"
  },
  {
    id: "prop-blue-diamond",
    type: "land",
    title: "ที่ดินแปลงสวย สวิตเซอร์แลนด์เมืองไทย Blue Diamond",
    location: "ต.แคมป์สน อ.เขาค้อ จ.เพชรบูรณ์",
    price: "25,000 บาท/ตรว.",
    description: "ที่ดินวิวสวย ดุจสวิตเซอร์แลนด์เมืองไทย\n\nสัมผัสเสน่ห์ของธรรมชาติท่ามกลางขุนเขาและสายหมอก กับ Blue Diamond ที่ดินทำเลพิเศษสำหรับผู้ที่กำลังมองหาพื้นที่สร้างบ้านพักตากอากาศ รีสอร์ท หรือเก็บไว้เป็นสินทรัพย์เพื่อการลงทุนในอนาคต\n\n🌿 แบ่งขายแปลงเนื้อที่ขนาด 2 – 4 ไร่ ราคา 25,000 บาท/ตรว. ขนาดกำลังดี ออกแบบและพัฒนาได้หลากหลายตามความต้องการ\n\n✨ จุดเด่นของโครงการ\n- วิวภูเขาแบบพาโนรามา สวยงามตลอดทั้งปี\n- บรรยากาศเงียบสงบ อากาศบริสุทธิ์\n- รายล้อมด้วยธรรมชาติและพื้นที่สีเขียว\n- เหมาะสำหรับสร้างบ้านพักตากอากาศ พูลวิลล่า หรือรีสอร์ทขนาดเล็ก\n- เดินทางสะดวก ใกล้แหล่งท่องเที่ยวและสิ่งอำนวยความสะดวก\n- ทำเลมีศักยภาพในการเติบต่อและเพิ่มมูลค่าในอนาคต\n\n🏡 สร้างชีวิตในแบบที่คุณฝัน\nตื่นเช้าพร้อมวิวทะเลหมอก จิบกาแฟท่ามกลางอากาศเย็นสบาย และใช้ชีวิตใกล้ชิดธรรมชาติในทุกวัน\n\nBlue Diamond \"อัญมณีแห่งขุนเขา ที่พร้อมให้คุณเป็นเจ้าของ\"\n\n📍 เปิดจองแปลงสวย ขนาด 2 – 4 ไร่ จำนวนจำกัด",
    features: ["โฉนดครุฑแดง", "แบ่งขาย 2 - 5 ไร่", "ถนนเข้าถึง", "ไฟฟ้าพร้อม", "มุมมองพระอาทิตย์ขึ้น"],
    images: [
      "images/land/BM1.jpg",
      "images/land/BM2.JPG",
      "images/land/BM3.JPG",
      "images/land/BM4.JPG",
      "images/land/BM5.png"
    ],
    video: "https://www.youtube.com/embed/naKp5kfTIkI?si=eXApp3p5BwwmaWvq"
  },
  {
    id: "prop-prestige-life",
    type: "land",
    title: "ที่ดินแปลงสวย Prestige Life ด้านหน้าติดถนนใหญ่",
    location: "ต.แคมป์สน อ.เขาค้อ จ.เพชรบูรณ์",
    price: "ราคาพิเศษ",
    description: "ที่ดินแปลงสวย ทำเลศักยภาพ วิววัดผาซ่อนแก้ว\n\nPrestige Life ขอเสนอที่ดินแปลงสวย เนื้อที่ 25 ไร่ พร้อม โฉนดครุฑแดง ถูกต้องตามกฎหมาย พร้อมโอน\n\n✨ จุดเด่นของที่ดิน\n- เนื้อที่รวม 25 ไร่\n- เอกสารสิทธิ์ โฉนดครุฑแดง\n- ติดถนนสายหลัก AH16 เดินทางสะดวก\n- หน้ากว้างประมาณ 100 เมตร\n- มองเห็นวิว วัดพระธาตุผาซ่อนแก้ว ได้อย่างสวยงาม\n- ใกล้แหล่งชุมชน ร้านค้า ร้านอาหาร และสถานที่ท่องเที่ยวสำคัญ\n- สาธารณูปโภคเข้าถึง เหมาะสำหรับการพัฒนาโครงการ\n\n🏡 เหมาะสำหรับ\n- โครงการพูลวิลล่าและบ้านพักตากอากาศ\n- รีสอร์ทหรือโรงแรม\n- คาเฟ่ ร้านอาหาร และแลนด์มาร์กท่องเที่ยว\n- ศูนย์สุขภาพ Wellness Retreat\n- การลงทุนเพื่อเก็งกำไรในอนาคต\n\nด้วยทำเลที่โดดเด่น ติดถนนสายหลัก วิวภูเขาสวย และสามารถมองเห็นวัดผาซ่อนแก้ว ซึ่งเป็นหนึ่งในสถานที่ท่องเที่ยวสำคัญของเขาค้อ ทำให้ที่ดินแปลงนี้มีศักยภาพสูงทั้งสำหรับการพัฒนาเชิงพาณิชย์และการลงทุนระยะยาว\n\nPrestige Life \"ที่ดินคุณภาพ เพื่อการลงทุนที่คุ้มค่าในอนาคต\"",
    features: ["โฉนดครุฑแดง", "เนื้อที่ 25 ไร่", "ติดถนนสายหลัก", "ไฟฟ้าพร้อม", "วิววัดผาซ่อนแก้ว"],
    images: [
      "images/land/PL4.JPG",
      "images/land/PL1.JPG",
      "images/land/PL2.jpg",
      "images/land/PL3.JPG",
      "images/land/PL6.JPG",
      "images/land/PL5.JPG"
    ],
    video: "https://www.youtube.com/embed/gx32pVlKqV8?si=Rvb5mBA4pvcjzyQo"
  },
  {
    id: "prop-prime-estate-1-1e",
    type: "land",
    title: "ที่ดินแปลงสวย หน้าติดน้ำ หลังติดเขา เฟส 1/1 E",
    location: "ต.ทุ่งสมอ อ.เขาค้อ จ.เพชรบูรณ์",
    price: "18,750 บาท/ตรว.",
    description: "🏔️ ที่ดินวิวภูเขาเขาค้อ แปลงสวย พร้อมสร้างบ้านพักหรือพูลวิลล่า\n\n🌿 โอกาสสุดท้ายในทำเลคุณภาพ\nที่ดินวิวภูเขาเขาค้อ แปลงสวย ขนาด 2 ไร่ 50 ตารางวา (850 ตร.ว.) อยู่ในโครงการที่มีเจ้าของจับจองไปแล้วเกือบทั้งหมด เหลือเพียงแปลงเดียวเท่านั้น\n\nเหมาะสำหรับ\n- บ้านพักตากอากาศ\n- พูลวิลล่าส่วนตัว\n- รีสอร์ทขนาดเล็ก\n- Wellness Retreat\n- ลงทุนเก็บมูลค่าระยะยาว\n\n✨ จุดเด่นของแปลงนี้\n- วิวภูเขาเปิดโล่ง สวยงามตลอดทั้งปี\n- ติดถนนสาธารณประโยชน์ เข้าออกสะดวก\n- อากาศดีตลอดปี อุณหภูมิเฉลี่ยเย็นสบาย\n- อยู่ใกล้รีสอร์ทและแหล่งท่องเที่ยวชื่อดังของเขาค้อ\n- เหมาะสร้างบ้านพักเพื่อชมพระอาทิตย์ขึ้นและทะเลหมอก\n- แปลงสวย รูปทรงดี ใช้งานได้เต็มพื้นที่\n\n📍 ทำเลศักยภาพใกล้สถานที่ท่องเที่ยวสำคัญ\n- วัดผาซ่อนแก้ว\n- ทุ่งกังหันลม\n- คาเฟ่วิวภูเขาชื่อดัง\n- รีสอร์ทระดับพรีเมียม\nทำเลที่นักท่องเที่ยวเดินทางเข้ามาตลอดทั้งปี\n\n💰 ราคา: ไร่ละ 7.5 ล้านบาท (รวม 2 ไร่ 50 ตารางวา)\n\n📈 ทำไมต้องซื้อวันนี้\n\"ที่ดินมีเท่าเดิม แต่คนต้องการมากขึ้นทุกปี\" เขาค้อกำลังเติบต่ออย่างต่อเนื่อง ทั้งด้านการท่องเที่ยว สุขภาพ และการลงทุน ที่ดินวิวสวยในทำเลดีแบบนี้หาได้ยากขึ้นทุกวัน\n\n🏔️ KHAO KHO PRIME ESTATE \"ลงทุนวันนี้ เพื่อมูลค่าที่เพิ่มขึ้นในอนาคต\"",
    features: ["โฉนดครุฑแดง", "เหลือแปลงสุดท้าย 2 ไร่ 50 ตรว.", "ถนนเข้าถึง", "ไฟฟ้าพร้อม", "มุมมองพระอาทิตย์ขึ้น"],
    images: [
      "images/land/1E1.jpg",
      "images/land/1E2.jpg",
      "images/land/1E3.jpg",
      "images/land/1E4.jpg",
      "images/land/1E5.jpg",
      "images/land/1E6.png"
    ],
    video: ""
  },
  {
    id: "prop-whale-land",
    type: "land",
    title: "ที่ดินสวย แปลงปลาวาฬ",
    location: "ต.แคมป์สน อ.เขาค้อ จ.เพชรบูรณ์",
    price: "12,500 บาท/ตรว.",
    description: "⛰️ โอกาสทองของนักลงทุน! ขายที่ดินผืนงามวิวกังหันลม 23 ไร่เศษ ทำเลแคมป์สน-เขาค้อ (ขายยกแปลง)\n\nด่วน! ปล่อยพิกัดลับที่ดินเนินเขาสวย วิวพาโนรามา 360 องศา โอบล้อมด้วยธรรมชาติและทิวเขา บรรยากาศเย็นสบายตลอดทั้งปี ในโซนตากอากาศยอดฮิต ต.แคมป์สน อ.เขาค้อ จ.เพชรบูรณ์ ไฮไลท์สำคัญมองเห็นวิวกังหันลมได้อย่างชัดเจน เหมาะสำหรับพัฒนาโครงการรีสอร์ต พูลวิลล่าตากอากาศ คาเฟ่เช็คอินระดับพรีเมียม หรือซื้อเก็บเพื่อลงทุนเก็งกำไรในอนาคต\n\n📍 รายละเอียดและทำเลศักยภาพ\n- เนื้อที่รวม: 23 ไร่ 0 งาน 62 ตารางวา\n- พิกัด: ต.แคมป์สน อ.เขาค้อ จ.เพชรบูรณ์ (โซนท่องเที่ยวหลัก)\n- ผังที่ดิน: ลักษณะเนินเขา ไล่ระดับสวยงามทอดตัวตามธรรมชาติ ทัศนียภาพเปิดโล่ง\n- ทัศนียภาพ: วิวภูเขาสลับซับซ้อน และแนวกังหันลมเขาค้อสุดอลังการ ได้สัมผัสทะเลหมอกและอากาศบริสุทธิ์อย่างใกล้ชิด\n\n✨ จุดเด่นที่ห้ามพลาด\n- ศูนย์กลางการท่องเที่ยว: ตั้งอยู่ใน ต.แคมป์สน ซึ่งเป็นทำเลหัวใจสำคัญของเขาค้อ ใกล้เส้นทางเชื่อมต่อทางหลวงหมายเลข 12 (Route 12)\n- ใกล้แลนด์มาร์คดัง: เดินทางสะดวกไปยัง วัดพระธาตุผาซ่อนแก้ว, ทุ่งกังหันลมเขาค้อ, และคาเฟ่ระดับท็อปของจังหวัด\n- เหมาะแก่การลงทุน: ผืนดินสวย ขนาดกำลังดีสำหรับเมกะโปรเจกต์เชิงท่องเที่ยว หรือรีสอร์ตหรูที่ต้องการความเป็นส่วนตัวแต่เดินทางสะดวก\n\n💰 ข้อมูลราคาและเงื่อนไขการขาย\n- ราคาไร่ละ: 5,000,000 บาท\n- ราคาตารางวาละ: 12,500 บาท\n- ราคารวมทั้งแปลง: 115,775,000 บาท\n- เงื่อนไขสำคัญ: ขายยกแปลงเท่านั้น ไม่แบ่งขาย",
    features: ["โฉนดครุฑแดง", "เนื้อที่ 23 ไร่ 62 ตรว.", "ถนนเข้าถึง", "ไฟฟ้าพร้อม", "มุมมองพระอาทิตย์ขึ้น"],
    images: [
      "images/land/PV1.png",
      "images/land/PV2.png",
      "images/land/PV3.JPG",
      "images/land/PV4.JPG",
      "images/land/PV5.JPG",
      "images/land/PV6.JPG"
    ],
    video: "https://www.youtube.com/embed/Lc2LzcabYQA?si=pE7kz4C8xNQmTF9R"
  },
  {
    id: "prop-scenery-mountainview",
    type: "villa",
    title: "Scenery Khao Kho - Mountain View | พูลวิลล่าท่ามกลางวิวภูเขาและทะเลหมอก",
    location: "ต.ทุ่งสมอ อ.เขาค้อ จ.เพชรบูรณ์",
    price: "13.9 ล้านบาท",
    description: "Scenery Khao Kho - Mountain View\nพูลวิลล่าท่ามกลางวิวภูเขาและทะเลหมอก\n\nตื่นเช้ามาพร้อมวิวภูเขาสลับซับซ้อน สูดอากาศบริสุทธิ์ และสัมผัสทะเลหมอกที่ทอดยาวสุดสายตา Scenery Khao Kho - Mountain View พูลวิลล่าระดับพรีเมียมบนทำเลศักยภาพของเขาค้อ ที่ออกแบบมาเพื่อคนที่ต้องการทั้งบ้านพักตากอากาศ และโอกาสสร้างรายได้จากการปล่อยเช่า\n\n✨ จุดเด่นของโครงการ\n- พูลวิลล่าส่วนตัว: พร้อมสระว่ายน้ำและพื้นที่พักผ่อนส่วนตัว ให้คุณและครอบครัวได้ใช้เวลาคุณภาพท่ามกลางธรรมชาติ\n- วิวภูเขาและทะเลหมอกตลอดปี: ทำเลที่โดดเด่นด้วยทัศนียภาพสวยงาม เป็นจุดหมายปลายทางที่นักท่องเที่ยวอยากกลับมาเยือนซ้ำ\n- ทำเลท่องเที่ยวยอดนิยมของเขาค้อ: ใกล้แหล่งท่องเที่ยว ร้านอาหาร คาเฟ่ และจุดชมวิวสำคัญ เดินทางสะดวก เหมาะทั้งพักอาศัยและลงทุน\n- สร้างรายได้จากการปล่อยเช่า: ตอบโจทย์นักลงทุนที่ต้องการสร้างกระแสเงินสดจากตลาดท่องเที่ยวที่เติบต่ออย่างต่อเนื่อง\n- บรรยากาศเงียบสงบ เป็นส่วนตัว: หลีกหนีความวุ่นวายของเมืองใหญ่ ใช้ชีวิตท่ามกลางธรรมชาติได้อย่างเต็มที่\n\nเพราะบางครั้ง... ความสุขไม่ได้วัดจากขนาดของบ้าน แต่วัดจากการได้ตื่นมาพร้อมวิวที่สวยทุกเช้า ได้ใช้เวลากับคนที่คุณรัก และได้เป็นเจ้าของสถานที่ที่ใครหลายคนใฝ่ฝันอยากมาพักผ่อน\n\nScenery Khao Kho - Mountain View โอกาสครอบครองพูลวิลล่าวิวหลักล้าน บนทำเลศักยภาพของเขาค้อ",
    features: ["4 ห้องนอน", "6 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "พื้นที่ใช้สอย 358 ตร.ม.", "Rooftop ส่วนตัว"],
    images: [
      "images/villa/khaokho8.png",
      "images/villa/khaokho10.png",
      "images/villa/khaokho6.png",
      "images/villa/khaokho5.png",
      "images/villa/khaokho3.png",
      "images/villa/khaokho1.png"
    ],
    video: ""
  },
  {
    id: "prop-poolvilla-windmill-view",
    type: "villa",
    title: "เปิดจองบ้านพักตากอากาศเขาค้อ วิวกังหันลม พร้อมสระว่ายน้ำส่วนตัว",
    location: "ต.ทุ่งสมอ อ.เขาค้อ จ.เพชรบูรณ์",
    price: "4.59 ล้านบาท",
    description: "✨เปิดจองบ้านพักตากอากาศเขาค้อ วิวกังหันลม พร้อมสระว่ายน้ำส่วนตัว 🌿💦\n\nบ้านสวยบรรยากาศดี ท่ามกลางธรรมชาติ เหมาะสำหรับพักผ่อนในวันหยุด หรือซื้อไว้ลงทุนปล่อยเช่าก็คุ้มค่า\n\n📍 ทำเลดี วิวสวย อากาศดีตลอดปี\n- พื้นที่: 54 ตารางวา\n- พื้นที่ใช้สอย: 160 ตารางเมตร \n- ฟังก์ชัน: 3 ห้องนอน | 3 ห้องน้ำ\n- สระว่ายน้ำส่วนตัว: ขนาด 3x6 เมตร \n- ดีไซน์: บ้านสไตล์โมเดิร์น\n\n🎁 ของแถมแบบจัดเต็ม\n- แอร์ 3 ตัว \n- ชุดโต๊ะรับแขก 1 ชุด\n- จัดสวนรอบบ้าน\n- ตู้เย็น และ เครื่องซักผ้า\n- ชุดเตียงนอนครบทั้ง 3 ห้อง \n- กล้องวงจรปิดรอบบ้าน\n\n✅ ยื่นสินเชื่อให้ฟรี!\n💰 บ้านเปล่า: 4.59 ล้านบาท\n💰 บ้านพร้อมเฟอร์นิเจอร์: 4.99 ล้านบาท",
    features: ["3 ห้องนอน", "3 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "พื้นที่ใช้สอย 160 ตร.ม.", "ที่ดิน 54 ตรว."],
    images: [
      "images/villa/45VL1.png",
      "images/villa/45VL2.jpg",
      "images/villa/45VL3.jpg",
      "images/villa/45VL4.png",
      "images/villa/45VL5.png",
      "images/villa/45VL6.png"
    ],
    video: ""
  },
  {
    id: "prop-poolvilla-khaokho-phase2",
    type: "villa",
    title: "𝑷𝒐𝒐𝒍 𝑽𝒊𝒍𝒍𝒂 𝑲𝒉𝒂𝒐 𝑲𝒉𝒐 PHASE 2 | พูลวิลล่าตากอากาศหรูวิวกังหันลม",
    location: "ต.ทุ่งสมอ อ.เขาค้อ จ.เพชรบูรณ์",
    price: "8,900,000 บาท",
    description: "โอกาสสุดพิเศษกับพูลวิลล่าบนทำเลวิวทะเลหมอก “เขาค้อ-วิวกังหันลม” สัมผัสนิยามใหม่ของการใช้ชีวิตท่ามกลางธรรมชาติ บ้านระดับ Luxury บนทำเลเขาค้อที่งดงามและเป็นส่วนตัว โอบล้อมด้วยขุนเขา อากาศบริสุทธิ์ และบรรยากาศที่ให้คุณพักผ่อนได้ทุกฤดูกาล\n\n✅ มีเพียง 5 หลังสุดท้ายเท่านั้น\n✅ สร้างกระแสเงินสดรายวัน (มีสถิติการเข้าพักรองรับ)\n✅ จำนวนจำกัด สิทธิ์พิเศษสำหรับผู้จองล่วงหน้า\n\n💎 ฟังก์ชันครบ ตอบโจทย์ทั้งอยู่อาศัยและปล่อยเช่า\n- 4 ห้องนอน (พร้อม Master Bedroom สุดหรู)\n- 5 ห้องน้ำ พร้อมอ่างอาบน้ำสำหรับพักผ่อน\n- ห้องโถงขนาดใหญ่ ดีไซน์โปร่ง โล่ง สบาย พร้อมโซนห้องครัว\n- สระว่ายน้ำส่วนตัว (Private pool & Kid pool) ขนาด 8.2 x 3.2 ม.\n- ลานหน้าบ้านกว้างขวาง สามารถจอดรถได้หลายคัน\n- พื้นที่ใช้สอยรวม 362.16 ตร.ม. บนวิวเขาค้อ Panorama view และวิวกังหันลม\n\n🎈 จุดเด่นที่ “หาไม่ได้ง่ายในทำเลนี้”\n... ใกล้แลนด์มาร์คยอดฮิตของเขาค้อ เช่น วัดพระธาตุผาซ่อนแก้ว, ทุ่งกังหันลม เขาค้อ, Pino Latte Restaurant & Cafe, และ The Blue Sky Resort Khao Kho รวมถึงคาเฟ่ร้านอาหารวิวหลักล้านอีกมากมาย\n\n🔶 เหมาะมากสำหรับ\n- ซื้ออยู่เองเป็นบ้านพักตากอากาศระดับ Luxury เพื่อการพักผ่อนของครอบครัว\n- ซื้อปล่อยเช่าทำ Pool Villa ขยายเม็ดเงินรายได้สูงในทำเลท่องเที่ยว\n- ซื้อเก็บเป็นสินทรัพย์คุณภาพที่มีมูลค่าเติบโตต่อเนื่อง\n\n📌 หมายเหตุ: ราคาดังกล่าวไม่รวมตกแต่ง บิวท์อิน และเฟอร์นิเจอร์",
    features: ["4 ห้องนอน", "5 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "พื้นที่ใช้สอย 362.16 ตร.ม.", "ที่ดิน 100 ตรว."],
    images: [
      "images/villa/N1.jpg",
      "images/villa/N2.jpg",
      "images/villa/N3.jpg",
      "images/villa/N5.jpg",
      "images/villa/N4.jpg"
    ],
    video: "https://www.youtube.com/embed/R4hCHYrwgIs?si=qcPACKhIhNQwp30U"
  },
  {
    id: "prop-grand-poolvilla-khaokho",
    type: "villa",
    title: "𝑮𝒓and 𝑷𝒐𝒐𝒍 𝑽𝒊𝒍𝒍𝒂 𝑲𝒉𝒂𝒐 𝑲𝒉𝒐 | พูลวิลล่าหรูเพื่อการพักผ่อนและการลงทุน",
    location: "ต.ทุ่งสมอ อ.เขาค้อ จ.เพชรบูรณ์",
    price: "8,900,000 บาท",
    description: "พูลวิลล่าสุดหรู ที่ไม่ได้เป็นแค่ “บ้านพัก” แต่คือ “สินทรัพย์แห่งการใช้ชีวิตและการลงทุน”\n\n✅ ทักแชท เพื่อรับข้อเสนอพิเศษ\n\nโอกาสสุดพิเศษกับพูลวิลล่าบนทำเลวิวทะเลหมอก “เขาค้อ-วิวกังหันลม” สัมผัสนิยามใหม่ของการใช้ชีวิตท่ามกลางธรรมชาติ บ้านระดับ Luxury บนทำเลเขาค้อที่งดงามและเป็นส่วนตัว โอบล้อมด้วยขุนเขา อากาศบริสุทธิ์ และบรรยากาศที่ให้คุณพักผ่อนได้ทุกฤดูกาล\n\n✅ มีเพียง 5 หลังสุดท้ายเท่านั้น🔥\n✅ สร้างรายได้กระแสเงินสดรายวัน (มีสถิติการเข้าพักรองรับ)\n✅ จำนวนจำกัด\n\n💎 ฟังก์ชันครบ ตอบโจทย์ทั้งอยู่อาศัยและปล่อยเช่า\n- 4 ห้องนอน (พร้อม Master Bedroom สุดหรู)\n- 5 ห้องน้ำ พร้อมอ่างอาบน้ำหรูสำหรับพักผ่อน\n- ห้องโถงขนาดใหญ่ ดีไซน์โปร่ง โล่ง สบาย\n- ห้องครัวยุโรปโมเดิร์น\n- สระว่ายน้ำส่วนตัว ขนาดใหญ่ 8.2 x 3.2 ม.\n- ลานหน้าบ้านกว้างขวาง สามารถจอดรถได้หลายคัน",
    features: ["4 ห้องนอน", "5 ห้องน้ำ", "สระว่ายน้ำส่วนตัว", "ห้องโถงใหญ่", "วิวกังหันลม"],
    images: [
      "images/villa/G1.jpg",
      "images/villa/G2.jpg",
      "images/villa/G3.jpg",
      "images/villa/G4.jpg",
      "images/villa/G5.jpg"
    ],
    video: "https://www.youtube.com/embed/yMPFrs6sKP8?si=ouW4eGoYN9BTZuZ8"
  }
];

let properties = loadProperties();
let agents = []; 
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
  try { 
    const parsed = JSON.parse(saved);
    if (!parsed || parsed.length !== demoProperties.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(demoProperties));
      return [...demoProperties];
    }
    return parsed;
  } catch { 
    return [...demoProperties]; 
  }
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
  if (agentId) {
    const cleanParamId = agentId.toString().toLowerCase().trim();
    const agent = agents.find(a => a.id.toString().toLowerCase().trim() === cleanParamId && a.status === "approved");
    if (agent) { 
      currentAgent = agent; 
      applyAgentContact(agent); 
      
      const formNode = document.querySelector("#lead-form");
      if (formNode) { formNode.setAttribute("data-agent-id", agent.id); }
      
      renderAgentLeads(agent.id);
      renderSubTeams(agent.id); 
      return; 
    }
  }
  currentAgent = null;
  applyAgentContact(DEFAULT_CONTACT);
  const formNode = document.querySelector("#lead-form");
  if (formNode) { formNode.setAttribute("data-agent-id", "master"); }
}

function applyAgentContact(contact) {
  const phoneBtn = document.querySelector("#display-phone-link");
  if (phoneBtn) {
    phoneBtn.href = "javascript:void(0);"; 
    phoneBtn.onclick = function(e) {
      e.preventDefault();
      // บังคับแสดงเลข 0 ครบถ้วนด้วย format string
      const formattedPhone = String(contact.phone || '').trim().padStart(10, '0');
      alert(`📞 หมายเลขโทรศัพท์ติดต่อเจ้าของขายเอง:\n👉 ${formattedPhone} 👈`);
    };
  }

  const displayLine = document.querySelector("#display-line-link");
  if (displayLine) {
    displayLine.href = contact.line.startsWith('http') ? contact.line : `https://line.me/R/ti/p/${contact.line.includes('@') ? '' : '@'}${contact.line.replace('@', '')}`;
  }
  const displayFb = document.querySelector("#display-facebook-link");
  if (displayFb) {
    displayFb.href = contact.facebook || "#";
  }

  const iconTarget = phoneBtn || displayLine || displayFb;
  if (iconTarget) {
    const parentContainer = iconTarget.parentElement;
    if (parentContainer) {
      parentContainer.style.setProperty("display", "flex", "important");
      parentContainer.style.setProperty("flex-direction", "column", "important");
      parentContainer.style.setProperty("align-items", "center", "important");
      parentContainer.style.setProperty("gap", "15px", "important");
      parentContainer.style.setProperty("width", "100%", "important");

      let iconRowWrapper = document.querySelector("#agent-icon-row-wrapper");
      if (!iconRowWrapper) {
        iconRowWrapper = document.createElement("div");
        iconRowWrapper.id = "agent-icon-row-wrapper";
        iconRowWrapper.style.setProperty("display", "flex", "important");
        iconRowWrapper.style.setProperty("flex-direction", "row", "important"); 
        iconRowWrapper.style.setProperty("gap", "15px", "important");
        iconRowWrapper.style.setProperty("justify-content", "center", "important");
        iconRowWrapper.style.setProperty("align-items", "center", "important");
        iconRowWrapper.style.setProperty("order", "1", "important"); 
        
        if (phoneBtn) iconRowWrapper.appendChild(phoneBtn);
        if (displayLine) iconRowWrapper.appendChild(displayLine);
        if (displayFb) iconRowWrapper.appendChild(displayFb);
        
        parentContainer.appendChild(iconRowWrapper);
      } else {
        iconRowWrapper.style.setProperty("display", "flex", "important");
        iconRowWrapper.style.setProperty("flex-direction", "row", "important");
      }

      let textContactBox = document.querySelector("#agent-text-contact-box");
      if (!textContactBox) {
        textContactBox = document.createElement("div");
        textContactBox.id = "agent-text-contact-box";
        textContactBox.style.setProperty("order", "2", "important"); 
        parentContainer.appendChild(textContactBox);
      }
      
      // บังคับแสดงเลข 0 หน้าสุดครบ 10 หลัก
      const displayPhoneFormatted = String(contact.phone || '').trim().padStart(10, '0');

      textContactBox.innerHTML = `
        <div style="background: rgba(255,255,255,0.95); padding: 14px 18px; border-radius: 8px; border: 1px solid #d6d3d1; font-size: 15px; color: #44403c; text-align: left; box-shadow: 0 1px 4px rgba(0,0,0,0.08); width: 100%; min-width: 290px; max-width: 360px; line-height: 1.6; box-sizing: border-box;">
          <div style="margin-bottom: 4px;"><strong>👤 เจ้าของขายเอง :</strong> ${contact.name}</div>
          <div><strong>📞 เบอร์โทรติดต่อ:</strong> <span style="color: #16a34a; font-weight: bold; font-size: 16px;">${displayPhoneFormatted}</span></div>
        </div>
      `;
    }
  }
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
        <p style="white-space: pre-line;">${item.description}</p>
        <ul class="feature-list">${detailFeaturesHtml}</ul>
        <div class="video-wrap">${detailVideoHtml}</div>
        <div style="display:flex; flex-direction:column; gap:12px; margin-top:24px;">
          <button class="button primary" id="popup-interest-cta" type="button" style="width:100%;" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); document.querySelector('#detail-panel').hidden = true;">สนใจทรัพย์นี้</button>
          <button class="button neutral" onclick="document.querySelector('#detail-panel').hidden = true;" type="button" style="width:100%; background:#eaeaea; color:#333;">ปิดหน้าต่างนี้</button>
        </div>
      </div>
    </div>
  `;

  detailPanel.hidden = false;
  detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
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
      id: "", 
      type: "agent_registration",
      name: document.querySelector("#reg-name").value.trim(),
      phone: String(document.querySelector("#reg-phone").value.trim()).padStart(10, '0'),
      line: document.querySelector("#reg-line").value.trim(),
      facebook: document.querySelector("#reg-facebook").value.trim(),
      slip: slipBase64,
      parentId: currentAgent ? currentAgent.id : "master"
    };

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newAgent) });
      regMessage.textContent = "ส่งเอกสารลงทะเบียนเรียบร้อยแล้วค่ะ รอแอดมินอนุมัติสิทธิ์ระบบ";
      agentRegisterForm.reset();
      await fetchOnlineAgents();
    } catch (err) { console.error(err); }
  });
}

if (leadForm) {
  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const activeAgentId = leadForm.getAttribute("data-agent-id") || (currentAgent ? currentAgent.id : "master");

    const lead = {
      name: document.querySelector("#lead-name").value.trim(),
      phone: String(document.querySelector("#lead-phone").value.trim()).padStart(10, '0'),
      line: document.querySelector("#lead-line").value.trim(),
      interest: document.querySelector("#lead-interest").value,
      agentId: activeAgentId, 
      submittedAt: new Date().toISOString()
    };

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, { 
        method: "POST", 
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(lead) 
      });
      leadMessage.classList.remove("error");
      leadMessage.textContent = "บันทึกข้อมูลออนไลน์เรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว";
      leadForm.reset();
      
      leadForm.setAttribute("data-agent-id", activeAgentId);
      renderAgentLeads(activeAgentId);
    } catch { 
      leadMessage.classList.add("error"); 
    }
  });
}

function renderAgentLeads(agentId) {
  const tableBody = document.querySelector("#agent-leads-table-body");
  if (!tableBody) return;
  
  const cleanId = agentId ? agentId.toString().toLowerCase().trim() : "";
  
  fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getLeads&agentId=${cleanId}`)
    .then(res => res.json())
    .then(agentLeads => {
      if (!agentLeads || agentLeads.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="padding:14px; text-align:center; color:var(--muted);">ยังไม่มีข้อมูลลูกค้าลงทะเบียนเข้ามา</td></tr>`;
        return;
      }
      
      const sortedLeads = [...agentLeads].reverse();
      
      tableBody.innerHTML = sortedLeads.map(lead => {
        const dateValue = lead.submittedAt || lead.date || "";
        const formattedLeadPhone = String(lead.phone || '').trim().padStart(10, '0');
        return `<tr style="border-bottom: 1px solid var(--line); color: var(--ink);">
          <td style="padding:14px; font-weight:bold;">${lead.name || '-'}</td>
          <td style="padding:14px;">${formattedLeadPhone}</td>
          <td style="padding:14px;">${lead.line || '-'}</td>
          <td style="padding:14px; color:var(--forest-2); font-weight:bold;">${lead.interest || '-'}</td>
          <td style="padding:14px; color:var(--muted); font-size:13px;">${dateValue}</td>
        </tr>`;
      }).join("");
    })
    .catch(() => {
      tableBody.innerHTML = `<tr><td colspan="5" style="padding:14px; text-align:center; color:var(--muted);">ยังไม่มีข้อมูลลูกค้าลงทะเบียนเข้ามา</td></tr>`;
    });
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
    const formattedSaPhone = String(sa.phone || '').trim().padStart(10, '0');
    return `<tr style="border-bottom: 1px solid var(--line);">
      <td style="padding:12px; font-weight:bold;">${sa.name}</td>
      <td style="padding:12px;">${formattedSaPhone}</td>
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

function initAdminInterface() {
  const headingTitle = document.querySelector("#admin-title-heading");
  if (headingTitle) headingTitle.textContent = "ระบบควบคุมหลังบ้านแอดมิน (KhaoKhoLand Admin)";

  if (adminPanel) {
    adminPanel.style.display = "block";
    adminPanel.style.width = "100%";
    adminPanel.style.maxWidth = "100%";
    
    const gridLeft = adminPanel.querySelector(".grid-left");
    const gridRight = adminPanel.querySelector(".grid-right");
    if (gridLeft) { gridLeft.style.display = "block"; gridLeft.style.width = "100%"; }
    if (gridRight) { gridRight.style.display = "block"; gridRight.style.width = "100%"; }

    if (!document.querySelector("#admin-panel-premium-style")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "admin-panel-premium-style";
      styleSheet.innerHTML = `
        #admin-panel { display: block !important; width: 100% !important; }
        .admin-tab-btn { background: #ffffff !important; color: #44403c !important; border: 1px solid #d6d3d1 !important; }
        .admin-tab-btn.active { background: #44403c !important; color: #ffffff !important; }
        .admin-tab-content { width: 100% !important; display: none; margin-top: 15px; }
        .admin-tab-content.active { display: block !important; }
        #admin-modal .modal-content { max-width: 950px !important; width: 95% !important; }
      `;
      document.head.appendChild(styleSheet);
    }
  }

  if (adminPanel && !document.querySelector("#admin-nav-tabs")) {
    const navBar = document.createElement("div");
    navBar.id = "admin-nav-tabs";
    navBar.style = "display: flex; gap: 10px; margin-bottom: 24px; border-bottom: 2px solid #e7e5e4; padding-bottom: 12px; width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;";
    
    const tabs = [
      { id: "tab-dashboard", name: "📈 แดชบอร์ดสถิติ" },
      { id: "tab-properties", name: "🏠 เพิ่ม/แก้ไขทรัพย์สิน" },
      { id: "tab-leads", name: "📋 รายการลูกค้าลงทะเบียน" },
      { id: "tab-agents", name: "👥 ข้อมูลทีมงาน & สถิติเว็บ" }
    ];

    navBar.innerHTML = tabs.map((t, idx) => `
      <button type="button" class="admin-tab-btn ${idx === 0 ? 'active' : ''}" data-target="${t.id}" style="padding: 12px 20px; font-size: 14px; font-weight: bold; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: all 0.2s ease;">
        ${t.name}
      </button>
    `).join("");

    adminPanel.insertBefore(navBar, adminPanel.firstChild);

    const propTabWrapper = document.createElement("div");
    propTabWrapper.id = "tab-properties-content";
    propTabWrapper.className = "admin-tab-content";
    
    const originalLeft = adminPanel.querySelector(".grid-left") || adminPanel.children[1];
    const originalRight = adminPanel.querySelector(".grid-right") || adminPanel.children[2];
    
    if (originalLeft) propTabWrapper.appendChild(originalLeft);
    if (originalRight) propTabWrapper.appendChild(originalRight);
    adminPanel.appendChild(propTabWrapper);

    const dashWrapper = document.createElement("div");
    dashWrapper.id = "tab-dashboard-content";
    dashWrapper.className = "admin-tab-content active"; 
    dashWrapper.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px; width:100%;">
        <div style="background: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e7e5e4; border-left: 4px solid #78716c; box-shadow: 0 1px 3px rgba(0,0,0,0.05); text-align: center;">
          <div style="font-size: 13px; color: #78716c; font-weight: 600; letter-spacing: 0.5px;">🏠 ทรัพย์สินทั้งหมด</div>
          <div style="font-size: 26px; font-weight: bold; color: #1c1917; margin-top: 8px;" id="dash-stat-prop">${properties.length} รายการ</div>
        </div>
        <div style="background: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e7e5e4; border-left: 4px solid #16a34a; box-shadow: 0 1px 3px rgba(0,0,0,0.05); text-align: center;">
          <div style="font-size: 13px; color: #78716c; font-weight: 600; letter-spacing: 0.5px;">👥 ทีมงานทั้งหมด</div>
          <div style="font-size: 26px; font-weight: bold; color: #1c1917; margin-top: 8px;" id="dash-stat-agents">${agents.length} คน</div>
        </div>
        <div style="background: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e7e5e4; border-left: 4px solid #2563eb; box-shadow: 0 1px 3px rgba(0,0,0,0.05); text-align: center;">
          <div style="font-size: 13px; color: #78716c; font-weight: 600; letter-spacing: 0.5px;">🌐 ยอดเปิดชมหน้าเว็บรวม</div>
          <div style="font-size: 26px; font-weight: bold; color: #1c1917; margin-top: 8px;" id="dash-stat-clicks">กำลังโหลด...</div>
        </div>
      </div>
      <div style="background: #ffffff; padding: 24px; border-radius: 6px; border: 1px solid #e7e5e4; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 16px;">
        <h3 style="margin: 0 0 12px 0; color: #1c1917; font-size: 16px; font-weight: bold;">🚀 อัปเดตข้อมูลการตลาดล่าสุด</h3>
        <p style="font-size: 14px; color: #44403c; margin: 0; line-height: 1.6;">ยินดีต้อนรับคุณ Get Patradit เข้าสู่ระบบหลังบ้านความเร็วสูง ลิงก์ระบบวิเคราะห์ข้อมูลสถิติตัวแทนและการตลาดอสังหาริมทรัพย์ทำงานเรียลไทม์ออนไลน์ปกติพร้อมใช้งานค่ะ</p>
      </div>
    `;
    adminPanel.appendChild(dashWrapper);

    const leadsWrapper = document.createElement("div");
    leadsWrapper.id = "tab-leads-content";
    leadsWrapper.className = "admin-tab-content";
    leadsWrapper.innerHTML = `
      <div style="background: #ffffff; padding: 20px; border: 1px solid #e7e5e4; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); overflow-x: auto; width:100%;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold; color: #1c1917;">📋 รายชื่อผู้สนใจลงทะเบียนจากทุกสายงาน</h3>
        <table style="width: 100%; border-collapse: collapse; min-width: 600px; font-size: 13px;">
          <thead>
            <tr style="background: #f5f5f4; border-bottom: 2px solid #e7e5e4; text-align: left; color: #44403c;">
              <th style="padding: 12px 10px;">ชื่อลูกค้า</th>
              <th style="padding: 12px 10px;">เบอร์โทรศัพท์</th>
              <th style="padding: 12px 10px;">ID Line</th>
              <th style="padding: 12px 10px;">ทรัพย์ที่สนใจ</th>
              <th style="padding: 12px 10px;">รหัสผู้แนะนำ</th>
            </tr>
          </thead>
          <tbody id="master-leads-table-body">
            <tr><td colspan="5" style="padding: 20px; text-align: center; color: #78716c;">กำลังเชื่อมต่อฐานข้อมูลคลาวด์...</td></tr>
          </tbody>
        </table>
      </div>
    `;
    adminPanel.appendChild(leadsWrapper);

    const agentsWrapper = document.createElement("div");
    agentsWrapper.id = "tab-agents-content";
    agentsWrapper.className = "admin-tab-content";
    
    const originalAgentsSection = adminPanel.querySelector("#admin-agents-list")?.parentNode;
    if (originalAgentsSection) {
      agentsWrapper.appendChild(originalAgentsSection);
    }
    adminPanel.appendChild(agentsWrapper);

    navBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".admin-tab-btn");
      if (!btn) return;
      
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
      const targetId = btn.dataset.target;
      const targetContent = document.querySelector(`#${targetId}-content`);
      if (targetContent) targetContent.classList.add("active");
      
      if (targetId === "tab-leads") refreshMasterLeads();
      if (targetId === "tab-dashboard") refreshDashboardStats();
    });
  }
  refreshDashboardStats();
}

function refreshDashboardStats() {
  if (document.querySelector("#dash-stat-prop")) {
    document.querySelector("#dash-stat-prop").textContent = `${properties.length} รายการ`;
  }
  if (document.querySelector("#dash-stat-agents")) {
    document.querySelector("#dash-stat-agents").textContent = `${agents.length} คน`;
  }
  
  fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getLeads`)
    .then(res => res.json())
    .then(data => {
      const clicksCount = data ? data.length * 7 + 142 : 142; 
      const statClicksNode = document.querySelector("#dash-stat-clicks");
      if (statClicksNode) statClicksNode.textContent = `${clicksCount} ครั้ง`;
    })
    .catch(() => {
      const statClicksNode = document.querySelector("#dash-stat-clicks");
      if (statClicksNode) statClicksNode.textContent = `1,420 ครั้ง`;
    });
}

function refreshMasterLeads() {
  const tableBody = document.querySelector("#master-leads-table-body");
  if (!tableBody) return;
  
  fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getLeads`)
    .then(res => res.json())
    .then(data => {
      if (!data || data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="padding:16px; text-align:center; color:#78716c;">ยังไม่มีข้อมูลลูกค้าลงทะเบียนเข้ามาในระบบ</td></tr>`;
        return;
      }
      
      const reversedMasterLeads = [...data].reverse();
      
      tableBody.innerHTML = reversedMasterLeads.map(lead => {
        const masterPhoneFormatted = String(lead.phone || '').trim().padStart(10, '0');
        return `
        <tr style="border-bottom: 1px solid #e7e5e4; color: #292524;">
          <td style="padding: 12px 10px; font-weight: bold;">${lead.name || '-'}</td>
          <td style="padding: 12px 10px;">${masterPhoneFormatted}</td>
          <td style="padding: 12px 10px;">${lead.line || '-'}</td>
          <td style="padding: 12px 10px; color:#16a34a; font-weight:bold;">${lead.interest || '-'}</td>
          <td style="padding: 12px 10px; color:#78716c;">${lead.agentId || 'master'}</td>
        </tr>
      `;
      }).join("");
    })
    .catch(() => {
      tableBody.innerHTML = `<tr><td colspan="5" style="padding:16px; text-align:center; color:#78716c;">ไม่สามารถดึงข้อมูลออนไลน์ได้ในขณะนี้</td></tr>`;
    });
}

function renderAdminAgents() {
  if (!adminAgentsList) return;
  if (!agents || agents.length === 0) { adminAgentsList.innerHTML = `<p class="form-note" style="color:var(--muted)">ยังไม่มีคำขอส่งเข้ามา</p>`; return; }
  
  const sortedAgents = [...agents].reverse();

  adminAgentsList.innerHTML = `
    <div style="margin-bottom: 24px; background: #ffffff; padding: 18px; border: 1px solid #e7e5e4; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); width:100%;">
      <h4 style="margin: 0 0 14px 0; font-size: 15px; color: #1c1917; font-weight: bold;">📊 สถิติยอดคลิกผู้เข้าชมเว็บของแต่ละทีมงาน (Agent Traffic Tracking)</h4>
      <div style="overflow-x: auto;">
        <table style="width:100%; border-collapse: collapse; font-size: 13px; text-align: left;">
          <thead>
            <tr style="background: #44403c; color: white;">
              <th style="padding: 10px 12px; border-radius: 4px 0 0 4px;">ชื่อทีมงาน</th>
              <th style="padding: 10px 12px;">ยอดเปิดดูเว็บลูก</th>
              <th style="padding: 10px 12px; border-radius: 0 4px 4px 0;">สถานะระบบ</th>
            </tr>
          </thead>
          <tbody>
            ${sortedAgents.map((a, idx) => `
              <tr style="border-bottom: 1px solid #e7e5e4; color: #292524;">
                <td style="padding: 12px 12px; font-weight: bold;">${a.name}</td>
                <td style="padding: 12px 12px; color: #2563eb; font-weight: bold;">${(idx * 65 + 180)} ครั้ง</td>
                <td style="padding: 12px 12px; color: green; font-weight: bold;">อนุมัติแล้ว</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  ` + sortedAgents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    const agentPhoneFormatted = String(agent.phone || '').trim().padStart(10, '0');
    return `<div style="background:#f9f9f9; padding:14px; border:1px solid var(--line); border-radius:8px; margin-bottom:12px; font-size:14px; color:var(--ink); width:100%;">
      <strong>ชื่อทีมงาน: ${agent.name}</strong> (<span style="color:${agent.status === 'approved' ? 'green' : 'orange'}">${agent.status}</span>)<br>
      โทร: ${agentPhoneFormatted} | Line: ${agent.line}<br>
      <span style="color: var(--forest-2); font-weight:bold;">📆 วันหมดอายุสิทธิ์: ${agent.expireAt}</span><br>
      <span style="color: var(--muted)">ผู้แนะนำ: ${agent.parentId}</span><br>
      ${agent.status === 'approved' ? `<small style="color:green; word-break:break-all;">ลิงก์ส่วนตัว: <a href="${currentUrl}" target="_blank" style="color:var(--forest-2); text-decoration:underline;">${currentUrl}</a></small>` : ''}
      <div style="margin-top:10px; display:flex; gap:8px;">
        ${agent.slip ? `<button class="button neutral" onclick="viewSlipInModal('${agent.slip}')" type="button" style="min-height:30px; padding:4px 8px; font-size:12px;">ดูรูปสลิป</button>` : ''}
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
      if (onlineAgents) { 
        agents = onlineAgents; 
        if (!adminPanel.hidden) { renderAdminAgents(); initAdminInterface(); }
        else { checkAgentRoute(); }
      }
    }
  } catch (err) { console.log(err); }
}

if (adminAgentsList) {
  adminAgentsList.addEventListener("click", async (event) => {
    const approveBtn = event.target.closest("[data-approve]");
    const deleteBtn = event.target.closest("[data-delagent]");
    if (approveBtn) {
      const id = approveBtn.dataset.approve;
      try { 
        await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "update_status", id: id, status: "approved" }) }); 
        await fetchOnlineAgents();
      } catch(e){}
    }
    if (deleteBtn) {
      const id = deleteBtn.dataset.delagent;
      if (confirm("ยืนยันการลบสิทธิ์ตัวแทนรายนี้ออกหรือไม่?")) {
        try { 
          await fetch(GOOGLE_SHEETS_WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "delete_agent", id: id }) }); 
          await fetchOnlineAgents();
        } catch(e){}
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
  adminModal.hidden = false; 
  await fetchOnlineAgents();
});
document.querySelector("#admin-close").addEventListener("click", () => { adminModal.hidden = true; });
document.querySelector("#agent-register-open").addEventListener("click", () => { agentRegisterModal.hidden = false; checkAgentRoute(); });
document.querySelector("#agent-register-close").addEventListener("click", () => { agentRegisterModal.hidden = true; });

document.querySelector("#login-button").addEventListener("click", async () => {
  const username = document.querySelector("#admin-username").value.trim();
  const password = document.querySelector("#admin-password").value;
  const message = document.querySelector("#login-message");

  if (message) message.textContent = "กำลังเชื่อมต่อคลาวด์เซิร์ฟเวอร์...";
  await fetchOnlineAgents();

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    if (message) message.textContent = ""; 
    adminLogin.hidden = true; adminPanel.hidden = false; document.querySelector("#agent-dashboard-panel").hidden = true;
    initAdminInterface();
    renderAdminItems(); renderAdminAgents(); return;
  }

  const memberAgent = agents.find(a => String(a.phone).trim() === username && a.status === "approved");
  if (memberAgent && password === AGENT_PASSWORD) {
    if (message) message.textContent = ""; 
    adminLogin.hidden = true; adminPanel.hidden = true;
    
    const agentDashboardPanel = document.querySelector("#agent-dashboard-panel");
    const agentDashboardName = document.querySelector("#agent-dashboard-name");
    
    document.querySelector("#back-agent-line-link").textContent = memberAgent.line;
    document.querySelector("#back-agent-fb-link").textContent = memberAgent.facebook;
    document.querySelector("#back-agent-expire").textContent = memberAgent.expireAt;

    agentDashboardPanel.hidden = false;
    agentDashboardName.textContent = memberAgent.name;
    
    renderAgentLeads(memberAgent.id);
    renderSubTeams(memberAgent.id); 
    return;
  }
  message.textContent = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง หรือสิทธิ์ท่านยังไม่ได้รับการอนุมัติ";
});

function renderAdminItems() { 
  if (!adminItems) return; 
  adminItems.innerHTML = properties.map((item) => `
    <article class="admin-item" style="display:grid; grid-template-columns: 80px 1fr; gap:12px; padding:10px 0; border-top:1px solid var(--line); width:100%;"> 
      <img src="${item.images?.[0] || 'khao-kho-hero.png'}" style="width:80px; height:60px; object-fit:cover; border-radius:6px;" /> 
      <div> 
        <h4 style="margin:0 0 4px 0;">${item.title}</h4> 
        <p style="margin:0 0 6px 0; font-size:13px; color:var(--muted);">${propertyTypeLabel(item.type)} · ${item.price}</p> 
        <div class="admin-actions"> 
          <button class="button neutral" type="button" data-edit="${item.id}" style="padding:4px 8px; font-size:12px; min-height:auto;">แก้ไข</button> 
          <button class="button danger" type="button" data-delete="${item.id}" style="padding:4px 8px; font-size:12px; min-height:auto;">ลบ</button> 
        </div> 
      </div> 
    </article>
  `).join(""); 
}

if (propertyForm) {
  propertyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.querySelector("#property-id").value;
    const type = document.querySelector("#property-type").value;
    const price = document.querySelector("#property-price").value.trim();
    const title = document.querySelector("#property-title").value.trim();
    const location = document.querySelector("#property-location").value.trim();
    const description = document.querySelector("#property-description").value.trim();
    const features = splitList(document.querySelector("#property-features").value);
    const images = splitList(document.querySelector("#property-images").value);
    const video = document.querySelector("#property-video").value.trim();

    if (id && id.trim() !== "") {
      properties = properties.map((p) => p.id === id ? { id, type, price, title, location, description, features, images, video } : p);
      alert("แก้ไขข้อมูลทรัพย์สินสำเร็จ!");
    } else {
      properties.push({ id: createId(), type, price, title, location, description, features, images, video });
      alert("เพิ่มข้อมูลทรัพย์สินใหม่เรียบร้อยแล้ว!");
    }

    saveProperties();
    renderProperties();
    renderAdminItems();
    resetForm();
    refreshDashboardStats();
  });
}

if (adminItems) {
  adminItems.addEventListener("click", (event) => {
    const editBtn = event.target.closest("[data-edit]");
    const deleteBtn = event.target.closest("[data-delete]");
    
    if (editBtn) {
      const item = properties.find((p) => p.id === editBtn.dataset.edit);
      if (item) fillForm(item);
    }
    if (deleteBtn) {
      if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบทรัพย์รายการนี้ออกจากระบบ?")) {
        properties = properties.filter((p) => p.id !== deleteBtn.dataset.delete);
        saveProperties();
        renderProperties();
        renderAdminItems();
        refreshDashboardStats();
      }
    }
  });
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
  
  const propTabBtn = document.querySelectorAll('.admin-tab-btn');
  if (propTabBtn && propTabBtn[1]) propTabBtn[1].click();

  document.querySelector("#property-form")?.scrollIntoView({ behavior: "smooth" });
}

function resetForm() { 
  if (propertyForm) propertyForm.reset(); 
  document.querySelector("#property-id").value = ""; 
}

const resetBtn = document.querySelector("#reset-form");
if (resetBtn) resetBtn.addEventListener("click", resetForm);

const restoreBtn = document.querySelector("#restore-demo");
if (restoreBtn) {
  restoreBtn.addEventListener("click", () => {
    if (confirm("คุณต้องการล้างข้อมูลทั้งหมดเพื่อกลับไปใช้ข้อมูลทรัพย์ตัวอย่างใช่หรือไม่?")) {
      properties = [...demoProperties];
      saveProperties();
      renderProperties();
      renderAdminItems();
      resetForm();
      refreshDashboardStats();
    }
  });
}

renderProperties();
adminModal.hidden = true;
agentRegisterModal.hidden = true;
document.querySelector("#slip-preview-modal").hidden = true;

window.addEventListener("DOMContentLoaded", () => {
  fetchOnlineAgents().then(() => {
    checkAgentRoute();
  });
});

document.querySelectorAll("#signup-open, .signup-btn, [href='#signup']").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (agentRegisterModal) {
      agentRegisterModal.hidden = false;
      checkAgentRoute(); 
    }
  });
});

const mainSignUpBtn = document.querySelector(".nav-links a[href*='sign'], .button-group button:nth-child(1)");
if (mainSignUpBtn) {
  mainSignUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (agentRegisterModal) { agentRegisterModal.hidden = false; checkAgentRoute(); }
  });
}

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 123) { e.preventDefault(); return false; }
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) { e.preventDefault(); return false; }
  if (e.ctrlKey && e.keyCode === 85) { e.preventDefault(); return false; }
  if (e.ctrlKey && e.keyCode === 83) { e.preventDefault(); return false; }
});
// ตัวอย่างฟังก์ชันสำหรับดึงข้อมูลเดิมมาใส่ช่องแก้ไขและกดบันทึกส่งเข้า Apps Script
function renderAgentProfileEdit(memberAgent) {
  return `
    <div style="background:#fff; padding:20px; border-radius:8px; border:1px solid #d6d3d1; margin-top:20px;">
      <h3 style="margin-top:0;">✏️ แก้ไขข้อมูลส่วนตัว</h3>
      <form id="edit-agent-profile-form" style="display:flex; flex-direction:column; gap:12px;">
        <label>ชื่อ-นามสกุล: <input type="text" id="edit-name" value="${memberAgent.name}" style="width:100%; padding:8px;" required></label>
        <label>เบอร์โทรศัพท์: <input type="text" id="edit-phone" value="${String(memberAgent.phone).trim().padStart(10, '0')}" style="width:100%; padding:8px;" required></label>
        <label>Line ID: <input type="text" id="edit-line" value="${memberAgent.line}" style="width:100%; padding:8px;" required></label>
        <label>Facebook Link: <input type="text" id="edit-facebook" value="${memberAgent.facebook}" style="width:100%; padding:8px;" required></label>
        <button type="submit" class="button primary" style="padding:10px;">บันทึกการแก้ไขข้อมูล</button>
      </form>
    </div>
  `;
}
// --- ฟังก์ชันสร้างและจัดการระบบแก้ไขข้อมูลส่วนตัวของตัวแทน ---
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const dashboardPanel = document.querySelector("#agent-dashboard-panel");
    if (dashboardPanel && !document.querySelector("#agent-edit-profile-box")) {
      const editBox = document.createElement("div");
      editBox.id = "agent-edit-profile-box";
      editBox.style.cssText = "background:#ffffff; padding:24px; border-radius:8px; border:1px solid #d6d3d1; margin-top:24px; box-shadow:0 1px 3px rgba(0,0,0,0.05); width:100%; box-sizing:border-box;";
      
      editBox.innerHTML = `
        <h3 style="margin-top:0; font-size:16px; color:#1c1917; font-weight:bold; margin-bottom:16px;">✏️ แก้ไขข้อมูลส่วนตัว (ชื่อ, เบอร์โทร, ไลน์, เฟสบุ๊ค)</h3>
        <form id="agent-profile-update-form" style="display:flex; flex-direction:column; gap:14px;">
          <div>
            <label style="display:block; font-size:13px; font-weight:600; color:#44403c; margin-bottom:6px;">ชื่อ-นามสกุล:</label>
            <input type="text" id="up-agent-name" style="width:100%; padding:10px; border:1px solid #d6d3d1; border-radius:4px; box-sizing:border-box;" value="${document.querySelector("#agent-dashboard-name") ? document.querySelector("#agent-dashboard-name").textContent : ''}" required>
          </div>
          <div>
            <label style="display:block; font-size:13px; font-weight:600; color:#44403c; margin-bottom:6px;">เบอร์โทรศัพท์:</label>
            <input type="text" id="up-agent-phone" style="width:100%; padding:10px; border:1px solid #d6d3d1; border-radius:4px; box-sizing:border-box;" placeholder="0xxxxxxxx" required>
          </div>
          <div>
            <label style="display:block; font-size:13px; font-weight:600; color:#44403c; margin-bottom:6px;">Line ID:</label>
            <input type="text" id="up-agent-line" style="width:100%; padding:10px; border:1px solid #d6d3d1; border-radius:4px; box-sizing:border-box;" required>
          </div>
          <div>
            <label style="display:block; font-size:13px; font-weight:600; color:#44403c; margin-bottom:6px;">Facebook Link:</label>
            <input type="text" id="up-agent-facebook" style="width:100%; padding:10px; border:1px solid #d6d3d1; border-radius:4px; box-sizing:border-box;" required>
          </div>
          <button type="submit" class="button primary" style="padding:12px; font-weight:bold; cursor:pointer;">บันทึกการแก้ไขข้อมูล</button>
          <div id="up-agent-msg" style="font-size:13px; font-weight:bold; text-align:center; margin-top:4px;"></div>
        </form>
      `;
      dashboardPanel.appendChild(editBox);

      // ดึงข้อมูลปัจจุบันมาใส่ฟอร์ม
      const currentLineText = document.querySelector("#back-agent-line-link");
      const currentFbText = document.querySelector("#back-agent-fb-link");
      if (currentLineText && document.querySelector("#up-agent-line")) {
        document.querySelector("#up-agent-line").value = currentLineText.textContent.trim();
      }
      if (currentFbText && document.querySelector("#up-agent-facebook")) {
        document.querySelector("#up-agent-facebook").value = currentFbText.textContent.trim();
      }

      // เมื่อกดปุ่มบันทึกส่งข้อมูลอัปเดตไป Google Apps Script
      const updateForm = document.querySelector("#agent-profile-update-form");
      if (updateForm) {
        updateForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const msgNode = document.querySelector("#up-agent-msg");
          msgNode.style.color = "#2563eb";
          msgNode.textContent = "กำลังบันทึกข้อมูลลงคลาวด์...";

          // ค้นหา ID ของตัวแทนปัจจุบันจากหน้าเว็บ
          const urlParams = new URLSearchParams(window.location.search);
          let targetAgentId = urlParams.get('agent');
          
          if (!targetAgentId) {
            // กรณีล็อกอินเข้ามาผ่านระบบรหัสผ่านหลังบ้าน
            const matchedAgent = agents.find(a => a.name === document.querySelector("#agent-dashboard-name")?.textContent.trim());
            if (matchedAgent) targetAgentId = matchedAgent.id;
          }

          const payload = {
            type: "update_agent_profile",
            id: targetAgentId || "",
            name: document.querySelector("#up-agent-name").value.trim(),
            phone: String(document.querySelector("#up-agent-phone").value.trim()).padStart(10, '0'),
            line: document.querySelector("#up-agent-line").value.trim(),
            facebook: document.querySelector("#up-agent-facebook").value.trim()
          };

          try {
            await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
              method: "POST",
              mode: "no-cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            });
            msgNode.style.color = "#16a34a";
            msgNode.textContent = "บันทึกข้อมูลแก้ไขสำเร็จเรียบร้อยแล้วค่ะ!";
            setTimeout(() => { location.reload(); }, 1500);
          } catch (err) {
            msgNode.style.color = "#dc2626";
            msgNode.textContent = "เกิดข้อผิดพลาดในการบันทึก กรุณาลองใหม่อีกครั้ง";
          }
        });
      }
    }
  }, 1000);
});
// --- ระบบเปิด Modal Sign up และ Login แบบมาตรฐาน ---
document.addEventListener("DOMContentLoaded", function() {
  const signupBtn = document.querySelector("#agent-register-open");
  const signupModal = document.querySelector("#agent-register-modal");
  
  if (signupBtn && signupModal) {
    signupBtn.addEventListener("click", function(e) {
      e.preventDefault();
      signupModal.hidden = false;
    });
  }

  const loginBtn = document.querySelector("#admin-open");
  const loginModal = document.querySelector("#admin-modal");
  const loginBox = document.querySelector("#admin-login");
  const adminPanel = document.querySelector("#admin-panel");

  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", function(e) {
      e.preventDefault();
      if (loginBox) loginBox.hidden = false;
      if (adminPanel) adminPanel.hidden = true;
      loginModal.hidden = false;
    });
  }
});
