// Sample data_head array
let data_head = [
    { id: 1, name: 'Item1', qty: 10 },
    { id: 2, name: 'Item2', qty: 20 },
    { id: 3, name: 'Item3', qty: 30 }
];

// Iterate over data_head and log the index and entry
data_head.forEach((entry, index) => {
    console.log("Index:", index, "Entry:", entry);
});
