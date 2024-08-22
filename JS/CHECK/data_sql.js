function query(value,mode) {
    if (mode === 'T') {
        return value?value:null;
    }
    else if(mode === 'I'){
        return value?value:0
    }
    return value;
}

