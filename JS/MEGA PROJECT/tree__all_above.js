const data_main = ["VET908-217653"];
const data_component = [
  {
    fg_material_no: "VET908-217653",
    material_no: "VET908-217653",
    component_no: "VET01R-216630",
    parent_mat_no: "VET908-217653",
    level_no: 1,
    seq_no: "1",
  },
  {
    fg_material_no: "VET908-217653",
    material_no: "VET01R-216630",
    component_no: "VET01E-216630A",
    parent_mat_no: "VET01R-216630",
    level_no: 2,
    seq_no: "1.1",
  },
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216630A","component_no":"VET01E-216630B","parent_mat_no":"VET01E-216630A","level_no":3,"seq_no":"1.1.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216631","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216631","component_no":"VET01E-216631A","parent_mat_no":"VET01R-216631","level_no":2,"seq_no":"2.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216631A","component_no":"VET01E-216630B","parent_mat_no":"VET01E-216631A","level_no":3,"seq_no":"2.1.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01P-217654","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"3"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216632","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"4"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216632","component_no":"VET01E-216632","parent_mat_no":"VET01R-216632","level_no":2,"seq_no":"4.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216632","component_no":"VET01P-9002111LF","parent_mat_no":"VET01E-216632","level_no":3,"seq_no":"4.1.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216632","component_no":"VET01P-9002114LF","parent_mat_no":"VET01E-216632","level_no":3,"seq_no":"4.1.3"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216633","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"5"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216633","component_no":"VET01E-216633A","parent_mat_no":"VET01R-216633","level_no":2,"seq_no":"5.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216633","component_no":"VET01E-216633B","parent_mat_no":"VET01R-216633","level_no":2,"seq_no":"5.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01E-216633C","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"5.2.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216634","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"6"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216634A","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216633A","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216633B","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.3"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01E-216633C","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"6.3.3"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216635A","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.4"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216635","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"7"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216635","component_no":"VET01E-216635A","parent_mat_no":"VET01R-216635","level_no":2,"seq_no":"7.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216635","component_no":"VET01E-216633A","parent_mat_no":"VET01R-216635","level_no":2,"seq_no":"7.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216635","component_no":"VET01E-216633B","parent_mat_no":"VET01R-216635","level_no":2,"seq_no":"7.3"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01E-216633C","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"7.3.5"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-217655","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"8"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-217655","component_no":"VET01E-217655","parent_mat_no":"VET01R-217655","level_no":2,"seq_no":"8.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216636","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"9"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216636","component_no":"VET01E-216636A","parent_mat_no":"VET01R-216636","level_no":2,"seq_no":"9.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216636A","component_no":"VET01P-9002111LF","parent_mat_no":"VET01E-216636A","level_no":3,"seq_no":"9.1.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216636","component_no":"VET01E-216636B","parent_mat_no":"VET01R-216636","level_no":2,"seq_no":"9.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216637","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"10"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216637","component_no":"VET01E-216637","parent_mat_no":"VET01R-216637","level_no":2,"seq_no":"10.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216638","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"11"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216638","component_no":"VET01E-216638","parent_mat_no":"VET01R-216638","level_no":2,"seq_no":"11.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216638","component_no":"VET01P-9002114LF","parent_mat_no":"VET01E-216638","level_no":3,"seq_no":"11.1.3"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216639","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"12"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216639","component_no":"VET01E-216639","parent_mat_no":"VET01R-216639","level_no":2,"seq_no":"12.1"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216639","component_no":"VET01P-9002112LF","parent_mat_no":"VET01E-216639","level_no":3,"seq_no":"12.1.2"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-217656","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"13"}
  // ,{"fg_material_no":"VET908-217653","material_no":"VET01R-217656","component_no":"VET01E-217656","parent_mat_no":"VET01R-217656","level_no":2,"seq_no":"13.1"}
];

