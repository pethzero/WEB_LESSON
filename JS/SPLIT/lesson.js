let value = ",01111 AAA AAAA|M|Sr.XXX, XXX|20";
let result = parseUserName(value);

function parseUserName(value) {
    console.log(value);
    if (!value) return [];
    // ลบเครื่องหมายจุลภาค (,) ตัวแรกออก
    value = value.substring(1);
    console.log(value);
    
    // แปลง string ให้เป็น array
    let entries = [value];
    console.log(entries);
    return entries.map(entry => {
        let [name, worktype, positions, status] = entry.split('|');
        return { 
            name: name ? name.trim() : null, 
            worktype: worktype ? worktype.trim() : null, 
            positions: positions ? positions.trim() : null,
            status: status ? status.trim() : null
        };
    }).filter(entry => entry.name !== null || entry.worktype !== null || entry.positions !== null || entry.status !== null);
}

console.log(result);

