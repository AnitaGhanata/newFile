//Q.5 Write a C program to convert lowercase string to uppercase.
let string ="abcdef";
function convertToUpperCase(string) {
    let result = "";
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= 'a' && string[i] <= 'z') {
        result += String.fromCharCode(string.charCodeAt(i) - 32);
      } else {
        result += inputString[i];
      }
    }
  
    return result;
  }
  console.log(convertToUpperCase(string));

  //Output = ABCDEF
