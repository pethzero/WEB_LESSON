function convertDays(days) {
    const years = Math.floor(days / 365);
    days %= 365;
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;

    let result = [];
    if (years > 0) result.push(`${years} ปี`);
    if (months > 0) result.push(`${months} เดือน`);
    if (remainingDays > 0 || result.length === 0) result.push(`${remainingDays} วัน`);

    return result.join(' ');
}

// ตัวอย่างการใช้งาน
console.log(convertDays(70));  // "2 เดือน 10 วัน"
console.log(convertDays(1000)); // "2 ปี 9 เดือน 5 วัน"
