// Function to compare data and return true or false
function isDataEqual(data1, data2, fieldMapping) {
    for (let key in fieldMapping) {
        if (data1[key] !== data2[fieldMapping[key]]) {
            return false;
        }
    }
    return true;
}

// Function to get the changes between data_temp and another data
function getDataChanges(data_temp, data_compare, fieldMapping) {
    let changes = {};

    for (let key in fieldMapping) {
        let tempField = key;
        let compareField = fieldMapping[key];

        if (data_temp[tempField] !== data_compare[compareField]) {
            changes[tempField] = {
                oldValue: data_temp[tempField],
                newValue: data_compare[compareField]
            };
        }
    }

    return changes;
}

// Example usage
let data_temp = { id: '1', type: 'name', value: 'ABC' };
let data_status = { id: '1', status: 'name', name: 'BBB' };

// Field mapping between data_temp and data_status
let fieldMapping = {
    id: 'id',
    type: 'status',
    value: 'name'
};

// Check if data_status is equal to data_temp
let isEqual = isDataEqual(data_temp, data_status, fieldMapping);
console.log(isEqual); // true

// Get changes between data_temp and data_status
let changes = getDataChanges(data_temp, data_status, fieldMapping);
console.log(changes); // {}
