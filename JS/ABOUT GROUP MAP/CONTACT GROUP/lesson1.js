// 1. การรวมข้อมูลแบบพื้นฐาน
// สมมติว่า this.data_main และ this.tbdata_detail เป็นอาเรย์ของอ็อบเจ็กต์ และคุณต้องการรวมข้อมูลให้เป็นอาเรย์เดียว คุณสามารถใช้ concat() หรือการรวมข้อมูลด้วย spread operator:

// สมมติว่า this.data_main และ this.tbdata_detail เป็นอาเรย์ของอ็อบเจ็กต์
this.data_main = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

this.tbdata_detail = [
    { id: 3, description: 'Detail 1' },
    { id: 4, description: 'Detail 2' }
];

// การรวมข้อมูล
const combinedData1 = [...this.data_main, ...this.tbdata_detail];

console.log(combinedData1);

// 2. การรวมข้อมูลแบบซ้อนทับ
// ถ้าคุณต้องการรวมข้อมูลตาม id หรือคีย์อื่นๆ เช่น ถ้า id ซ้ำกันให้ซ้อนทับข้อมูลใน this.tbdata_detail ลงใน this.data_main:
this.data_main = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

this.tbdata_detail = [
    { id: 1, description: 'Updated Detail 1' },
    { id: 3, description: 'Detail 3' }
];

// การรวมข้อมูลและซ้อนทับ
const combinedData2 = this.data_main.map(item => {
    const detail = this.tbdata_detail.find(detail => detail.id === item.id);
    return detail ? { ...item, ...detail } : item;
}).concat(
    this.tbdata_detail.filter(detail => !this.data_main.some(item => item.id === detail.id))
);

console.log(combinedData2);

// 3. การรวมข้อมูลแบบจัดกลุ่ม
// ถ้าคุณต้องการจัดกลุ่มข้อมูลตาม id หรือคีย์อื่นๆ:
this.data_main = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

this.tbdata_detail = [
    { id: 1, description: 'Detail 1' },
    { id: 2, description: 'Detail 2' },
    { id: 3, description: 'Detail 3' }
];

// การรวมข้อมูลและจัดกลุ่ม
const dataMap = new Map();

this.data_main.forEach(item => dataMap.set(item.id, { ...item }));

this.tbdata_detail.forEach(detail => {
    if (dataMap.has(detail.id)) {
        dataMap.set(detail.id, { ...dataMap.get(detail.id), ...detail });
    } else {
        dataMap.set(detail.id, detail);
    }
});

const combinedData3 = Array.from(dataMap.values());

console.log(combinedData3);

// 4. การรวมข้อมูลโดยใช้ฟังก์ชัน
// ถ้าคุณต้องการใช้ฟังก์ชันเพื่อรวมข้อมูล คุณสามารถสร้างฟังก์ชันที่รับพารามิเตอร์สองตัว:
function combineData(mainData, detailData) {
    const dataMap = new Map();

    mainData.forEach(item => dataMap.set(item.id, { ...item }));

    detailData.forEach(detail => {
        if (dataMap.has(detail.id)) {
            dataMap.set(detail.id, { ...dataMap.get(detail.id), ...detail });
        } else {
            dataMap.set(detail.id, detail);
        }
    });

    return Array.from(dataMap.values());
}

// เรียกใช้ฟังก์ชัน
const combinedData4 = combineData(this.data_main, this.tbdata_detail);

console.log(combinedData4);
