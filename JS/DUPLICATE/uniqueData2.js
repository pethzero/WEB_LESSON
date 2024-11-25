let data = [
    {'mat': 'A', 'number': '001', 'd': 1}, 
    {'mat': 'A', 'number': '001', 'd': 0}, 
    {'mat': 'A', 'number': '002', 'd': 0}
];

let data2 = [ 
    {'matx': 'A', 'number': '001', 'd': 1},  
    {'matx': 'B', 'number': '001', 'd': 0},  
    {'matx': 'A', 'number': '002', 'd': 0} 
];

// Combine both arrays and standardize the key names
let combinedData = [
    ...data.map(item => ({ mat: item.mat })),
    ...data2.map(item => ({ mat: item.matx}))
];

// Remove duplicates based on 'mat' and 'number' only
let uniqueData = combinedData.reduce((acc, current) => {
    const exists = acc.some(item => item.mat === current.mat && item.number === current.number);
    if (!exists) {
        acc.push(current);
    }
    return acc;
}, []);

console.log(uniqueData);

// // Combine both arrays and standardize the key names
//     let combinedData = [
//         ...msg.data_main.map(item => ({ component_no: item})),
//         ...msg.data_component.map(item => ({ component_no: item.component_no }))
//     ];
