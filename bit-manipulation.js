// Odd or Even Number

// Write a function that looks at a number's binary representation to determine if it is even or odd.

// Hint: Start by writing out 1 to 10 in binary(or even higher if you want to practice). Look for a pattern you can use to determine whether a number is even or odd.
//num-binary
//1 = 1, 2 = 10, 3 = 11, 4 = 100, 5 = 101
test = 2; //int 2 binary 0b10
const biStatus = (num) => {
  const binum = (num).toString(2); //convert num to binary
  if (binum[binum.length - 1] === '0') {
    return 'even';
  } else {
    return 'odd';
  }
}
console.log(biStatus(test));

// True Love

// Paris, a nonbinary princex, is searching all the kingdoms of the land to find another nonbinary princex to marry.To find the right match, Paris's advisors have used the Myers-Briggs test to try to find the best fit. (Note: We are not advocating for the Myers-Briggs test in any way — it just lends itself nicely to being written as binary code.) This test looks at four qualities:

//     Extraversion versus Introversion
//     Sensing versus Intuition
//     Thinking versus Feeling
//     Judgment versus Perception

// Here's the princex list so far (including Paris):

const princexList = {
  Paris: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "F",
    jVsP: "P"
  },
  Pat: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "P"
  },
  Pau: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  },
  Pearl: {
    eVsI: "E",
    sVsI: "I",
    tVsF: "T",
    jVsP: "P"
  },
  Puck: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  },
  Pluto: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "T",
    jVsP: "P"
  },
  Parker: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  }
}

// That's a lot of data that could be stored much more efficiently — especially since Paris has recently decided to expand their search to all the people in the kingdom — not just people from the princex list above. Since we now have potentially millions of people to search through, our first task is to store all the information about each person in the kingdom into a single binary number instead of a basic object.

// Your first task is to write a function that converts the results of each person's Myers-Briggs test into a series of zeroes and ones.

// For instance, this:

// Paris: {
//   eVsI: "E",
//     sVsI: "S",
//       tVsF: "F",
//         jVsP: "P"
// }

// Could be converted into this:

// ["Paris", 1100]

// This assumes that the first option(extraversion, sensing, thinking, judgment) of each binary Myers - Brigg quality is translated to a 1 while the second option(information, intuition, feeling, perception) is translated to 0.
//goal: nested array
const testToBinary = (princexList) => {
  const resultArray = [];

  for (let person in princexList) {
    let biResult = '';

    //for (let trait in myersResultObj) {
    if (princexList[person].eVsI === "E") {
      biResult += '1';
    } else if (princexList[person].eVsI === "I") {
      biResult += '0'
    }
    if (princexList[person].sVsI === "S") {
      biResult += '1';
    } else if (princexList[person].sVsI === "I") {
      biResult += '0'
    }
    if (princexList[person].tVsF === "T") {
      biResult += '1';
    } else if (princexList[person].tVsF === "F") {
      biResult += '0'
    }
    if (princexList[person].jVsP === "J") {
      biResult += '1';
    } else if (princexList[person].jVsP === "P") {
      biResult += '0'
    }
    resultArray.push([person, biResult]);
  }
  return resultArray;
}

const testParis = { //["Paris", 1100]
  Paris: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "F",
    jVsP: "P"
  }
}

//console.log(testToBinary(testParis));
const princexArray = testToBinary(princexList)
console.log(princexArray);
// Next, translate princexList list into an array of arrays called princexArray.Each nested array should contain a key(the name of the person) and a value(the results of their Myers - Briggs test in binary code).
const findMatch = (parisScore, personScore) => {
  const addBi = '0b';
  const parisBi = addBi.concat(parisScore);
  const personBi = addBi.concat(personScore);

  let matchCount = 0;
  let match = (parisBi ^ personBi).toString(2);
  for (byte in match) {
    if (byte === '0') {
      matchCount += 1;
    }
  }
  if (matchCount === 4) {
    return "Great match";
  } else if (matchCount === 3) {
    return "Good match";
  } else {
    return "No match";
  }
}
let result = findMatch('1100', '1100');
console.log(result);
// So how much less memory does this princexArray take than princexList ? We can use an NPM library called object - sizeof to find out.Don't worry, you don't need to use this library in your own code unless you are curious to compare the size of various objects.

// We can use this library to calculate the following:

// princexList(our basic object) uses 342 bytes.
//   princexArray(our array) uses 126 bytes.

// Note that these savings are mostly due to using an array instead of an object, not because we are using a binary number.Both 1100 and "ESFP" use 8 bytes in JavaScript.However, let's say we wanted to compare 16 values instead of 4. A 16-digit number that uses zeroes and ones still takes 8 bytes — while a 16-digit string takes 32 bytes. The savings become more apparent the more boolean values there are to compare. This may not seem like much difference but in very large datasets, it becomes more significant.

// Next, write an algorithm that uses bitwise operators to determine whether a person is a good match for Paris.If three or more values on the Myers - Briggs test are the same, they should be a good match.If all four values are the same, they should be a great match.How you sort this information is up to you.
// One Hit Wonder

// Create an algorithm that returns a pattern that looks like this:

// 00000001
// 00000010
// 00000100
// 00001000
// 00010000
// 00100000
// 01000000
// 10000000

// Then, the next time through, the 1 should skip two spaces ahead instead of 1, like this:

// 000000001
// 000000100
// 000010000
// 001000000
// 100000000

// The next time it should skip through 3, and then 4, and so on until it skips 8 times.Note that to account for the overlap, the pattern won't always end like this 1000000 and then start anew like this 00000001.

// Then solve the program so it works with any number of bits.
//   Encrypter

// Next, write a function that encrypts a five - letter string using bitwise manipulation.You will need to use methods that convert letters to numbers and then back to do so.See the ASCII lesson for a refresher.You may come up with your own implementation, or you may try the one below:

// The encrypter should do the following:

//     It should do a binary left shift of two for each letter.
//   Next, it should switch every bit in each binary number to its opposite.
//     Next, it should do another left shift for each letter, this one of three.
//     At this point, there should be encrypted binary representations of all five letters.Merge these into one long binary string and then convert it to the decimal number system.The method should return this number.

//   Next, try writing a method to decrypt the number back to its original string.