// 17.remove first occurrence of a character from string
let e1= "University", e2= "i";
console.log(e1.replace("i",""));
//or
let index = e1.indexOf(e2);
    if(index!== -1){
        let findString= e1.slice(0,index)+ e1.slice(index+1);
        console.log(findString);
    }