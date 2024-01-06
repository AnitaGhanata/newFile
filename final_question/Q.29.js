//Q.29 Write a C program to find last occurrence of a word in a given string.
let text = "Hello I am anita am";
function lastOccWord(text,word){
    let v = text.split(" "),last= -1;
    
    for(let i=0;i<v.length;i++){
        if(v[i]==word ){
            last= i; 
        }
    }
    return last;
}
console.log(lastOccWord(text, 'am'));

//Output = 4

