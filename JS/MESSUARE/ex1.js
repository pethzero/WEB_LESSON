class UnitConverter {
    constructor(value, unit, targetUnit, category) {
        this.unitMapping = {
            weight: { // หน่วยน้ำหนัก
                MG: 1 / 1000,
                G: 1,
                KG: 1000,
                TON: 1000000
            },
            length: { // หน่วยความยาว
                MM: 1 / 1000,
                CM: 1 / 100,
                M: 1,
                KM: 1000
            }
        };

        this.value = value; // ค่าเริ่มต้น
        this.unit = unit.toUpperCase(); // หน่วยเริ่มต้น
        this.targetUnit = targetUnit.toUpperCase(); // หน่วยเป้าหมาย
        this.category = category.toLowerCase(); // ประเภทหน่วย

        if (!this.unitMapping[this.category]) {
            throw new Error(`ประเภทหน่วย '${this.category}' ไม่รองรับ`);
        }

        if (!this.unitMapping[this.category][this.unit]) {
            throw new Error(`หน่วย '${this.unit}' ไม่รองรับในประเภท '${this.category}'`);
        }

        if (!this.unitMapping[this.category][this.targetUnit]) {
            throw new Error(`หน่วยเป้าหมาย '${this.targetUnit}' ไม่รองรับในประเภท '${this.category}'`);
        }
    }

    toBaseUnit() {
        return this.value * this.unitMapping[this.category][this.unit];
    }

    convert() {
        const baseValue = this.toBaseUnit();
        return baseValue / this.unitMapping[this.category][this.targetUnit];
    }

    convertAndDisplay() {
        const convertedValue = this.convert();
        const baseValue = this.toBaseUnit();
        const exponent = baseValue !== 0 ? Math.floor(Math.log10(Math.abs(baseValue))) : 0;
        const scientificNotation = `${(convertedValue / Math.pow(10, exponent)).toFixed(1)} (10^${exponent}) ${this.targetUnit}`;
        return {
            normal: `${convertedValue.toFixed(3)} ${this.targetUnit}`,
            scientific: scientificNotation,
            valueExponent: convertedValue,
            valueScientific: Math.pow(10, exponent)
        };
    }
}

function processConversion(value, unit, targetUnit, category) {
    try {
        const unitItem = new UnitConverter(value, unit, targetUnit, category);
        const conversionResult = unitItem.convertAndDisplay();
        return {
            valueExponent: conversionResult.valueExponent,
            valueScientific: conversionResult.valueScientific
        };
    } catch (error) {
        console.error(error.message);
        return {
            valueExponent: 0,
            valueScientific: 0
        };
    }
}

function functionW() {
    // เรียกใช้ processConversion
    console.log("Input (Weight): 8.5 MG");
    const result = processConversion(8.5, "MG", "G", "weight");
    console.log("ผลลัพธ์ (ปกติ):", result.valueExponent);
    console.log("ผลลัพธ์ (ยกกำลัง):", result.valueScientific);
    return result;
}

console.log(functionW());
