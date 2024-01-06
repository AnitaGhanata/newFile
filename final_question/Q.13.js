//Q.13  Write a C program to reverse order of words in a given string.
let cap = "Hello my name is Anita", v = " ";
function reverseWord(cap){
    for(let i=0;i<cap.length;i++){
        v = cap[i]+v; 
        
    }
    return v;
}
console.log(reverseWord(cap));

//Output = atinA si eman ym olleH 