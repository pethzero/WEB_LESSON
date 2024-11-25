let newStr = 'PFT01E-216624ALF';

const keywords = ['01E', '01R', '01S'];
if (keywords.some(keyword => newStr.includes(keyword))) {
    console.log('Found one of the strings'); // ผลลัพธ์: Found one of the strings
}
