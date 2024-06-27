// 1. การใช้ for loop กับอาร์เรย์แบบพื้นฐาน (Basic Array)
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. การใช้ for...of กับอาร์เรย์ (Array)
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}

// 3. การใช้ for...in กับอ็อบเจกต์ (Object)
let student = {
    name: "John",
    age: 16,
    grade: "10th"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

// 4. การใช้ for กับอาร์เรย์ของอ็อบเจกต์ (Array of Objects)
let students = [
    { name: "Alice", age: 10, grade: "5th" },
    { name: "Bob", age: 12, grade: "6th" },
    { name: "Charlie", age: 11, grade: "5th" }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " is in grade " + students[i].grade);
}

// 5. การใช้ for...of กับอาร์เรย์ของอ็อบเจกต์ (Array of Objects)
let afo_students = [
    { name: "Alice", age: 10, grade: "5th" },
    { name: "Bob", age: 12, grade: "6th" },
    { name: "Charlie", age: 11, grade: "5th" }
];

for (let student of afo_students) {
    console.log(student.name + " is in grade " + student.grade);
}

// 6. การใช้ for...in กับอาร์เรย์ (Array)
let arr_fruits = ["apple", "banana", "cherry"];

for (let index in arr_fruits) {
    console.log(index + ": " + arr_fruits[index]);
}

// 7. การใช้ forEach กับอาร์เรย์ (Array)
let fe_fruits = ["apple", "banana", "cherry"];

fe_fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
});


// 8. การใช้ for...in กับอ็อบเจกต์ที่อยู่ในอาร์เรย์ (Array of Objects)
let afo_in_students = [
    { name: "Alice", age: 10, grade: "5th" },
    { name: "Bob", age: 12, grade: "6th" },
    { name: "Charlie", age: 11, grade: "5th" }
];

for (let i = 0; i < afo_in_students.length; i++) {
    for (let key in afo_in_students[i]) {
        console.log(key + ": " + afo_in_students[i][key]);
    }
    console.log("------");
}

// 9. การใช้ for...of กับ Map
let map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for (let [key, value] of map) {
    console.log(key + ": " + value);
}

// 10. การใช้ for...of กับ Set
let set = new Set(["apple", "banana", "cherry"]);

for (let value of set) {
    console.log(value);
}


// ในบทเรียนนี้ เราได้เรียนรู้การใช้ for loop ในหลายๆ รูปแบบ รวมถึง:

// การใช้ for loop พื้นฐานกับอาร์เรย์
// การใช้ for...of กับอาร์เรย์และ Set
// การใช้ for...in กับอ็อบเจกต์และอาร์เรย์
// การใช้ forEach กับอาร์เรย์
// การใช้ for loop กับอาร์เรย์ของอ็อบเจกต์
// การใช้ for...of กับ Map
// การเลือกใช้ for loop ที่เหมาะสมกับโครงสร้างข้อมูลที่คุณมีจะช่วยให้โค้ดของคุณมีความชัดเจนและมีประสิทธิภาพมากยิ่งขึ้น