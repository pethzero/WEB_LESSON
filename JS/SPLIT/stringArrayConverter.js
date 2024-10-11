function splitStringToArray(input,condition) {
    let result = input.split(condition);
    result = result.filter(item => item !== '');
    return result;
  }
  
  // ตัวอย่างการใช้งาน
  let x = '?100?500';
  let arrayResult = splitStringToArray(x,'?');
  
  console.log(arrayResult);  // Output: ["100", "500"]
  