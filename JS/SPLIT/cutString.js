function cutString(input) {
    if (input.includes('_0')) {
        return input.replace('_0', '');
    } else {
        return '-';
    }
}

// ตัวอย่างการใช้งาน
console.log(cutString('47812_0')); // ผลลัพธ์: 47812
console.log(cutString('47812'));   // ผลลัพธ์: -

function NumbercutString(input) {
    // ตรวจสอบว่ามี '_' ตามด้วยตัวเลขใดๆ หรือไม่
    if (input.match(/_\d+/)) {
        return input.replace(/_\d+/g, '');
    } else {
        return '-';
    }
}

// ตัวอย่างการใช้งาน
console.log(NumbercutString('47812_0')); // ผลลัพธ์: 47812
console.log(NumbercutString('47812_1')); // ผลลัพธ์: 47812
console.log(NumbercutString('47812_2')); // ผลลัพธ์: 47812
console.log(NumbercutString('47812_3')); // ผลลัพธ์: 47812
console.log(NumbercutString('47812'));   // ผลลัพธ์: -

function AllcutString(input) {
    // ตรวจสอบว่ามี '_' ตามด้วยตัวอักษร, ตัวเลข หรืออักขระพิเศษใดๆ หรือไม่
    if (input.match(/_[a-zA-Z0-9!@]+/)) {
        return input.replace(/_[a-zA-Z0-9!@]+/g, '');
    } else {
        return '-';
    }
}

// ตัวอย่างการใช้งาน
console.log(AllcutString('47812_0'));  // ผลลัพธ์: 47812
console.log(AllcutString('47812_1'));  // ผลลัพธ์: 47812
console.log(AllcutString('47812_a'));  // ผลลัพธ์: 47812
console.log(AllcutString('47812_b'));  // ผลลัพธ์: 47812
console.log(AllcutString('47812_!'));  // ผลลัพธ์: 47812
console.log(AllcutString('47812_@'));  // ผลลัพธ์: 47812
console.log(AllcutString('47812'));    // ผลลัพธ์: -
console.log(AllcutString('47812_x3')); // ผลลัพธ์: 47812
