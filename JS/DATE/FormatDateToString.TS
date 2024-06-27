class DateFormatter {
    // Format date to string YYYY-MM-dd
    public formateDate(data: any): string | null {
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
    public formateTime(data: any): string | null {
      return data ? new Date(data).toLocaleTimeString('en-US', {hour12: false}) : null;
    }
  
    // Format datetime to string YYYY-MM-dd HH-mm-ss 
    public formateDateTime(date: any, time: any): string | null {
      let datetime = this.formateDate(date);
      if (time) {
        datetime = datetime + " " + this.formateTime(time);
      }
      return datetime ? datetime : null;
    }   
  
    // Format datetime to string based on format type
    public ProcessFormatDateTime(date: any, time: any, type: string): string | null {
      let datetime = this.ProcessFormatDate(date, type);
      if (time) {
        datetime = datetime + " " + this.formateTime(time);
      }
      return datetime ? datetime : null;
    }   
  
    // Format date to string based on format type
    public ProcessFormatDate(data: any, type: string): string | null {
      if (data) {
        let date = new Date(data);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2); 
        let day = ("0" + date.getDate()).slice(-2);
        let formatdate:any = null;
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
    public getCurrentDateTime(): string {
      let now = new Date();
      now.setHours(now.getHours() + 7);
      return now.toISOString().split("T")[0] + " " + now.toISOString().split("T")[1].split(".")[0];
    }
  }
  
  // ตัวอย่างการใช้งาน
  const formatter = new DateFormatter();
  
  // แปลงวันที่
  console.log(formatter.formateDate('2024-06-25')); // Output: "2024-06-25"
  
  // แปลงเวลา
  console.log(formatter.formateTime('2024-06-25T15:30:00')); // Output: "15:30:00"
  
  // แปลงวันและเวลา
  console.log(formatter.formateDateTime('2024-06-25', '2024-06-25T15:30:00')); // Output: "2024-06-25 15:30:00"
  
  // แปลงวันและเวลาตามรูปแบบที่ต้องการ
  console.log(formatter.ProcessFormatDateTime('2024-06-25', '2024-06-25T15:30:00', 'dd/MM/yyyy')); // Output: "25/06/2024 15:30:00"
  console.log(formatter.ProcessFormatDateTime('2024-06-25', '2024-06-25T15:30:00', 'yyyy-MM-dd')); // Output: "2024-06-25 15:30:00"
  
  // แปลงวันตามรูปแบบที่ต้องการ
  console.log(formatter.ProcessFormatDate('2024-06-25', 'dd/MM/yyyy')); // Output: "25/06/2024"
  console.log(formatter.ProcessFormatDate('2024-06-25', 'yyyy-MM-dd')); // Output: "2024-06-25"
  
  // รับวันและเวลาปัจจุบัน
  console.log(formatter.getCurrentDateTime()); // Output: current date and time in "YYYY-MM-DD HH:mm:ss" format
  