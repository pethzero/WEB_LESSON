////////////////////////////////////////////////////////////////////////////////////////////////
const data_map = [
    {mat:'A',group:1,code_number:'XADCDLDLPH-322',price:100},
    {mat:'B',group:1,code_number:'XADCDNFDLZ-356',price:400},
    {mat:'B',group:1,code_number:'XADCDHNTZZ-897',price:300},
    {mat:'C',group:1,code_number:'XADCDIZEWH-234',price:200},
    {mat:'A',group:1,code_number:'XADCDZMMJO-076',price:50},
    {mat:'A',group:2,code_number:'XADCDMYVCU-829',price:100},
    {mat:'A',group:3,code_number:'XADCDVXARL-578',price:200},
];

// หา price โดยแยกตาม mat  A: { totalPrice: 450, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076', 'XADCDMYVCU-829', 'XADCDVXARL-578'] },
const priceByMat_map = data_map.reduce((acc, curr) => {
    if (!acc[curr.mat]) {
        acc[curr.mat] = { totalPrice: 0, codeNumbers: [] };
    }
    acc[curr.mat].totalPrice += curr.price;
    acc[curr.mat].codeNumbers.push(curr.code_number);
    return acc;
}, {});

// หา mat กับ group 'A-1': { totalPrice: 150, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076'] },
const matAndGroup_map = data_map.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    if (!acc[key]) {
        acc[key] = { totalPrice: 0, codeNumbers: [] };
    }
    acc[key].totalPrice += curr.price;
    acc[key].codeNumbers.push(curr.code_number);
    return acc;
}, {});

// หา mat กับ group     { mat: 'A', group: 1, codeNumbers: [ 'XADCDLDLPH-322', 'XADCDZMMJO-076' ], totalPrice: 150 },
const result = data_map.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    if (!acc[key]) {
        acc[key] = {
            mat: curr.mat,
            group: curr.group,
            codeNumbers: [],
            totalPrice: 0
        };
    }
    acc[key].codeNumbers.push(curr.code_number);
    acc[key].totalPrice += curr.price;
    return acc;
}, {});
const finalResult = Object.values(result);

// console.log(finalResult);
console.log('Price by Mat:', priceByMat_map);
console.log('Mat and Group:', matAndGroup_map);