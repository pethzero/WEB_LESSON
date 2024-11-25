// ข้อมูลจำลองของ data_main
let data_main = [
  "root1", // ตัวอย่าง ID ของ root node
  "root2", // ตัวอย่าง ID ของ root node อื่น
];

// ข้อมูลจำลองของ data_component
let data_component = [
  {
    fg_material_no: "root1",
    parent_mat_no: "root1",
    component_no: "comp1",
    seq_no: 1,
  },
  {
    fg_material_no: "root1",
    parent_mat_no: "comp1",
    component_no: "comp2",
    seq_no: 2,
  },
  {
    fg_material_no: "root1",
    parent_mat_no: "comp1",
    component_no: "comp3",
    seq_no: 3,
  },
  {
    fg_material_no: "root2",
    parent_mat_no: "root2",
    component_no: "comp4",
    seq_no: 1,
  },
  {
    fg_material_no: "root2",
    parent_mat_no: "comp4",
    component_no: "comp5",
    seq_no: 2,
  },
];

function createNestedStructure(rootId, data_component) {
  let root = {
    main_id: rootId,
    parent_id: rootId,
    child_id: rootId,
    seq_no: "0",
    level_no: 0, // root node เริ่มที่ level 0
    total: 0,
    detail: [
      {
        main_id: rootId,
        parent_id: rootId,
        child_id: rootId,
        level_no: 0, // root node เริ่มที่ level 0
        seq_no: 0,
        summary: "I",
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
          total: 0,
          detail: [
            {
              main_id: item.fg_material_no,
              parent_id: item.parent_mat_no,
              child_id: item.component_no,
              level_no: parent.level_no + 1, // ระบุ level_no ในรายละเอียดด้วย
              seq_no: item.seq_no,
              summary: "I",
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

// เรียกใช้ฟังก์ชันเพื่อสร้างโครงสร้างต้นไม้
let tree_structure = {};
data_main.forEach((rootId) => {
  tree_structure[rootId] = createNestedStructure(rootId, data_component);
});

// ฟังก์ชันเพื่อพิมพ์โครงสร้าง node
function printTree(node, level = 0) {
  console.log("  ".repeat(level) +`Node ID: ${node.child_id}, Total: ${node.total}, Level: ${node.level_no}, Seq No: ${node.seq_no}, DetailS: ${node.detail}`);
  node.child.forEach((child) => printTree(child, level + 1));
}

// // พิมพ์โครงสร้างต้นไม้
// Object.values(tree_structure).forEach((rootNode) => {
//   printTree(rootNode);
// });

function processTree(tree_structure) {
    for (let key in tree_structure) {
        let node = tree_structure[key];
        printDetailsRecursive(node); // เรียกใช้ฟังก์ชัน recursive สำหรับ root แต่ละตัว
    }
}

function printDetailsRecursive(node, parentLabel = "Root") {
    // พิมพ์รายละเอียดของโหนดปัจจุบันและ parent
    console.log(`${parentLabel} -> Current Node ID: ${node.child_id}, Level: ${node.level_no}, Seq No: ${node.seq_no}`);
    console.log(`Details:`, node.detail);

    // ตรวจสอบว่ามีลูกหรือไม่
    if (node.child && node.child.length > 0) {
        for (let i = 0; i < node.child.length; i++) {
            let childNode = node.child[i];
            console.log(`-->Parent ${node.child_id} and Child ${childNode.child_id}:`);
            console.log(`-->Details of Parent:`, node.detail);
            console.log(`-->Details of Child:`, childNode.detail);

            // ตรวจสอบว่ามีหลาน (child ของ child) หรือไม่
            if (childNode.child && childNode.child.length > 0) {
                for (let j = 0; j < childNode.child.length; j++) {
                    let grandChildNode = childNode.child[j];
                    console.log(`---->Child ${childNode.child_id} and Grandchild ${grandChildNode.child_id}:`);
                    console.log(`---->Details of Grandchild:`, grandChildNode.detail);
                }
            }

            // เรียกใช้ฟังก์ชันนี้ซ้ำสำหรับลูก
            printDetailsRecursive(childNode, `Parent ${node.child_id}`);
        }
    } else {
        // ถ้าไม่มีลูก พิมพ์แค่ข้อมูลของโหนดปัจจุบันและแม่
        console.log(`---->Leaf Node -> Parent ${parentLabel} -> Current Node ID: ${node.child_id}`);
    }
}

// เรียกใช้ฟังก์ชันเพื่อประมวลผล tree_structure
processTree(tree_structure);
