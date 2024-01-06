// Q.1 Write a C program to find length of a string
let string= "AnitaRawat";
function lengthOfString(string){
    let newLength=0;
    for(let i=0;i<string.length;i++){
        newLength= newLength + 1;
    }
    return newLength;
}
console.log(lengthOfString(string));

//Output = 10