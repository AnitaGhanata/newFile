//Q.36 Write a C program to trim trailing white space characters from given string.

let w1 = "University ";
let w2 = " ";
function trimTrailing(w1){
    
for (let i = w1.length-1; i>=0; i--) {
    if (w1[i] != " ") {
        w2= w1.substring(0,i+1);
            break;
        }
        
    }
    return w2;

}
console.log(trimTrailing(w1));
console.log(w1.length);
console.log(w2.length);

//Output = University
11
10



