// 1 ตัวอย่างพื้นฐานการใช้ flatMap
const numbers = [1, 2, 3, 4];

// ใช้ flatMap เพื่อคูณแต่ละตัวเลขด้วย 2 และคืนค่าอาร์เรย์ใหม่ที่แบน
const result = numbers.flatMap(x => [x * 2]);

console.log(result); // [2, 4, 6, 8]

// 2 การใช้ flatMap เพื่อจัดการกับอาร์เรย์ที่ซับซ้อน
const data = [
    { id: 1, items: ['a', 'b'] },
    { id: 2, items: ['c', 'd'] },
    { id: 3, items: [] },
    { id: 4, items: ['e'] },
  ];
  
  // ใช้ flatMap เพื่อแยก items จากแต่ละอ็อบเจ็กต์และสร้างอาร์เรย์เดียวที่แบน
  const result2 = data.flatMap(entry => entry.items);
  
  console.log(result2); // ['a', 'b', 'c', 'd', 'e']
  
//   3 การใช้ flatMap กับการแปลงข้อมูล
const users = [
    { name: 'Alice', skills: ['JavaScript', 'React'] },
    { name: 'Bob', skills: ['Java', 'Spring'] },
    { name: 'Charlie', skills: ['Python', 'Django'] },
  ];
  
  // ใช้ flatMap เพื่อสร้างอาร์เรย์ที่มีชื่อและทักษะของผู้ใช้
  const result3 = users.flatMap(user => user.skills.map(skill => `${user.name} knows ${skill}`));
  
  console.log(result3);
  // [
  //   'Alice knows JavaScript',
  //   'Alice knows React',
  //   'Bob knows Java',
  //   'Bob knows Spring',
  //   'Charlie knows Python',
  //   'Charlie knows Django'
  // ]
  
//   4 การใช้ flatMap เพื่อกรองและแปลงข้อมูล
const orders = [
    { id: 1, products: [{ name: 'Apple', quantity: 2 }, { name: 'Banana', quantity: 0 }] },
    { id: 2, products: [{ name: 'Orange', quantity: 3 }, { name: 'Grape', quantity: 0 }] }
  ];
  
  // ใช้ flatMap เพื่อกรองเฉพาะสินค้าที่มีจำนวนมากกว่า 0 และแปลงข้อมูลให้อยู่ในรูปแบบที่ต้องการ
  const result4 = orders.flatMap(order => 
    order.products
      .filter(product => product.quantity > 0)
      .map(product => ({ orderId: order.id, productName: product.name, quantity: product.quantity }))
  );
  
  console.log(result4);
  // [
  //   { orderId: 1, productName: 'Apple', quantity: 2 },
  //   { orderId: 2, productName: 'Orange', quantity: 3 }
  // ]
  