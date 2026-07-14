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
      "images/land/BM2.jpg",
      "images/land/BM3.jpg",
      "images/land/BM4.jpg",
      "images/land/BM5.jpg"
    ],
    video: "https://www.youtube.com/embed/naKp5kfTIkI?si=eXApp3p5BwwmaWvq"
  },
  {
    id: "prop-prestige-life",
    type: "land",
    title: "ที่ดินสวย Prestige Life ด้านหน้าติดถนนใหญ่",
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
      renderSubTeamsAsync(agent.id); // 🌟 โหลดลูกทีมจริงจาก Google Sheets
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
      alert(`📞 หมายเลขโทรศัพท์ติดต่อเจ้าของขายเอง:\n👉 ${contact.phone} 👈`);
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

  const textContactBox = document.querySelector("#agent-text-contact-box");
  if (textContactBox) {
    textContactBox.innerHTML = `
      <div style="background: rgba(255,255,255,0.95); padding: 14px 18px; border-radius: 8px; border: 1px solid #d6d3d1; font-size: 15px; color: #44403c; text-align: left; box-shadow: 0 1px 4px rgba(0,0,0,0.08); width: 100%; box-sizing: border-box;">
        <div style="margin-bottom: 4px;"><strong>👤 เจ้าของขายเอง :</strong> ${contact.name}</div>
        <div><strong>📞 เบอร์โทรติดต่อ:</strong> <span style="color: #16a34a; font-weight: bold; font-size: 16px;">${contact.phone}</span></div>
      </div>
    `;
  }
}

