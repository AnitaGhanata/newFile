 //  1. find length
//  let string = "Anita",len = string.length;
//  console.log(len);
//  toggle case
let m1= "UniVerSity";
let toggled = '';

for (let i = 0; i < m1.length; i++) {
   let char = m1[i];
   toggled += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log(toggled);




