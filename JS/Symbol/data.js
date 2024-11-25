let a = 0;
let b = undefined;
let c = 0;

let data1 = a || null; // data1 จะได้ค่าเป็น null เนื่องจาก a เป็น 0 (falsy)
let data2 = b ?? null; // data2 จะได้ค่าเป็น null เนื่องจาก b เป็น undefined
let data3 = c ?? 0; // data2 จะได้ค่าเป็น null เนื่องจาก b เป็น undefined

console.log(data1)
console.log(data2)
console.log(data3)
