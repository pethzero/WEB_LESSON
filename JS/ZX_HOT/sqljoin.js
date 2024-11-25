function listToString(dataList) {
    return dataList.map(item => `'${item}'`).join(',');
  }
  
  // ทดสอบการทำงานของฟังก์ชัน
  const list = ["AI", "AT", "AU"];
  const result = listToString(list);
  console.log(result);