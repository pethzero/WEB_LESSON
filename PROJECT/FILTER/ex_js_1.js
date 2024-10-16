const data_n = [
    { 'a': 'aaa', 'b': 'aa' },
    { 'a': 'bbb', 'b': 'bb' },
    { 'a': 'ccc', 'b': 'cc' }
  ];
  
  // กรองข้อมูลเพื่อให้ได้เฉพาะค่าจากฟิลด์ 'a'
  const list_data = data_n.map(item => item.a);
  
  // เพิ่มค่า 'ALL' ที่ด้านหน้า
  const select_data = ['ALL', ...list_data];
  
  console.log(select_data); // ['ALL', 'aaa', 'bbb', 'ccc']
  