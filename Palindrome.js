function isPalindrome(input) {
     const String = input.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    const reverseString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}



console.log(isPalindrome('A man, a plan, a canal, Panama!'));
console.log(isPalindrome('Race car')); 
console.log(isPalindrome('Hello, world!')); 

