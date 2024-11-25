let data_c = [{"parent_id":"A","child_id":"B1",'req_qty_crtd':0},{"parent_id":"A","child_id":"B3",'req_qty_crtd':0}];
let data_rw = [
    {"parent_id":"A","child_id":"B1","req_qty_rel":98},
    {"parent_id":"A","child_id":"B2","req_qty_rel":5}
];

function filterData(data_rw, data_c) {
    return data_rw.filter(item_rw => 
        data_c.some(item_c => 
            item_c.parent_id === item_rw.parent_id && 
            item_c.child_id === item_rw.child_id
        )
    );
}

let result = filterData(data_rw, data_c);
// console.log(result);


function filterAndCombine(data_rw, data_c) {
    return data_c.map(item_c => {
        // หารายการใน data_rw ที่ตรงกัน
        const matchingItem = data_rw.find(item_rw => 
            item_rw.parent_id === item_c.parent_id && 
            item_rw.child_id === item_c.child_id
        );

        // ถ้าพบรายการที่ตรงกัน ให้รวม req_qty_rel
        if (matchingItem) {
            return {
                parent_id: item_c.parent_id,
                child_id: item_c.child_id,
                req_qty_crtd: item_c.req_qty_crtd,
                req_qty_rel: matchingItem.req_qty_rel
            };
        }else{
            return {
                parent_id: item_c.parent_id,
                child_id: item_c.child_id,
                req_qty_crtd: item_c.req_qty_crtd,
                req_qty_rel:0
            };
        }
        
        // คืนค่า null หรือ undefined ถ้าไม่พบ
        // return null;
    }).filter(item => item !== null); // กรองค่า null ออก
}

let result2 = filterAndCombine(data_rw, data_c);
console.log(result2);