// 18. remove last occurrence of a character from string.
               
let r1= "University", r2= "i";
for (let i = r1.length- 1; i > -1; i--)
        {
            if (r2== r1.charAt(i)) 
            {
                r1= r1.substring(0, i) + r1.substring(i + 1);
                break;
            }
        }
console.log(r1);

