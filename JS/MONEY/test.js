
function format_Balance_Number(qty,balance) {
    if ((balance !== null && balance !== undefined) && (qty !== null && qty !== undefined)) {
      return `yes`;
    } else {
      return '';
    }
  }

  console.log(format_Balance_Number(1,2))