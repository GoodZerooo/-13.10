function fillArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(fillArray(10, 1, 150))