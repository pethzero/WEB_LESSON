function allSafeTrimDefault(x, entry = null, number = 0, mode = null) {
    if (mode === null) {
        if (typeof x === 'number') {
            return x !== null && x !== undefined ? x : number;
        } else {
            return x !== null && x !== undefined && x.trim() !== '' ? x.trim() : entry;
        }
    } else if (mode === 1) {
        if (typeof x === 'number') {
            x = x.toString();
        }
        return x !== null && x !== undefined && x.trim() !== '' ? x.trim() : entry;
    }
    return entry;
}

// Examples
// console.log(allSafeTrimDefault("  Hello World  ")); // "Hello World"
// console.log(allSafeTrimDefault(123)); // 123
// console.log(allSafeTrimDefault(null, "Default Value")); // "Default Value"
// console.log(allSafeTrimDefault(undefined, "Default Value")); // "Default Value"
// console.log(allSafeTrimDefault(" 123 ")); // "123"
// console.log(allSafeTrimDefault("", "Default Value")); // "Default Value"
// console.log(allSafeTrimDefault("")); // null
// console.log(allSafeTrimDefault(0, "Default Value", 42)); // 0
// console.log(allSafeTrimDefault("   ")); // null
// console.log(allSafeTrimDefault(123, null, 0, 1)); // "123"


console.log(allSafeTrimDefault(55, null, 0, 1));
// console.log(allSafeTrimDefault(55, null, 0, 1));