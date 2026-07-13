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
    description: "ที่ดินวิวสวย ดุจสวิตเซอร์แลนด์เมืองไทย\n\nสัมผัสเสน่ห์ของธรรมชาติท่ามกลางขุนเขาและสายหมอก กับ Blue Diamond ที่ดินทำเลพิเศษสำหรับผู้ที่กำลังมองหาพื้นที่สร้างบ้านพักตากอากาศ รีสอร์ท หรือเก็บไว้เป็นสินทรัพย์เพื่อการลงทุนในอนาคต\n\n🌿 แบ่งขายแปลงเนื้อที่ขนาด 2 – 4 ไร่ ราคา 25,000 บาท/ตรว. ขนาดกำลังดี ออกแบบและพัฒนาได้หลากหลายตามความต้องการ\n\n✨ จุดเด่นของโครงการ\n- วิวภูเขาแบบพาโนรามา สวยงามตลอดทั้งปี\n- บรรยากาศเงียบสงบ อากาศบริสุทธิ์\n- รายล้อมด้วยธรรมชาติและพื้นที่สีเขียว\n- เหมาะสำหรับสร้างบ้านพักตากอากาศ พูลวิลล่า หรือรีสอร์ทขนาดเล็ก\n- เดินทางสะดวก ใกล้แหล่งท่องเที่ยวและสิ่งอำนวยความสะดวก\n- ทำเลมีศักยภาพในการเติบโตและเพิ่มมูลค่าในอนาคต\n\n🏡 สร้างชีวิตในแบบที่คุณฝัน\nตื่นเช้าพร้อมวิวทะเลหมอก จิบกาแฟท่ามกลางอากาศเย็นสบาย และใช้ชีวิตใกล้ชิดธรรมชาติในทุกวัน\n\nBlue Diamond \"อัญมณีแห่งขุนเขา ที่พร้อมให้คุณเป็นเจ้าของ\"\n\n📍 เปิดจองแปลงสวย ขนาด 2 – 4 ไร่ จำนวนจำกัด",
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
      "mages/land/PV1.png",
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
    description: "Scenery Khao Kho - Mountain View\nพูลวิลล่าท่ามกลางวิวภูเขาและทะเลหมอก\n\nตื่นเช้ามาพร้อมวิวภูเขาสลับซับซ้อน สูดอากาศบริสุทธิ์ และสัมผัสทะเลหมอกที่ทอดยาวสุดสายตา Scenery Khao Kho - Mountain View พูลวิลล่าระดับพรีเมียมบนทำเลศักยภาพของเขาค้อ ที่ออกแบบมาเพื่อคนที่ต้องการทั้งบ้านพักตากอากาศ และโอกาสสร้างรายได้จากการปล่อยเช่า\n\n✨ จุดเด่นของโครงการ\n- พูลวิลล่าส่วนตัว: พร้อมสระว่ายน้ำและพื้นที่พักผ่อนส่วนตัว ให้คุณและครอบครัวได้ใช้เวลาคุณภาพท่ามกลางธรรมชาติ\n- วิวภูเขาและทะเลหมอกตลอดปี: ทำเลที่โดดเด่นด้วยทัศนียภาพสวยงาม เป็นจุดหมายปลายทางที่นักท่องเที่ยวอยากกลับมาเยือนซ้ำ\n- ทำเลท่องเที่ยวยอดนิยมของเขาค้อ: ใกล้แหล่งท่องเที่ยว ร้านอาหาร คาเฟ่ และจุดชมวิวสำคัญ เดินทางสะดวก เหมาะทั้งพักอาศัยและลงทุน\n- สร้างรายได้จากการปล่อยเช่า: ตอบโจทย์นักลงทุนที่ต้องการสร้างกระแสเงินสดจากตลาดท่องเที่ยวที่เติบโตอย่างต่อเนื่อง\n- บรรยากาศเงียบสงบ เป็นส่วนตัว: หลีกหนีความวุ่นวายของเมืองใหญ่ ใช้ชีวิตท่ามกลางธรรมชาติได้อย่างเต็มที่\n\nเพราะบางครั้ง... ความสุขไม่ได้วัดจากขนาดของบ้าน แต่วัดจากการได้ตื่นมาพร้อมวิวที่สวยทุกเช้า ได้ใช้เวลากับคนที่คุณรัก และได้เป็นเจ้าของสถานที่ที่ใครหลายคนใฝ่ฝันอยากมาพักผ่อน\n\nScenery Khao Kho - Mountain View โอกาสครอบครองพูลวิลล่าวิวหลักล้าน บนทำเลศักยภาพของเขาค้อ",
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
      "images/villa/N4.jpg" // 👈 เติมเครื่องหมายจุลภาค ( , ) ปิดท้ายตรงนี้ด้วยครับ!
    ],
    video: "https://www.youtube.com/embed/R4hCHYrwgIs?si=qcPACKhIhNQwp30U"
  },
  {
    id: "prop-grand-poolvilla-khaokho",
    type: "villa",
    title: "𝑮𝒓𝒂𝒏𝒅 𝑷𝒐𝒐𝒍 𝑽𝒊𝒍𝒍𝒂 𝑲𝒉𝒂𝒐 𝑲𝒉𝒐 | พูลวิลล่าหรูเพื่อการพักผ่อนและการลงทุน",
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
    return parsed.length > 0 ? parsed : [...demoProperties];
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
      leadMessage.classList.remove("error");
      leadMessage.textContent = "บันทึกข้อมูลออนไลน์เรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว";
      leadForm.reset();
      if (currentAgent) renderAgentLeads(currentAgent.id);
    } catch { 
      leadMessage.classList.add("error"); 
    }
  });
}

