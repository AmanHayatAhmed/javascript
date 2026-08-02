/* Module 2 — Question 1 - Target Concept: Standard for loops

Scenario: Warehouse Inventory Batch Scanner

You're building backend logic for a warehouse management system. Workers scan barcodes as they process a batch of packages, and the system logs each scan in order. You need a function that takes the total number of packages in a batch and simulates the scanning log — printing which package number is currently being scanned, one at a time, starting from package #1.

Requirements:

Write a function scanBatch that takes:

totalPackages (number) — how many packages are in this batch

Using a standard for loop, the function should console.log a message for each package in the format:

"Scanning package #1"
"Scanning package #2"
...

all the way up to totalPackages. The function doesn't need to return anything (it's just logging, like a real scanner terminal would).*/

function scanBatch(totalPackages){
    for(let i = 1; i <= totalPackages; i++){
        console.log(`Scanning package #${i}`);

    }

}
scanBatch(33)