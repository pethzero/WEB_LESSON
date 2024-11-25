import math


class UnitConverter:
    unit_mapping = {
        "weight": {  
            "MG": 1 / 1000,   
            "G": 1,          
            "KG": 1000,      
            "TON": 1000000   
        },
        "length": {  
            "MM": 1 / 1000,   
            "CM": 1 / 100,    
            "M": 1,           
            "KM": 1000        
        }
    }

    def __init__(self, value, unit, target_unit, category):
        self.value = value  
        self.unit = unit.upper()  
        self.target_unit = target_unit.upper()  
        self.category = category.lower()  

        if self.category not in self.unit_mapping:
            raise ValueError(f"ประเภทหน่วย '{self.category}' ไม่รองรับ")

        if self.unit not in self.unit_mapping[self.category]:
            raise ValueError(f"หน่วย '{self.unit}' ไม่รองรับในประเภท '{self.category}'")

        if self.target_unit not in self.unit_mapping[self.category]:
            raise ValueError(f"หน่วยเป้าหมาย '{self.target_unit}' ไม่รองรับในประเภท '{self.category}'")

    def to_base_unit(self):
        return self.value * self.unit_mapping[self.category][self.unit]

    def convert(self):
        base_value = self.to_base_unit()
        converted_value = base_value / self.unit_mapping[self.category][self.target_unit]
        return converted_value

    def convert_and_display(self):
        converted_value = self.convert()
        base_value = self.to_base_unit()
        exponent = int(math.log10(abs(base_value))) if base_value != 0 else 0
        scientific_notation = f"{converted_value / (10 ** exponent):.1f} (10^{exponent}) {self.target_unit}"
        value_exponent = converted_value
        value_scientific = 10 ** exponent
        return {
            "normal": f"{converted_value:.3f} {self.target_unit}",
            "scientific": scientific_notation,
            "value_exponent": value_exponent,
            "value_scientific": value_scientific
        }


def process_conversion(value, unit, target_unit, category):
    try:
        unit_item = UnitConverter(value, unit, target_unit, category)
        conversion_result = unit_item.convert_and_display()
        return {
            "value_exponent": conversion_result["value_exponent"],
            "value_scientific": conversion_result["value_scientific"]
        }
    except ValueError as e:
        return {
            "value_exponent": 0,
            "value_scientific": 0
        }


def fuction_w():
    """ฟังก์ชั่นหลักที่ใช้งาน process_conversion"""
    result = {}
    # เรียกใช้ฟังก์ชั่น process_conversion เพื่อแปลงหน่วยน้ำหนัก
    result = process_conversion(8.5, "MG", "G", "weight")
    print("Input (Weight): 8.5 MG")
    print("ผลลัพธ์ (ปกติ):", result["value_exponent"])
    print("ผลลัพธ์ (ยกกำลัง):", result["value_scientific"])
    return result


print(fuction_w())
