// Problem 3: Find the Highest Price in an Array

const findHighestPrice = (prices) => {
    let max = prices[0]; // We have to start comparing from somewhere so we used the 0th index of array, using the 0th index we will compare this to every index
    for(let i=1; i < prices.length; i++){
        const temp = prices[i] // Add all the value of each index inside temp variable 
        if(temp > max){ // check if this current index which is store in temp is greater than max
            max = temp; // If temp(current index value) is greater than update our max with this temp value

        }

    }
    return max

}

console.log(findHighestPrice([12, 13, 14, 72, 1, 21, 92, 1222]))
