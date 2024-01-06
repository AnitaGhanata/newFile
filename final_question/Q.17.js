//Q.17 Write a C program to count occurrences of a character in given string.
let qus = "RajaRamRaja";
function countOccCh(qus,char){
    let total=0;
      for(let i = 0;i < qus.length; i++) {
            if(char == qus[i]){
                total += 1;
            }
        }
        return total;
}
console.log(countOccCh(qus,"R"));


//output = 3