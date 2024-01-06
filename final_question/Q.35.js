//Q.35 Write a C program to trim leading white space characters from given string.
let j1 = "   University", j2 = " ";  
function trimLeading(j1){
    for (let i = 0; i< j1.length; i++) {
        if(j1[i]==" "){
            continue;
        }
        else{
            j2=j2+j1[i];
        }
        
    }
    return j2;
}    
console.log(trimLeading(j1));
console.log(j1.length);
console.log(j2.length);
    
//Output = University
13
11
