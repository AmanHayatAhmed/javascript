// Problem: Write a function that counts how many students passed, assuming a passing mark is 35.

function countPassedStudents(marks) {
    let count = 0; // Made a variable which will collect number of students
    
    for(let i = 0; i < marks.length; i++){ 
        if(marks[i] >= 35){ // Check if any index of marks are greater or equal to 35 or not.
            count = count + 1 // if the condition is true then update value by 1 into count. 
        }    
    }
    return count
}

console.log(countPassedStudents([45, 80, 32, 90, 55, 25, 89, 1, 21, 0, -1]));
