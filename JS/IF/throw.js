for (let i = 1; i <= 10; i++) {
    try {
      if (i === 5) {
        throw new Error('พบข้อผิดพลาดที่ 5');  // โยนข้อผิดพลาดที่ i = 5
      }
      console.log(i);  // แสดงตัวเลขที่ไม่มีข้อผิดพลาด
    } catch (error) {
      console.error(error.message);  // จับและแสดงข้อความข้อผิดพลาด
    } finally {
      console.log('ลูปนี้ทำงานเสร็จแล้ว');  // ทำงานทุกครั้งหลังจากรอบนี้เสร็จ
    }
  }
  
  console.log('-----------------------------------------------------');
  function findFirstOdd(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        return `พบเลขคี่ที่ ${numbers[i]}`;  // หยุดฟังก์ชันและส่งค่ากลับ
      }
    }
    return 'ไม่พบเลขคี่ในอาร์เรย์';  // ส่งข้อความเมื่อไม่มีเลขคี่
  }
  
  let result = findFirstOdd([2, 4, 6, 7, 10]);
  console.log(result);  // พบเลขคี่ที่ 7
  

  outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
      if (j % 7 === 0) {
        console.log(`ออกจากลูปทั้งสองเมื่อ j = ${j}`);
        break outerLoop;  // ออกจากลูปทั้งหมดเมื่อ j หาร 7 ลงตัว
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
  