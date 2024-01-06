//Q.28 Write a C program to find first occurrence of a word in a given string.
let text = "hi i am anita";
function firstOccWord(text, word){
    let v = text.split(" ");
    for(let i = 0; i<v.length; i++){
        if(v[i]==word ){
            return i;

        }
    }
}
console.log(firstOccWord(text , 'am'));



//Output = 2

