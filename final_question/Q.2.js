//Q.2 Write a C program to copy one string to another string
let s1= "Javascript";
function copyString(s1){
    let s2 = "";
    for(let i=0; i<s1.length;i++){
        s2 += s1[i];
    }
    return s2;

}
console.log(copyString(s1));

//Output = Javascript