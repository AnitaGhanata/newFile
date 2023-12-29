let w1 = "University ";
let w2 = " ",found=0;
for (let i = 0; i<w1.length; i++) {
        if(found==1){
            break;
        }
        if(w1[i]!=" "){
           
            w2=w2+w1[i];
            console.log(w2[i]);
        }
        if(w1[i]== " "){
            found=1;
           console.log("1");
        }
       
        
    }
    
    console.log(w2);
    console.log(w1.length);
    console.log(w2.length);