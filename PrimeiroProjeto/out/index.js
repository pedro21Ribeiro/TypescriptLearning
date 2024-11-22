class stringOperations {
    static lengthOfString(string) {
        return string.length;
    }
    static concat(string1, string2) {
        return string1.concat(string2);
    }
    static cut(baseString, subStringToCut) {
        return baseString.replace(subStringToCut, "");
    }
    static reverseStr(string) {
        return string.split('').reverse().join('');
    }
}
const testString = "Oi mãe eu estou usando Typescript!";
console.log(testString);
console.log(stringOperations.lengthOfString(testString));
console.log(stringOperations.concat(testString, "Typescript até que é interessante!"));
console.log(stringOperations.cut(testString, "mãe "));
console.log(stringOperations.reverseStr(testString));
//# sourceMappingURL=index.js.map