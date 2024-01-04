let str= "Javascript"; 

let occurrences = [],searchWord= "a";
let index = str.indexOf(searchWord);


while(index !== -1) {
    occurrences = occurrences.concat(" " + index);
    index = str.indexOf(searchWord, index + 1);
    
}
console.log(occurrences);