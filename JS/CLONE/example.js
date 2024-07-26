// ข้อความธรรมดา
let text1 = 'Hello, World!';
let text2 = text1;

console.log(text1); // Hello, World!
console.log(text2); // Hello, World!

text1 = 'Test'

console.log(text1); // Hello, World!
console.log(text2); // Hello, World!


// ฟังก์ชันและวันที่
const original = {
    name: 'Alice',
    age: 30,
    address: {
      city: 'Wonderland',
      zip: '12345'
    },
    getGreeting: function() {
      return `Hello, my name is ${this.name}`;
    },
    birthday: new Date('1994-05-01')
  };
  
  // คัดลอกแบบตื้น (shallow copy)
  const shallowCopy = Object.assign({}, original);
  
  // คัดลอกแบบลึก (deep copy) โดยใช้ JSON
  const deepCopyJSON = JSON.parse(JSON.stringify(original));
  
  // คัดลอกแบบลึก (deep copy) โดยใช้ structuredClone
  const deepCopyStructured = structuredClone(original);
  
  console.log('Original:', original);
  console.log('Shallow Copy:', shallowCopy);
  console.log('Deep Copy (JSON):', deepCopyJSON);
  console.log('Deep Copy (Structured):', deepCopyStructured);
  
  // การทดสอบฟังก์ชัน
  console.log(original.getGreeting()); // Hello, my name is Alice
  console.log(shallowCopy.getGreeting()); // undefined (ไม่สามารถคัดลอกฟังก์ชัน)
  console.log(deepCopyJSON.getGreeting); // undefined (ไม่สามารถคัดลอกฟังก์ชัน)
  console.log(deepCopyStructured.getGreeting()); // Hello, my name is Alice
  
  // การทดสอบวันที่
  console.log(original.birthday); // 1994-05-01T00:00:00.000Z
  console.log(shallowCopy.birthday); // 1994-05-01T00:00:00.000Z
  console.log(deepCopyJSON.birthday); // undefined (ไม่สามารถคัดลอกวันที่)
  console.log(deepCopyStructured.birthday); // 1994-05-01T00:00:00.000Z
  