// Convert a string in format YYYY-MM-dd to a Date object
function stringToDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  
  // Convert a string in format HH:mm:ss to a Date object
  function stringToTime(timeStr) {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    const now = new Date();
    now.setHours(hours, minutes, seconds, 0);
    return now;
  }
  
  // Convert a string in format YYYY-MM-dd HH:mm:ss to a Date object
  function stringToDateTime(dateTimeStr) {
    const [dateStr, timeStr] = dateTimeStr.split(' ');
    const date = stringToDate(dateStr);
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    date.setHours(hours, minutes, seconds, 0);
    return date;
  }
  
  // Example usage
  console.log(stringToDate('2024-06-25')); // Output: Date object for June 25, 2024
  console.log(stringToTime('15:30:00')); // Output: Date object with today's date and time 15:30:00
  console.log(stringToDateTime('2024-06-25 15:30:00')); // Output: Date object for June 25, 2024, 15:30:00
  
  // Convert various string formats to Date object
  function parseDateString(dateStr) {
    let date = null;
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      // Matches format YYYY-MM-DD
      date = stringToDate(dateStr);
    } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
      // Matches format DD/MM/YYYY
      const [day, month, year] = dateStr.split('/').map(Number);
      date = new Date(year, month - 1, day);
    } else if (/^\d{2}:\d{2}:\d{2}$/.test(dateStr)) {
      // Matches format HH:mm:ss
      date = stringToTime(dateStr);
    } else if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dateStr)) {
      // Matches format YYYY-MM-DD HH:mm:ss
      date = stringToDateTime(dateStr);
    } else {
      throw new Error('Unrecognized date format');
    }
    return date;
  }
  
  // Example usage with various formats
//   console.log(parseDateString('2024-06-25')); // Output: Date object for June 25, 2024
//   console.log(parseDateString('25/06/2024')); // Output: Date object for June 25, 2024
//   console.log(parseDateString('15:30:00')); // Output: Date object with today's date and time 15:30:00
//   console.log(parseDateString('2024-06-25 15:30:00')); // Output: Date object for June 25, 2024, 15:30:00
  