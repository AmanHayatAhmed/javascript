/*The Array Rotator
In the enchanting land of cyclical arrays, the villagers are looking for a powerful spell to rotate their data arrays. This magical ability to shift array elements by a given number of positions to the right will open doors to new possibilities and insights. Join them in their quest by creating a JavaScript function that performs this transformation!

Your Task: Write a JavaScript function called rotateArray that takes an array of integers and a positive integer k as inputs. The function should rotate the array k positions to the right, wrapping around any overflow.

Example 1:
Input:
[1, 2, 3, 4, 5]

2

Output:
[4, 5, 1, 2, 3]

Explanation:
Rotating the array [1, 2, 3, 4, 5] by 2 positions to the right moves 4 and 5 to the front.

Example 2:
Input:
[7, 8, 9]

5

Output:
[ 8, 9, 7 ]

Explanation:
Rotating the array [7, 8, 9] by 5 positions to the right is equivalent to rotating it by 2 positions (since 5 % 3 = 2). */

function rotateArray(arr, point){
  lastArr = arr.slice(point)
  console.log(lastArr)

  mixArr = lastArr + arr
  console.log(mixArr)
  
  delArr = mixArr.slice(point)
  return mixArr - delArr


}
console.log(rotateArray(['aman','zyan', 'kaala', 'peela' ], 2))

function rotateArray(arr, point){
  lastArr = arr.slice(point)
  console.log(lastArr)

  mixArr = lastArr + arr
  console.log(mixArr)
  
  delArr = mixArr.slice(point)
  return mixArr - delArr


}
console.log(rotateArray(['aman','zyan', 'kaala', 'peela' ], 2))