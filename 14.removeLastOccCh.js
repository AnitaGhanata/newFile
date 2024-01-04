let f1= "University", f2= "i";
let index1 = f1.lastIndexOf(f2);
    if(index1!== -1){
        let findString= f1.slice(0,index1)+ f1.slice(index1+1);
        console.log(findString);
    }

