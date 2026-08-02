/* The JSON Parser
In a realm where data flows seamlessly between systems, the inhabitants require a magical incantation to transform JSON strings into JavaScript objects. This mystical ability will empower them to unlock the potential of their data and facilitate effective communication. Your quest is to craft a JavaScript function that performs this transformation effortlessly!

Your Task: Write a JavaScript function called parseJSON that takes a valid JSON string as input and returns the corresponding JavaScript object. Rest assured, the input JSON string will always be well-formed, allowing you to focus on the parsing process.

Example 1:
Input:
{"name": "John", "age": 30, "isStudent": true}

Output:
{ name: 'John', age: 30, isStudent: true }

Explanation:
The JSON string is converted into an object with properties corresponding to the key-value pairs in the original string.

Example 2:
Input:
{"colors": ["red", "green", "blue"], "length": 3}

Output:
{ colors: ['red', 'green', 'blue'], length: 3 }

Explanation:
The JSON string is parsed into an object containing an array and a numerical value.

*/ 


function parseJSON (string){
    let converted = JSON.parse(string)
    return converted;
}

console.log(parseJSON('{"colors": ["red", "green", "blue"], "length": 3 }'))