// // Function to compare data and return true or false
// function isDataEqual(data1, data2) {
//     return data1.id === data2.id && data1.type === data2.type && data1.value === data2.value;
// }
// Function to compare data and return true or false
function isDataEqual(data1, data2, fields) {
    for (let field of fields) {
        if (data1[field] !== data2[field]) {
            return false;
        }
    }
    return true;
}

// Function to get the changes between data_temp and another data
function getDataChanges(data_temp, data_compare, data_fields) {
    let changes = {};

    data_fields.forEach(field => {
        if (data_temp[field] !== data_compare[field]) {
            changes[field] = {
                oldValue: data_temp[field],
                newValue: data_compare[field]
            };
        }
    });

    return changes;
}

// Example usage
let data_temp = { id: '1', type: 'name', value: 'ABC' };
let data_equl = { id: '1', type: 'name', value: 'ABC' };
let data_diffen = { id: '1', type: 'name', value: 'BBB' };
let data_fields = ['id', 'type', 'value'];

// // Check if data_equl is equal to data_temp
// let isEqual = isDataEqual(data_temp, data_equl);
// console.log(isEqual); // true

// // Check if data_diffen is equal to data_temp
// isEqual = isDataEqual(data_temp, data_diffen);
// console.log(isEqual); // false
// Check if data_equl is equal to data_temp

let isEqual = isDataEqual(data_temp, data_equl, data_fields);
console.log(isEqual); // true

// Check if data_diffen is equal to data_temp
isEqual = isDataEqual(data_temp, data_diffen, data_fields);
console.log(isEqual); // false

// Get changes between data_temp and data_diffen
let changes = getDataChanges(data_temp, data_diffen, data_fields);
console.log(changes); // { value: { oldValue: 'ABC', newValue: 'BBB' } }
