function checkParm(x) {
    if (typeof x === 'number') {
        return x !== null && x !== undefined;
    } else if (typeof x === 'string') {
        return x.trim() !== '';
    } else {
        return false;
    }
}

const data = [1234, '   ', 'XX', 45, null, undefined];

for (const x of data) {
    console.log(x,checkParm(x));
}
