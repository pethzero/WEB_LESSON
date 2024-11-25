let data = '2024-11-16T17:00:00.000Z'

function DayT(data){
    if (null || undefined){
        return `NULL`
    }
    return data.split("T")[0];
}
console.log(DayT(data));