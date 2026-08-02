/*Module 3 — Question 1

Target Concept: Function declarations, arguments, and return values

Scenario: Gym Membership Fee Calculator

You're building backend logic for a gym's membership system. Different membership tiers have different monthly fees, and the system needs to calculate the total cost for a given number of months, with a discount applied if the member commits to a long-term plan.

Requirements:

Write a function calculateMembershipCost that takes:

monthlyFee (number) — cost per month for the chosen tier
numberOfMonths (number) — how many months the member is signing up for

Logic:

Calculate rawTotal = monthlyFee * numberOfMonths
If numberOfMonths is 12 or more, apply a 10% discount to the total (multiply by 0.9)
Return the final total, rounded to 2 decimal places*/

function calculateMembershipCost (monthlyFee, numberOfMonths) {
    if(numberOfMonths >= 12){
        let total = monthlyFee * numberOfMonths
        let discountOf = total - ((total * 10) / 100) 
        return Math.round(discountOf * 100) / 100
    }
    else {
        let totalNoDiscount = monthlyFee * numberOfMonths
        return Math.round(totalNoDiscount * 100) / 100
    } 
    
}

console.log(calculateMembershipCost(59.90, 12))

