// จำลองข้อมูลนักเรียน
const students = [
    { id: 1, name: 'John Doe', grade: 10, status: 'active' },
    { id: 2, name: 'Jane Smith', grade: 11, status: 'inactive' },
    { id: 3, name: 'Alice Johnson', grade: 12, status: 'active' },
    { id: 4, name: 'Bob Brown', grade: 10, status: 'suspended' },
    { id: 5, name: 'Charlie Davis', grade: 12, status: 'active' },
    { id: 6, name: 'Diana Lee', grade: 11, status: 'inactive' }
];

// ค้นหานักเรียนที่มี ID ตรงกับ `selectedStudentId`
const selectedStudentId = 3;
const selectedStudent = students.find(student => student.id === selectedStudentId);
console.log('Selected Student:', selectedStudent);

// กรองนักเรียนที่มีสถานะ 'active'
const activeStudents = students.filter(student => student.status === 'active');
console.log('Active Students:', activeStudents);

// กรองนักเรียนที่อยู่ในระดับชั้น [10, 12]
const selectedGrades = [10, 12];
const studentsInSelectedGrades = students.filter(student => selectedGrades.includes(student.grade));
console.log('Students in Grades 10 and 12:', studentsInSelectedGrades);

// นับจำนวนนักเรียนในแต่ละสถานะ
const statusCounts = students.reduce((acc, student) => {
    acc[student.status] = (acc[student.status] || 0) + 1;
    return acc;
}, {});
console.log('Status Counts:', statusCounts);

// จัดกลุ่มนักเรียนตามระดับชั้น
const groupedByGrade = students.reduce((acc, student) => {
    if (!acc[student.grade]) acc[student.grade] = [];
    acc[student.grade].push(student);
    return acc;
}, {});
console.log('Grouped by Grade:', groupedByGrade);

// เพิ่มนักเรียนใหม่
const newStudent = { id: 7, name: 'Ella Wilson', grade: 10, status: 'active' };
students.push(newStudent);
console.log('Students after adding a new one:', students);

// ลบข้อมูลนักเรียนที่มี ID ตรงกับ 4
const removedStudentId = 4;
const updatedStudents = students.filter(student => student.id !== removedStudentId);
console.log('Students after removal:', updatedStudents);

// อัปเดตสถานะของนักเรียนที่มี ID ตรงกับ 2
const updatedStudentId = 2;
const updatedStudentsList = students.map(student =>
    student.id === updatedStudentId ? { ...student, status: 'active' } : student
);
console.log('Students after updating status:', updatedStudentsList);
