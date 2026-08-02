/*Module 3 — Question 3 Target Concept: Functions executed inside loops

Scenario: Movie Theater Seat Pricing

A movie theater charges different prices per seat based on seat type. You have a helper function that calculates the price for a single seat, and now you need to process an entire array of bookings, calculating and logging the price for each one.

Requirements:

Step 1: Write a function getSeatPrice that takes:

seatType (string) — either "Regular", "Premium", or "VIP"

Returns the price:

"Regular" → 200
"Premium" → 350
"VIP" → 600

Step 2: Write a second function processBookings that takes:

seatTypes (array of strings) — a list of seat types booked, e.g. ["Regular", "VIP", "Premium"]

Using a loop, call getSeatPrice inside the loop for each seat type, and console.log a message like:*/


/*const getSeatPrice = (seatTypes) => {
    for (const seats of seatTypes){
        if(seats == "regular"){
            console.log("Regular seat: ₹200")
        }
        else if (seats == "premium"){
            console.log("VIP seat: ₹600")
        }
        else {
            console.log("Premium seat: ₹350")
        }
        } 

}
getSeatPrice(["regular", "premium", "vip" ])*/


// getSeatPrice (takes a single seatType string, returns a price number)
// "Regular seat: ₹200"
// "VIP seat: ₹600"
// "Premium seat: ₹350"
/*
const getSeatPrice = (seatType) => {
    if (seatType == "Regular"){
        return 200;
    }
    else if(seatType == "VIP"){
        return 600;
    }
    else if(seatType == "Premium"){
        return 350;
    }
}

console.log(getSeatPrice("Premium"))

const processBookings = (seatTypes) {
    for (seat of seatTypes){
        console.log(seat)
    }
}
console.log(processBookings(["VIP", "Regular"])); */


const getVehicleFee =(vehicleType) => {
    if(vehicleType == "Bike"){
        return 20;
    }
    else if(vehicleType == "Car"){
        return 50;
    }
    else if(vehicleType == "Truck"){
        return 100;
    }

}

const processParkingLot = (vehicleTypes) =>{
    for(const vehicle of vehicleTypes){
        let checkPrice = getVehicleFee(vehicle)
        console.log(`${vehicle}: ${checkPrice}`)
    }

}
processParkingLot(["Car", "Van"])
