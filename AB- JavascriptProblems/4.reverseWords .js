/* The Word Reverser
In a fantastical realm where language holds the key to untold mysteries, the inhabitants are captivated by the art of word manipulation. They seek your assistance in crafting a powerful JavaScript function that can reverse the order of words in a given sentence. This magical transformation will reveal hidden meanings and grant new perspectives to their beloved phrases.

Your mission is to write a function named reverseWords that takes a sentence (a string composed of multiple words separated by spaces) as input. This function should return the same sentence with the order of words reversed, allowing the people to rediscover their expressions in an enchanting way.

Will you wield your coding skills to unlock the secrets of language for the realm?

Example 1:
Input:
"Hello, world!"

Output:
"world! Hello,"

Explanation:
The function takes the sentence "Hello, world!" and reverses the order of words, resulting in "world! Hello,".

Example 2:
Input:
"The quick brown fox"

Output:
"fox brown quick The"

Explanation:
Reversing the order of words in the sentence transforms "The quick brown fox" into "fox brown quick The".

*/

function reverseWords(sentence){
    revSent = sentence.split(' ').reverse().join(' ')
    return revSent

}
console.log(reverseWords('i am aman ahmed'));