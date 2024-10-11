outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
    if (j % 7 === 0) {
      console.log(`ออกจากลูปทั้งสองเมื่อ j = ${j}`);
      break outerLoop;  // ออกจากลูปทั้งหมดเมื่อ j หาร 7 ลงตัว
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
