let m1= "UniVerSity";
let toggled = '';

for (let i = 0; i < m1.length; i++) {
   toggled += m1[i] === m1[i].toUpperCase() ? m1[i].toLowerCase() : m1[i].toUpperCase();
}

console.log(toggled);