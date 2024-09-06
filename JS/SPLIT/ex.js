let currentline = [
    'Plant1', '1,000A', 'A', 'SomeDescription', 'ComponentA', 'PCS', '2023-08-21', '', ''
];

// Generate the SQL insert statement
let sql = `INSERT INTO OP_DOC_CTRL.dbo.mat_ctrl_zrpp
        (plant, material_no, component, qty, description, uom, create_date)
        VALUES(
            ${currentline.splice(0,9).map((x, i) => {
                if ([0, 1, 2, 3, 4].includes(i)) 
                {   
                    if(i === 1) {
                        let parsed = parseFloat(x.replace(/,/g, ''));
                        // ตรวจสอบว่าผลลัพธ์เป็น NaN หรือไม่
                        return isNaN(parsed) ? '0' : parseFloat(x.replace(/,/g, ''));
                    } else {
                        return x !== '' ? `'${x.replace(/'/g, "''").trim()}'` : 'NULL';
                    }
                }
            }).filter(Boolean).join(', ')}
        , GETDATE());`;

console.log(sql);
