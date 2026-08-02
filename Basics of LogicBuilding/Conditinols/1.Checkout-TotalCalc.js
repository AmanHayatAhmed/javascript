// The Scenario:
// Calculate the exact final amount a customer owes before charging their credit card.
// Requirements:
// Create variables for: basePrice (120), discountPercentage (15), and shippingFee (10).
// Calculate the discount amount in dollars.
// Calculate the subtotal (price after discount, before shipping).
// Calculate the final total (subtotal plus shipping).
// Output the final total using console.log().
// Expected Output: 112

// let basePrice = 657;
// let discountPercentage = 15;
// let shippingFee = 10;

// // Calculate the discount amount in dollars.
// let discountAmt = basePrice * (discountPercentage / 100);
// console.log((discountAmt + shippingFee) +  "$ OFF ON: " + basePrice + "$");

// // Calculate the subtotal (price after discount, before shipping).

// let subTotal = basePrice - discountAmt;
// console.log(subTotal + "$ This is the ammount after discount on " + basePrice + "$ with no shipping applied." );

// // agar subTotal > 100 then shippingfee is 0
// // else shippingFee is 10

// if (subTotal >= 100){
//     console.log('Hurry! you have unlocked Free-Shipping on your order, and your total is:' + subTotal);
//     shippingFee = 0;

// }
// else {
//     console.log('opps! you have not unlocked Free-Shipping');
//     shippingFee = 10;
// }

// // Calculate the final total (subtotal plus shipping).

// let total = subTotal + shippingFee;
// console.log("The Final amount with shiping is: $" + total);



function calculateSubtotal (pricePerItem, quantity, shippingFee){
    let total = pricePerItem * quantity + shippingFee;
    return Math.round(total * 100 ) / 100;

}

calculateSubtotal(10.20, 3, 12)