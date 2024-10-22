const tree_structure = {
  node1: {
    main_id: 1,
    parent_id: null,
    child_id: 'C1',
    detail: [
      { main_id: 1, parent_id: null, child_id: 'C1', additional_info: 'Detail 1' },
      { main_id: 1, parent_id: null, child_id: 'C1', additional_info: 'Detail 2' }
    ],
    child: [
      {
        main_id: 1,
        parent_id: 1,
        child_id: 'C2',
        detail: [
          { main_id: 1, parent_id: 1, child_id: 'C2', additional_info: 'Detail 3' }
        ],
        child: []
      },
      {
        main_id: 2,
        parent_id: 1,
        child_id: 'C3',
        detail: [
          { main_id: 2, parent_id: 1, child_id: 'C3', additional_info: 'Detail 4' }
        ],
        child: []
      }
    ]
  },
  node2: {
    main_id: 2,
    parent_id: null,
    child_id: 'C4',
    detail: [
      { main_id: 2, parent_id: null, child_id: 'C4', additional_info: 'Detail 5' }
    ],
    child: [
      {
        main_id: 3,
        parent_id: 2,
        child_id: 'C5',
        detail: [],
        child: []
      }
    ]
  }
};


// function extractDetails(treeNode) {
//   let details = [];

//   // ตรวจสอบว่ามี field `detail` ไหม
//   if (treeNode.detail && Array.isArray(treeNode.detail)) {
//     details.push(...treeNode.detail);
//   }

//   // ถ้ามี child nodes ให้วนลูปเพื่อดึงข้อมูลในระดับลึกลงไป
//   if (treeNode.child && Array.isArray(treeNode.child)) {
//     treeNode.child.forEach(childNode => {
//       details = details.concat(extractDetails(childNode));
//     });
//   }
//   return details;
// }

// // วนลูปผ่านทุก key ใน tree_structure
// function final_x(tree_structure){
//   let allDetails = [];
//   for (let key in tree_structure) {
//     if (tree_structure.hasOwnProperty(key)) {
//       const rootNode = tree_structure[key]; // ดึง node จาก key แต่ละตัว
//       const extractedDetails = extractDetails(rootNode); // ดึงข้อมูลจาก node นั้นๆ
//       allDetails = allDetails.concat(extractedDetails);  // รวมผลลัพธ์
//     }
//   }
//   return allDetails
// }
// //////////////////////////////////////////////////////////////////////////////
function extractDetails(treeNode, onOrderTracker, currentMainId) {
  let details = [];

  // ตรวจสอบว่ามี field `detail` ไหม
  if (treeNode.detail && Array.isArray(treeNode.detail)) 
  {

    treeNode.detail.forEach(detail => {
      // รีเซ็ต on_order ถ้า main_id เปลี่ยน
      if (detail.main_id !== currentMainId.main_id) {
        currentMainId.main_id = detail.main_id;
        onOrderTracker.count = 1;  // รีเซ็ต on_order เป็น 1 เมื่อเจอ main_id ใหม่
      }

      details.push({
        ...detail,   // กระจายรายละเอียดเดิม
        on_order: onOrderTracker.count   // ใช้ onOrderTracker.count เป็น on_order
      });

    });
    // Summary
    details.push({
      'main_id':treeNode['main_id'],
      'parent_id':treeNode['parent_id'],
      'child_id':treeNode['child_id'],
      'total':''
    });
    onOrderTracker.count++;  // เพิ่มค่า on_order ทีละ 1
  }

  // ถ้ามี child nodes ให้วนลูปเพื่อดึงข้อมูลในระดับลึกลงไป
  if (treeNode.child && Array.isArray(treeNode.child)) {
    treeNode.child.forEach(childNode => {
      details = details.concat(extractDetails(childNode, onOrderTracker, currentMainId));
    });
  }

  return details;
}

// วนลูปผ่านทุก key ใน tree_structure และนับ on_order ต่อเนื่อง
function final_x(tree_structure) {
  let allDetails = [];
  let onOrderTracker = { count: 1 };  // ใช้ตัวติดตามค่า on_order เริ่มจาก 1
  let currentMainId = { main_id: null };  // เก็บ main_id ล่าสุดที่เจอ

  for (let key in tree_structure) {
    if (tree_structure.hasOwnProperty(key)) {
      const rootNode = tree_structure[key]; // ดึง node จาก key แต่ละตัว
      const extractedDetails = extractDetails(rootNode, onOrderTracker, currentMainId); // ดึงข้อมูลจาก node นั้นๆ และนับ on_order
      allDetails = allDetails.concat(extractedDetails);  // รวมผลลัพธ์
    }
  }

  return allDetails;
}

allDetails = final_x(tree_structure)
console.log(allDetails);


