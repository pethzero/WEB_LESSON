const data = {
    a: 1,
    b: 2,
    c: 3
  };
  
  // ใช้ forEach เพื่อวนลูปและ log ค่า
  Object.keys(data).forEach(key => { 
    console.log(`Key: ${key}, Value: ${data[key]}`);
  });
  
  // ถ้าต้องการสร้าง array ใหม่ด้วย map
  const mappedArray = Object.keys(data).map(key => {
    return { key: key, value: data[key] };
  });
  
  console.log(mappedArray);
  