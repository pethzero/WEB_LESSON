function checkUniqueAndNotNullWithMessage(data) {
    const seen = new Set();
    const duplicates = new Set();
    const messages = [];

    for (const item of data) {
        const enValue = item.en;
        if (enValue == null || enValue === '') {
            messages.push("Found null or empty 'en' value.");
        } else if (seen.has(enValue)) {
            duplicates.add(enValue);
        } else {
            seen.add(enValue);
        }
    }

    if (duplicates.size > 0) {
        messages.push(`Duplicate 'en' values found: ${Array.from(duplicates).join(', ')}`);
    }
    if (messages.length === 0) {
        messages.push("All 'en' values are unique and not null.");
    }

    return messages;
}

// ตัวอย่างการใช้งาน
// const data = [
//     { "en": "53196" },
//     { "en": "00064" },
//     { "en": "00064" },
//     { "en": "00077" },
//     { "en": null },
//     { "en": "00077" }
// ];

const data = [
    { "en": "1" },
    { "en": "2" },
    { "en": "3" },
    { "en": "4" },
];

const messages = checkUniqueAndNotNullWithMessage(data);
messages.forEach(message => console.log(message));
