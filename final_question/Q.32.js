//Q.32 Write a C program to remove first occurrence of a word from string.
let ba1= "Collegesareunderare"
 
 function removeFirstOccWord(ba1,word){
    let x = "", found = 'false';
    for(let i=0;i< ba1.length;i++){
        let count = 0;
        for(let j = 0;j< word.length;j++){
            if(found == 'true'){
                break;
            }
            if(ba1[i + j] == word[j]){
                count = count + 1;
            }
            if(count == word.length){
                i = i + count + 1;
                found = 'true';
            }
        }
        x = x + ba1[i];
    }
    return (x);
 }
 console.log(removeFirstOccWord(ba1,'are'));

 //Output = Collegesnderare 