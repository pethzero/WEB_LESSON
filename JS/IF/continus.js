for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      continue;  // ข้ามรอบลูปนี้เมื่อ i หาร 3 ลงตัว
    }
    console.log(i);  // แสดงตัวเลขที่ไม่หารด้วย 3 ลงตัว
  }
  
  console.log('-------------------------------------------------------------------------');

  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
      break;  // หยุดการทำงานของลูปทันทีเมื่อ i หาร 5 ลงตัว
    }
    console.log(i);  // แสดงตัวเลขที่ไม่หาร 5 ลงตัว
  }
  console.log('ลูปหยุดทำงานเมื่อ i หาร 5 ลงตัว');
  console.log('-------------------------------------------------------------------------');

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      return;  // จบรอบลูปนี้เมื่อ i หาร 3 ลงตัว
    }
    console.log(i);  // แสดงตัวเลขที่ไม่หารด้วย 3 ลงตัว
  }
  
  console.log('-------------------------------------------------------------------------');