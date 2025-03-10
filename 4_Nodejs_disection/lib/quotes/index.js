/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: MD. Tahsin Ferdous
 * Date: 12/01/2025
 *
 */

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};

// Export the library
module.exports = quotes;