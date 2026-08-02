/*Copies of String
Alice, a young programmer, frequently needs to repeat specific strings multiple times in her code. Manually copying the string is tedious, so she wants a JavaScript function that will do this for her. The function should take a string and a positive number as inputs and return a new string with the original string repeated the specified number of times. This will help Alice save time and make her code more efficient and readable.

Problem Requirements:

Function Name: string_copies

Parameters:

str (string) - the string to be repeated.

n (number) - the number of times to repeat str.

Return:

A new string consisting of str repeated n times. If n is less than or equal to 0, return an empty string.

Note

To try your written code, try input in below format.


hello
3
Where above mentioned are str and n.

Example 1:
Input:
str = "hello";

num = 3;

Output:
hellohellohello

Explanation:
The string "hello" is repeated 3 times, resulting in "hellohellohello".

*/

// logic - print string, as given TimeRanges, and if num is 0 so empty


const string_copies = (string, number) => {
    if (number <= 0){
        console.log(`""`)
    }

    else if (number >= 1){
        console.log(string.repeat(number))
    }
}
string_copies('i am aman', 10)