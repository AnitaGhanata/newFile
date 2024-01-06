//Q.6 Write a C program to convert uppercase string to lowercase.
let string ="ABCDEF";
function convertToLowerCase(string) {
    let result = "";
    
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= 'A' && string[i] <= 'Z') {
        result += String.fromCharCode(string.charCodeAt(i) + 32);
      } else {
        result += string[i];
      }
    }
  
    return result;
  }
  console.log(convertToLowerCase(string));

  //Output = abcdef