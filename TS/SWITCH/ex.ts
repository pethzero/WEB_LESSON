let sql1 = `SELECT * FROM table1 WHERE condition1 = true;`; // Query แรก
this.spinner$.pushLoad(); // เริ่มแสดง loading spinner

this.api.run_query(sql1)
  .pipe(
    switchMap((result1) => {
      // ผลลัพธ์ของ sql1
      console.log('Result of SQL1:', result1);

      let sql2 = `SELECT * FROM table2 WHERE condition2 = ${result1.someField};`; // Query ที่สอง
      return this.api.run_query(sql2); // Return Observable ของ sql2
    }),
    switchMap((result2) => {
      // ผลลัพธ์ของ sql2
      console.log('Result of SQL2:', result2);
      this.data_detail_list = result2['data']; // กำหนดค่าของ data_detail_list

      let sql3 = `SELECT * FROM table3 WHERE condition3 = ${result2.someOtherField};`; // Query ที่สาม
      return this.api.run_query(sql3); // Return Observable ของ sql3
    })
  )
  .subscribe({
    next: (result_final) => {
      // ผลลัพธ์ของ sql3
      console.log('Result of SQL3:', result_final);
      this.final_data = result_final['data']; // จัดการข้อมูลขั้นสุดท้าย
    },
    error: (err) => {
      console.error('Failed to fetch data', err);
      this.spinner$.pullLoad(); // ปิด loading spinner เมื่อเกิดข้อผิดพลาด
    },
    complete: () => {
      console.log('All queries completed successfully');
      this.spinner$.pullLoad(); // ปิด loading spinner เมื่อเสร็จสิ้นทุกกระบวนการ
    }
  });
