let e1= "University", e2= "i",e3="", remove=0;

            for (let i = 0; i < e1.length; i++) 
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

            console.log(e3);
            

