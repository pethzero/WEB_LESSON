function transformObject(input) {
  const keys = Object.keys(input);
  const result = [];

  for (let i = 0; i < keys.length; i += 2) {
    const dateKey = keys[i];
    const nameKey = keys[i + 1];
    
    if (dateKey.startsWith('date') && nameKey.startsWith('name')) {
      const obj = {
        [dateKey]: input[dateKey],
        [nameKey]: input[nameKey]
      };
      result.push(obj);
    }
  }

  return result;
}

// ตัวอย่างการใช้งาน
const arr = {
  date1: 'A',
  date2: 'B',
  date3: 'C',
  name1: 'A',
  name2: 'B',
  name3: 'C'
};

const transformedArray = transformObject(arr);
console.log(transformedArray);
