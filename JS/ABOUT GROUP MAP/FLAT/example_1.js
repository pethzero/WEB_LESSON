const data = [
    { name: 'Alice', hobbies: ['Reading', 'Cooking'] },
    { name: 'Bob', hobbies: ['Hiking'] },
    { name: 'Carol', hobbies: ['Traveling', 'Swimming'] }
  ];
  
  // ใช้ flatMap เพื่อแปลงข้อมูลในแต่ละ object และแบนผลลัพธ์ให้อยู่ใน array เดียว
  const result = data.flatMap(person => person.hobbies);
  
  console.log(result);
  