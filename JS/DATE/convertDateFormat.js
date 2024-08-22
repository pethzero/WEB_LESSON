function convertDateFormat(inputDate) {
    // Define the month mapping
    const monthMap = {
        JAN: '01',
        FEB: '02',
        MAR: '03',
        APR: '04',
        MAY: '05',
        JUN: '06',
        JUL: '07',
        AUG: '08',
        SEP: '09',
        OCT: '10',
        NOV: '11',
        DEC: '12'
    };

    // Split the input date by periods
    const [day, monthText, year] = inputDate.split('.');

    // Convert month abbreviation to month number
    const month = monthMap[monthText.toUpperCase()];

    // Construct the new date format
    return `${day}.${month}.${year}`;
}

// Example usage
const inputDate = '12.SEP.2024';
const formattedDate = convertDateFormat(inputDate);
console.log(formattedDate); // Output: "12.09.2024"
