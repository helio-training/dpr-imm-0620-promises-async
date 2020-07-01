// Simulating processing taking some time
console.log('Hello World'); // Initial Order: 1, Timeout Order: 1
setTimeout(() => {
    console.log('What a wonderful world!'); // Initial Order: 2, Timeout Order: 3
}, 2000); // First arg is a callback, second is number of milliseconds to wait
console.log('Goodbye'); // Initial Order: 3, Timeout Order: 2

// In other languages, the Initial Order and Timeout Order are the same, 1 -> 2 -> 3