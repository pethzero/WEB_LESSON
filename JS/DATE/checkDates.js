function checkDates(dates, daysOfWeek, mode) {
    const today = new Date();
    const currentDate = today.getDate(); // วันที่ในเดือน
    const currentMonth = today.getMonth(); // เดือน (0-11)
    
    // ตรวจสอบวันที่ในลิสต์
    const isInCurrentMonth = dates.includes(currentDate);
    
    // ถ้าโหมดเป็น 1 และไม่เจอในวันที่
    if (mode === 1 && !isInCurrentMonth) {
        console.log('แสดงว่าวันมันไม่ตรง เลยมาเช็ควันอาทิตย์ที่กำหนด');
        
        // เช็ควันใน daysOfWeek
        const currentDayOfWeek = today.getDay(); // วันในสัปดาห์ปัจจุบัน (0-6)
        console.log(`วันนี้เป็นวัน: ${currentDayOfWeek}`); // แสดงวันปัจจุบัน
        
        // เช็คว่าวันปัจจุบันอยู่ใน daysOfWeek หรือไม่
        return daysOfWeek.includes(currentDayOfWeek); 
    }

    // คืนค่า true ถ้าวันในลิสต์ตรงกับวันที่ในเดือน
    return isInCurrentMonth; 
}

// ตัวอย่างการใช้งาน
const dates = [1, 2]; // รายการวันที่
const daysOfWeek = [0, 5]; // วันอาทิตย์ (0) และวันศุกร์ (5)
const mode = 1; // โหมด

const result = checkDates(dates, daysOfWeek, mode);
console.log(result); // แสดงผลลัพธ์




// const daysComments = {
//     0: 'วันอาทิตย์',
//     1: 'วันจันทร์',
//     2: 'วันอังคาร',
//     3: 'วันพุธ',
//     4: 'วันพฤหัสบดี',
//     5: 'วันศุกร์',
//     6: 'วันเสาร์'
// };