// ฟังก์ชันสำหรับสร้างโครงสร้างซ้อน
function createNestedStructure(rootId, data_component) {
  let root = {
    main_id: rootId,
    parent_id: rootId,
    child_id: rootId,
    seq_no: "0",
    level_no: 0, // root node เริ่มที่ level 0
    fg_qty: 0,
    qpa: 0,
    wo_total: 0,
    plant_total: 0,
    so_total: 0,
    total: 0,
    total: 0,
    wo_len: 0,
    so_len: 0,
    cmp_kit:0,
    detail: [
      {
        main_id: rootId,
        parent_id: rootId,
        child_id: rootId,
        level_no: 0, // root node เริ่มที่ level 0
        seq_no: 0,
      },
    ],
    child: [],
  };

  // สร้างแผนที่ (map) ของ seq_no เพื่อลิงก์ parent-child
  let componentMap = {};
  componentMap[rootId] = root;

  data_component.forEach((item) => {
    if (item.fg_material_no === rootId) {
      let parent = componentMap[item.parent_mat_no];

      // ถ้ามี parent อยู่
      if (parent) {
        // สร้าง child ใหม่โดยตั้ง level_no เป็น level_no ของ parent + 1
        let newChild = {
          main_id: item.fg_material_no,
          parent_id: item.parent_mat_no,
          child_id: item.component_no,
          seq_no: item.seq_no,
          level_no: parent.level_no + 1, // เพิ่ม level_no ขึ้น 1
          fg_qty: 0,
          qpa: 0,
          wo_total: 0,
          plant_total: 0,
          so_total: 0,
          total: 0,
          wo_len: 0,
          so_len: 0,

          detail: [
            {
              main_id: item.fg_material_no,
              parent_id: item.parent_mat_no,
              child_id: item.component_no,
              level_no: parent.level_no + 1, // ระบุ level_no ในรายละเอียดด้วย
              seq_no: item.seq_no,
            },
          ],
          child: [],
        };

        parent.child.push(newChild); // เพิ่ม child ใหม่ลงใน parent
        componentMap[item.component_no] = newChild; // เก็บ newChild ใน componentMap
      }
    }
  });
  return root;
}

// สร้างโครงสร้างสำหรับแต่ละ rootId ใน data_main
let tree_structure = {};
data_main.forEach((rootId) => {
  tree_structure[rootId] = createNestedStructure(rootId, data_component);
});

// console.log(JSON.stringify(tree_structure, null, 2));

data_so = [
  {
    fg_material_no: "VET908-217653",
    plant: "SVI2",
    qpa: 1,
    so: "0212186987",
    so_item: "000010",
    so_qty: 2,
    so_workweek: "2024-46",
    so_net_price: 1435.54,
    so_amount: 2871.08,
    fg_qty: 2,
    cmp_kit: 1092,
  },
  {
    fg_material_no: "VET908-217653",
    plant: "SVI2",
    qpa: 1,
    so: "0212187511",
    so_item: "000010",
    so_qty: 8,
    so_workweek: "2024-47",
    so_net_price: 1435.54,
    so_amount: 11484.32,
    fg_qty: 2,
    cmp_kit: 1092,
  },
  {
    fg_material_no: "VET908-217653",
    plant: "SVI2",
    qpa: 1,
    so: "0212189147",
    so_item: "000010",
    so_qty: 2,
    so_workweek: "2024-47",
    so_net_price: 1435.54,
    so_amount: 2871.08,
    fg_qty: 2,
    cmp_kit: 1092,
  },
];

////////////////////////////// SO_908 //////////////////////////////
function Structure_SO_908(data) {
  const tree_so = data_so.reduce((acc, entry) => {
    if (!acc[entry.fg_material_no]) {
      acc[entry.fg_material_no] = []; // สร้าง array ถ้ายังไม่มี
    }
    acc[entry.fg_material_no].push(entry); // เพิ่ม entry เข้าไปใน array
    return acc;
  }, {});
  return tree_so;
}

