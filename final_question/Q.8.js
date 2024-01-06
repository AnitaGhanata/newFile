//Q.8 Write a C program to find total number of alphabets, digits or special character in a string.
let s = "hello1234!@#$%";
function totalAlphaDigiSpe(s){
    let alphabets=0, digits=0; specialcharacters=0;
    for(i=0;i<s.length;i++)  
{
    if((s[i]>='A' && s[i]<='Z')|| (s[i]>='a' && s[i]<='z') )
      alphabets++;
    
    else if(s[i]>=0 && s[i]<=9)
     digits++;
    else
     specialcharacters++;
     
}
return {alphabets,digits,specialcharacters};

}

console.log(totalAlphaDigiSpe(s));

//Output = 5 4 5