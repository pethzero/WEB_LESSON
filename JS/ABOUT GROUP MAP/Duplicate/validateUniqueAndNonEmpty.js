/**
 * ตรวจสอบความเป็นเอกลักษณ์และความสมบูรณ์ของข้อมูลในรายการ
 * @param {Array} data - ข้อมูลที่ต้องการตรวจสอบ
 * @returns {Object} - ออบเจกต์ที่ประกอบด้วยสถานะการตรวจสอบและข้อความที่เกี่ยวข้อง
 */
function validateUniqueAndNonEmpty(data) {
    const seen = new Set();
    const duplicates = new Set();
    const messages = [];
    let isValid = true; // เริ่มต้นสถานะเป็น true
  
    for (const item of data) {
        const enValue = item.en;
        if (enValue == null || enValue === '') {
            messages.push("พบค่า 'en' ที่เป็น null หรือว่าง");
            isValid = false; // เปลี่ยนสถานะเป็น false ถ้าพบค่า null หรือว่าง
        } else if (seen.has(enValue)) {
            duplicates.add(enValue);
            isValid = false; // เปลี่ยนสถานะเป็น false ถ้าพบข้อมูลซ้ำ
        } else {
            seen.add(enValue);
        }
    }
  
    if (duplicates.size > 0) {
        messages.push(`พบข้อมูล 'en' ซ้ำ: ${Array.from(duplicates).join(', ')}`);
    }
    if (messages.length === 0) {
        messages.push("ค่าทั้งหมดของ 'en' เป็นเอกลักษณ์และไม่เป็น null");
    }
  
    return { isValid, messages };
  }
  
  // Example usage
  const data = [
      { en: '53196' },
      { en: '00064' },
      { en: '00064' },
      { en: '00077' },
      { en: null }
  ];
  
  const result = validateUniqueAndNonEmpty(data);
  console.log(result.isValid);  // true หรือ false
  console.log(result.messages); // Array of messages
  