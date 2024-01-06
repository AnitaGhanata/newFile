//Q.33 Write a C program to remove last occurrence of a word in given string.
let text= "Coarellegesareunderar";
 
function removeLastOccWord(text, word){
    let text2 = "",founds = 'false';
    for(let i=text.length-1;i>=0;i--){
        let count = 0, xyz = 0;
        for(let j=word.length-1;j>=0;j--){
            if(founds == 'true'){
                break;
            }
            if(text[i - xyz] == text1[j]){
                count = count + 1;
            }
            if(count == word.length){
                i = i - count;
                founds = 'true';
            }
            xyz++;
        }
       text2= text2+ text[i];
    }
   
    let text_z = "";
    for(let k=text2.length-1;k>=0;k--){
        text_z = text_z + text2[k];
    }
    return text_z;
}
console.log(removeLastOccWord(text, 'are'));
 

// Output = Coarellegesunderar