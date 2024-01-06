//Q.26 Write a C program to replace last occurrence of a character with another in a string.
let chart= "googole";
function replaceLastOccCh(chart,a,replace){
    let last= -1, v4="";
    for(let i=0;i<chart.length;i++){
        if(a==chart[i]){
            last=i;
            v4= chart.substring(0, last) + replace + chart.substring(last + 1);
            
            } 
       
     } 
     return v4;
    }
console.log(replaceLastOccCh(chart,'o','r'));


//Output = googrle

