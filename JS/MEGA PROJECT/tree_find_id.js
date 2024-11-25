// ตัวอย่างข้อมูลต้นไม้
const tree = {
    "VET908-217653": {
      main_id: "VET908-217653",
      parent_id: "VET908-217653",
      child_id: "VET908-217653",
      seq_no: "0",
      level_no: 0,
      fg_qty: 0,
      qpa: 0,
      wo_total: 0,
      plant_total: 0,
      so_total: 0,
      total: 0,
      wo_len: 0,
      so_len: 0,
      cmp_kit: 0,
      detail: [
        {
          main_id: "VET908-217653",
          parent_id: "VET908-217653",
          child_id: "VET908-217653",
          level_no: 0,
          seq_no: 0,
        },
      ],
      child: [
        {
          main_id: "VET908-217653",
          parent_id: "VET908-217653",
          child_id: "VET01R-216630",
          seq_no: "1",
          level_no: 1,
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
              main_id: "VET908-217653",
              parent_id: "VET908-217653",
              child_id: "VET01R-216630",
              level_no: 1,
              seq_no: "1",
            },
          ],
          child: [
            {
              main_id: "VET908-217653",
              parent_id: "VET01R-216630",
              child_id: "VET01E-216630A",
              seq_no: "1.1",
              level_no: 2,
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
                  main_id: "VET908-217653",
                  parent_id: "VET01R-216630",
                  child_id: "VET01E-216630A",
                  level_no: 2,
                  seq_no: "1.1",
                },
              ],
              child: [
                {
                  main_id: "VET908-217653",
                  parent_id: "VET01E-216630A",
                  child_id: "VET01E-216630B",
                  seq_no: "1.1.1",
                  level_no: 3,
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
                      main_id: "VET908-217653",
                      parent_id: "VET01E-216630A",
                      child_id: "VET01E-216630B",
                      level_no: 3,
                      seq_no: "1.1.1",
                    },
                  ],
                  child: [],
                },
              ],
            },
          ],
        },
        {
          main_id: "VET908-217653",
          parent_id: "VET908-217653",
          child_id: "VET01R-216631",
          seq_no: "2",
          level_no: 1,
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
              main_id: "VET908-217653",
              parent_id: "VET908-217653",
              child_id: "VET01R-216631",
              level_no: 1,
              seq_no: "2",
            },
          ],
          child: [],
        },
      ],
    },
  };
  
// ฟังก์ชันค้นหา child_id
function findNodeByChildId(node, targetChildId) {
    // ตรวจสอบว่า child_id ของ node ตรงกับที่เราต้องการหรือไม่
    if (node.child_id === targetChildId) {
      return node; // ถ้าตรง คืนค่าทั้ง node
    }
  
    // ถ้าไม่ตรง ให้ค้นหาใน child ของ node นี้
    for (const child of node.child) {
      const foundNode = findNodeByChildId(child, targetChildId);
      if (foundNode) {
        return foundNode; // ถ้าพบคืนค่า node ที่ค้นพบ
      }
    }
  
    return null; // ถ้าไม่พบคืนค่า null
  }
  
  // การเรียกใช้งานฟังก์ชัน
  const targetChildId = "VET01R-216631";
  const nodeDetails = findNodeByChildId(tree["VET908-217653"], targetChildId);
  
  if (nodeDetails) {
    console.log(`Details for child_id "${targetChildId}":`, nodeDetails);
  } else {
    console.log(`No details found for child_id "${targetChildId}".`);
  }