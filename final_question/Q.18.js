//Q.18 Write a C program to find highest frequency character in a string.
let str = "nnitaasdnndgkkdespanit";

function highestFreq(str) {
    let max = 0, maxchar = "";
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] == element) {
                count++;
            }
        }
        if (count > max) {
            max = count
            maxchar = elem
        }
    }
    return maxchar;
}
console.log(highestFreq(str));

//Output = n