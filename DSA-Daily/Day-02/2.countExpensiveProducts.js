// Problem 2 — Count Expensive Products, count how many products cost ₹1,000 or more.

function countExpensiveProducts(prices) {
    let count = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] >= 1000){
            count++;
        }

    }
    return count

}

console.log(countExpensiveProducts([200, 1500, 800, 2500, 400, 3000, 32, -21, 0, 111111, 3212, 3200.22]));
