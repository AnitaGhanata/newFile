//Q.20 Write a C program to count frequency of each character in a string.
let text = ("Hi anita how are u");
function countFre(text,char){
    let count = 0;
    for(let i =0; i<text.length;i++){
        if(text[i] == char){
            count += 1;
        } 
    }
    return count;
}

console.log(countFre(text,'i'));


//Output = 2