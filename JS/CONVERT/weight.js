function convertToBaseUnit1(unit) {
  // สร้าง mapping สำหรับหน่วยต่างๆ และค่าแปลง
  const unitMapping = {
    G: 1, // กรัม (base unit)
    KG: 1000, // กิโลกรัม = 1000 กรัม
    MG: 1 / 1000, // มิลลิกรัม = 1/1000 กรัม
  };
  // ทำให้ตัวอักษรทั้งหมดเป็นพิมพ์ใหญ่
  const normalizedUnit = unit.toUpperCase();
  // ตรวจสอบว่าหน่วยอยู่ใน mapping หรือไม่
  if (unitMapping.hasOwnProperty(normalizedUnit)) {
    return unitMapping[normalizedUnit];
  } else {
    return 0;
  }
}

// ทดสอบฟังก์ชัน
try {
  console.log(convertToBaseUnit1("g")); // 1
  console.log(convertToBaseUnit1("KG")); // 1000
  console.log(convertToBaseUnit1("mg")); // 0.001
  console.log(convertToBaseUnit1("lb")); // Error: หน่วยที่ระบุไม่ถูกต้อง
} catch (error) {
  console.error(error.message);
}




function convertToBaseUnit2(unit) {
    // สร้าง mapping สำหรับหน่วยต่างๆ และค่า exponent
    const unitMapping = {
        "G": 0,        // กรัม (base unit)
        "KG": 3,       // กิโลกรัม (10^3)
        "MG": -3,      // มิลลิกรัม (10^-3)
    };

    // ทำให้ตัวอักษรทั้งหมดเป็นพิมพ์ใหญ่
    const normalizedUnit = unit.toUpperCase();

    // ตรวจสอบว่าหน่วยอยู่ใน mapping หรือไม่
    if (unitMapping.hasOwnProperty(normalizedUnit)) {
        const exponent = unitMapping[normalizedUnit];
        return `10^${exponent}`;
    } else {
        throw `0`;
    }
}

// ทดสอบฟังก์ชัน
try {
    console.log(convertToBaseUnit2("g"));  // "10^0"
    console.log(convertToBaseUnit2("KG")); // "10^3"
    console.log(convertToBaseUnit2("mg")); // "10^-3"
    console.log(convertToBaseUnit2("lb")); // Error: หน่วยที่ระบุไม่ถูกต้อง
} catch (error) {
    console.error(error.message);
}
