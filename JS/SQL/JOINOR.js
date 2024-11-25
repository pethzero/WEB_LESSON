let data_find = [
  { material_no: "A001", work_order: "W001" },
  { material_no: "A002", work_order: "W002" },
];

let format_data_mat = data_find
  .map(
    (item) =>
      `(project_no = '${item.material_no}' and work_order = '${item.work_order}')`
  )
  .join(" or ");

console.log(format_data_mat);
