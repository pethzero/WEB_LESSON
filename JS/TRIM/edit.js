function allSafeTrimDefault(x, entry = null, mode = null, number = 0) {
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