// console.log( Structure_SO_908(data_so))
let tree_so = Structure_SO_908(data_so);
function updateDetails_SO908(tree_structure, tree_so) {
  // เตรียม Tree_SO ไว้คำนวณ
  for (let materialNo in tree_so) {
    // console.log(materialNo)
    const entries = tree_so[materialNo];
    entries.forEach((entry, index) => {
      // console.log(entry)
      const node = tree_structure[materialNo];
      if (index === 0) {
        //////// MAIN //////////
        node.fg_qty = entry.fg_qty;
        node.qpa = entry.qpa;
        node.cmp_kit = entry.cmp_kit;
        //////// Detail ////////
        node.detail[0].fg_qty = entry.fg_qty;
        node.detail[0].qpa = entry.qpa;
        node.detail[0].cmp_kit = entry.cmp_kit;
        node.detail[0].so = entry.so;
        node.detail[0].so_item = entry.so_item;
        node.detail[0].so_qty = entry.so_qty;
        node.detail[0].so_workweek = entry.so_workweek;
        node.detail[0].so_net_price = entry.so_net_price;
        node.detail[0].so_amount = entry.so_amount;
      } else {
        let newDetail = {
          main_id: materialNo,
          parent_id: materialNo,
          child_id: materialNo,
          fg_qty: entry.fg_qty,
          qpa: entry.qpa,
          cmp_kit: entry.cmp_kit,
          so: entry.so,
          so_item: entry.so_item,
          so_qty: entry.so_qty,
          so_workweek: entry.so_workweek,
          so_net_price: entry.so_net_price,
          so_amount: entry.so_amount,
        };
        node.detail.push(newDetail);
      }
      node.so_len += 1;
      node.so_total += entry.so_qty;
    });
  }
}
updateDetails_SO908(tree_structure, tree_so);
console.log(JSON.stringify(tree_structure, null, 2));
// console.log( tree_structure)
// //////////////////////////////////////////////////////////////////////////////
// function extractDetails(treeNode, onOrderTracker, currentMainId) {
//   let details = [];

//   // ตรวจสอบว่ามี field `detail` ไหม
//   if (treeNode.detail && Array.isArray(treeNode.detail))
//   {

//     treeNode.detail.forEach(detail => {
//       // รีเซ็ต on_order ถ้า main_id เปลี่ยน
//       if (detail.main_id !== currentMainId.main_id) {
//         currentMainId.main_id = detail.main_id;
//         onOrderTracker.count = 1;  // รีเซ็ต on_order เป็น 1 เมื่อเจอ main_id ใหม่
//       }

//       details.push({
//         ...detail,   // กระจายรายละเอียดเดิม
//         on_order: onOrderTracker.count   // ใช้ onOrderTracker.count เป็น on_order
//       });

//     });
//     // Summary
//     details.push({
//       'main_id':treeNode['main_id'],
//       'parent_id':treeNode['parent_id'],
//       'child_id':treeNode['child_id'],
//       'total':''
//     });
//     onOrderTracker.count++;  // เพิ่มค่า on_order ทีละ 1
//   }

//   // ถ้ามี child nodes ให้วนลูปเพื่อดึงข้อมูลในระดับลึกลงไป
//   if (treeNode.child && Array.isArray(treeNode.child)) {
//     treeNode.child.forEach(childNode => {
//       details = details.concat(extractDetails(childNode, onOrderTracker, currentMainId));
//     });
//   }

//   return details;
// }

// // วนลูปผ่านทุก key ใน tree_structure และนับ on_order ต่อเนื่อง
// function final_x(tree_structure) {
//   let allDetails = [];
//   let onOrderTracker = { count: 1 };  // ใช้ตัวติดตามค่า on_order เริ่มจาก 1
//   let currentMainId = { main_id: null };  // เก็บ main_id ล่าสุดที่เจอ

//   for (let key in tree_structure) {
//     if (tree_structure.hasOwnProperty(key)) {
//       const rootNode = tree_structure[key]; // ดึง node จาก key แต่ละตัว
//       const extractedDetails = extractDetails(rootNode, onOrderTracker, currentMainId); // ดึงข้อมูลจาก node นั้นๆ และนับ on_order
//       allDetails = allDetails.concat(extractedDetails);  // รวมผลลัพธ์
//     }
//   }

//   return allDetails;
// }

// allDetails = final_x(tree_structure)
// console.log(allDetails);
