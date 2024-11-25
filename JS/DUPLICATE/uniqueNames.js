const students = [
    { id: 1, name: 'Alice', age: 15 },
    { id: 2, name: 'Bob', age: 16 },
    { id: 3, name: null, age: 14 },
    { id: 4, name: 'Alice', age: 15 },
    { id: 5, name: 'Charlie', age: 16 },
    { id: 6, name: '', age: 17 }
];

const uniqueNames = Array.from(
    new Set(
        students
            .map(student => student.name) // ดึงค่าชื่อ (name) ออกมา
            .filter(name => name && name.trim() !== '') // กรองค่า null หรือว่าง ("") ออก
    )
);

console.log(uniqueNames); // ['Alice', 'Bob', 'Charlie']
