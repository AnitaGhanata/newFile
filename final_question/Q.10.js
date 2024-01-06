//Q.10 Write a C program to count total number of words in a string.

let t= " Hello my name is Anita ";

// trimstart method
function trimStart(t){
    let t2 = " ",startIndex= 0;
    
    for (let i = 0; i< t.length; i++) {
        if(t[i]==" "){
            continue;
        }
        else{
            t2=t2+t[i];
        }
        
    }
    return t2;
}
//store trimstart in s variable
let  s= trimStart(t);
    
// trimEnd  method 
    function trimEnd(t){
        
        for (let i = t.length-1; i>=0; i--) {
            if (t[i] != " ") {
                t2= t.substring(0,i+1);
                    break;
                }
                
            }
            return (t2);
    }
let m= trimEnd(t)

// for count words
function countWords(t){
    let count=1;
    for(let i=0;i<t.length;i++){
        if(t[i]==" " && t[t.length-1]==" "){
            t= t.trimStart(t);
            t=t.trimEnd(t);
        }
        if(t[i] == " " && t[i+1]!=" ") {
            
            count += 1;
            
        }
    
    }

return count;
}
   
    console.log(countWords(t));

//Output = 5
