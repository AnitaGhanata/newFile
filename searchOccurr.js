  // search all occurrences of a word in given string.
  let k1= "UniversitySchoolTableSchool";
  let k2 = "School", k3 = " ",found=0;
  for(let i=0;i<k1.length;i++){
    
        let count = 0;
        for(let j = 0;j< k2.length;j++){
               
            if(k1[i+j] == k2[j]){
                count = count + 1;
            
            }
            
        }
        if(count == k2.length){
            k3= i;
            
        }
        else{
            continue;
        }
        console.log(k3); 
    }
     
    