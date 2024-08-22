const data = [
    {mat:'A',group:1,code_number:'XADCDLDLPH-322',price:100},
    {mat:'B',group:1,code_number:'XADCDNFDLZ-356',price:400},
    {mat:'B',group:1,code_number:'XADCDHNTZZ-897',price:300},
    {mat:'C',group:1,code_number:'XADCDIZEWH-234',price:200},
    {mat:'A',group:1,code_number:'XADCDZMMJO-076',price:50},
    {mat:'A',group:2,code_number:'XADCDMYVCU-829',price:100},
    {mat:'A',group:3,code_number:'XADCDVXARL-578',price:200},
];

const aggregateDataByMatAndGroup = data.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    let group = acc.find(item => item.mat === curr.mat && item.group === curr.group);
    if (!group) {
        group = { mat: curr.mat, group: curr.group, codeNumbers: [], totalPrice: 0 };
        acc.push(group);
    }
    group.codeNumbers.push({
        code: curr.code_number,
        price: curr.price
    });
    group.totalPrice += curr.price;
    return acc;
}, []);
// OUTPUT  [ { "mat": "A", "group": 1, "codeNumbers": [ { "code": "XADCDLDLPH-322", "price": 100 }, { "code": "XADCDZMMJO-076", "price": 50 } ], "totalPrice": 150 },..]

const aggregateDataByMatAndGroup2 = data.reduce((acc, curr) => {
    const key = `${curr.mat}-${curr.group}`;
    let group = acc.find(item => item.mat_g === key);
    if (!group) {
        group = { mat_g: key, codeNumbers: [], totalPrice: 0 };
        acc.push(group);
    }
    group.codeNumbers.push({
        code: curr.code_number,
        price: curr.price
    });
    group.totalPrice += curr.price;
    return acc;
}, []);
// OUTPUT



// console.log(JSON.stringify(aggregateDataByMatAndGroup, null, 2));
// console.log(JSON.stringify(aggregateDataByMatAndGroup2, null, 2));

console.log(aggregateDataByMatAndGroup2);