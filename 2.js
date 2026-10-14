function sortNumbers(arr, direction = 'asc') {
    return [...arr].sort((a, b) => direction === 'asc' ? a - b : b - a);
}
const numbers = [4, 2, 9, 1, 5];
console.log(sortNumbers(numbers, 'asc'));  
console.log(sortNumbers(numbers, 'desc'));