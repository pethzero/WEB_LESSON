
function _escapeString(data) {
    if(data !== undefined && data !== null){
        data = data.replace(/[\0\n\r\b\t\\'"\x1a]/g, function (s) {
            switch (s) {
                case "\0":
                    return "\\0";
                case "\n":
                    return "\\n";
                case "\r":
                    return "\\r";
                case "\b":
                    return "\\b";
                case "\t":
                    return "\\t";
                case "\x1a":
                    return "\\Z";
                case "'":
                    return "''";
                case '"':
                    return '""';
                default:
                    return "\\" + s;
            }
        });
    }else{
        data = null;
    }
    return data;
};

function ResultData(data, mode) {
    let defaultType;
    let stringData = data;
    if (mode === 0) {
        defaultType = 0;
        stringData = parseFloat(data);
    } else if (mode === '0') {
        defaultType = `'0'`;
        if(isNaN(data)){
            stringData = `'${_escapeString(data)}'`;
        }else{
            stringData = `'${data}'`;
        }   
    }
    else if (mode === '') {
        defaultType = `''`;
    }
    else {
        defaultType = null;
        if(isNaN(data)){
            stringData = `'${_escapeString(data)}'`;
        }else{
            stringData = `'${data}'`;
        }   
    }
    return data !== undefined && data !== null ? stringData : defaultType;
}



////////////////////////////// ตัวอย่างการใช้งาน //////////////////////////////
// Null  || Undefined
console.log(ResultData(null)); // Output: null
console.log(ResultData(null, 0));  // Output: 0
console.log(ResultData(null, '0')); // Output: null

console.log(ResultData(undefined)); // Output: null
console.log(ResultData(undefined, 0));  // Output: 0
console.log(ResultData(undefined, '0')); // Output: null

// Numer  
console.log(ResultData(1200));   
console.log(ResultData('1200'));   
console.log(ResultData(1200, 0));    // Output: 1200 (number)
console.log(ResultData(1200, '0'));  // Output: '1200' (string)
console.log(ResultData('1200', 0));    // Output: 1200 (number)
console.log(ResultData('1200', '0'));  // Output: '1200' (string)

// String  
console.log(ResultData(`peth 'a`));
console.log(ResultData(` peth "peth" 12345 '5  '5 ''0' `));
///////////////////////////////////////////////////////////////////////////
// \0 คือ อักขระ Null
// \n คือ อักขระ Newline (ขึ้นบรรทัดใหม่)
// \r คือ อักขระ Carriage Return (ย้าย Cursor ไปที่ต้นบรรทัด)
// \b คือ อักขระ Backspace (ย้าย Cursor ไปทางขวาและลบตัวอักษรตัวที่อยู่หน้าตัวอักษรล่าสุด)
// \t คือ อักขระ Tab (ทำให้ Cursor ไปย้ายไปที่ตำแหน่งที่ให้ความห่างกันเท่ากับ Tab)
// \x1a คือ อักขระ Ctrl+Z (ใช้ในระบบ DOS/Windows เพื่อบอกให้หยุดการอ่านข้อมูลจากไฟล์หรือคีย์บอร์ด)
///////////////////////////////////////////////////////////////////////////
