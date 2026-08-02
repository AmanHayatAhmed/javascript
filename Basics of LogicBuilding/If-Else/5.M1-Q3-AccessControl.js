/*Module 1 — Question 4 - Target Concept: Nested if/else conditions (user authorization + subscription verification)

Scenario: Streaming App Content Access Gate

You're building the access-control logic for a streaming platform (like Netflix). Before a user can play a video, the system needs to check two separate things: whether the user is logged in at all, AND whether their subscription is active. These are independent checks — being logged in doesn't mean you're subscribed, and vice versa shouldn't even be possible, but your code needs to check both properly.

Requirements:

Write a function checkPlaybackAccess that takes:

isLoggedIn (boolean) — whether the user is currently authenticated
hasActiveSubscription (boolean) — whether their subscription is currently paid and active

Using nested if/else (not &&), return one of these exact strings:

If NOT logged in → "Please log in to continue"
If logged in but NO active subscription → "Please renew your subscription"
If logged in AND has active subscription → "Access Granted - Enjoy Streaming"*/

function checkPlaybackAccess (isLoggedIn, hasActiveSubscription){
    if(isLoggedIn == true){
        if(hasActiveSubscription == true){
            return "Access Granted - Enjoy Streaming";
        } else {
            return "Please renew your subscription"
            
        }
    } else {
        return "Please log in to continue";
    }

}

console.log(checkPlaybackAccess(false, true));