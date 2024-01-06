//Q.15 Write a C program to find last occurrence of a character in a given string.
let chart= "googole";
function lastIndex(chart){
    let a1= "l", last= -1;
        for(let i=0;i<chart.length;i++) {
            if(a1==chart[i]){
                last= i;
            }
        }
    return last;
}
console.log(lastIndex(chart));

//Output = 5