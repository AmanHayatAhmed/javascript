// const totalMarks = (marks) => {
//     for(i = 1; i < marks.length; i++){
//         marks[i] + marks[i] 

//     }


// } 
// console.log(totalMarks([45, 80, 67, 90, 55]));

// function calculateTotalBill(prices) {
//     total = 0;
//     for(i = 0; i < prices.length; i++){
//         total = total + prices[i]
//     }
//     return total

// }

// console.log(calculateTotalBill([1200, 500, 250, 800]));


// empty array → loop → condition check → push → return

const findOutOfStock = (stockList) => {
    let result =[];
    for(let i = 0; i < stockList.length; i++){
        if(stockList[i] === 0){
            result.push(i)
        }
        
    }
    return result
}
console.log(findOutOfStock([1,33,0,1,2,0]));

