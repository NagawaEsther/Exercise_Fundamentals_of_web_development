let originalText = "   Nagawa, Esther   ";

// Get the length of the string
console.log(`Length: ${originalText.length}`);

// Get a slice of the string
let slicedText = originalText.slice(4, 6);
console.log(`Slice: ${slicedText}`);

// Get a substring of the string
let substringText = originalText.substring(3, 8);
console.log(`Substring: ${substringText}`);

// Get a substr of the string
let substrText = originalText.substr(3, 8);
console.log(`Substr: ${substrText}`);

// Replace a substring in the string
let replacedText = originalText.replace('Nagawa', 'Victoria');
console.log(`Replaced: ${replacedText}`);

// Replace all occurrences of a character in the string
let replacedAllText = originalText.replaceAll('a', '0');
console.log(`After replaceAll: ${replacedAllText}`);

// Convert the string to uppercase
console.log(`Uppercase: ${originalText.toUpperCase()}`);

// Convert the string to lowercase
console.log(`Lowercase: ${originalText.toLowerCase()}`);

// Concatenate a string
let newString = originalText.concat('cohort three');
console.log(`Concatenated: ${newString}`);

// Trim whitespaces from the string
let trimmedText = originalText.trim();
console.log(`Trimmed: ${trimmedText}`);

// Trim whitespaces from the start of the string
let trimStartText = originalText.trimStart();
console.log(`After trimStart: ${trimStartText}`);

// Trim whitespaces from the end of the string
let trimEndText = originalText.trimEnd();
console.log(`After trimEnd: ${trimEndText}`);

// Pad the start of the string with a character
let paddedStartText = originalText.padStart(20, '-');
console.log(`After padStart: ${paddedStartText}`);

// Pad the end of the string with a character
let paddedEndText = originalText.padEnd(20, '*');
console.log(`After padEnd: ${paddedEndText}`);

// Get the character at a specific index
let charAtIndex = originalText.charAt(5);
console.log(`At index 5: ${charAtIndex}`);

// Get the character code at a specific index
let charCodeAtIndex = originalText.charCodeAt(5);
console.log(`Code at index 5: ${charCodeAtIndex}`);

// Split the string into an array
let splitArray = originalText.split(',');
console.log(`After split: ${JSON.stringify(splitArray)}`);
