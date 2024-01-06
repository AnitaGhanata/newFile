//Q.12  Write a C program to check whether a string is palindrome or not.
let A = "noon", n= A.length;  
function checkPalindrome(A){
    let found=0,ans2=" ";
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
        return ans2;
}    


console.log(checkPalindrome(A));


//Output = Palindrome