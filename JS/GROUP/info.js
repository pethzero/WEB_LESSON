const data = [
    {id: 1, name: 'ceo', text: 'CEO', detail: [{info: 'detail1'}]},
    {id: 2, name: 'cfo', text: 'CFO', detail: [{info: 'detail2'}, {info: 'detail3'}]},
    {id: 3, name: 'ceo', text: 'CEO', detail: [{info: 'detail4'}]},
    {id: 4, name: 'cfo', text: 'CFO', detail: [{info: 'detail5'}]}
];

const mergedData = data.reduce((acc, item) => {
    // Check if the name already exists in the accumulator
    const existing = acc.find(obj => obj.name === item.name);

    if (existing) {
        // If found, merge the detail arrays
        existing.detail = existing.detail.concat(item.detail);
    } else {
        // If not found, add a new object
        acc.push({...item});
    }

    return acc;
}, []);

// Output only the detail arrays
const arr_output = mergedData.map(item => item.detail).flat();

console.log(arr_output);
