data = {
  A: {
    count_all_old: [],
    count_all_new: [],
    detail_new: [
      { M: "A001", O: "002" },
      { M: "A002", O: "003" },
    ],
    detail_old: [],
  },
  B: {
    count_all_old: [],
    count_all_new: [],
    detail_new: [],
    detail_old: [
      { M: "A001", O: "002" },
      { M: "A002", O: "003" },
    ],
  },
};

data_m = [
  { M: "A001", O: "002", C: "003" },
  { M: "A001", O: "002", C: "004" },
  { M: "A002", O: "003", C: "004" },
  { M: "B005", O: "003", C: "004" },
];

function SearchMaterial(data, data_m) {
  Object.keys(data).forEach((key) => {
    data_m.forEach((item) => {
      // ตรวจสอบว่ามีค่าตรงกันใน detail_new
      // console.log(key)
      const found_new = data[key].detail_new.some(
        (detail) => detail.M === item.M && detail.O === item.O
      );
      const found_old = data[key].detail_old.some(
        (detail) => detail.M === item.M && detail.O === item.O
      );

      if (found_new) {
        // ถ้า C มีค่าและยังไม่มีใน count_all_new ของ key นั้น ๆ ให้เพิ่มเข้าไป
        if (item.C && !data[key].count_all_new.includes(item.C)) {
          data[key].count_all_new.push(item.C);
        }
      }

      if (found_old) {
        // ถ้า C มีค่าและยังไม่มีใน count_all_new ของ key นั้น ๆ ให้เพิ่มเข้าไป
        if (item.C && !data[key].count_all_old.includes(item.C)) {
          data[key].count_all_old.push(item.C);
        }
      }
    });
  });
}

prepareData(data, data_m);
console.log(JSON.stringify(data, null, 2));

function extractShock() {
  let list = [];
  Object.keys(data).forEach((key) => {
    // console.log(data[key]);
    // console.log(data[key]['count_all_old'].length);
    const newDetail = {
      fg_material_no: key,
      cplk_m_item_qy_old: data[key]["count_all_old"].length,
      cplk_m_item_qy_new: data[key]["count_all_new"].length,
    };
    list.push(newDetail);
  });
  return list;
}

extractShock(list);
// console.log(list)
