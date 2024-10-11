function getLastDayOfPreviousMonth(date, monthsBack) {
    // Copy the current date
    let targetDate = new Date(date);
    
    // Set the month back by the number of months you want (e.g. 2 months back)
    targetDate.setMonth(targetDate.getMonth() - monthsBack);
    
    // Set to the last day of the target month
    targetDate.setDate(0);

    return targetDate;
}

let now = new Date(); // Current date (e.g. 19/09/2024)
let lastDayTwoMonthsAgo = getLastDayOfPreviousMonth(now, 2);

console.log(lastDayTwoMonthsAgo); // Output: 31/07/2024
