function generateFilterString(data) {
    if (!Array.isArray(data) || data.length === 0) {
      return ""; // กรณีที่ data เป็นค่าว่างหรือไม่ใช่ Array
    }
  
    const conditions = data.map(
      item => `(a.material_no = '${item.fg_material_no}' and sale_order = '${item.sale_order}')`
    );
  
    return conditions.join(" or ");
  }
  
  // ตัวอย่างข้อมูล
  const input = [
     {"fg_material_no":"AAE908-208669ALF","sale_order":"0310542832"}
    ,{"fg_material_no":"AAE908-208669ALF","sale_order":"0212190189"}
    ,{"fg_material_no":"AAE908-208669ALF","sale_order":"0212190872"}
    ,{"fg_material_no":"AAE908-208669ALF","sale_order":"0212191752"}

  ];
  
  // เรียกใช้ฟังก์ชัน
  const string_f = generateFilterString(input);
  console.log(string_f);
  

  