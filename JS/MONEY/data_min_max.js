// const data = [200, 500, 300, 400, -1, -2, -3, null];
const data = [200, 500, 300, 400];
let total_plus = [];
let total_minus = [];
let finaldata;

// วนลูปใน data เพื่อแยกค่า
data.forEach(value => {
  if (value === null || value === undefined) return; // ข้ามค่า null และ undefined
  if (value > 0) {
    total_plus.push(value); // เก็บค่าเป็นบวก
  } else if (value < 0) {
    total_minus.push(value); // เก็บค่าเป็นลบ
  }
});

// ตรวจสอบเงื่อนไขสำหรับ total_minus และ total_plus
if (total_minus.length > 1) {
  finaldata = [total_minus.reduce((sum, num) => sum + num, 0)]; // รวม total_minus
} else if (total_plus.length > 0) {
  finaldata = Math.min(...total_plus); // หาค่าน้อยที่สุดใน total_plus
}

// แสดงผลลัพธ์
console.log("Total Plus:", total_plus);
console.log("Total Minus:", total_minus);
console.log("Final Data:", finaldata);
