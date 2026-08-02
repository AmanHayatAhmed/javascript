/* Module 1 — Question 2 - Target Concept: Basic if/else statements

Scenario: Ride-Share Fare Eligibility Checker

You're building backend logic for a ride-share app (like Uber/Ola). Before calculating any fare, the system needs to check whether a ride request is even valid — specifically, whether the passenger has enough balance in their wallet to cover a minimum base fare before the driver gets dispatched.*/

function canBookRide (baseFare, walletBalance){
    if (walletBalance >= baseFare){
        return "Ride Confirmed";
    } else {
        return "Insufficient Balance" ;
    }
}
let permission = canBookRide(122, 222);

console.log(permission);

