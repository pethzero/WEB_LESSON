function parseNumber(x) {
  // ตรวจสอบว่า x เป็นค่าว่าง, null, undefined หรือไม่
  if (x === null || x === undefined || x === '') {
    return 'NULL';
  }
  // แปลงเป็นสตริงก่อน (เผื่อมีการส่งข้อมูลที่ไม่ใช่สตริงมา)
  let str = String(x);
  // ลบคอมม่าและพยายามแปลงเป็นตัวเลข
  let parsed = parseFloat(str.replace(/,/g, ''));
  // ตรวจสอบว่าผลลัพธ์เป็น NaN หรือไม่
  return isNaN(parsed) ? 'NULL' : parsed;
}
// ตัวอย่างการใช้งาน
console.log(parseNumber("1,000"));  // Output: 1000
console.log(parseNumber("100A"));   // Output: NULL
console.log(parseNumber(""));       // Output: NULL
console.log(parseNumber("1000"));   // Output: 1000
console.log(parseNumber(null));        // Output: NULL
console.log(parseNumber(undefined));   // Output: NULL
console.log(parseNumber(5000));        // Output: 5000


function SearchMaterial(data, data_mat_old,data_mat_new) {
  Object.keys(data).forEach(key => {
      
      data_mat_old.forEach(item1 => {
          let found_old = data[key].detail_old.some(detail => detail.material_no === item1.material_no && detail.wo_pl_order === item1.wo_pl_order);
          if (found_old) {
              if (item1.mat_no && !data[key].count_all_old.includes(item1.mat_no)) {
                  data[key].count_all_old.push(item1.mat_no);
              }
          }
      })

      data_mat_new.forEach(item2 => {
          let found_new = data[key].detail_new.some(detail => detail.material === item2.material_no && detail.wo_pl_order === item2.wo_pl_order);
          if (found_new) {
              if (item2.mat_no && !data[key].count_all_new.includes(item2.mat_no)) {
                  data[key].count_all_new.push(item2.mat_no);
              }
          }
      });

  });
}

SearchMaterial(msg.data_main, msg.data_mat_old, msg.data_mat_new)