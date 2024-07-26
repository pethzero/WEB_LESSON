let students = [
    { name: "Alice", age: 10, grade: "5th", score: 85 },
    { name: "Bob", age: 12, grade: "6th", score: 90 },
    { name: "Charlie", age: 11, grade: "5th", score: 78 },
    { name: "David", age: 13, grade: "7th", score: 92 },
    { name: "Eva", age: 12, grade: "6th", score: 88 },
    { name: "Fiona", age: 11, grade: "5th", score: 95 },
    { name: "George", age: 13, grade: "7th", score: 80 },
    { name: "Hannah", age: 10, grade: "5th", score: 77 },
    { name: "Ian", age: 12, grade: "6th", score: 85 },
    { name: "Jack", age: 11, grade: "5th", score: 91 }
];


// 1. ใช้ for Loop พื้นฐาน
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " is in grade " + students[i].grade);
}

// 2. ใช้ for...of Loop
for (let student of students) {
    console.log(student.name + " is in grade " + student.grade);
}

// 3. ใช้ for...in Loop กับอ็อบเจกต์ที่อยู่ในอาร์เรย์
for (let i = 0; i < students.length; i++) {
    for (let key in students[i]) {
        console.log(key + ": " + students[i][key]);
    }
    console.log("------");
}

// 4. ใช้ forEach Method
students.forEach((student) => {
    console.log(student.name + " is in grade " + student.grade);
});

// 5. ใช้ map Method
let studentGrades = students.map((student) => {
    return student.name + " is in grade " + student.grade;
});

console.log(studentGrades);

// 6. ใช้ filter Method
let fifthGraders = students.filter((student) => student.grade === "5th");

console.log(fifthGraders);

// 7. ใช้ reduce Method
let totalAge = students.reduce((sum, student) => sum + student.age, 0);

console.log("Total age of students: " + totalAge);

// 8. ใช้ find Method
let studentNamedBob = students.find((student) => student.name === "Bob");

console.log(studentNamedBob);

// 9. ใช้ some Method เพื่อตรวจสอบเงื่อนไข
let hasFifthGrader = students.some((student) => student.grade === "5th");

console.log("Are there any fifth graders? " + hasFifthGrader);

// 10. ใช้ every Method เพื่อตรวจสอบเงื่อนไข
let allActive = students.every((student) => student.age > 9);

console.log("Are all students older than 9? " + allActive);



// NEW
// หาผลรวมของคะแนนทั้งหมด
let totalScore = students.reduce((sum, student) => sum + student.score, 0);

// หาค่าเฉลี่ยของคะแนน
let averageScore = totalScore / students.length;

console.log("Total score of students: " + totalScore);
console.log("Average score of students: " + averageScore.toFixed(2));
