let s = "hello1234!@#$%",alphabets=0,digits=0,specialcharacters=0;
// for(i=0;i<s.length;i++)  
// {
//     if((s[i]>='A' && s[i]<='Z')|| (s[i]>='a' && s[i]<='z') )
//       alphabets++;
    
//     else if(s[i]>=0 && s[i]<=9)
//      digits++;
//     else
//      specialcharacters++;
     
// }
// console.log(alphabets, digits, specialcharacters);
s= s.toLowerCase();

for(i=0;i<s.length;i++){
    if(s.match(/[a-zA-Z]/g)){
        alphabets++; 
    }
    else if(s.match(/\d/g)){
        digits++;
    }
    else{
        specialcharacters++;
    }
    console.log(alphabets, digits,specialcharacters);  
}
console.log(alphabets, digits,specialcharacters);
// alphabets = s.match(/[a-zA-Z]/g); 
// digits = s.match(/\d/g);
// specialcharacters = s.match(/[^a-zA-Z\d]/g);

     