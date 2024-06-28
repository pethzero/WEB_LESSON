const items = [
  { id: 1, name: 'Item 1', status: 0 },
  { id: 2, name: 'Item 2', status: 1 },
  { id: 3, name: 'Item 3', status: 2 },
  { id: 4, name: 'Item 4', status: 3 },
  { id: 5, name: 'Item 5', status: 4 },
  { id: 6, name: 'Item 6', status: 5 }
];

function findAndFilter(items, selectedItemId, statusToFilter, statusesArray) {
  // ค้นหารายการที่มี id ตรงกับ selectedItemId
  const selectedItem = items.find(item => item.id === selectedItemId);
  console.log("Selected Item:", selectedItem);

  // กรองรายการที่มี status เท่ากับ statusToFilter
  const filteredItemsByStatus = items.filter(item => item.status == statusToFilter);
  console.log(`Items with status ${statusToFilter}:`, filteredItemsByStatus);

  // กรองรายการที่มี status ตรงกับค่าในอาร์เรย์ statusesArray
  const filteredItemsByStatusesArray = items.filter(item => statusesArray.includes(item.status));
  console.log(`Items with statuses in ${statusesArray}:`, filteredItemsByStatusesArray);
}

// เรียกใช้ฟังก์ชั่น
const selectedItemId = 2;
const statusToFilter = 1;
const statusesArray = [5, 1, 2];

findAndFilter(items, selectedItemId, statusToFilter, statusesArray);
