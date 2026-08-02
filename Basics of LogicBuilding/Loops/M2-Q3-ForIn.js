/* Module 2 — Question 3

Target Concept: for...of loops - Scenario: Restaurant Order Queue Processor

You're building the kitchen display system for a restaurant. Orders come in as a list, and the kitchen needs to process them one by one, announcing which dish is currently being prepared.

Requirements:

Write a function processOrders that takes:

orders (array of strings) — a list of dish names in the order they were received

Using a for...of loop (not a standard for loop — this is the point of this question), the function should console.log a message for each dish in the format:

"Now preparing: Pasta Carbonara"*/

function processOrders(newOrder){
    // for [each item] of [this array]
    for(const dishes of newOrder){
        console.log("Now preparing: "+ dishes)

    }

} 
processOrders(["Biryani", "Chicken Soup", "Apple Vine"])