function convertToGrams(value, unit) {
    const conversionRates = {
        MG: 1 / 1000, 
        G: 1,         
        KG: 1000,     
        TON: 1000000  
    };

    if (conversionRates[unit] !== undefined) {
        return value * conversionRates[unit];
    } else {
        return 0;
    }
}

console.log(convertToGrams(1, 'KG')); 
console.log(convertToGrams(1, 'G'));  
console.log(convertToGrams(1, 'MG')); 
console.log(convertToGrams(1, 'TON'));
