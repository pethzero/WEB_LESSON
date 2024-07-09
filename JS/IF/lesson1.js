class DataValidator {
  constructor(data) {
      this.data_cell = data;
  }

  isValidInput(value) {
      return value !== null && value !== undefined && (typeof value !== 'string' || value.trim() !== '');
  }

  validateDataCell() {
      const { request_by, building, zone, locker, cell, gender } = this.data_cell;

      return [request_by, building, zone, locker, cell, gender].some(field => !this.isValidInput(field));
  }
}

// ตัวอย่างการจำลองข้อมูล data_cell
const sampleData = {
  request_by: '65029',
  building: 'A',
  zone: 'I',
  locker: '23B',
  cell: 'C1',
  gender: 'M'
};

const validator = new DataValidator(sampleData);

if (validator.validateDataCell()) {
  console.log('Invalid input detected');
} else {
  console.log('All inputs are valid');
}

// ตัวอย่างข้อมูลที่มีค่า null หรือ undefined
const invalidData = {
  request_by: '65029',
  building: null,
  zone: 'I',
  locker: '23B',
  cell: 'C1',
  gender: 'M'
};

const invalidValidator = new DataValidator(invalidData);

if (invalidValidator.validateDataCell()) {
  console.log('Invalid input detected');
} else {
  console.log('All inputs are valid');
}
