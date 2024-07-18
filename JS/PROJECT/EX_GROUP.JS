// ตัวอย่าง 1: การจัดกลุ่มและสรุปผลข้อมูลทางการเงิน
// สมมุติว่าเรามีข้อมูลการทำธุรกรรมทางการเงินและต้องการสรุปยอดรวมของแต่ละประเภทการทำธุรกรรม:
const transactions = [
    { id: 1, type: 'income', amount: 100 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 200 },
    { id: 4, type: 'expense', amount: 75 },
    { id: 5, type: 'income', amount: 150 },
  ];
  
  const summary = transactions.reduce((acc, current) => {
    if (!acc[current.type]) {
      acc[current.type] = 0;
    }
    acc[current.type] += current.amount;
    return acc;
  }, {});
  
  console.log(summary); // { income: 450, expense: 125 }

  
// ตัวอย่าง 2: การจัดกลุ่มข้อมูลคนตามแผนกและคำนวณจำนวนพนักงานในแต่ละแผนก
// สมมุติว่าเรามีข้อมูลพนักงานและต้องการจัดกลุ่มตามแผนกและคำนวณจำนวนพนักงานในแต่ละแผนก:
const employees = [
    { id: 1, name: 'Alice', department: 'Engineering' },
    { id: 2, name: 'Bob', department: 'HR' },
    { id: 3, name: 'Charlie', department: 'Engineering' },
    { id: 4, name: 'David', department: 'Marketing' },
    { id: 5, name: 'Eve', department: 'HR' },
  ];
  
  const departmentSummary = employees.reduce((acc, current) => {
    if (!acc[current.department]) {
      acc[current.department] = {
        count: 0,
        employees: [],
      };
    }
    acc[current.department].count += 1;
    acc[current.department].employees.push(current.name);
    return acc;
  }, {});
  
  console.log(departmentSummary);
  /*
  {
    Engineering: { count: 2, employees: ['Alice', 'Charlie'] },
    HR: { count: 2, employees: ['Bob', 'Eve'] },
    Marketing: { count: 1, employees: ['David'] }
  }
  */
// ตัวอย่าง 3: การกรองและสรุปผลข้อมูลชิ้นส่วนประกอบในคลังสินค้า
// สมมุติว่าเรามีข้อมูลชิ้นส่วนประกอบในคลังสินค้าและต้องการกรองเฉพาะชิ้นส่วนที่มีจำนวนมากกว่า 0 และสรุปผลตามประเภท:
const parts = [
    { id: 1, name: 'Part A', category: 'Type 1', quantity: 10 },
    { id: 2, name: 'Part B', category: 'Type 2', quantity: 0 },
    { id: 3, name: 'Part C', category: 'Type 1', quantity: 5 },
    { id: 4, name: 'Part D', category: 'Type 3', quantity: 8 },
    { id: 5, name: 'Part E', category: 'Type 2', quantity: 2 },
  ];
  
  const filteredParts = parts.filter(part => part.quantity > 0);
  
  const categorySummary = filteredParts.reduce((acc, current) => {
    if (!acc[current.category]) {
      acc[current.category] = {
        totalQuantity: 0,
        parts: [],
      };
    }
    acc[current.category].totalQuantity += current.quantity;
    acc[current.category].parts.push(current.name);
    return acc;
  }, {});
  
  console.log(categorySummary);
  /*
  {
    'Type 1': { totalQuantity: 15, parts: ['Part A', 'Part C'] },
    'Type 3': { totalQuantity: 8, parts: ['Part D'] },
    'Type 2': { totalQuantity: 2, parts: ['Part E'] }
  }
  */
  
//   ตัวอย่าง 4: การสรุปผลคะแนนนักเรียนตามวิชา
//   สมมุติว่าเรามีข้อมูลคะแนนนักเรียนและต้องการสรุปผลคะแนนเฉลี่ยของแต่ละวิชา:
  const grades = [
    { student: 'Alice', subject: 'Math', grade: 90 },
    { student: 'Bob', subject: 'Math', grade: 80 },
    { student: 'Charlie', subject: 'Math', grade: 85 },
    { student: 'Alice', subject: 'Science', grade: 95 },
    { student: 'Bob', subject: 'Science', grade: 70 },
    { student: 'Charlie', subject: 'Science', grade: 75 },
  ];
  
  const subjectSummary = grades.reduce((acc, current) => {
    if (!acc[current.subject]) {
      acc[current.subject] = {
        totalGrades: 0,
        count: 0,
      };
    }
    acc[current.subject].totalGrades += current.grade;
    acc[current.subject].count += 1;
    return acc;
  }, {});
  
  const averageGrades = Object.keys(subjectSummary).map(subject => ({
    subject,
    averageGrade: subjectSummary[subject].totalGrades / subjectSummary[subject].count,
  }));
  
  console.log(averageGrades);
  /*
  [
    { subject: 'Math', averageGrade: 85 },
    { subject: 'Science', averageGrade: 80 }
  ]
  */
  
