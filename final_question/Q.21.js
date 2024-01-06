//Q.21 Write a C program to remove first occurrence of a character from string.
let v = "University";
function removeFirstOcc(v,char){
    let s="", remove=0;
    for (let i = 0; i < v.length; i++)

            {
                
                if(v[i] != char || remove){ 
                    s=s+v[i];
                   
                        
                }
                else{
                    remove=1;
                }
            }

            return s;
}
console.log(removeFirstOcc(v, 'i'));

//Output = Unversity