/* The Palindrome Detector
In the mystical land of characters and strings, a group of adventurers seeks to identify palindromes—words or phrases that read the same forwards and backwards. As they venture through enchanted forests and magical valleys, they need your help to develop a powerful spell in the form of a JavaScript function that can determine whether a given string is a palindrome.

Write a JavaScript function called isPalindrome that takes a string as input and returns true if it is a palindrome and false otherwise.

A palindrome is case-sensitive and should be read from left to right and right to left in the same way. Spaces and punctuation should be ignored.

Example 1:
Input:
"racecar"

Output:
true

Explanation:
The word "racecar" reads the same forwards and backwards.

Example 2:
Input:
"hello"

Output:
false

Explanation:
The word "hello" does not read the same forwards and backwards.

Example 3:
Input:
"Madam In Eden, I'm Adam"

Output:
true

Explanation:
Ignoring spaces and punctuation, "Madam In Eden, I'm Adam" reads the same forwards and backwards.*/


function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-zA-Z]/g, "");
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isPalindrome('naman0}aman'))

function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-zA-Z]/g, "");
    let revStr = cleanStr.split('').reverse().join('') 
    return cleanStr === revStr
    }