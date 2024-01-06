// Q.22 Write a C program to remove last occurrence of a character from string.
let s = "hey how was your day today ";
function removeLastOccurrence(s, char) {
    let result = "", lastIndex = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === char) {
            lastIndex = i;
            break;
        }
    }
    if (lastIndex !== -1) {
        for (let i = 0; i < s.length; i++) {
            if (i !== lastIndex) {
                result += s[i];
            }
        }
    } 
    return result;
}
console.log(removeLastOccurrence(s, "h"));

//Output = hey ow was your day today