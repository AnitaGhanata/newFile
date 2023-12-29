// 12. reverse order of wordsin string

let cap = "Hello my name is Anita", reverse = "";
for(let i=0;i<cap.length;i++){
       if(i==cap.length-1){
              reverse = cap[i]+reverse;
              
              
       }
       else{
              reverse= "" + cap[i] + reverse;
             

} 
       }

   console.log(reverse);
      