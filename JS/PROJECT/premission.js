function hasAdminRights(user, group) {
    return group.includes(user);
  }
  
  // ตัวอย่างการใช้งาน
  const user = '53196';
  const group = ['53196', '47811'];
  
  if (hasAdminRights(user, group)) {
    console.log('User has admin rights.');
  } else {
    console.log('User does not have admin rights.');
  }
  
  // การใช้งานในฟังก์ชันอื่น ๆ 
  function performAdminTask(user, group) {
    if (hasAdminRights(user, group)) {
      console.log('Performing admin task...');
      // ใส่โค้ดสำหรับงานของผู้ดูแลระบบที่นี่
    } else {
      console.log('Access denied. User does not have admin rights.');
    }
  }
  
  // ทดสอบการใช้งาน performAdminTask
  performAdminTask(user, group);
  performAdminTask('12345', group); // user นี้ไม่มีสิทธิ์ admin
  

  function hasAdminRights(user) {
    const group = ['53196', '47811'];
    return group.includes(user);
  }
  