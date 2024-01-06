//Q.30 Write a C program to search all occurrences of a word in given string.
let k1= "UniversitySchoolTableSchool";
 
 function searchAllOccWord(k1, char){
    let k3 = " ";
    for(let i=0;i<k1.length;i++){
     
        let count = 0;
        for(let j = 0;j< char.length;j++){
            
            if(k1[i+j] == char[j]){
                count = count + 1;
            
            }
            
        }
        if(count == char.length){
            k3= i;
            
        }
        else{
            continue;
        }
        return(k3); 
    }
 }
 console.log(searchAllOccWord(k1, 'School'));

 //Output = 10
 