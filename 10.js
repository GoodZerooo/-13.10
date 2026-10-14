function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome('А роза упала на лапу Азора')); 
console.log(isPalindrome('JavaScript'));                 