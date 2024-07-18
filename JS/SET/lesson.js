const data_detail = [
    { leader: 'P1' },
    { leader: 'P2' },
    { leader: null },
    { leader: 'P1' },
    { leader: 'P3' },
    { leader: null }
  ];
  
  // ใช้ filter เพื่อตัดค่า null ออก แล้วใช้ Set เพื่อเอาค่าที่ไม่ซ้ำ
  const uniqueUsers = Array.from(new Set(data_detail
    .filter(item => item.leader !== null) // กรองค่า null
    .map(item => item.leader) // สร้างอาร์เรย์ที่มีเฉพาะ leader
  ));
  
  console.log(uniqueUsers); // ['P1', 'P2', 'P3']
  
//   const uniqueUsers = Array.from(new Set(data_detail.map(item => item.leader)));