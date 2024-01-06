//Q.19 Write a C program to find lowest frequency character in a string.
let str = "nnitaasdnndgggkkdeeeespanit";

function lowestFreq(str) {
    let min = str.length+1, minchar = "";
    for (let i = 0; i < str.length; i++) {
        let findElement = str[i], count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] == findElement) {
                count++;
            }
        }
        if (count < min) {
            min = count;
            minchar = findElement;
        }
    }
    return minchar;
}
console.log(lowestFreq(str));

//Output = p