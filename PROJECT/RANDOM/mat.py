import random
import string

def generate_material_no(format_example):
    letters = string.ascii_uppercase  # อักษร A-Z
    digits = string.digits  # ตัวเลข 0-9
    
    material_no = []
    
    for char in format_example:
        if char == '@':
            material_no.append(random.choice(letters))
        elif char == '#':
            material_no.append(random.choice(digits))
        else:
            material_no.append(char)
    
    return ''.join(material_no)

def calculate_possible_combinations(format_example):
    letters_count = format_example.count('@')
    digits_count = format_example.count('#')
    return (26 ** letters_count) * (10 ** digits_count)

def main():
    format_example = input("Enter the format for material number (use '@' for letters and '#' for digits): ")
    num_materials = int(input("Enter the number of material numbers to generate: "))
    allow_duplicates = input("Allow duplicates? (Y/N): ").strip().upper()
    text_file = input("Enter the name of the text file to save the material numbers: ")

    status = True
    generated_materials = set()
    
    max_combinations = calculate_possible_combinations(format_example)
    if allow_duplicates == 'N' and num_materials > max_combinations:
        print(f"Cannot generate {num_materials} unique material numbers with the given format. Maximum possible is {max_combinations}.")
        # status = False
        return 

    with open(text_file, 'w') as file:
        for _ in range(num_materials):
            if allow_duplicates == 'N' and len(generated_materials) >= max_combinations:
                print("Reached the maximum number of unique material numbers possible with the given format.")
                break
            while True:
                material_no = generate_material_no(format_example)
                if allow_duplicates == 'Y' or material_no not in generated_materials:
                    generated_materials.add(material_no)
                    file.write(material_no + '\n')
                    break
    print(f"{len(generated_materials)} material numbers generated and saved to {text_file}")
    

if __name__ == "__main__":
    main()
