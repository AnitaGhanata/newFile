let e1= "University", e2= "i",e3="", remove=0, e4 ="";

            for (let i = e1.length-1; i >= 0; i--) 
            {
                
                if(e1[i] != e2 || remove){ 
                    e3=e3+e1[i];
                    console.log(e3);
                    //remove = 1;     
                }
                else{
                    remove=1;
                }
                
            }
            for (let i = e3.length-1; i >= 0; i--){
                e4=e4+e3[i];
            }
            

            console.log(e4);