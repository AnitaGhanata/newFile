//Q.38 Write a C program to remove all extra blank spaces from given string.
let fn ="t og gle";
function removeAllExtraSpaces(fn){
    let fn1 =" ";
    for(let i=0;i<fn.length;i++){
        if(fn[i]==' ')
            {
                    continue;
            }else{
                fn1 = fn1 + fn[i];
            }
        }
        return(fn1);
}
console.log(removeAllExtraSpaces(fn));

// Output = toggle
8
6