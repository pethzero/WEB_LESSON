const wo = 150;
const per = 25;

// ปัดให้เป็นจำนวนเต็มที่ใกล้ที่สุด
const rounded = Math.round((wo * per) / 100);
console.log('Rounded:', rounded); // 38

// ปัดลงเป็นจำนวนเต็มที่ต่ำที่สุด
const floored = Math.floor((wo * per) / 100);
console.log('Floored:', floored); // 37

// ปัดขึ้นเป็นจำนวนเต็มที่สูงที่สุด
const ceiled = Math.ceil((wo * per) / 100);
console.log('Ceiled:', ceiled); // 38
