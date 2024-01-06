//Q.7  Write a C program to toggle case of each character of a string.
let m1= "UniVerSity";
function toggle(m1){
    let toggled="";
     for(let i=0;i<m1.length;i++){
        
        if(m1[i]==(m1[i].toUpperCase())){
            toggled+= m1[i].toLowerCase();
            
        }
        else{
            toggled+=m1[i].toUpperCase();
            
        }
     }
     return toggled
}   

     console.log(toggle(m1));


//Output = uNIvERsITY