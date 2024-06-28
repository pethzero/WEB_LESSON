// ฟังก์ชั่น trim ที่เช็คค่า null หรือ undefined ก่อน
function safeTrim(x) {
    return x ? x.trim() : ''; // ถ้า x เป็น null หรือ undefined จะคืนค่าเป็น string ว่าง
}


// ฟังก์ชั่นเช็คว่าค่า null หรือไม่
function isNotNullOrUndefined(x) {
    return x !== null && x !== undefined;
}

// ฟังก์ชั่นเช็คว่าค่าไม่เป็น null, undefined, และไม่เป็น string ว่าง
function isNotNullOrUndefinedOrEmpty(x) {
    return x !== null && x !== undefined && x.trim() !== '';
}

// ทดสอบการใช้งาน
let str1 = "  Hello World!  ";
let str2 = null;
let str3 = undefined;
let str4 = '';
let str5 = '     '; // string ที่มีแต่ช่องว่าง

console.log(safeTrim(str1)); // "Hello World!"
console.log(safeTrim(str2)); // ""
console.log(safeTrim(str3)); // ""

console.log(isNotNullOrUndefined(str1)); // true
console.log(isNotNullOrUndefined(str2)); // false
console.log(isNotNullOrUndefined(str3)); // false


console.log(isNotNullOrUndefinedOrEmpty(str1)); // true
console.log(isNotNullOrUndefinedOrEmpty(str2)); // false
console.log(isNotNullOrUndefinedOrEmpty(str3)); // false
console.log(isNotNullOrUndefinedOrEmpty(str4)); // false
console.log(isNotNullOrUndefinedOrEmpty(str5)); // false

function safeTrimDefault(x,entry=null) {
    return x ? x.trim() : entry; // ถ้า x เป็น null หรือ undefined จะคืนค่าเป็น string ว่าง
}

let trimstr1 = "  Hello World!  ";
let trimstr2 = null;
let trimstr3 = undefined;
let trimstr4 = '     '; // string ที่มีแต่ช่องว่าง

console.log(safeTrimDefault(str1, null)); // "Hello World!"
console.log(safeTrimDefault(str2, null)); // "Default Value"
console.log(safeTrimDefault(str3, null)); // "Default Value"
console.log(safeTrimDefault(str4, 'XXXX')); // "" (หลัง trim, เป็น string ว่าง)


// function safeTrimDefault(x: any, entry: string | null = null): string | null {
//     if (x === null || x === undefined) {
//         return entry;
//     }
//     return x.toString().trim();
// }

// function safeTrimDefault(x: any, entry: string | null = null): string | null {
//     if (x === null || x === undefined || x.toString().trim() === '') {
//         return entry;
//     }
//     return x.toString().trim();
// }

// console.log(safeTrimDefault("  Hello World  ")); // "Hello World"
// console.log(safeTrimDefault(123)); // "123"
// console.log(safeTrimDefault(null, "Default Value")); // "Default Value"
// console.log(safeTrimDefault(undefined, "Default Value")); // "Default Value"
// console.log(safeTrimDefault(" 123 ")); // "123"
// console.log(safeTrimDefault("", "Default Value")); // "Default Value"
// console.log(safeTrimDefault("")); // null

function safeTrimDefault(x,entry=null) {
    if (typeof x === 'number') {
      x = x.toString();
    }
    return x ? x.trim() : entry; // ถ้า x เป็น null หรือ undefined จะคืนค่าเป็น string ว่าง
  }


function AllsafeTrimDefault(x,entry=null,number=0,mode=null){
    if(mode === null)
    {
        if (typeof x === 'number') {
            return x?x:number
        }
        else{
            return x ? x.trim() : entry
        }
    }
    else if(mode === 1){
    if (typeof x === 'number') {
        x = x.toString();
        }
        return x ? x.trim() : entry; // ถ้า x เป็น null หรือ undefined จะคืนค่าเป็น string ว่าง
    }
}