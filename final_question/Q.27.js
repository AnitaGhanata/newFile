//Q.27 Write a C program to replace all occurrences of a character with another in a string.
let g1= "University";
function replaceAllOccr(g1, find, replace){
    let g4 =" ";
    for(let i=0;i<g1.length;i++){
        if(find == g1[i]){
        g4= g4+ replace;
        }

        else{
            g4= g4+ g1[i];
        }
        
    
    } 
    return g4;    
}
console.log(replaceAllOccr(g1, 'i', 'r'));


//Output =  Unrversrty

  