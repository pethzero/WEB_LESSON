data = [
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

data_plant = [
  {
    material_no: "VET908-217653",
    z_prod_order: "211100406333",
    z_plan_order: null,
    z_orignal_qty: 20,
    z_balance: 20,
    start_date: "2024-10-24T17:00:00.000Z",
    status: "CRTD",
    type: "908",
    cal_kit: 0,
    count_cal_kit: 0,
    cal_kit_w1: 0,
    count_cal_kit_w1: 12,
  },
];
// console.log(data_fg);
// สร้าง tree แบบเบื้องต้น
const data_fg = [...new Set(data.map((item) => item.fg_material_no))];
const tree = {};

// การคำนวณและการจัดรูปแบบข้อมูลเป็นโครงสร้าง tree
data.forEach((item) => {
  const key = item.fg_material_no;

  // ถ้ายังไม่มีข้อมูลใน tree ของ fg_material_no นี้ สร้างโครงสร้างพื้นฐาน
  if (!tree[key]) {
    tree[key] = {
      parent_mat_no: key,
      fg_qty: item.fg_qty,
      level_no: 0,
      seq_no: 0,
      qpa: item.qpa,
      wo_total: 0,
      plant_total: 0,
      total: 0,
      wo_len: 0,
      so_len: 0,
      detail: [],
      child: [],
    };
  }
  
  data = {
    fg_material_no: item.fg_material_no,
    material_no: item.fg_material_no,
    component: item.fg_material_no,
    so:item.so,
    so_item:item.so_item,
    so_qty:item.so_qty,
    so_workweek:item.so_workweek,
    so_net_price:item.so_net_price,
    so_amount:item.so_amount,
  }

  // เพิ่ม detail ของ level 1 เข้าไปใน detail
  tree[key].detail.push(data);
  tree[key].so_len += 1;
});

data_plant.forEach((entry) => {
  const key = entry.material_no;
  // ถ้า parent_id ใน tree ตรงกับ material_no ใน data_plant
  if (tree[key]) {
    const newData = {
        // fg_material_no: entry.material_no,
        // material_no: entry.material_no,
        z_prod_order: entry.z_prod_order, // เพิ่มฟิลด์อื่นๆ ตามที่คุณต้องการ
        z_plan_order: entry.z_plan_order,
        z_orignal_qty: entry.z_orignal_qty,
        z_balance: entry.z_balance,
      };
  

    // console.log(data);
    if (tree[key].wo_len < tree[key].so_len) {
      // อัปเดตข้อมูลใน detail
      Object.assign(tree[key].detail[tree[key].wo_len], newData);
      tree[key].wo_total += entry.z_orignal_qty || 0
      console.log(newData)
    } else {
      // ถ้าไม่มีให้เพิ่มข้อมูลใหม่เข้าไปใน detail
      tree[key].detail.push(newData);
      tree[key].wo_total += entry.z_orignal_qty || 0
    }
    tree[key].wo_len += 1;
  }
});

// console.log(JSON.stringify(tree, null, 2));
// ตัวอย่างการคำนวณใน detail ของ tree
for (const key in tree) {
    if (tree.hasOwnProperty(key)) {
      const node = tree[key];
      
      // ตรวจสอบว่า node มี level 0 หรือไม่
      if (node.level_no === 0) {
        // แสดงค่า total ก่อนที่จะทำการอัปเดต
        console.log("Total before update:", node.total);
        // วนลูปผ่าน detail
        let variance = 0
        node.detail.forEach((detailItem, index) => {
          // คำนวณ total ตามความต้องการ
          if (index === 0) {
            // คำนวณ total เฉพาะเมื่อ index เป็น 0
            total_temp = node.fg_qty + node.wo_total - detailItem.so_qty;

            node.total = total_temp
            variance = total_temp
          } else {
            variance = 0
            if(total_temp > 0){
                // node.detail[index].var = node.total
                total_temp -= detailItem.so_qty
                variance = total_temp
              }else{
                variance -= detailItem.so_qty
                total_temp -= detailItem.so_qty
              }
            node.total -= detailItem.so_qty
            // node.total -= detailItem.so_qty
          }
          data = {
            'variance':variance,
          }
          Object.assign(node.detail[index],data)
        });
        // แสดงค่า total หลังจากทำการอัปเดต
        console.log("Total after update:", node.total);
      }
    }
  }
  
  
//   console.log(tree);
console.log(JSON.stringify(tree, null, 2));
  
data_component = [
     {"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216630","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"1"},
     {"fg_material_no":"VET908-217653","material_no":"VET01R-216630","component_no":"VET01E-216630A","parent_mat_no":"VET01R-216630","level_no":2,"seq_no":"1.1"},
     {"fg_material_no":"VET908-217653","material_no":"VET01E-216630A","component_no":"VET01E-216630B","parent_mat_no":"VET01E-216630A","level_no":3,"seq_no":"1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216630B","component_no":"VET01I-216630B","parent_mat_no":"VET01E-216630B","level_no":4,"seq_no":"1.1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216630A","component_no":"VET01I-216630A","parent_mat_no":"VET01E-216630A","level_no":3,"seq_no":"1.1.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216630A","component_no":"VET01S-216630A","parent_mat_no":"VET01E-216630A","level_no":4,"seq_no":"1.1.2.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216631","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216631","component_no":"VET01E-216631A","parent_mat_no":"VET01R-216631","level_no":2,"seq_no":"2.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216631A","component_no":"VET01I-216631A","parent_mat_no":"VET01E-216631A","level_no":3,"seq_no":"2.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216631A","component_no":"VET01S-216631A","parent_mat_no":"VET01E-216631A","level_no":4,"seq_no":"2.1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216631A","component_no":"VET01E-216630B","parent_mat_no":"VET01E-216631A","level_no":3,"seq_no":"2.1.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216630B","component_no":"VET01I-216630B","parent_mat_no":"VET01E-216630B","level_no":4,"seq_no":"2.1.2.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01P-217654","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216632","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"4"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216632","component_no":"VET01E-216632","parent_mat_no":"VET01R-216632","level_no":2,"seq_no":"4.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216632","component_no":"VET01I-216632","parent_mat_no":"VET01E-216632","level_no":3,"seq_no":"4.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216632","component_no":"VET01S-216632","parent_mat_no":"VET01E-216632","level_no":4,"seq_no":"4.1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216632","component_no":"VET01P-9002111LF","parent_mat_no":"VET01E-216632","level_no":3,"seq_no":"4.1.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216632","component_no":"VET01P-9002114LF","parent_mat_no":"VET01E-216632","level_no":3,"seq_no":"4.1.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216633","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"5"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216633","component_no":"VET01E-216633A","parent_mat_no":"VET01R-216633","level_no":2,"seq_no":"5.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633A","component_no":"VET01S-216633A","parent_mat_no":"VET01E-216633A","level_no":3,"seq_no":"5.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216633","component_no":"VET01E-216633B","parent_mat_no":"VET01R-216633","level_no":2,"seq_no":"5.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01E-216633C","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"5.2.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633C","component_no":"VET01I-216633C","parent_mat_no":"VET01E-216633C","level_no":4,"seq_no":"5.2.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01I-216633B","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"5.2.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216633B","component_no":"VET01S-216633B","parent_mat_no":"VET01E-216633B","level_no":4,"seq_no":"5.2.2.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216634","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"6"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216634A","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216634A","component_no":"VET01S-216634A","parent_mat_no":"VET01E-216634A","level_no":3,"seq_no":"6.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216633A","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633A","component_no":"VET01S-216633A","parent_mat_no":"VET01E-216633A","level_no":3,"seq_no":"6.2.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216633B","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01E-216633C","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"6.3.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633C","component_no":"VET01I-216633C","parent_mat_no":"VET01E-216633C","level_no":4,"seq_no":"6.3.3.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01I-216633B","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"6.3.4"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216633B","component_no":"VET01S-216633B","parent_mat_no":"VET01E-216633B","level_no":4,"seq_no":"6.3.4.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216634","component_no":"VET01E-216635A","parent_mat_no":"VET01R-216634","level_no":2,"seq_no":"6.4"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216635A","component_no":"VET01S-216635A","parent_mat_no":"VET01E-216635A","level_no":3,"seq_no":"6.4.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216635","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"7"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216635","component_no":"VET01E-216635A","parent_mat_no":"VET01R-216635","level_no":2,"seq_no":"7.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216635A","component_no":"VET01S-216635A","parent_mat_no":"VET01E-216635A","level_no":3,"seq_no":"7.1.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216635","component_no":"VET01E-216633A","parent_mat_no":"VET01R-216635","level_no":2,"seq_no":"7.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633A","component_no":"VET01S-216633A","parent_mat_no":"VET01E-216633A","level_no":3,"seq_no":"7.2.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216635","component_no":"VET01E-216633B","parent_mat_no":"VET01R-216635","level_no":2,"seq_no":"7.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01E-216633C","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"7.3.5"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633C","component_no":"VET01I-216633C","parent_mat_no":"VET01E-216633C","level_no":4,"seq_no":"7.3.5.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216633B","component_no":"VET01I-216633B","parent_mat_no":"VET01E-216633B","level_no":3,"seq_no":"7.3.6"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216633B","component_no":"VET01S-216633B","parent_mat_no":"VET01E-216633B","level_no":4,"seq_no":"7.3.6.3"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-217655","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"8"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-217655","component_no":"VET01E-217655","parent_mat_no":"VET01R-217655","level_no":2,"seq_no":"8.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-217655","component_no":"VET01I-217655","parent_mat_no":"VET01E-217655","level_no":3,"seq_no":"8.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-217655","component_no":"VET01S-217655","parent_mat_no":"VET01E-217655","level_no":4,"seq_no":"8.1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216636","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"9"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216636","component_no":"VET01E-216636A","parent_mat_no":"VET01R-216636","level_no":2,"seq_no":"9.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216636A","component_no":"VET01I-216636A","parent_mat_no":"VET01E-216636A","level_no":3,"seq_no":"9.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216636A","component_no":"VET01S-216636A","parent_mat_no":"VET01E-216636A","level_no":4,"seq_no":"9.1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216636A","component_no":"VET01P-9002111LF","parent_mat_no":"VET01E-216636A","level_no":3,"seq_no":"9.1.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216636","component_no":"VET01E-216636B","parent_mat_no":"VET01R-216636","level_no":2,"seq_no":"9.2"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216636B","component_no":"VET01I-216636B","parent_mat_no":"VET01E-216636B","level_no":3,"seq_no":"9.2.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216636B","component_no":"VET01S-216636B","parent_mat_no":"VET01E-216636B","level_no":4,"seq_no":"9.2.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216637","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"10"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216637","component_no":"VET01E-216637","parent_mat_no":"VET01R-216637","level_no":2,"seq_no":"10.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216637","component_no":"VET01I-216637","parent_mat_no":"VET01E-216637","level_no":3,"seq_no":"10.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01I-216637","component_no":"VET01S-216637","parent_mat_no":"VET01E-216637","level_no":4,"seq_no":"10.1.1.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216638","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"11"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01R-216638","component_no":"VET01E-216638","parent_mat_no":"VET01R-216638","level_no":2,"seq_no":"11.1"}
    ,{"fg_material_no":"VET908-217653","material_no":"VET01E-216638","component_no":"VET01I-216638","parent_mat_no":"VET01E-216638","level_no":3,"seq_no":"11.1.1"},
    {"fg_material_no":"VET908-217653","material_no":"VET01I-216638","component_no":"VET01S-216638","parent_mat_no":"VET01E-216638","level_no":4,"seq_no":"11.1.1.1"},
    {"fg_material_no":"VET908-217653","material_no":"VET01E-216638","component_no":"VET42000957LF","parent_mat_no":"VET01E-216638","level_no":3,"seq_no":"11.1.2"},
    {"fg_material_no":"VET908-217653","material_no":"VET01E-216638","component_no":"VET01P-9002114LF","parent_mat_no":"VET01E-216638","level_no":3,"seq_no":"11.1.3"},
    {"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-216639","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"12"},
    {"fg_material_no":"VET908-217653","material_no":"VET01R-216639","component_no":"VET01E-216639","parent_mat_no":"VET01R-216639","level_no":2,"seq_no":"12.1"},
    {"fg_material_no":"VET908-217653","material_no":"VET01E-216639","component_no":"VET01I-216639","parent_mat_no":"VET01E-216639","level_no":3,"seq_no":"12.1.1"},
    {"fg_material_no":"VET908-217653","material_no":"VET01I-216639","component_no":"VET01S-216639","parent_mat_no":"VET01E-216639","level_no":4,"seq_no":"12.1.1.1"},
    {"fg_material_no":"VET908-217653","material_no":"VET01E-216639","component_no":"VET01P-9002112LF","parent_mat_no":"VET01E-216639","level_no":3,"seq_no":"12.1.2"},
    {"fg_material_no":"VET908-217653","material_no":"VET908-217653","component_no":"VET01R-217656","parent_mat_no":"VET908-217653","level_no":1,"seq_no":"13"},
    {"fg_material_no":"VET908-217653","material_no":"VET01R-217656","component_no":"VET01E-217656","parent_mat_no":"VET01R-217656","level_no":2,"seq_no":"13.1"},
    {"fg_material_no":"VET908-217653","material_no":"VET01E-217656","component_no":"VET01I-217656","parent_mat_no":"VET01E-217656","level_no":3,"seq_no":"13.1.1"}
]


    data_component.forEach(item => {
        const { fg_material_no, material_no, parent_mat_no, level_no, seq_no } = item;
      
        // ถ้ายังไม่มี fg_material_no ใน tree, ให้สร้าง
        if (!tree[fg_material_no]) {
          tree[fg_material_no] = {
            parent_mat_no: fg_material_no,
            detail: [],
            child: []
          };
        }
      
        // เพิ่ม detail ของ component ลงใน tree
        tree[fg_material_no].detail.push(item);
      
        // ถ้ามี parent_mat_no ให้อัปเดต child
        if (tree[parent_mat_no]) {
          // เพิ่ม item ไปที่ child ของ parent
          tree[parent_mat_no].child.push(item);
        } else {
          // ถ้ายังไม่มี parent_mat_no ใน tree, ให้สร้าง
          tree[parent_mat_no] = {
            parent_mat_no: parent_mat_no,
            detail: [],
            child: [item]
          };
        }
      });