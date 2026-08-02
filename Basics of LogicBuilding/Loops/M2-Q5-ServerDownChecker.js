/*Module 2 — Question 5 Target Concept: Loop control (break, continue) — status polling scenario

Scenario: Server Health Check Poller

You're building a monitoring script that checks a list of server status codes coming in from a health-check ping. The script should:

Skip logging any server that's still "pending" (not ready yet, don't waste time reporting it)
Stop checking immediately the moment it finds a server that's "down" (critical — alert and stop, don't bother checking the rest)
Otherwise, log that the server is "healthy"

Requirements:

Write a function checkServerHealth that takes:

statuses (array of strings) — each element is "healthy", "pending", or "down"

Using a for...of loop with break and continue:

If status is "pending" → skip it (use continue)
If status is "down" → log "CRITICAL: Server down. Halting checks." and stop the loop entirely (use break)
If status is "healthy" → log "Server OK" */

function checkServerHealth (statuses){

    for(const CurrentStatus of statuses){
        if(CurrentStatus == "pending"){

            continue;
        }
        else if(CurrentStatus == "down"){
            console.log("CRITICAL: Server down. Halting checks.")
            break;
        }
        else if(CurrentStatus == "healthy"){
            console.log("Server OK")
            continue;
        }
    }

}

checkServerHealth(["pending", "pending", "healthy", "down", "pending", "down"])