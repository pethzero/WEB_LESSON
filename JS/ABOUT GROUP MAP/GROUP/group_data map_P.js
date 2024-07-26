// ข้อมูลที่ให้มา
const data = [
  { id: 2, group_name: 'A', department: 'B', edit_date: '01:19.5', group_position: 'director', detail_count: 1, name: 'YUPAPORN TAVONFANG' },
  { id: 2, group_name: 'A', department: 'B', edit_date: '01:19.5', group_position: 'manager', detail_count: 1, name: 'YUPAPORN TAVONFANG' },
  { id: 2, group_name: 'A', department: 'B', edit_date: '01:19.5', group_position: 'vp', detail_count: 1, name: 'YUPAPORN TAVONFANG' },
  { id: 3, group_name: 'A', department: 'C', edit_date: '02:21.4', group_position: 'vp', detail_count: 1, name: 'YUPAPORN TAVONFANG' },
  { id: 4, group_name: 'Operation', department: 'Prodcution', edit_date: '02:47.8', group_position: 'director', detail_count: 2, name: 'YUPAPORN TAVONFANG' },
  { id: 4, group_name: 'Operation', department: 'Prodcution', edit_date: '02:47.8', group_position: 'vp', detail_count: 1, name: 'YUPAPORN TAVONFANG' },
  { id: 5, group_name: 'Operation', department: 'Prodcution2', edit_date: '04:58.7', group_position: 'director', detail_count: 2, name: 'YUPAPORN TAVONFANG' },
  { id: 5, group_name: 'Operation', department: 'Prodcution2', edit_date: '04:58.7', group_position: 'vp', detail_count: 1, name: 'YUPAPORN TAVONFANG' }
];

// ใช้ reduce เพื่อแปลงข้อมูล
const mappedData = data.reduce((acc, item) => {
  // ตรวจสอบว่า id และ group_position มีใน acc แล้วหรือยัง
  const existingItem = acc.find(i => i.id === item.id);
  // console.log(existingItem)
  // ถ้ามีให้เพิ่มข้อมูลลงใน group_record และเพิ่ม detail_count
  if (existingItem) {
    existingItem.group_record.push({ name: item.group_position, count: item.detail_count });
    existingItem.sum_detail_count += item.detail_count;
  } else {
    // ถ้ายังไม่มีให้เพิ่มข้อมูลใหม่
    acc.push({
      id: item.id,
      group_name: item.group_name,
      department: item.department,
      edit_date: item.edit_date,
      group_record: [{ name: item.group_position, count: item.detail_count }],
      name: item.name,
      sum_detail_count: item.detail_count
    });
  }
  
  return acc;
}, []);

console.log(mappedData);