// 🌟 [ฟังก์ชันดึงรายชื่อลูกทีมในสายงานจาก Google Sheets สดๆ มาแสดงผลจริงในตารางหน้าบ้าน]:
function renderSubTeamsAsync(agentId) {
  const tableBody = document.querySelector("#agent-subteams-table-body");
  if (!tableBody) return;
  const cleanId = agentId ? agentId.toString().toLowerCase().trim() : "";

  fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getAgents&parentId=${cleanId}`)
    .then(res => res.json())
    .then(subList => {
      // หรือกรองจากอาเรย์ global agents ที่ดึงมาแล้ว
      const filtered = agents.filter(a => a.parentId && a.parentId.toString().toLowerCase().trim() === cleanId);
      const displayData = (filtered.length > 0) ? filtered : (subList || []);

      if (!displayData || displayData.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="padding:12px; text-align:center; color:var(--muted);">ยังไม่มีลูกทีมสมัครต่อสายงานจากลิงก์ของคุณในขณะนี้</td></tr>`;
        return;
      }

      tableBody.innerHTML = displayData.map(sa => `
        <tr style="border-bottom: 1px solid var(--line); color: var(--ink);">
          <td style="padding:12px; font-weight:bold;">${sa.name || '-'}</td>
          <td style="padding:12px;">${sa.phone || '-'}</td>
          <td style="padding:12px;">${sa.line || '-'}</td>
          <td style="padding:12px;"><a href="${sa.facebook || '#'}" target="_blank" style="color: var(--forest-2); text-decoration:underline;">เปิดโปรไฟล์</a></td>
          <td style="padding:12px; font-weight:bold; color:var(--danger);">${sa.expireAt || '-'}</td>
          <td style="padding:12px;"><span style="color:${sa.status === 'approved' ? 'green' : 'orange'}; font-weight:bold;">${sa.status === 'approved' ? 'อนุมัติแล้ว' : 'รอแอดมินอนุมัติ'}</span></td>
        </tr>
      `).join("");
    })
    .catch(() => {
      const fallback = agents.filter(a => a.parentId && a.parentId.toString().toLowerCase().trim() === cleanId);
      if (fallback.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="padding:12px; text-align:center; color:var(--muted);">ยังไม่มีลูกทีมสมัครต่อสายงานจากลิงก์ของคุณในขณะนี้</td></tr>`;
        return;
      }
      tableBody.innerHTML = fallback.map(sa => `
        <tr style="border-bottom: 1px solid var(--line);">
          <td style="padding:12px; font-weight:bold;">${sa.name}</td>
          <td style="padding:12px;">${sa.phone}</td>
          <td style="padding:12px;">${sa.line}</td>
          <td style="padding:12px;"><a href="${sa.facebook}" target="_blank" style="color: var(--forest-2); text-decoration:underline;">เปิดโปรไฟล์</a></td>
          <td style="padding:12px; font-weight:bold; color:var(--danger);">${sa.expireAt || '-'}</td>
          <td style="padding:12px;"><span style="color:${sa.status === 'approved' ? 'green' : 'orange'}; font-weight:bold;">${sa.status === 'approved' ? 'อนุมัติแล้ว' : 'รอแอดมินอนุมัติ'}</span></td>
        </tr>
      `).join("");
    });
}

function initCopyAccountNumber() {
  setTimeout(() => {
    const modalBody = document.querySelector("#agent-register-modal");
    if (!modalBody) return;
    const walker = document.createTreeWalker(modalBody, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
      if (node.nodeValue.includes("045 2 07033 4")) {
        const parent = node.parentElement;
        if (parent && !parent.querySelector(".copy-acc-btn")) {
          parent.innerHTML = `เลขที่บัญชี: <span style="font-weight:bold;">045 2 07033 4</span> <button class="copy-acc-btn" type="button" style="margin-left:6px; padding:2px 6px; font-size:10px; background:#44403c; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">คัดลอก</button>`;
          const btn = parent.querySelector(".copy-acc-btn");
          if (btn) {
            btn.addEventListener("click", (e) => {
              e.preventDefault();
              navigator.clipboard.writeText("0452070334").then(() => {
                btn.textContent = "✓ คัดลอกแล้ว";
                btn.style.background = "#16a34a";
                setTimeout(() => {
                  btn.textContent = "คัดลอก";
                  btn.style.background = "#44403c";
                }, 2000);
              });
            });
          }
        }
        break;
      }
    }
  }, 300);
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

function closeDetailPanel() {
  if (detailPanel) {
    detailPanel.innerHTML = ""; 
    detailPanel.hidden = true;  
  }
}

function openDetail(id) {
  const item = properties.find((property) => property.id === id);
  if (!item) return;

  const detailFeaturesHtml = (item.features || []).map((feature) => `<li>${feature}</li>`).join("");
  const detailGalleryHtml = (item.images || []).map((image) => `<img src="${image}" alt="${item.title}" loading="lazy" />`).join("");
  const detailVideoHtml = item.video ? `<iframe src="${item.video}" title="วิดีโอ ${item.title}" allowfullscreen loading="lazy"></iframe>` : "";

  detailPanel.innerHTML = `
    <div class="detail-shell">
      <button class="icon-button close-detail" type="button" onclick="closeDetailPanel()" aria-label="ปิดรายละเอียด">×</button>
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
          <button class="button primary" id="popup-interest-cta" type="button" style="width:100%;" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); closeDetailPanel();">สนใจทรัพย์นี้</button>
          <button class="button neutral" onclick="closeDetailPanel()" type="button" style="width:100%; background:#eaeaea; color:#333;">ปิดหน้าต่างนี้</button>
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
      phone: document.querySelector("#reg-phone").value.trim(),
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
      phone: document.querySelector("#lead-phone").value.trim(),
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
        return `<tr style="border-bottom: 1px solid var(--line); color: var(--ink);">
          <td style="padding:14px; font-weight:bold;">${lead.name || '-'}</td>
          <td style="padding:14px;">${lead.phone || '-'}</td>
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
  renderSubTeamsAsync(agentId);
}

function viewSlipInModal(base64Data) {
  const modal = document.querySelector("#slip-preview-modal");
  const img = document.querySelector("#slip-preview-img");
  if (modal && img) { img.src = base64Data; modal.hidden = false; }
}

document.querySelectorAll("#signup-open, .signup-btn, [href='#signup']").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (agentRegisterModal) {
      agentRegisterModal.hidden = false;
      checkAgentRoute(); 
      setTimeout(initCopyAccountNumber, 200);
    }
  });
});

const mainSignUpBtn = document.querySelector(".nav-links a[href*='sign'], .button-group button:nth-child(1)");
if (mainSignUpBtn) {
  mainSignUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (agentRegisterModal) { 
      agentRegisterModal.hidden = false; 
      checkAgentRoute(); 
      setTimeout(initCopyAccountNumber, 200); 
    }
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
