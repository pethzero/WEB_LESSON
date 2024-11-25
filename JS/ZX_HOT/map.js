const students = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 65 },
    { id: 3, name: 'Charlie', score: 90 },
    { id: 4, name: 'David', score: 50 }
];

// ใช้ .map เพื่อเพิ่มฟิลด์ใหม่ "grade"
const studentsWithGrades = students.map(student => {
    const grade = student.score >= 80 ? 'A' : 
                  student.score >= 70 ? 'B' : 
                  student.score >= 50 ? 'C' : 'F';
    return {
        ...student, // คัดลอกข้อมูลเดิม
        grade       // เพิ่มฟิลด์ใหม่
    };
});

console.log(studentsWithGrades);
