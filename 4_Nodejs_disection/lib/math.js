/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: MD. Tahsin Ferdous
 * Date: 12/01/2025
 *
 */

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
// Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

// Export the library
module.exports = math;