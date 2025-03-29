export default async function handler(req, res) {
  const { dog_reg_no, rfid_cd, owner_nm, owner_birth } = req.query;

  const serviceKey = 'qkJ0Tig3BVppsm25PwdkjX9ygLldmyKE1/AfGg9y/zOseODgB7ET2Z7gbaJrW3mZe0Y3vnFAJXoSizE6bNEFyw=='; // 꼭 디코딩된 키 사용하세요!

  const url = `http://apis.data.go.kr/1543061/animalInfoSrvc_v2?serviceKey=${serviceKey}&dog_reg_no=${dog_reg_no}&rfid_cd=${rfid_cd}&owner_nm=${owner_nm}&owner_birth=${owner_birth}&_type=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: '서버 오류', details: error.message });
  }
}
