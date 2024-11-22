class stringOperations {

    public static lengthOfString(string: string): number {
        return string.length;
    }

    public static concat(string1: string, string2:string): string {
        return string1.concat(string2);
    }

    public static cut(baseString: string, subStringToCut: string): string{
        return baseString.replace(subStringToCut, "");
    }

    public static reverseStr(string: string): string{
        return string.split('').reverse().join('');
    }
}

const testString = "Oi mãe eu estou usando Typescript!"

console.log(testString);
console.log(stringOperations.lengthOfString(testString));
console.log(stringOperations.concat(testString, "Typescript até que é interessante!"));
console.log(stringOperations.cut(testString, "mãe "));
console.log(stringOperations.reverseStr(testString));