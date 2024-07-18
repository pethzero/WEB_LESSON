// ข้อมูลกลุ่มเริ่มต้น
let group = [
    {is_active: false, name: 'ceo', value: 0, css: 'group_data'},
    {is_active: false, name: 'cfo', value: 0, css: 'group_data'},
    {is_active: true, name: 'vp', value: 0, css: 'group_data'},
    {is_active: true, name: 'director', value: 0, css: 'group_data'},
    {is_active: true, name: 'manager', value: 0, css: 'group_data'},
    {is_active: true, name: 'leader', value: 0, css: 'group_data'},
    {is_active: true, name: 'staff', value: 0, css: 'group_data'},
    {is_active: true, name: 'daily', value: 0, css: 'group_data'}
];


// สร้าง array ใหม่ที่ต้องการ
let group_tb = [];

// กรองเฉพาะรายการที่ is_active เป็น true และเพิ่มวัตถุที่มี name และ detail ที่เป็นข้อความว่างใน group_tb
group.filter(item => item.is_active).forEach(item => {
    group_tb.push({name: item.name, detail: []});
});

console.log(group_tb);
