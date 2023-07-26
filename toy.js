// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".


// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// oddishOrEvenish(373) ➞ "Oddish"
// oddishOrEvenish(4433) ➞ "Evenish"

function oddishOrEvenish(num) {
    let numArray = num.toString().split('')
    let sum = 0
    numArray.forEach(element => {
        sum += parseInt(element)
    });
    if (sum % 2 === 0) {
        return 'Evenish'
    } else {
        return 'Oddish'
    }
}
console.log(oddishOrEvenish(43))