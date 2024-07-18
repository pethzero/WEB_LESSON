const items = [
    { category: 'electronics', price: 100 },
    { category: 'clothing', price: 50 },
    { category: 'electronics', price: 200 },
    { category: 'clothing', price: 75 },
    { category: 'food', price: 25 },
  ];
  
  // ใช้ reduce เพื่อจัดกลุ่มและรวมราคา
  const groupedItems = items.reduce((acc, current) => {
    // ตรวจสอบว่ามีหมวดหมู่นี้ในตัวสะสมหรือยัง
    if (!acc[current.category]) {
      // ถ้าไม่มี, สร้างหมวดหมู่ใหม่ในตัวสะสม
      acc[current.category] = {
        category: current.category,
        total_price: 0,
        items: []
      };
    }
    // เพิ่มราคาและข้อมูลสินค้าในหมวดหมู่ที่ถูกต้อง
    acc[current.category].total_price += current.price;
    acc[current.category].items.push(current);
  
    return acc;
  }, {});
  
  // แปลงจากอ็อบเจ็กต์เป็นอาร์เรย์ถ้าจำเป็น
  const result = Object.values(groupedItems);
  
  console.log(result);
  /*
  [
    {
      category: 'electronics',
      total_price: 300,
      items: [
        { category: 'electronics', price: 100 },
        { category: 'electronics', price: 200 }
      ]
    },
    {
      category: 'clothing',
      total_price: 125,
      items: [
        { category: 'clothing', price: 50 },
        { category: 'clothing', price: 75 }
      ]
    },
    {
      category: 'food',
      total_price: 25,
      items: [
        { category: 'food', price: 25 }
      ]
    }
  ]
  */
  