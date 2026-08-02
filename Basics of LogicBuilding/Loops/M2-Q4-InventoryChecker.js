/* Module 2 — Question 4 - Target Concept: for...in loops

Scenario: Product Inventory Stock Checker

You're building a simple internal tool for a store manager. They have an inventory object where each key is a product name and each value is the current stock count. The manager wants a quick console report listing every product alongside its stock count.

Requirements:

Write a function printInventoryReport that takes:

inventory (object) — keys are product names (strings), values are stock counts (numbers)

Using a for...in loop (this loop is designed specifically for object keys, unlike for...of which is for array values), the function should console.log a message for each product in the format:*/

function printInventoryReport (inventory) {
    for(const stock in inventory){
        console.log( `${stock}: ${inventory[stock]} units in stock`);


    }
    
}
printInventoryReport({ Keyboard: 15, Mouse: 42, Monitor: 8 })