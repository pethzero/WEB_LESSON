let data = [
    {'mat':'A', 'number':'001', 'd':1}, 
    {'mat':'A', 'number':'001', 'd':0}, 
    {'mat':'A', 'number':'002', 'd':0}
];



function uniqueData(data) {
    let unique = {};
    // Loop through data array
    data.forEach(item => {
        let key = `${item.mat}-${item.number}`;
        if (!unique[key]) {
        // Check if the combination of mat and number is not already added and if d == 1
        // if (item.d === 1 && !unique[key]) {
            // Save the item as unique with modified keys
            unique[key] = { data_mat: item.mat, data_no: item.number };
        }
    });

    return Object.values(unique); // Return only the unique items as array
}

let result = uniqueData(data);
console.log(result);
