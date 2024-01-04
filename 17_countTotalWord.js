let t= " Hello my name is Anita ", count= 1;
    for(let i=0;i<t.length;i++){
        if(t[i]==" " && t[t.length-1]==" "){
            t= t.trimStart();
            t=t.trimEnd();
        }
        if(t[i] == " " && t[i+1]!=" ") {
            
            count += 1;
            
        }
    
    }
    console.log(count);
