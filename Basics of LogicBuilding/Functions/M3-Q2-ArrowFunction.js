/*Module 3 — Question 2

Target Concept: Arrow functions

Scenario: Food Delivery Distance Fee Calculator

A food delivery app charges a small fee per kilometer for delivery.

Requirements:

Write an arrow function called calculateDeliveryFee, assigned to a const:

Takes distanceKm (number) and ratePerKm (number)
Returns distanceKm * ratePerKm, rounded to 2 decimal places*/

// const add = (a, b) => a + b; eg: const functionname = (parameters) => {/*Block of code*/}
// Syntax of Arrow-function/Fat-Arrow-function.

const calculateDeliveryFee = (distanceKm, ratePerKm) => {
    let total = distanceKm * ratePerKm;
    return Math.round(total * 100) / 100
}

console.log(calculateDeliveryFee(2.33562,30))