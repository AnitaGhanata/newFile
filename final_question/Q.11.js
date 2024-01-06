//Q.11 Write a C program to find reverse of a string.
let d = "Facebook";
 function reverseString(d){
    let rev=" ";
    for(let i=d.length-1;i>=0;i--){
        rev+= d[i];
    }
    return(rev);
 }   

console.log(reverseString(d));


//Output = koobecaF