function renderAgentLeads(agentId) {
  const tableBody = document.querySelector("#agent-leads-table-body");
  if (!tableBody) return;
  
  fetch(`${GOOGLE_SHEETS_WEB_APP_URL}?action=getLeads&agentId=${agentId}`)
    .then(res => res.json())
    .then(agentLeads => {
      if (!agentLeads || agentLeads.length === 0) {
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
  if (!agents || agents.length === 0) { adminAgentsList.innerHTML = `<p class="form-note" style="color:var(--muted)">ยังไม่มีคำขอส่งเข้ามา</p>`; return; }
  adminAgentsList.innerHTML = agents.map((agent) => {
    const currentUrl = `${window.location.origin}${window.location.pathname}?agent=${agent.id}`;
    return `<div style="background:#f9f9f9; padding:14px; border:1px solid var(--line); border-radius:8px; margin-bottom:12px; font-size:14px; color:var(--ink);">
      <strong>ชื่อทีมงาน: ${agent.name}</strong> (<span style="color:${agent.status === 'approved' ? 'green' : 'orange'}">${agent.status}</span>)<br>
      โทร: ${agent.phone} | Line: ${agent.line}<br>
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
        checkAgentRoute(); 
        if (!adminPanel.hidden) renderAdminAgents(); 
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
  const headingTitle = document.querySelector("#admin-title-heading");

  if (message) message.textContent = "กำลังเชื่อมต่อคลาวด์เซิร์ฟเวอร์...";
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
    
    document.querySelector("#back-agent-full-url").textContent = `${window.location.origin}${window.location.pathname}?agent=${memberAgent.id}`;
    document.querySelector("#back-agent-line-link").textContent = memberAgent.line;
    document.querySelector("#back-agent-fb-link").textContent = memberAgent.facebook;
    document.querySelector("#back-agent-expire").textContent = memberAgent.expireAt;

    agentDashboardPanel.hidden = false;
    agentDashboardName.textContent = memberAgent.name;
    headingTitle.textContent = "ระบบหลังบ้านตัวแทน (เว็บลูก)";
    
    renderAgentLeads(memberAgent.id);
    renderSubTeams(memberAgent.id); 
    return;
  }
  message.textContent = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง หรือสิทธิ์ท่านยังไม่ได้รับการอนุมัติ";
});

function renderAdminItems() { 
  if (!adminItems) return; 
  adminItems.innerHTML = properties.map((item) => `
    <article class="admin-item" style="display:grid; grid-template-columns: 80px 1fr; gap:12px; padding:10px 0; border-top:1px solid var(--line);"> 
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
