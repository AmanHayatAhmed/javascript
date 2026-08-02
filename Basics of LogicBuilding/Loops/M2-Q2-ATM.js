/*Module 2 — Question 2 - Target Concept: while loops

Scenario: ATM Cash Withdrawal Dispenser

You're building the logic for an ATM's cash dispenser. When a customer requests a withdrawal, the machine can only dispense one $100 note at a time (this is a simplified simulation of real ATM hardware, which physically counts notes one by one). The machine needs to keep dispensing notes until the requested amount is fully paid out, then stop.

Requirements:

Write a function dispenseCash that takes:

requestedAmount (number) — the amount the customer requested, guaranteed to be a positive multiple of 100 (e.g., 200, 500, 1000)

Using a while loop (not a for loop), the function should:

Keep a running total of how much has been dispensed so far, starting at 0
On each iteration, dispense one $100 note (add 100 to the running total) and console.log a message like "Dispensed $100. Total so far: $100"
Stop once the running total equals requestedAmount*/

function dispenseCash (requestedAmount){
    let i = 0;
    while (i < requestedAmount){
        i+=100;
        console.log(`Dispensed $100. Total so far: ${i}`);
    }

}
dispenseCash(300)