// ตัวอย่าง 5: การจัดกลุ่มและสรุปผลรายการสินค้าตามผู้จัดจำหน่าย
// สมมุติว่าเรามีข้อมูลสินค้าที่มีผู้จัดจำหน่ายต่างๆ และต้องการจัดกลุ่มตามผู้จัดจำหน่ายพร้อมกับสรุปจำนวนสินค้าของแต่ละผู้จัดจำหน่าย:
const products = [
    { id: 1, name: 'Product A', supplier: 'Supplier 1', quantity: 10 },
    { id: 2, name: 'Product B', supplier: 'Supplier 2', quantity: 5 },
    { id: 3, name: 'Product C', supplier: 'Supplier 1', quantity: 8 },
    { id: 4, name: 'Product D', supplier: 'Supplier 3', quantity: 7 },
    { id: 5, name: 'Product E', supplier: 'Supplier 2', quantity: 3 },
  ];
  
  const supplierSummary = products.reduce((acc, current) => {
    if (!acc[current.supplier]) {
      acc[current.supplier] = {
        totalQuantity: 0,
        products: [],
      };
    }
    acc[current.supplier].totalQuantity += current.quantity;
    acc[current.supplier].products.push(current.name);
    return acc;
  }, {});
  
  console.log(supplierSummary);
  /*
  {
    'Supplier 1': { totalQuantity: 18, products: ['Product A', 'Product C'] },
    'Supplier 2': { totalQuantity: 8, products: ['Product B', 'Product E'] },
    'Supplier 3': { totalQuantity: 7, products: ['Product D'] }
  }
  */
  
// ตัวอย่าง 6: การสรุปผลสถิตินักกีฬาตามประเภทกีฬา
// สมมุติว่าเรามีข้อมูลนักกีฬาและต้องการสรุปผลจำนวนผู้เล่นในแต่ละประเภทกีฬา:
const athletes = [
    { id: 1, name: 'Athlete A', sport: 'Soccer' },
    { id: 2, name: 'Athlete B', sport: 'Basketball' },
    { id: 3, name: 'Athlete C', sport: 'Soccer' },
    { id: 4, name: 'Athlete D', sport: 'Tennis' },
    { id: 5, name: 'Athlete E', sport: 'Basketball' },
  ];
  
  const sportSummary = athletes.reduce((acc, current) => {
    if (!acc[current.sport]) {
      acc[current.sport] = {
        count: 0,
        athletes: [],
      };
    }
    acc[current.sport].count += 1;
    acc[current.sport].athletes.push(current.name);
    return acc;
  }, {});
  
  console.log(sportSummary);
  /*
  {
    Soccer: { count: 2, athletes: ['Athlete A', 'Athlete C'] },
    Basketball: { count: 2, athletes: ['Athlete B', 'Athlete E'] },
    Tennis: { count: 1, athletes: ['Athlete D'] }
  }
  */
  


//    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ขัดแยก จริง XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const data = [
    {mat:'A',group:1,code_number:'XADCDLDLPH-322',price:100},
    {mat:'B',group:1,code_number:'XADCDNFDLZ-356',price:400},
    {mat:'B',group:1,code_number:'XADCDHNTZZ-897',price:300},
    {mat:'C',group:1,code_number:'XADCDIZEWH-234',price:200},
    {mat:'A',group:1,code_number:'XADCDZMMJO-076',price:50},
    {mat:'A',group:2,code_number:'XADCDMYVCU-829',price:100},
    {mat:'A',group:3,code_number:'XADCDVXARL-578',price:200},
];



// แบบ Reduce
// หา price โดยแยกตาม mat  A: { totalPrice: 450, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076', 'XADCDMYVCU-829', 'XADCDVXARL-578'] },
const priceByMat_map = data.reduce((acc, curr) => {
    if (!acc[curr.mat]) {
        acc[curr.mat] = { totalPrice: 0, codeNumbers: [] };
    }
    acc[curr.mat].totalPrice += curr.price;
    acc[curr.mat].codeNumbers.push(curr.code_number);
    return acc;
}, {});


// หา mat กับ group 'A-1': { totalPrice: 150, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076'] },
const matAndGroup_map = data.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    if (!acc[key]) {
        acc[key] = { totalPrice: 0, codeNumbers: [] };
    }
    acc[key].totalPrice += curr.price;
    acc[key].codeNumbers.push(curr.code_number);
    return acc;
}, {});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// หา mat กับ group  { mat: 'A', group: 1, codeNumbers: [ 'XADCDLDLPH-322', 'XADCDZMMJO-076' ], totalPrice: 150 },
const result = data.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    if (!acc[key]) {
        acc[key] = { mat: curr.mat, group: curr.group, codeNumbers: [], totalPrice: 0 };
    }
    acc[key].codeNumbers.push(curr.code_number);
    acc[key].totalPrice += curr.price;
    return acc;
}, {});

const matAndGroup_for = [];
data.forEach(item => {
    const key = matAndGroup_for.find(entry => entry.mat === item.mat && entry.group === item.group);
    if (!key) {
        matAndGroup_for.push({ mat: item.mat, group: item.group, codeNumbers: [item.code_number], totalPrice: item.price });
    } else {
        key.totalPrice += item.price;
        key.codeNumbers.push(item.code_number);
    }
}); 

console.log(matAndGroup_for)
