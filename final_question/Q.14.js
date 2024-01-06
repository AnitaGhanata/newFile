//Q.14 Write a C program to find first occurrence of a character in a given string.
let char= "lowercase";
function firstOccCha(char){
    let char1 = "e", ans3 = " ";
     for(let i=0;i<char.length;i++){
        if(char1==char[i]){
            ans3 = i;
            break;
        }
       
     } 
     return ans3;
}
console.log(firstOccCha(char));

//Output = 3
