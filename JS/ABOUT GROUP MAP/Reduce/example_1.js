const data = [
    { category: 'fruit', item: 'apple', quantity: 10 },
    { category: 'fruit', item: 'banana', quantity: 5 },
    { category: 'vegetable', item: 'carrot', quantity: 8 },
    { category: 'vegetable', item: 'broccoli', quantity: 6 },
  ];
  
  // ใช้ reduce เพื่อรวบรวมจำนวน item แต่ละประเภท
  const result = data.reduce((acc, item) => {
    // ตรวจสอบว่า category นี้มีอยู่ใน accumulator หรือยัง
    if (!acc[item.category]) {
      acc[item.category] = 0; // ถ้ายังไม่มี ให้เริ่มจาก 0
    }
    // บวก quantity ของ item ปัจจุบันเข้ากับ category ที่เกี่ยวข้อง
    acc[item.category] += item.quantity;
    return acc;
  }, {}); // เริ่มต้นให้ accumulator เป็น object ว่างๆ
  
  console.log(result);
  


  const result_2 = data.reduce((acc, item) => {
    // ตรวจสอบว่า category นี้มีอยู่ใน accumulator หรือยัง
    if (!acc[item.item]) {
      acc[item.item] = 0; // ถ้ายังไม่มี ให้เริ่มจาก 0
    }
    // บวก quantity ของ item ปัจจุบันเข้ากับ category ที่เกี่ยวข้อง
    acc[item.item] += item.quantity;
    return acc;
  }, {}); // เริ่มต้นให้ accumulator เป็น object ว่างๆ

  console.log(result_2);