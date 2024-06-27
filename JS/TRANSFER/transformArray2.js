function transformObject(input) {
  const result = [];
  
  // ค้นหา unique ids
  const ids = [...new Set(Object.keys(input).filter(key => key.startsWith('id')).map(key => input[key]))];
  
  ids.forEach(id => {
    const patterns = ['data_ex', 'date_oa', 'date_qa'];
    const names = ['name_1a', 'name_1b', 'name_1c'];
    const statusKeys = ['status_alw', 'status_cc'];
    const statuses = {};
    
    // ดึงค่า status
    statusKeys.forEach(key => {
      if (input[key]) {
        statuses[key] = input[key];
      }
    });

    patterns.forEach((pattern, index) => {
      const obj = {};

      // เพิ่มคีย์ id
      obj['id'] = id;

      // เพิ่มคีย์ pattern
      const dataKey = `${pattern}1`;
      if (input[dataKey]) {
        obj[dataKey] = input[dataKey];
      }

      // เพิ่มคีย์ name
      const nameKey = names[index];
      if (input[nameKey]) {
        obj[nameKey] = input[nameKey];
      }

      // เพิ่มคีย์ status
      const statusKey = statusKeys[index] || statusKeys[0]; // เลือก status_alw สำหรับคู่แรก
      if (statuses[statusKey]) {
        obj[statusKey] = statuses[statusKey];
      }

      result.push(obj);
    });
  });

  return result;
}

// ตัวอย่างการใช้งาน
const arr = {
  id1: '001',
  data_ex1: 'A',
  date_oa1: 'B',
  date_qa1: 'C',
  name_1a: 'SA1',
  name_1b: 'SA2',
  name_1c: 'SA3',
  status_alw: 'A',
  status_cc: 'A',
  id2: '002',
  data_ex2: 'D',
  date_oa2: 'E',
  date_qa2: 'F',
  name_2a: 'SB1',
  name_2b: 'SB2',
  name_2c: 'SB3',
  status_alw: 'B',
  status_cc: 'B',
};

const transformedArray = transformObject(arr);
console.log(transformedArray);

// แสดงผลลัพธ์ในรูปแบบที่ต้องการ
transformedArray.forEach(obj => console.log(obj));
