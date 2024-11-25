const fs = require("fs").promises;

// Specify the path to the JSON file
const filePath = "D:\\รายงาน\\7_MATCRTL\\BK\\log\\FinalData_202411081451.json";

// Function to read and parse JSON data
async function readJsonFile(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData; // Return the parsed JSON data
  } catch (error) {
    console.error("Error reading or parsing file:", error);
    return []; // Return an empty array in case of error
  }
}

// Main function to process the data
async function main() {
  const data_map = await readJsonFile(filePath); // Wait for the promise to resolve
  const data_exe = GroupingMap(data_map);
  const data_extract = extractDetails(data_exe);
  console.log(data_extract);
}

// Run the main function
main();

function GroupingMap(data) {
  const result = data.reduce((acc, item) => {
    const key = item.fg_material_no;
    // ถ้า key ยังไม่อยู่ใน acc ให้สร้างโครงสร้างพื้นฐาน
    if (!acc[key]) {
      acc[key] = {
        total: 0,
        detail: [],
      };
    }

    if (item.row_dt === 1) {
      // Add the revenue to total if row_dt is 1
      acc[key].total += item.revenue;
    }
    // จัดการ detail_new และ detail_old ตามเงื่อนไข
    const detailItem = {
      fg_material_no: item.fg_material_no,
      component_no: item.component_no,
      wo_pl_order: item.wo_pl_order,
      wo_pl_status: item.wo_pl_status,
      cplk_m_item_qy_old: item.cplk_m_item_qy_old,
      cplk_m_all_qty: item.cplk_m_all_qty,
      plant: item.plant,
      avg_sale_price: item.avg_sale_price,
      wo_pl_qty: item.wo_pl_qty,
      wo_date: item.wo_date,
      mat_group: item.mat_group,
      mat_no: item.mat_no,
      description: item.description,
      short_qty: item.short_qty,
      purch_doc: item.purch_doc,
      item: item.item,
      qty: item.qty,
      conf_d_pl_gr_dt: item.conf_d_pl_gr_dt,
      vendor_code: item.vendor_code,
      vendor_name: item.vendor_name,
      revenue: item.revenue,
      row_dt: item.row_dt,
    };
    acc[key].detail.push(detailItem);

    return acc;
  }, {});
  return result;
}

function extractDetails(data) {
  let allDetails = [];

  // Loop through each key in the grouped data
  for (let key in data) {
    const group = data[key]; // Get the group object for the current key

    // Extract the total_revenue
    const totalRevenue = group.total; // Total revenue for the group
    const details = group.detail; // Array of details for the group

    // For each detail, add the total_revenue and push it to the allDetails array
    row_no = 0;
    // details.forEach((detail, index) => {
    //   allDetails.push({
    //     ...detail, 
    //     total_revenue: totalRevenue, 
    //     row_no: index + 1, 
    //     summary:'D',
    //   });
    // });
    details.forEach(detail => {
      row_no += 1;
        // Merge the total_revenue with each detail item and push to allDetails
        allDetails.push({
            ...detail,  // Spread the detail item
            // fg_material_no: key,  // Add the key as fg_material_no
            summary:'D',
            total_revenue: totalRevenue,  // Add the total_revenue
            row_no:row_no
        });
    });


    allDetails.push(
      {'fg_material_no':key,
        summary:'Z',
        total_revenue:totalRevenue,
        row_no:row_no+1,
      }
    )
    // details.forEach(detail => {
    //   row_no += 1;
    //     // Merge the total_revenue with each detail item and push to allDetails
    //     allDetails.push({
    //         ...detail,  // Spread the detail item
    //         // fg_material_no: key,  // Add the key as fg_material_no
    //         total_revenue: totalRevenue,  // Add the total_revenue
    //         row_no:row_no
    //     });
    // });
  }
  return allDetails;
}
