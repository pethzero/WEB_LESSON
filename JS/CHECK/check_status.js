class YourClass {
    constructor(data_cell, action_tb_transfer, tb_manament_person) {
      this.data_cell = data_cell;
      this.action_tb_transfer = action_tb_transfer;
      this.tb_manament_person = tb_manament_person;
    }
  
    check_status(entry) {
      if (entry === 'temporary') {
        const { id, building, expired_date } = this.data_cell;
        if ([id, building, expired_date].some(field => field === null)) {
          return true;
        }
      } else if (entry === 'system') {
        if (this.action_tb_transfer.length < 1 ||
          this.action_tb_transfer.some(item =>
            !item.building || 
            !item.zone || 
            !item.locker || 
            !item.cell
          )) {
          return true;
        }
      } else if (entry === 'defective') {
        if (this.tb_manament_person.length > 0) {
          if (
            this.action_tb_transfer.length < 1 ||
            this.action_tb_transfer.some(({ building, zone, locker, cell }) => !building || !zone || !locker || !cell)
          ) {
            return true;
          }
        }
      }
      return false;
    }
  }
  
  // ตัวอย่างการใช้งาน
  const data_cell = { id: 1, building: 'A', expired_date: null };
  const action_tb_transfer = [
    { building: 'A', zone: 'Z1', locker: 'L1', cell: 'C1' },
    { building: '', zone: 'Z2', locker: 'L2', cell: 'C2' }
  ];
  const tb_manament_person = [];
  
  const yourInstance = new YourClass(data_cell, action_tb_transfer, tb_manament_person);
  
  console.log(yourInstance.check_status('temporary'));  // true
  console.log(yourInstance.check_status('system'));     // true
  console.log(yourInstance.check_status('defective'));  // false
  