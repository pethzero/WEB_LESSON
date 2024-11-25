// จำลองข้อมูล
const items = [
    { id: 1, name: 'Item 1', status: 0 },
    { id: 2, name: 'Item 2', status: 1 },
    { id: 3, name: 'Item 3', status: 2 },
    { id: 4, name: 'Item 4', status: 3 },
    { id: 5, name: 'Item 5', status: 4 },
    { id: 6, name: 'Item 6', status: 5 }
  ];
  
// ค่า selectedItemId
const selectedItemId = 2;

// ค้นหารายการที่มี id ตรงกับ selectedItemId
const selectedItem = items.find(item => item.id === selectedItemId);

// แสดงผล
console.log(selectedItem);


// กรองรายการที่มี status เท่ากับ '1'
const filteredItems = items.filter(x => x.status == '1');

// แสดงผล
console.log(filteredItems);


// กรองรายการที่มี status ตรงกับค่าในอาร์เรย์ [5, 1, 2]
const filteredSomeItems = items.filter(x => [5, 1, 2].some(y => y == x.status));

// แสดงผล
console.log(filteredSomeItems);

