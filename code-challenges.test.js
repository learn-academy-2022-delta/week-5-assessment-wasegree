// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// describe("codedMessage", () => {
//     it("takes in a string and returns a coded message.", () => {
//       expect(codedMessage(secretCodeWord1)).toEqual(expect.stringContaining("L4ck4d41s1c4l"))
//       expect(codedMessage(secretCodeWord2)).toEqual(expect.stringContaining("G0bbl3dyg00k"))
//       expect(codedMessage(secretCodeWord3)).toEqual(expect.stringContaining("3cc3ntr1c"))
//     });   
//   });
//   ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.

// Pseudo Code:
// Delcare a function called codedMessage
// Set parameter to pass in a string of letters: (string)
// Use .split to change the strings to an array followed by .map to iterate over the array.
// Use a conditional statement to determine the if an element is equal to the need to be converted. Repeat the process until all elements containing the specific letter are converted the the desired number.
// Return string.join("")



// const codedMessage = (string) => {
//     string.split("").map(letter => {
//       if(letter.toLowerCase() === "a") {
//           return 4
//       } else if(letter.toLowerCase() === "e") {
//           return 3
//       } else if(letter.toLowerCase() === "i") {
//           return 1
//       } else if(letter.toLowerCase() === "o") {
//           return 0
//       } else {
//           return "Try again with strings"
//       }   
//   })
//       return string.join("")
// }

// Second Attempt

// const codedMessage = (string) => {
//     string.split("")
//     for(let i = 0; i < string.length; i++) {
//         if(string.toLowerCase() === "a") {
//             return 4
//         } else if(string.toLowerCase() === "e") {
//             return 3
//         } else if(string.toLowerCase() === "i") {
//             return 1
//         } else if(string.toLowerCase() === "o") {
//             return 0
//         } else {
//             return "Try again with strings"
//         }  
//     } return string.join("")
// }

// console.log(codedMessage(secretCodeWord1))
// I am not sure exactly where I am going wrong with my function but I can't seem to get the correct output. 


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// describe("inCommon", () => {
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//       expect(inCommon(fruitArray,letterA)).toEqual(expect.arrayContaining(["Mango", "Apricot", "Peach"]))
//       expect(inCommon(fruitArray,letterE)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
//     });   
//   });
// ReferenceError: inCommon is not defined
// PASS

// b) Create the function that makes the test pass.

// Pseudo Code: Declare a function called inCommon
// Set parameters to take in an array and a letter: (array, letter)
// Use .filter to filter through the array
// Use conditional statment to have function meet a requirment for the elements meet 
// Use .toLowercase to remove case-sensitivity followed by .include(letter) to determine is the values of the array containing a specific letter.
// Return value

// const inCommon = (array,letter) => {
//     return array.filter(word => {
//         if(word.toLowerCase().includes(letter) === true)
//         return word
//     })
// }
// console.log(inCommon(fruitArray,letterA)) // ["Mango", "Apricot", "Peach"]
// console.log(inCommon(fruitArray,letterE)) // ["Cherry", "Blueberry", "Peach"]


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// describe("fullHouse", () => {
//     it("determines whether or not the array is a “full house”.", () => {
//       expect(fullHouse(hand1)).toBe(true)
//       expect(fullHouse(hand2)).toBe(false)
//       expect(fullHouse(hand3)).toBe(false)
//     });   
//   });
// ReferenceError: fullHouse is not defined
// PASS


// b) Create the function that makes the test pass.

// Pseudo Code:
// Declare a function called fullHouse
// Set parameter to pass an array of numbers: (numbers)
// Create a for loop to iterate through the array of numbers
// Make a conditional statement that determines whether or not the array of numbers is a "full house".
// Return boolean values


// const fullHouse = (numbers) => {
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[0],numbers[1] === numbers[2] && numbers[3] === numbers[4]) {
//             return true
//         } else
//             return false
//     }
// }
// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))
