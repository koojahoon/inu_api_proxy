export default async function handler(req, res) {
  // CORS 허용 (모든 Origin 허용)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight 요청 처리 (OPTIONS 메서드)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { dog_reg_no, rfid_cd, owner_nm, owner_birth } = req.query;

  const serviceKey = 'qkJ0Tig3BVppsm25PwdkjX9ygLldmyKE1/AfGg9y/zOseODgB7ET2Z7gbaJrW3mZe0Y3vnFAJXoSizE6bNEFyw=='; // 디코딩된 키
  const url = `http://apis.data.go.kr/1543061/animalInfoSrvc_v2?serviceKey=${serviceKey}&dog_reg_no=${dog_reg_no}&rfid_cd=${rfid_cd}&owner_nm=${owner_nm}&owner_birth=${owner_birth}&_type=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('❌ 프록시 내부 에러:', error);
    res.status(500).json({ error: '프록시 서버 에러', detail: error.message });
  }
}
