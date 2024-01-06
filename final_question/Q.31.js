//Q.31 Write a C program to count occurrences of a word in a given string.
let k1= "UniverSchoolsitySchoolTableSchool";
 
 function searchAllOccWord(k1, char){
    let foundCount=0;
    for(let i=0;i<k1.length;i++){
     
        let count = 0;
        for(let j = 0;j< char.length;j++){
            
            if(k1[i+j] == char[j]){
                count = count + 1;
            
            }
            
        }
        if(count == char.length){
            foundCount++;
            
        }
        else{
            continue;
        }
        
    }
     return foundCount;
 }
 console.log(searchAllOccWord(k1, 'School'));


 //Output= 3
