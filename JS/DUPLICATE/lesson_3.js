function checkUniqueAndNotNull(data) {
    const seen = new Set();
    for (const item of data) {
        const enValue = item.en;
        if (!enValue) {
            return false;
        }
        if (seen.has(enValue)) {
            return false;
        }
        seen.add(enValue);
    }
    return true;
}

// ตัวอย่างการใช้งาน
const data = [
    { "en": "53196" },
    { "en": "00064" },
    { "en": "00064" },
    { "en": "00077" }
];

const result = checkUniqueAndNotNull(data);
console.log(result);  // Output: false
