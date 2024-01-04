let p= "NotteBook",vowels = 0, consonants=0;

// let count = p.match(/[aeiou]/gi).length;

    
//     console.log(count);

p = p.toLowerCase();
let  vowels1 = /[aeiou]/;
for (let i=0;i<p.length;i++) {
  if (p[i].match(vowels1)) {
    vowels++;
  } 
  else if (p[i].match(/[a-z]/)) {
    
    consonants++;
  }
}
console.log(vowels, consonants);











