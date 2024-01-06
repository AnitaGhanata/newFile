//Q.24 Write a C program to remove all repeated characters from a given string.
let str ="Univeersitty", char= "";
function removeRepeatedChar(str){
    for (let i = 0; i < str.length; i++) {
        let cnt= 0;
        
        for (let j = 0; j <char.length; j++) {
           
            if (str[i] == char[j]) 

            { 
                continue;
            }
            else{
                cnt++;
                
            }
            
        }
        if(cnt==char.length){
        
                char= char+str[i];
            }
        }
       
       
  return char; 
}
console.log(removeRepeatedChar(str));


//Output = Universty