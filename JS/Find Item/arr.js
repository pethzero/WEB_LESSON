const user = ['00001'];
const data = [
  { en: '000001', name: 'sssss',text:'A' },
  { en: '000002', name: 'sssss',text:'B' },
  { en: '000003', name: 'sssss',text:'C' }
];

// ใช้ filter เพื่อกรองข้อมูล
const data_record = data.filter(item => user.includes(item.en));

console.log(data_record); // [{ en: '000001', name: 'sssss' }]

const data_recordmap = data_record.map(({ en, name }) => ({ en, name }));

const data_all =data.filter(item => user.includes(item.en))
.map(({ en, name }) => ({ en, name }));