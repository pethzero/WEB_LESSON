// Creating mat_master array
const mat_master = [
    { id: 1, qty: 100, date: '2024-06-01' },
    { id: 2, qty: 200, date: '2024-06-02' },
    { id: 3, qty: 150, date: '2024-06-03' }
];

// Creating mat_detail array
const mat_detail = [
    { id: 1, mat_master_id: 1, qty: 50, date: '2024-06-01' },
    { id: 2, mat_master_id: 1, qty: 30, date: '2024-06-01' },
    { id: 3, mat_master_id: 2, qty: 100, date: '2024-06-02' },
    { id: 4, mat_master_id: 2, qty: 50, date: '2024-06-02' },
    { id: 5, mat_master_id: 3, qty: 75, date: '2024-06-03' }
];

/////////////////////////////////////////////////////////////////////////////////////
// Function to join mat_master with mat_detail
function joinMatMasterAndDetail(mat_master, mat_detail) {
    return mat_master.map(master => {
        const details = mat_detail.filter(detail => detail.mat_master_id === master.id);
        return { ...master, details: details };
    });
}

const joinedData = joinMatMasterAndDetail(mat_master, mat_detail);
console.log(joinedData);
/////////////////////////////////////////////////////////////////////////////////////
// Function to calculate total quantity from mat_detail for each mat_master
function calculateTotalDetailQty(mat_master, mat_detail) {
    return mat_master.map(master => {
        const totalQty = mat_detail
            .filter(detail => detail.mat_master_id === master.id)
            .reduce((sum, detail) => sum + detail.qty, 0);
        return { ...master, total_mat_detail_qty: totalQty };
    });
}

const totalQtyData = calculateTotalDetailQty(mat_master, mat_detail);
console.log(totalQtyData);
/////////////////////////////////////////////////////////////////////////////////////
// Function to get mat_master records without any corresponding mat_detail records
function getMatMasterWithoutDetails(mat_master, mat_detail) {
    return mat_master.filter(master => 
        !mat_detail.some(detail => detail.mat_master_id === master.id)
    );
}

const mastersWithoutDetails = getMatMasterWithoutDetails(mat_master, mat_detail);
console.log(mastersWithoutDetails);

