function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(S.length === 0) {
        return -1;
    }
    const words = S.split(' ');
    if(words.length === 0) {
        return -1;
    }

    let longestPasswordLength = -1;
    
    function isValid(w) {
        const specialCharactersExp = new RegExp(/[^a-zA-Z0-9]/g);
        if(specialCharactersExp.test(w)) {
            return false;
        }
        const letters = w.match(/[a-zA-Z]/g);
        if(letters && (letters.length === w.length || letters.length < 2 || letters.length % 2 !== 0)) {
            return false;
        }
        
        const numbers = w.match(/[0-9]/g);
        
         if(numbers && (numbers.length % 2 === 0)) {
            return false;
        }
        
        return true;
        
    }
    for(var i=0; i<words.length; i++){
        const pwd = words[i];
        if(isValid(pwd) && pwd.length > longestPasswordLength) {
            longestPasswordLength = pwd.length;
        }
    }
    
    return longestPasswordLength;
}
