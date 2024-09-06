// ข้อมูลตัวอย่าง
let data_message = [
    { name: ['Alice', 'Bob'], text: 'Hello World!', mode: 'A' },
    { name: ['Charlie'], text: 'Good Morning!', mode: 'M' },
    { name: ['David', 'Eve'], text: 'How are you?', mode: 'A' },
];

// การแปลงข้อมูลและรวมข้อความ
let combinedMessages = data_message.map(entry => {
    // รวมชื่อใน name ด้วย ', ' เป็นตัวคั่น
    let names = entry.name.join(', ');
    
    // กำหนดข้อความตาม mode
    let modeMessage = '';
    if (entry.mode === 'A') {
        modeMessage = `${names}: ${entry.text}`; // ใช้ entry.text
    } else if (entry.mode === 'M') {
        modeMessage = `${names}: text`; // ใช้ text แบบ literal
    }

    return modeMessage;
}).join('\n'); // รวมข้อความทั้งหมดด้วย '\n' เพื่อขึ้นบรรทัดใหม่

// แสดงผลลัพธ์ใน console
console.log(combinedMessages);
