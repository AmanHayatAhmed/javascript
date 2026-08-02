/* Module 1 — Question 3 - Target Concept: else-if chains

Scenario: Customer Support Ticket Priority Router

You're building the backend for a SaaS company's customer support system. When a new support ticket comes in, it needs to be automatically tagged with a priority level based on how severe the issue is, so it gets routed to the right team fast.

Requirements:

Write a function getTicketPriority that takes:

severityScore (number) — a score from 1 to 100 representing how critical the issue is (submitted by the automated triage system)

The function should return a string based on these rules:

severityScore of 90 or above → "Critical"
severityScore of 70 to 89 → "High"
severityScore of 40 to 69 → "Medium"
severityScore below 40 → "Low" */

function getTicketPriority (severityScore) {
    if(severityScore >= 90){
        return "Critical";
    } 
    else if(severityScore >= 70){
        return "High";
    }
    else if(severityScore >= 40){
        return "Medium";
    }
    else if (severityScore < 40){
        return "Low"
    }
}

console.log(getTicketPriority(53));
