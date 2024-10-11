const groupMain = {
    A: [
        { fg_material_no: "A", customer: "ABC", cmp_focus: "X", revenue: 100, row_dt: 1, mat_no: "001" },
        { fg_material_no: "A", customer: "ABC", cmp_focus: "X", revenue: 50, row_dt: 1, mat_no: "002" },
        { fg_material_no: "A", customer: "ABC", cmp_focus: "X", revenue: 200, row_dt: 0, mat_no: "003" }
    ],
    B: [
        { fg_material_no: "B", customer: "XYZ", cmp_focus: "Y", revenue: 300, row_dt: 1, mat_no: "004" }
    ]
};

const [dataTemp, hfTop] = processRevenueTotal(groupMain);
console.log(dataTemp);
console.log(hfTop);

function processRevenueTotal(data) {
    let hfAmount = {
        amount: 0,
        fg: 0,
        item: 0
    };

    for (const [parentId, detail] of Object.entries(data)) {
        let total = 0;
        let fgMaterialNo = null;
        let customer = null;
        let cmpFocus = null;

        let uniqueMatNos = new Set();  // Use a Set to store unique mat_no values

        if (detail.length > 0) {
            fgMaterialNo = detail[0].fg_material_no;
            customer = detail[0].customer;
            cmpFocus = detail[0].cmp_focus;
        }

        detail.forEach((item, index) => {
            if (item.row_dt === 1) {
                total += Math.round(item.revenue * 100) / 100;  // Round to 2 decimal places
            } else {
                item.revenue = null;
            }

            uniqueMatNos.add(item.mat_no);  // Add mat_no to the Set
        });

        // Create summary_item and append to the detail array
        const summaryItem = {
            fg_material_no: fgMaterialNo,
            customer: customer,
            cmp_focus: cmpFocus,
            total: total,
            summary: '1',
            row_num: detail.length + 1
        };

        hfAmount.amount += total;
        hfAmount.fg += 1;
        hfAmount.item += uniqueMatNos.size;

        detail.push(summaryItem);  // Append summary to the detail
    }

    return [data, hfAmount];
}



function processExtractNew(group, mode = 0) {
    let result = [];

    if (mode === 0) {
        for (const [parentId, childDict] of Object.entries(group)) {
            for (const [key, items] of Object.entries(childDict)) {
                items.forEach(item => {
                    result.push(item);
                });
            }
        }
    } else if (mode === 1) {
        for (const [parentId, items] of Object.entries(group)) {
            items.forEach(item => {
                result.push(item);
            });
        }
    }

    return result;
}

// Usage example
let result = {};
result['data'] = processExtractNew(dataTemp, 1);

console.log(result);
