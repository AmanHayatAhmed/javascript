/*The Nested Object Finder
In the realm of complex data structures, navigating through layers of nested objects can be a daunting task. As data architects, you are tasked with creating a powerful JavaScript function that can unveil the treasures hidden within these intricate hierarchies. Your mission is to build a function that can traverse a nested object and find the value of a specified property based on a dot-separated path.

Your Task: Write a JavaScript function called findNestedValue that takes an object and a string representing the property path as inputs. This property path will indicate the hierarchy of nested properties you need to explore. The function should return the corresponding value if found. If the property does not exist, or if any intermediate property is not an object, the function should return null.

Example 1:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.name

Output:
John

Explanation:
The function successfully retrieves the value of the name property from the person object.

Example 2:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.address.city

Output:
New York

Explanation:
The function navigates through the nested properties to find the city within address.

Example 3:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.address.postalCode

Output:
null

Explanation:
The postalCode property does not exist, leading to a return value of null.

*/