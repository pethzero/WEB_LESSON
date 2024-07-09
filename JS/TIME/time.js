// example date to string YYYY-MM-dd
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
  
  // example time to string HH-mm-ss
  function formateTime(data) {
    return data ? new Date(data).toLocaleTimeString('en-US', { hour12: false }) : null;
  }
  
  // example datetime to string YYYY-MM-dd HH-mm-ss 
  function formateDateTime(date, time) {
    let datetime = formateDate(date);
    if (time) {
      datetime = datetime + " " + formateTime(time);
    }
    return datetime ? datetime : null;
  }
  
  // example datetime to string Convert Formate return dd/MM/yyyy, yyyy-MM-dd, etc.
  function ProcessFormatDateTime(date, time, type) {
    let datetime = null;
    datetime = ProcessFormatDate(date, type);
    if (time) {
      datetime = datetime + " " + formateTime(time);
    }
    return datetime ? datetime : null;
  }
  
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
  
  function getCurrentDateTime() {
    let now = new Date();
    now.setHours(now.getHours() + 7);
    return now.toISOString().split("T")[0] + " " + now.toISOString().split("T")[1].split(".")[0];
  }
  
  // ตัวอย่างการใช้งาน
  console.log(formateDate('2023-07-07')); // "2023-07-07"
  console.log(formateTime('2023-07-07T10:30:00')); // "10:30:00"
  console.log(formateDateTime('2023-07-07', '2023-07-07T10:30:00')); // "2023-07-07 10:30:00"
  console.log(ProcessFormatDateTime('2023-07-07', '2023-07-07T10:30:00', 'dd/MM/yyyy')); // "07/07/2023 10:30:00"
  console.log(getCurrentDateTime()); // ค่าปัจจุบันของวันและเวลาในรูปแบบ "YYYY-MM-DD HH:MM:SS"
  