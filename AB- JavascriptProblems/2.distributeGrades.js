/* The Scholar's Challenge: Distributing Grades in the Kingdom
In the great kingdom of Academica, where wisdom and knowledge were revered above all, the scholars devised a system to evaluate the performance of their students. Every student would be assigned a letter grade based on their score, representing their academic prowess.

The royal council of scholars reached out to a talented JavaScript sorcerer with a special task. They needed a function that could analyze the scores of students and distribute the corresponding letter grades—"A", "B", "C", "D", or "F"—based on specific score ranges.

Your mission is to assist the sorcerer by writing the distributeGrades function. This function will evaluate an array of numerical scores and return an object showing how many students received each grade. Can you bring clarity to the kingdom's grading system and ensure every student's achievements are recognized?

Write a function distributeGrades(scores) that takes an array of numerical scores as input and returns an object with the count of grades distributed as follows: Scores from 90 to 100 receive an "A". Scores from 80 to 89 receive a "B". Scores from 70 to 79 receive a "C". Scores from 60 to 69 receive a "D". Scores below 60 receive an "F".

Example 1:
Input:
[85, 92, 78, 65, 95]

Output:
{ A: 2, B: 1, C: 1, D: 1, F: 0 }

Explanation:
Two students received an A (92, 95), one received a B (85), one received a C (78), one received a D (65), and none failed (F).

Example 2:
Input:
[76, 81, 60, 55, 88}

Output:
{ A: 0, B: 2, C: 1, D: 1, F: 1 }

Explanation:
Two students received a B (81, 88), one received a C (76), one received a D (60), and one failed with an F (55).

Example 3:
Input:
[92, 95, 87, 60, 72]

Output:
{ A: 2, B: 1, C: 1, D: 1, F: 0 }

Explanation:
Two students received an A (92, 95), one received a B (87), one received a C (72), and one received a D (60).

*/

function distributeGrades(scores){
    let A = []; //90 to 100 receive an "A"
    let B = []; //80 to 89 receive a "B"
    let C = []; //70 to 79 receive a "C"
    let D = []; //60 to 69 receive a "D"
    let F = []; //Scores below 60 receive an "F".

    for(i=0; i < scores.length; i++){
        if(scores[i] >= 90){
            A.push(i)
        }
        else if(scores[i] >= 80){
            B.push(i)
        }
        else if(scores[i] >= 70){
            C.push(i)
        }
        else if(scores[i] >= 60){
            D.push(i)
        }
        else if(scores[i] < 60){
            F.push(i)
        }
    }
    return {
        A : A.length,
        B : B.length,
        C : C.length,
        D : D.length,
        F : F.length,
    }

    
}

console.log(distributeGrades([91, 21, 52, 68, 49, 97, 76]))


