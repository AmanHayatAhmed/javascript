

//Solution: 
/*message = 'Hello, World! aeiou AEIOU zqplmnvb'
str = message.toLowerCase()

function countVowels(str) {
  let count = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u'){
        count = count + 1
    }

  }
  return count;
}

console.log(countVowels(str));*/

//---------------------------------------------------

//Optimized Solution: 
let str = 'Hello, World! aeiou AEIOU zqplmnvb'
function countVowels(str) {
  let count = 0;

  for(let i = 0; i < str.length; i++){
    //Make this index to lower case then check is aeiou present in this index, if yes then its true.  
    if("aeiou".includes(str[i].toLowerCase())){
        count = count + 1
    }

  }
  return count;
}

console.log(countVowels(str));
