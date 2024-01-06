//Q.9 Write a C program to count total number of vowels and consonants in a string.let p= "NotteBook",vowels = 0, consonants=0;
   
let p= "NoteBook";
function countVowelsConsonants(p){
    let vowels = 0, consonants=0;len1= p.length;
    for(let i=0;i<len1;i++){
        if(p[i]=="a"|| p[i]=="e"|| p[i]=="i"|| p[i]=="o"|| p[i]=="u"){
            vowels += 1;
        }
        else{
            consonants +=1;
        }
    }
    return {vowels,consonants}
}
console.log(countVowelsConsonants(p));

//Output = { vowels: 4, consonants: 4 }