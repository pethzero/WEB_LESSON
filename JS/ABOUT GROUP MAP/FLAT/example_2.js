const users = [
  { 
    name: 'Alice', 
    orders: [
      { orderId: 1, items: ['Laptop', 'Mouse'] },
      { orderId: 2, items: ['Keyboard', 'USB Cable'] }
    ] 
  },
  { 
    name: 'Bob', 
    orders: [
      { orderId: 3, items: ['Monitor'] }
    ] 
  },
  { 
    name: 'Carol', 
    orders: [
      { orderId: 4, items: ['Headphones', 'Charger'] },
      { orderId: 5, items: ['Laptop Stand'] }
    ]
  }
];

// ใช้ flatMap เพื่อดึง item ทั้งหมดจากทุก order ของผู้ใช้แต่ละคน
const allItemsFlatMap = users.flatMap(user =>
  user.orders.flatMap(order => order.items)
);
console.log(allItemsFlatMap);
// ผลลัพธ์: ['Laptop', 'Mouse', 'Keyboard', 'USB Cable', 'Monitor', 'Headphones', 'Charger', 'Laptop Stand']


const allItemsMapFlat = users
  .map(user => user.orders.map(order => order.items))
  .flat(2); // ต้อง flat 2 ระดับเนื่องจาก array ซ้อนหลายชั้น

console.log(allItemsMapFlat);
// ผลลัพธ์: ['Laptop', 'Mouse', 'Keyboard', 'USB Cable', 'Monitor', 'Headphones', 'Charger', 'Laptop Stand']


const allItemsFor = [];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  for (let j = 0; j < user.orders.length; j++) {
    const order = user.orders[j];
    for (let k = 0; k < order.items.length; k++) {
      allItemsFor.push(order.items[k]);
    }
  }
}

console.log(allItemsFor);
// ผลลัพธ์: ['Laptop', 'Mouse', 'Keyboard', 'USB Cable', 'Monitor', 'Headphones', 'Charger', 'Laptop Stand']


const allItemsForOf = [];
for (const user of users) {
  for (const order of user.orders) {
    for (const item of order.items) {
      allItemsForOf.push(item);
    }
  }
}

console.log(allItemsForOf);
// ผลลัพธ์: ['Laptop', 'Mouse', 'Keyboard', 'USB Cable', 'Monitor', 'Headphones', 'Charger', 'Laptop Stand']


