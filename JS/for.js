const data_for = [
    {mat:'A',group:1,code_number:'XADCDLDLPH-322',price:100},
    {mat:'B',group:1,code_number:'XADCDNFDLZ-356',price:400},
    {mat:'B',group:1,code_number:'XADCDHNTZZ-897',price:300},
    {mat:'C',group:1,code_number:'XADCDIZEWH-234',price:200},
    {mat:'A',group:1,code_number:'XADCDZMMJO-076',price:50},
    {mat:'A',group:2,code_number:'XADCDMYVCU-829',price:100},
    {mat:'A',group:3,code_number:'XADCDVXARL-578',price:200},
];

const matAndGroup_for = [];
// { mat: 'A', group: 1, codeNumbers: [ 'XADCDLDLPH-322', 'XADCDZMMJO-076' ], totalPrice: 150 },
data_for.forEach(item => {
    const key = `${item.mat}-${item.group}`;
    const existingGroup = matAndGroup_for.find(entry => entry.mat === item.mat && entry.group === item.group);

    if (existingGroup) {
        existingGroup.totalPrice += item.price;
        existingGroup.codeNumbers.push(item.code_number);
    } else {
        matAndGroup_for.push({
            mat: item.mat,
            group: item.group,
            codeNumbers: [item.code_number],
            totalPrice: item.price
        });
    }
}); 

const priceByMat_for = {};
//    A: { totalPrice: 450, codeNumbers: ['XADCDLDLPH-322', 'XADCDZMMJO-076', 'XADCDMYVCU-829', 'XADCDVXARL-578'] },
data_for.forEach(item => {
    // หา price โดยแยกตาม mat
    if (!priceByMat_for[item.mat]) {
        priceByMat_for[item.mat] = { totalPrice: 0, codeNumbers: [] };
    }
    priceByMat_for[item.mat].totalPrice += item.price;
    priceByMat_for[item.mat].codeNumbers.push(item.code_number);
});

console.log('Mat and Group:', matAndGroup_for);

// console.log('Price by Mat:', priceByMat_for);
// console.log('Mat and Group:', matAndGroup_for);

////////////////////////////////////////////////////////////////////////////////////////////////
