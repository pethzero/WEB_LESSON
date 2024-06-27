// Format date to string YYYY-MM-dd
function formateDate(data) {
  if (data) {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2); 
    let day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  } else {
    return null;
  }
}

// Format time to string HH-mm-ss
function formateTime(data) {
  return data ? new Date(data).toLocaleTimeString('en-US', {hour12: false}) : null;
}

// Format datetime to string YYYY-MM-dd HH-mm-ss 
function formateDateTime(date, time) {
  let datetime = formateDate(date);
  if (time) {
    datetime = datetime + " " + formateTime(time);
  }
  return datetime ? datetime : null;
}

// Format datetime to string based on format type
function ProcessFormatDateTime(date, time, type) {
  let datetime = ProcessFormatDate(date, type);
  if (time) {
    datetime = datetime + " " + formateTime(time);
  }
  return datetime ? datetime : null;
}

// Format date to string based on format type
function ProcessFormatDate(data, type) {
  if (data) {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2); 
    let day = ("0" + date.getDate()).slice(-2);
    let formatdate = null;
    switch (type) {
      case 'dd/MM/yyyy':
        formatdate = day + '/' + month + '/' + year;
        break; 
      case 'yyyy-MM-dd':
        formatdate = year + "-" + month + "-" + day;
        break; 
      default:
        formatdate = null;
    }
    return formatdate;
  } else {
    return null;
  }
}

// Get current date and time
function getCurrentDateTime() {
  let now = new Date();
  now.setHours(now.getHours() + 7);
  return now.toISOString().split("T")[0] + " " + now.toISOString().split("T")[1].split(".")[0];
}

// ตัวอย่างการใช้งาน
console.log(formateDate('2024-06-25')); // Output: "2024-06-25"
console.log(formateTime('2024-06-25T15:30:00')); // Output: "15:30:00"
console.log(formateDateTime('2024-06-25', '2024-06-25T15:30:00')); // Output: "2024-06-25 15:30:00"
console.log(ProcessFormatDateTime('2024-06-25', '2024-06-25T15:30:00', 'dd/MM/yyyy')); // Output: "25/06/2024 15:30:00"
console.log(ProcessFormatDateTime('2024-06-25', '2024-06-25T15:30:00', 'yyyy-MM-dd')); // Output: "2024-06-25 15:30:00"
console.log(ProcessFormatDate('2024-06-25', 'dd/MM/yyyy')); // Output: "25/06/2024"
console.log(ProcessFormatDate('2024-06-25', 'yyyy-MM-dd')); // Output: "2024-06-25"
console.log(getCurrentDateTime()); // Output: current date and time in "YYYY-MM-DD HH:mm:ss" format
