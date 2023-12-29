//11. check palindrome
let A = "noon", n= A.lengthfound=0,ans2=" ";      
for(let i=0;i<n/2;i++){
    if(A[i]!=A[n-i-1]){
        found= 1;
        break;
    }
    }
if(found==0){
    ans2="Palindrome"
    }
else{
        ans2=" not Palindrome"
    }

console.log(ans2);