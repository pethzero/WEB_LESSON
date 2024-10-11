let payload = `ID\tNAME\tGROUP\tDETAIL 
1\tA001\tA\t5555
2\tA001\tA\t8888
3\tB001\tB\t77777
4\tA001\tB\t77777`;

const uniqueData = new Map();

function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split('\t')

    for (let i = 1; i < lines.length; i++) {
        // console.log(lines)
        if (!lines[i]) continue
        const obj = {}
        const currentline = lines[i].split('\t')
        console.log(currentline)
        let sql = `${currentline}`;
        result.push(sql)
    }
    return result
}

let excel = csvJSON(payload);
console.log(excel)