// 20. find first occurrence of a word in a given string
let m1= "UniversitySchoolTableSchool";
  let m2 = "School", m3 = " ",found1=0,count=0;
  for(let i=0;i<m1.length;i++){
    
        let count = 0;
        for(let j = 0;j< m2.length;j++){
             if(found1==1){
                break;
             }  
            if(m1[i+j] == m2[j]){
                count = count + 1;
            
            }
            if(count == m2.length){
                m3= i;
                found1= 1;
            
            }   
        }
       
        
    }
    console.log(m3); 




//16. search all occurrences of a char in string
let q1 = "googloe"
let q2= "g", q3 = " ";
  for(i=0;i< q1.length;i++)
    {
        if(q2 == q1[i]) {
           q3= i; 
           
            
        }
        console.log(q3);
        
    }



    // 19. remove all occurrences of a character from string.
    let t1= "University";
    let t2= "i",t3=" ";

    for (let i = 0; i < t1.length; i++) 
    {
        if(t2==t1[i]){ 
            console.log(t1[i]);
            i=i+1;//3
            
        }
        t3=t3+t1[i];
    }
    console.log(t3);

   
    // 13. find first occurrences of a character in given string

    let char= "lowercase", char1 = "o", ans3 = " ";
    for(let i=0;i<char.length;i++){
       if(char1==char[i]){
           ans3 = i;
           break;
       }
      
    } 
    console.log(ans3);

// 14. find last occurrences of a char in given string
let chart= "googole", a1= "o", last= -1;
for(let i=0;i<chart.length;i++) {
    if(a1==chart[i]){
        last= i;
    }
}
console.log(last);


 // 17.remove first occurrence of a character from string.

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

 // 18. remove last occurrence of a character from string.
            
 let f1= "University", f2= "i",f3="", remove1=0, e4 ="";

 for (let i = f1.length-1; i >= 0; i--) 
 {
     
     if(f1[i] != f2 || remove1){ 
         f3=f3+f1[i];
         console.log(e3);
         //remove = 1;     
     }
     else{
         remove=1;
     }
     
 }
 for (let i = f3.length-1; i >= 0; i--){
     f4=f4+f3[i];
 }
 

 console.log(f4);


 // 23. remove first occurrence of a word from string.
 let ba1= "Collegesareunderare"
 let ba2 = "are",x = "", found = 'false';
 for(let i=0;i< ba1.length;i++){
     let count = 0;
     for(let j = 0;j< ba2.length;j++){
         if(found == 'true'){
             break;
         }
         if(ba1[i + j] == ba2[j]){
             count = count + 1;
         }
         if(count == ba2.length){
             i = i + count + 1;
             found = 'true';
         }
     }
     x = x + ba1[i];
 }
 console.log(x);

//remove last occurrence of a word in given string.
 let text= "Coarellegesareunderar";
 let text1 = "are", text2 = "",founds = 'false';
 for(let i=text.length-1;i>=0;i--){
     let count = 0, xyz = 0;
     for(let j=text1.length-1;j>=0;j--){
         if(founds == 'true'){
             break;
         }
         if(text[i - xyz] == text1[j]){
             count = count + 1;
         }
         if(count == text1.length){
             i = i - count;
             founds = 'true';
         }
         xyz++;
     }
    text2= text2+ text[i];
    
 }
 console.log(text2)
 let text_z = "";
 for(let k=text2.length-1;k>=0;k--){
     text_z = text_z + text2[k];
 }
 console.log(text_z);





 // remove all repeated character from string.
    let ct= "Univeersitty";
    let obj=" ";
    
    for (let i = 0; i < ct.length; i++) {
        let cnt= 0;
        
        for (let j = 0; j <obj.length; j++) {
           
            if (ct[i] == obj[j]) 

            { 
                continue;
            }
            else{
                cnt++;
                
            }
            
        }
        if(cnt==obj.length){
        
                obj= obj+ct[i];
            }
        }
       
       
  console.log(obj); 


  //count frequency of each character in a string.
  let c1 = "University";
  let freq2=[];     
     for(let i = 0; i <c1.length; i++) 
     {  
         freq2[i] = 1;  
         for(let j = i+1; j<c1.length; j++) 
         {  
             if(c1[i] == c1[j])
             {  
                 freq2[i]++;  
             }  
         }  
     }            
     let c2= c1[0];
     for(let i = 0; i <freq2.length; i++) 
     {  
         if(c1[i] != ' ' && c1[i] != '0') {
             c2= freq2[i];
         } 
         console.log(c1[i] + "  " + c2);   
     }  

//find lowest frequency character in a string
let as1= "rsrirsgngnttg"; 
let minimum= as1.charAt(0),freq1=[];

    for(i = 0; i < as1.length; i++) {  
        freq1[i] = 1;  
            for(j = i+1; j < as1.length; j++) {  
                if(as1[i] == as1[j]) {  
                    freq1[i]++;
                    
                         
                }
            }
        } 
        let min = freq1[0];       
        for(i = 0; i <freq1.length; i++) { 
            if(min > freq1[i]&& freq[i] != '0') { 
                 
                min = freq1[i];

                minimum = as1[i];  
    }  
}
    console.log(minimum);


//find highest occurrences of a char in string
let gh = "srirgginttg"; 
let maximum= gh[0], freq=[];
    for(i = 0; i < gh.length; i++) {  
        freq[i] = 1;  
            for(j = i+1; j < gh.length; j++) {  
                if(gh[i] == gh[j]) {  
                    freq[i]++;  
                        
                }
            }
        } 
let max= freq[0];
for(i = 0; i <freq.length; i++) {  
        if(max < freq[i]) {  
            max = freq[i];  
            maximum = gh[i];  
        }  
    }  
        
    console.log(maximum);


//remove all extra blank spaces from given string
let fn ="t og gle";
let fn1 =" ";
for(let i=0;i<fn.length;i++){
    if(fn[i]==' ')
        {
                continue;
        }else{
            fn1 = fn1 + fn[i];
        }
    }
    console.log(fn1);



// trim leading white space characters from given string
let j1 = "   University";
    let j2 = " ";startIndex= 0;
    
    for (let i = 0; i< j1.length; i++) {
        if(j1[i]==" "){
            continue;
        }
        else{
            j2=j2+j1[i];
        }
        
    }
    console.log(j2);



 // search all occurrences of a word in given string.
 let k1= "UniversitySchoolTableSchool";
 let k2 = "School", k3 = " ";
 for(let i=0;i<k1.length;i++){
     
         let count = 0;
         for(let j = 0;j< k2.length;j++){
             
             if(k1[i+j] == k2[j]){
                 count = count + 1;
             
             }
             
         }
         if(count == k2.length){
             k3= i;
             
         }
         else{
             continue;
         }
         console.log(k3); 
     }


//replace all occurrences of a character with another in a string

let g1= "University";
let g2= "i", g3 ="r", g4 =" ";
for(let i=0;i<g1.length;i++){
    if(g1[i]==g2){
       g4= g4+ g3;
        } 
    else{
        g4= g4+ g1[i];
    }
    
   
 } 
  console.log(g4);  


//  toggle case
let m1= "UniVerSity", toggled="";
    
     
for(let i=0;i<m1.length;i++){
   console.log(m1)
   if(m1[i]==(m1[i].toUpperCase())){
       toggled+= m1[i].toLowerCase();
       
   }
   else{
       toggled+=m1[i].toUpperCase();
       
   }
}
console.log(toggled);

    