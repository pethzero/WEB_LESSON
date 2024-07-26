const data = [
    {mat:'A',group:1,code_number:'XADCDLDLPH-322',price:100},
    {mat:'B',group:1,code_number:'XADCDNFDLZ-356',price:400},
    {mat:'B',group:1,code_number:'XADCDHNTZZ-897',price:300},
    {mat:'C',group:1,code_number:'XADCDIZEWH-234',price:200},
    {mat:'A',group:1,code_number:'XADCDZMMJO-076',price:50},
    {mat:'A',group:2,code_number:'XADCDMYVCU-829',price:100},
    {mat:'A',group:3,code_number:'XADCDVXARL-578',price:200},
];

// สรุปราคาแยกตามประเภทวัสดุ
const totalPriceByMat = data.reduce((acc, curr) => {
    if (!acc[curr.mat]) {
        acc[curr.mat] = { totalPrice: 0, codeNumbers: [] };
    }
    acc[curr.mat].totalPrice += curr.price;
    acc[curr.mat].codeNumbers.push(curr.code_number);
    return acc;
}, {});

console.log(totalPriceByMat);
// Output: { A: { totalPrice: 450, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076', 'XADCDMYVCU-829', 'XADCDVXARL-578'] }, ... }

// สรุปราคาแยกตามประเภทวัสดุและกลุ่ม
const totalPriceByMatAndGroup = data.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    if (!acc[key]) {
        acc[key] = { totalPrice: 0, codeNumbers: [] };
    }
    acc[key].totalPrice += curr.price;
    acc[key].codeNumbers.push(curr.code_number);
    return acc;
}, {});

console.log(totalPriceByMatAndGroup);
// Output: { 'A-1': { totalPrice: 150, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076'] }, ... }

// สรุปราคาแยกตามประเภทวัสดุและกลุ่ม พร้อมโครงสร้างข้อมูลที่ชัดเจน
const detailedPriceByMatAndGroup = data.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    if (!acc[key]) {
        acc[key] = { mat: curr.mat, group: curr.group, codeNumbers: [], totalPrice: 0 };
    }
    acc[key].codeNumbers.push(curr.code_number);
    acc[key].totalPrice += curr.price;
    return acc;
}, {});

console.log(detailedPriceByMatAndGroup);


// สรุปราคาแยกตามประเภทวัสดุและกลุ่มพร้อมราคา พร้อมโครงสร้างข้อมูลที่ชัดเจน


// Output: { 'A-1': { mat: 'A', group: 1, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076'], totalPrice: 150 }, ... }

// ใช้ forEach ในการสรุปราคาแยกตามประเภทวัสดุและกลุ่ม
const summaryByMatAndGroup = [];
data.forEach(item => {
    const existingEntry = summaryByMatAndGroup.find(entry => entry.mat === item.mat && entry.group === item.group);
    if (!existingEntry) {
        summaryByMatAndGroup.push({ mat: item.mat, group: item.group, codeNumbers: [item.code_number], totalPrice: item.price });
    } else {
        existingEntry.totalPrice += item.price;
        existingEntry.codeNumbers.push(item.code_number);
    }
});

console.log(summaryByMatAndGroup);
// Output: [{ mat: 'A', group: 1, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076'], totalPrice: 150 }, ...]
