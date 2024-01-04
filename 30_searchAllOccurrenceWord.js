let str= "i am Hi good what about you and also Hi to"; 

let occurrences = [],searchWord= "Hi";
let index = str.indexOf(searchWord);


while(index !== -1) {
    occurrences = occurrences.concat(" " + index);
    index = str.indexOf(searchWord, index + 1);
    
}
console.log(occurrences);