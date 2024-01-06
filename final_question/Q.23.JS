//Q.23 Write a C program to remove all occurrences of a character from string.
let text = ("hello I am  anita, how are u");
let s = "";
function remove_occ(text,char){
    for(let i = 0; i<text.length; i++){
        if (text[i] !==char){
            s += text[i];
        }
    }
    return s;
}
console.log(remove_occ(text, 'h'));

//Outout = ello I am  anita, ow are u;