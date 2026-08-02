/*Capitalized Word
Sarah, a content writer, is working on a JavaScript blog and wants to enhance the readability of her text by capitalizing the first letter of each word in her articles. Manually doing this for each article is time-consuming, so she decides to write a function that will do it automatically. This function will help her create polished, professional-looking content.

Problem Requirements:

Function Name: capitalizeWords

Parameters:

str (string) - a sentence with words separated by spaces.

Return:

A new string with each word’s first letter capitalized.

Note

To try your written code, try input in below format.

*/

function capitalizeWords(str){
    let newStr = str.split(" ");
    let mixedChar = []
    
    for(i = 0; i < newStr.length; i++){
        let firsrChar = newStr[i][0].toUpperCase();
        let restChar = newStr[i].slice(1)
        mixedChar.push(firsrChar + restChar)
    }
    return mixedChar.join(" ")
}

console.log(capitalizeWords("nobody is my friend!, can i be yours?"))




