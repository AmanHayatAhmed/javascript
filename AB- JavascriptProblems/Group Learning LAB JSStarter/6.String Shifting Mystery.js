
function lShift(s) {
    let firstChar = s[0]
    let restChar = s.slice(1)
    return restChar + firstChar 
}

function rShift(s) {
    let lastChar = s[s.length -1]
    let restChar = s.slice(0, s.length -1)
    return restChar + lastChar
}

function checkShift (s){
    if(lShift(s) === rShift(s)){
        return "YES"
    }
    else {
        return "NO"
    }
}

console.log(checkShift("babbba"))