//Q.25 Write a C program to replace first occurrence of a character with another in a string.
let n1= "University";
    
function replaceFirstOcurCha(n1,find, replace){
    let n4=" ";
    for(let i=0;i<n1.length;i++){
        if(find==n1[i]){
            n4= n1.substring(0, i) + replace + n1.substring(i + 1);
            break;
            } 
       
     } 
     return n4;
}
console.log(replaceFirstOcurCha(n1,'i', 'r'))

//Output = Unrversity;


    
// substring inbuilt method

// let text = "hiiamanita";
// function firstOccWord(text, char){
//     //let v = text.split(" ");
//     for(let i = 0; i<text.length; i++){
//         if(v[i]==char ){
//             return i;

//         }
//     }
// }
// console.log(firstOccWord(text, 'am'));

// let char= "loweorcase", char1 = "o", s="", remove=0,replace ="t";
//      for(let i=0;i<char.length;i++){
//         if(char[i] != char1 || remove){ 
//             s=s+char[i];

           
                
//         }
//         else{
//             char[i] =replace;
//             console.log(char[i]);
//             remove=1;
//         }
//         s=s+char[i];
//     }
   

//     console.log(s);

    



