/*Summing Odd and Even Numbers
In the mystical land of Numerica, numbers hold magical properties that determine the fate of the world. Alaric, the legendary JavaScript wizard, has been tasked with a challenging request from the people of the land. They need a function that can split their number lists into two separate categories—odd and even—and calculate the sum of each.

Your mission, should you choose to accept, is to assist Alaric by crafting a function oddOrEvenSum that can take an array of integers and return the sum of odd numbers and even numbers separately. This powerful function will be instrumental in balancing the magical energies of Numerica.

Will you join Alaric in solving this puzzle and restore harmony to the land?

Write a function oddOrEvenSum(arr) that takes an array of integers as input. The function should return an object with two properties: oddSum: the sum of all odd numbers in the array. evenSum: the sum of all even numbers in the array.*/

function oddOrEvenSum(arr){
    let evenSum = 0
    let oddSum = 0
    for(let i = 0; i < arr.length; i++){
        if((arr[i] % 2) === 0){
            evenSum = evenSum + arr[i]
        }
        else{
            oddSum = oddSum + arr[i]
        }
    }
    return { 
        oddSum: oddSum, evenSum: evenSum 
    };
} 


console.log(oddOrEvenSum([1,23,4,2,7,3,9]))