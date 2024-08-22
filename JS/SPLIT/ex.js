let currentline = [
    'Plant1', '1', 'AAA', 'SomeDescription', 'ComponentA', 'PCS', '2023-08-21', , ''
];

// Generate the SQL insert statement
let sql = `INSERT INTO OP_DOC_CTRL.dbo.mat_ctrl_zrpp
        (plant, material_no, component, qty, description, uom,create_date)
        VALUES(
            ${currentline.splice(0,9).map((x, i) => {
                if ([0, 4, 5, 6, 8].includes(i)) 
                {   
                    if (i == 5){
                        return `A`;
                    }else{
                        return `'${x?.trim()}'`;
                    }
                }
            }).filter(Boolean).join(', ')}
        ,GETDATE());`;



console.log(sql);
// data = ['data1','data2','data3','data4']
// msg_sql = '';
// data.forEach(function (el) {
//     msg_sql += el + '\n'; // Add a newline character after each element
// })
// console.log(msg_sql)


// data_a = data.splice(0,4000);
// len = data.length;
// console.log(data_a)
// console.log(len)



// let msg = {};
// msg['excel'] = ['data'];

// // สร้างข้อมูลจาก 1 ถึง 40
// msg['excel'] = Array.from({ length: 40 }, (_, i) => `data ${i + 1}`);

// // แสดงผล
// console.log(msg['excel']);
