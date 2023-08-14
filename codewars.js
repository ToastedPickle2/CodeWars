"use strict";

function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }
  let lowest = array[0];
  let highest = array[0];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    } else if (array[i] > highest) {
      highest = array[i];
    }
    sum += array[i];
  }
  let lowAndHigh = lowest + highest;
  return sum - lowAndHigh;
}

console.log(sumArray([3, 5, 4, 10]));
console.log(sumArray([1]));

console.log("---Break---");

function getMiddle(s) {
  if (s.length % 2 === 0) {
    const letterIndex = s.length / 2;
    console.log("Even");
    const firstLetter = letterIndex - 1;
    console.log(s[firstLetter] + s[letterIndex]);
  } else {
    console.log("Odd");
    const letterIndex = Math.floor(s.length / 2);
    console.log(s[letterIndex]);
    return s[letterIndex];
  }
}
getMiddle("Helooo");

console.log("---Break---");

//Find the shortest word and return it
function findShort(s) {
  const words = s.split(" "); //If ' ' doesn't have a space, '', then the individual letters will be output and not words
  //the split(' ') method creates an array of words from the input string s. Each word is an element in the array
  let shortestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

console.log(findShort("Bitce Hi")); // Output: "Hi"

console.log("---Break---");
//Find the shotest word and return it's lenght
function findShortLength(s) {
  const words = s.split(" ");
  let shortestLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    const length = words[i].length;
    if (length < shortestLength) {
      shortestLength = length;
    }
  }

  return shortestLength;
}

console.log(findShortLength("Bitcoin take")); // Output: 4

console.log("---Break---");

// Given a list of integers, determine whether the sum of its elements is odd or even.
function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven([2, 4, 7]));

console.log("---Break---");

//Return the number (count) of vowels in the given string.
function getCount(str) {
  let vowelCount = 0;
  const letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i].toLowerCase(); //toLowerCase is a method that converts a string to lowercase letters
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(getCount("aeioulA"));

console.log("---Break---");

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  let arrNumbers = numbers.split(" ").map(Number); //The .map(Number) converts each element of an array of string into a corresponding number
  let min = arrNumbers[0];
  let max = arrNumbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (arrNumbers[i] < min) {
      min = arrNumbers[i];
    } else if (arrNumbers[i] > max) {
      max = arrNumbers[i];
    }
  }
  return `${max} ${min}`;
}
console.log(highAndLow("10 1 15 13"));

console.log("---Break---");

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let arrLetters = str.toLowerCase().split("");

  if (arrLetters.length === 0) {
    return true;
  }

  for (let i = 0; i < arrLetters.length; i++) {
    if (arrLetters[i] === "x") {
      xCount++;
    } else if (arrLetters[i] === "o") {
      oCount++;
    }
  }

  if (xCount === 0 && oCount === 0) {
    return true;
  } else if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}
console.log(XO("ooxx")); //true
console.log(XO("xooxx")); //false
console.log(XO("ooxXm")); //true
console.log(XO("zpzpzpp")); //true
console.log(XO("XXO")); //false
console.log(XO("")); //true

console.log("---Break---");

//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }
  return false;
}
console.log(isTriangle(2, 6, 8));

console.log("---Break---");

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
function countPositivesSumNegatives(input) {
  let positiveCount = 0;
  let negativeSum = 0;

  if (input === null || input.length === 0 || typeof input[0] === "string")
    return [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else {
      negativeSum += input[i];
    }
  }
  return [positiveCount, negativeSum];
}
console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15, //10, -65
  ])
);

/*             __ 
              .'  '. 
             :      :
             | _  _ |
          .-.|(o)(o)|.-.        _._          _._
         ( ( | .--. | ) )     .',_ '.      .' _,'.
          '-/ (    ) \-'     / /' `\ \ __ / /' `\ \
           /   '--'   \     / /     \.'  './     \ \
           \ `"===="` /     `-`     : _  _ :      `-`
            `\      /'              |(o)(o)|
              `\  /'                |      |
              /`-.-`\_             /        \
        _..:;\._/V\_./:;.._       /   .--.   \
      .'/;:;:;\ /^\ /:;:;:\'.     |  (    )  | 
     / /;:;:;:;\| |/:;:;:;:\ \    _\  '--'  /__
    / /;:;:;:;:;\_/:;:;:;:;:\ \ .'  '-.__.-'   `- 
*/

console.log("---Break---");

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  let digits = n.toString().split(""); //the toString method converts numbers to a string

  digits.sort(function (a, b) {
    return b - a;
  });

  return parseInt(digits.join("")); //the parseInt method converts a string to a number
}

console.log(descendingOrder(24558));

console.log("---Break---");

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
function validatePIN(pin) {
  if (/[^0-9]/.test(pin)) {
    // The [^0-9] pattern matches any character that is not in the range of 0-9. The .test() method checks if the regular expression matches any part of pin, and returns true if it does. If pin contains any non-digit characters, the function immediately returns false.
    return false;
  }
  if (pin.length === 4 || pin.length === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN(34));

console.log("---Break---");

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  const repeatedWord = s.repeat(n);
  return repeatedWord;
}
console.log(repeatStr(6, "I"));

console.log("---Break---");

//Given an array of integers, return a new array with each value doubled.
function maps(x) {
  let doubledArr = [];

  for (let i = 0; i < x.length; i++) {
    doubledArr.push(x[i] * 2);
  }
  return doubledArr;
}
console.log(maps([1, 5, 3]));

console.log("---Break---");

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
function squareDigits(num) {
  const indiviNumbers = num.toString().split(""); //toString is needed because .split is used to convert a string into an array
  let squared = 0;
  let squaredDigits = [];

  for (let i = 0; i < indiviNumbers.length; i++) {
    squared = indiviNumbers[i] * indiviNumbers[i];
    squaredDigits.push(squared);
  }
  return parseInt(squaredDigits.join(""), 10); //The 10 is a second, optional, argument called the radix that the parseInt function can accept. 10 is passed to parseInt() to specify that the string should be parsed as a decimal number (base 10)
}
console.log(squareDigits(277));

console.log("---Break---");

//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];

    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}
const finder = new SmallestIntegerFinder(); //IMPORTANT - this is needed since findSmallestInt is NOT a static method but a instance method, you need to create an instance of the class first by using the 'new' keyword.
console.log(finder.findSmallestInt([-34, 15, 88, 5, -2, , -5, 2]));

//Simpler
class SmallestIntegerFinder2 {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

console.log("---Break---");

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}
console.log(paperwork(5, 5));

console.log("---Break---");

//Find the "needle" in an array full of other strings and return it's position
function findNeedle(haystack) {
  const needlePosition = haystack.indexOf("needle"); //The indexOf method returns the position of the element in the array
  return `found the needle at position ${needlePosition}`;
}
console.log(
  findNeedle(["hay", "needle", "hay", "hay", "moreJunk", "junk", "randomJunk"])
);

console.log("---Break---");

//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(101));

console.log("---Break---");

//If A = T and G = C. For example, if the input is C return G and if the input is G return C.

function DNAStrand(dna) {
  let replaced = dna
    .replace(/T/g, "U")
    .replace(/A/g, "T")
    .replace(/U/g, "A")
    .replace(/G/g, "I")
    .replace(/C/g, "G")
    .replace(/I/g, "C");
  return replaced;
}
console.log(DNAStrand("ATTGC")); //TAACG
console.log(DNAStrand("GTAT")); //CATA

console.log("---Break---");

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  }
  return false;
}
console.log(lovefunc(1, 4)); //true
console.log(lovefunc(2, 2)); //false

console.log("---Break---");

// Numerology - Add up the numbers of your birth year. Then add the two numbers of the result. So if your birth year is 1999, 1 + 9 + 9 + 9 = 28, 2 + 8 = 10.

function numerology(num) {
  let sum = 0;
  let lastNum = 0;
  let yourNumber = 0;

  const singleNumbers = num.toString().split("");

  for (let i = 0; i < singleNumbers.length; i++) {
    sum += Number(singleNumbers[i]);
  }

  lastNum = sum.toString().split("");

  if (lastNum.length >= 2) {
    yourNumber = Number(lastNum[0]) + Number(lastNum[1]);
  } else {
    yourNumber = Number(lastNum[0]);
  }

  return yourNumber;
}

console.log(numerology(1974));

console.log("---Break---");

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  switch (
    operation //Switch is similar to using an if/else statement. If the expression is equal to a case value, the statements associated with that case are executed.
  ) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid Operation";
  }
}
console.log(basicOp("/", 7, 7));

console.log("---Break---");

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.
function check(arr, x) {
  const check = [...arr];
  console.log(check);

  for (let i = 0; i < check.length; i++) {
    if (check[i] === x || String(check[i]) === String(x)) {
      return true;
    }
  }
  return false;
}
console.log(check([1, "Hi"], "Hi"));

console.log("---Break---");

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word) {
  let result = "";
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}
console.log(duplicateEncode("recede")); // ()()()

console.log("---Break---");

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
  let multiply = 1;
  let numbers = num.toString().split("");

  let count = 0;
  while (numbers.length > 1) {
    multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
      multiply *= Number(numbers[i]);
    }
    numbers = multiply.toString().split("");
    count++;
  }
  return count;
}
console.log(persistence(999)); //4
console.log(persistence(4)); //0
console.log(persistence(39)); //3

console.log("---Break---");

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
};
console.log(summation([2])); //3
console.log(summation([8])); //36

console.log("---Break---");

//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.
// 1 minute = 60,000 ms
// 1 second = 1,000 ms

function past(h, m, s) {
  let hour = 3600000;
  let minute = 60000;
  let second = 1000;

  const total = hour * h + minute * m + second * s;
  return total;
}

console.log(past(0, 1, 1)); //61000
console.log(past(1, 1, 1)); //3661000

console.log("---Break---");

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  let combined = s1 + s2;
  let arr = combined.split("");
  let uniqueArr = [];
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i] === arr.lastIndexOf(arr[i]))) {
      uniqueArr.push(arr[i]);
    }
  }

  let uniqueSet = new Set(uniqueArr); //The new Set constructor gets rid of duplicates. It is used to create an object where each value can only occur once.
  let uniqueArrFinal = [...uniqueSet].sort(); //The sort method, sorts an ARRAY of words to alphabetical order and numbers from least to greatest
  let unitedString = uniqueArrFinal.join(""); //The join method joins all the elements of an ARRAY into a string

  return unitedString;
}
console.log(longest("arethys", "arethys"));

console.log("---Break---");

//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    const count = names.length - 2;
    return `${names[0]}, ${names[1]} and ${count} others like this`;
  }
}
console.log(likes(["Peter", "Janet", "James", "Lile", "Timmy", "Horton"]));

//Solution using switch
function likes(names) {
  const count = names.length - 2;
  names = names || []; //Short circuiting. If names if truthy return it, but if it's falsy/not there then return an empty array.
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${count} others like this`;
  }
}
console.log(likes(["Peter", "Janet", "James", "Lile", "Timmy", "Horton"]));

console.log("---Break---");

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data) {
  let results = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      results.push("Senior");
    } else {
      results.push("Open");
    }
  }
  return results;
}
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
  ])
); //Open, Open, Senior,

console.log("---Break---");

//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
let result = [];

function deleteNth(arr, n) {
  const count = {}; // Step 1: Initialize an empty object to keep track of count of each number in arr
  const result = []; // Step 2: Initialize an empty array to store the filtered list

  for (let i = 0; i < arr.length; i++) {
    // Step 3: Loop through each element in arr
    const num = arr[i]; // Step 4: Store the current number in a variable for convenience

    if (!count[num]) {
      // Step 5: If count object doesn't have a property for the current number
      count[num] = 1; // Step 6: Initialize the count of the current number to 1 in the count object
      result.push(num); // Step 7: Add the current number to the result array
    } else if (count[num] < n) {
      // Step 8: If the count of the current number is less than n
      count[num]++; // Step 9: Increment the count of the current number in the count object
      result.push(num); // Step 10: Add the current number to the result array
    }
  }

  return result; // Step 11: Return the filtered list
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); //[1, 2, 3, 1, 2, 3]
console.log(deleteNth([20, 37, 21], 1)); //[20, 37, 21]

console.log("---Break---");

//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends) {
  let myFriends = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      myFriends.push(friends[i]);
    }
  }
  return myFriends;
}

//simpler solution
function friend(friends) {
  //The n parameter is used as a placeholder for each element in the friends array that is being processed by the filter() method.
  return friends.filter((n) => n.length === 4); //The filter() method iterates over each element of the friends array and passes it to the provided arrow function as the n argument. The arrow function then checks the length of n and returns true if the length is equal to 4, and false otherwise.
}
// function friend(friends) {
//   return friends.filter(function(n) {
//     return n.length === 4;
//   });
// }

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); //['Ryan', 'Yous'];

console.log("---Break---");

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(3)); //1
console.log(litres(6.7)); //3

console.log("---Break---");

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  const endingLength = ending.length;
  const strEnding = str.substr(-endingLength); //Important - The substr() method takes two arguments: the starting index and the length of the substring. If the starting index is negative, it is treated as an offset from the end of the string.
  //The minus sign in str.substr(-endingLength) indicates that we want to extract a substring from the str string starting from its end position.
  return strEnding === ending || ending === "" ? true : false;
}
// str.substr(0, endingLength) This would get the characters from the start of the str string
console.log(solution("abc", "bc")); //true
console.log(solution("abc", "d")); //false

//Simpler solution
//  function solution(str, ending){
//    return str.endsWith(ending);
//  }

console.log("---Break---");

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    let reversedWord = words[i].split("").reverse().join("");
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(" ");
}
console.log(reverseWords("This is an example!")); //'sihT si na !elpmaxe'

console.log("---Break---");

//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text) {
  let count = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== i && text.lastIndexOf(text[i]) === i) {
      count++;
    }
    console.log(i);
  }
  return count;
}
console.log(duplicateCount("aabbcde")); //2
// console.log(duplicateCount('abcde')); //0
// console.log(duplicateCount('aA11')); //2
// console.log(duplicateCount('indivisibility')); //1

console.log("---Break---");

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
  str = str.toLowerCase();
  if (str === "") {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
//For example, let's say we have the string "hello". When the outer for loop starts, i is 0, and the current character is "h". The inner loop then starts with j set to 1, and it iterates over the remaining characters "e", "l", and "o". At each iteration, it compares the current character "h" with the next character "e", "l", and "o". Since none of these characters match "h", the inner loop completes without finding any duplicates, and the outer loop moves on to the next character "e". The inner loop then starts with j set to 2, and it iterates over the remaining characters "l" and "o". When it compares the current character "e" with the next character "l", it finds a match, and the function immediately returns false because the string is not an isogram.
console.log(isIsogram("Dermatoglypics")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("")); //true

//Simpler solution
//  function isIsogram(str){
//	  return new Set(str.toUpperCase()).size === str.length; //A new Set object is created which removes duplicate letters from the string because it can ONLY contain unique elements. Then the size property represents how many unique elements there are and if that equals the lenght of the str the output is true.
//  }

console.log("---Break---");

//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
/*
                1
              3   5
            7   9   11
          13  15  17  19
        21  23  25  27  29
      ...
*/
function rowSumOddNumbers(n) {
  const startNum = (n - 1) * n + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += startNum + i * 2;
  }
  return sum;
}

//Simpler solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3); //The Math.pow method takes two arguments: the base number and the exponent. So here, n is the base number and 3 means to the power of 3. n * n * n
}
console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(2)); //8

console.log("---Break---");

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
function removeSmallest(numbers) {
  let result = [];

  if (numbers.length === 0) {
    return [];
  }

  const smallest = Math.min(...numbers);
  const index = numbers.indexOf(smallest);
  const numbersCopy = numbers.slice(); //makes a copy of the original array
  numbersCopy.splice(index, 1); //index is the first argument and it is the position of the element to remove and the 1 means to remove one element at the index position

  for (let i = 0; i < numbersCopy.length; i++) {
    if (numbersCopy[i] >= smallest) {
      result.push(numbersCopy[i]);
    }
  }
  return result;
}
console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); //[5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); //[2, 2, 2, 1]
console.log(removeSmallest([])); // []

console.log("---Break---");

//If a letter is not a-m, it is an error. Give the total number of errors as the numerator and the total number of characters as the denominator.
function printerError(s) {
  let errors = 0;
  const length = s.length;
  const regex = /[a-m]/;

  for (let i = 0; i < s.length; i++) {
    if (!regex.test(s[i])) {
      errors++;
    }
  }
  return `${errors}/${length}`;
}
console.log(printerError("aaabbbbhaijjjm")); //'0/14'
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); //'8/22'

console.log("---Break---");

//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = (arr) => {
  const binaryString = arr.join(""); //Convert array to a binary string
  const decimalNumber = parseInt(binaryString, 2); //Convert binary string to a decimal number
  return decimalNumber;
};
console.log(binaryArrayToNumber([0, 0, 1, 0])); //2
console.log(binaryArrayToNumber([1, 1, 1, 1])); //15
//The parseInt() method is used to parse a STRING argument and convert it to an INEGER. it takes two parameters parseInt(string, radix);
//The 'string' parameter is the string to be parsed and converted to an integer.
//The 'radix' parameter is OPTIONAL and specifies the base of the number system to be used.
//In this example, radix = 2 since binary has a base of 2.

console.log("---Break---");

//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      //If each element in the a array is not included in the b array
      result.push(a[i]);
    }
  }
  return result;
}

//simpler solution
function arrayDiff(a, b) {
  return a.filter((elem) => !b.includes(elem)); //The filter() method is called on each element of the array and returns a new array with all the elements that pass the test. It can take up to 3 arguments: the current element being processed, its index, and the original array.
}
console.log(arrayDiff([1, 2], [1])); //[2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); //[1, 3]

console.log("---Break---");

//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
function addBinary(a, b) {
  return (a + b).toString(2); //The toString method converts a decimal number to a binary string. The 2 is the radix parameter which indicates that the input string represents a binary number.
}
console.log(addBinary(1, 1)); //10
console.log(addBinary(5, 9)); //1110

console.log("---Break---");

//
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
    case score >= 80 && score <= 90:
      return "B";
    case score >= 70 && score <= 80:
      return "C";
    case score >= 60 && score <= 70:
      return "D";
    case score >= 0 && score <= 60:
      return "F";
    default:
      return false;
  }
}
console.log(getGrade(95, 90, 93)); //'A'
console.log(getGrade(70, 70, 100)); //'B'

console.log("---Break---");

//Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
  switch (p1 + p2) {
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
      return "Player 1 won!";
    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
      return "Player 2 won!";
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return "Draw!";
    default:
      return "Please pick rock, paper, or scissors.";
  }
};
console.log(rps("scissors", "paper")); //Plaer 1 won!
console.log(rps("scissors", "rock")); //Plaer 2 won!

console.log("---Break---");

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x) {
  let result = 1;

  if (x.length !== 0) {
    for (let i = 0; i < x.length; i++) {
      result *= x[i];
    }
    return result;
  }
}
console.log(grow([1, 2, 3, 4])); // 1 * 2 * 3 * 4 = 24
console.log(grow([2, 2, 2, 2, 2, 2])); // 64

console.log("---Break---");

//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy(x, n) {
  let z = [];
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += x;
    z.push(result);
  }
  return z;
}
console.log(countBy(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countBy(2, 5)); //[2, 4, 6, 8, 10];

console.log("---Break---");

//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
function nbYear(p0, percent, aug, p) {
  percent = percent / 100;
  let result = 0;
  while (p0 < p) {
    p0 += Math.floor(p0 * percent + aug);
    result++;
  }
  return result;
}
console.log(nbYear(1500, 5, 100, 5000)); //15
console.log(nbYear(1000, 2, 50, 1214)); //3

console.log("---Break---");

//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  const combinations = [];
  for (let i = 0; i <= n - k; i++) {
    const combination = strarr.slice(i, i + k).join(""); //The slice() method takes two arguments: the starting index and the ending index (optional). If you pass only one argument, the method will return a new array or string starting from that index to the end of the original one. If you pass two arguments, the method will return a new array or string starting from the first index up to but not including the second index.
    combinations.push(combination);
  }

  let longest = combinations[0];
  for (let i = 1; i < combinations.length; i++) {
    if (combinations[i].length > longest.length) {
      longest = combinations[i];
    }
  }

  return longest;
}
console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
); //folingtrashy

console.log("---Break---");

//Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
  height = Math.pow(height, 2);
  let result = weight / height;
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else if (result > 30) {
    return "Obese";
  }
}
console.log(bmi(80, 1.8)); //Normal

console.log("---Break---");

//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//You need to return the highest scoring word as a string.
//If two words score the same, return the word that appears earliest in the original string.

function high(x) {
  x = x.toLowerCase();
  const words = x.split(" ");
  let highestScore = 0;
  let highestScoringWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      score += letter.charCodeAt(0) - 96; //the charCodeAt() method returns the Unicode value of the character at the specified index. The lowercase letters of the alphabet start at 97. So a = 97, b = 98, etc. So by subtracting 96 we're getting the alphabetical score of each letter.
    }
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  }
  return highestScoringWord;
}
console.log(high("man i need a taxi up to ubud")); //taxi

console.log("---Break---");

//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
  const result = [];
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let newWord = "";
    for (let j = 0; j < word.length; j++) {
      if (
        !["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(word[j])
      ) {
        newWord += word[j];
      }
    }
    result.push(newWord);
  }
  return result.join(" ");
}

//Simpler solution
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, ""); //The replace method takes two arguments - the first argument is a regular expression that matches the pattern to be replaced, and the second argument is the replacement value.
} //The 'g' flag means to perform a global search meaning to match and replace all occurrences of vowels. The 'i' flag makes the expression case-INsensitive meaning that it will match vowels in uppercase or lowercase.
console.log(disemvowel("This website is for losers LOL!")); //Ths wbst s fr lsrs LL!

console.log("---Break---");

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.
// function alphabetPosition(text) {
//   let letters = text.toLowerCase().match(/[a-z]/g);
//   let result = [];
//   if (letters !== null) {
//     for (let i = 0; i < letters.length; i++) {
//       const letter = letters[i];
//       const number = letter.charCodeAt(0) - 96;
//       result.push(number);
//     }
//   }

//   return result.join(' ');
// }

//Simpler Solution
const alphabetPosition = (text) => {
  let letters = text.toLowerCase().match(/[a-z]/g);
  if (letters === null) {
    return "";
  }
  return letters
    .map((char) => char.charCodeAt(0) - 96)
    .filter((num) => num > 0)
    .join(" ");
};

console.log(alphabetPosition("The sunset sets at twelve 0' clock.")); //20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

console.log("---Break---");

//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let northSouth = 0;
  let eastWest = 0;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        northSouth++;
        break;
      case "s":
        northSouth--;
        break;
      case "e":
        eastWest++;
        break;
      case "w":
        eastWest--;
        break;
    }
  }
  return northSouth === 0 && eastWest === 0;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); //true
console.log(isValidWalk(["w"])); //false
console.log(isValidWalk(["w", "w"])); //false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "w", "n", "w"])); //false

console.log("---Break---");

//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }

  let sortedArr1 = array1.sort((a, b) => a - b); //The sort method here is organizing the elements in the array from smallest to largest.
  let sortedArr2 = array2.sort((a, b) => a - b);

  console.log(sortedArr1);
  console.log(sortedArr2);

  for (let i = 0; i < array1.length; i++) {
    if (Math.pow(sortedArr1[i], 2) !== sortedArr2[i]) {
      return false;
    }
  }
  return true;
}

//simpler solution
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }

  array1 = array1.map((x) => x * x).sort();
  array2 = array2.sort();

  return array1.every((x, i) => x === array2[i]);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); //true

console.log("---Break---");

//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  let result = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  result.push(min, max);
  return result;
}
console.log(minMax([1, 2, 3, 4, 5])); //[1, 5]

console.log("---Break---");

//There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//Each calculation consist of exactly one operation and two numbers

function zero(operation) {
  if (!operation) {
    return 0;
  } else {
    return operation(0);
  }
}
function one(operation) {
  if (!operation) {
    return 1;
  } else {
    return operation(1);
  }
}
function two(operation) {
  if (!operation) {
    return 2;
  } else {
    return operation(2);
  }
}
function three(operation) {
  if (!operation) {
    return 3;
  } else {
    return operation(3);
  }
}
function four(operation) {
  if (!operation) {
    return 4;
  } else {
    return operation(4);
  }
}
function five(operation) {
  if (!operation) {
    return 5;
  } else {
    return operation(5);
  }
}
function six(operation) {
  if (!operation) {
    return 6;
  } else {
    return operation(6);
  }
}
function seven(operation) {
  if (!operation) {
    return 7;
  } else {
    return operation(7);
  }
}
function eight(operation) {
  if (!operation) {
    return 8;
  } else {
    return operation(8);
  }
}
function nine(operation) {
  if (!operation) {
    return 9;
  } else {
    return operation(9);
  }
}

function plus(right) {
  return function (left) {
    return left + right;
  };
}

function minus(right) {
  return function (left) {
    return left - right;
  };
}

function dividedBy(right) {
  return function (left) {
    return Math.floor(left / right);
  };
}

function times(right) {
  return function (left) {
    return left * right;
  };
}
const result1 = seven(times(five())); //35
const result2 = four(plus(nine())); //13
const result3 = eight(minus(three())); //5
const result4 = six(dividedBy(two())); //3

console.log("---Break---");

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//The number can be negative already, in which case no change is required.

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  }
  if (num <= 0) {
    return num;
  }
}

//Simpler solution
function makeNegative(num) {
  return num > 0 ? -num : num;
}
console.log(makeNegative(0));

console.log("---Break---");

//There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//n: a positive integer, the number of checkout tills.
function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }

  if (n > customers.length) {
    return Math.max(...customers);
  }

  let tills = Array(n).fill(0); //The Array(n) determines the number of elements in the array and the fill method initializes this array with 0. So here if n is 2 then tills = [0, 0];

  for (let i = 0; i < customers.length; i++) {
    let nextCustomerTime = customers[i];
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += nextCustomerTime;
    console.log(tills);
  }
  return Math.max(...tills);
}
console.log(queueTime([1, 2, 3, 4], 1)); //10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //9
console.log(queueTime([2, 3, 10, 2], 2)); //12
console.log(queueTime([1, 2, 3, 4, 5], 100)); //5

console.log("---Break---");

//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//Every smiling face must have a smiling mouth that should be marked with either ) or D
//No additional characters are allowed except for those mentioned.
//Valid smiley face examples: :) :D ;-D :~)
//Invalid smiley faces: ;( :> :} :]
function countSmileys(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ":)") {
      total++;
    } else if (arr[i] === ":-D") {
      total++;
    } else if (arr[i] === ":D") {
      total++;
    } else if (arr[i] === ":~)") {
      total++;
    } else if (arr[i] === ";D") {
      total++;
    } else if (arr[i] === ":-)") {
      total++;
    } else if (arr[i] === ";~)") {
      total++;
    } else if (arr[i] === ";-D") {
      total++;
    } else if (arr[i] === ":~D") {
      total++;
    } else if (arr[i] === ";~D") {
      total++;
    } else if (arr[i] === ";)") {
      total++;
    } else if (arr[i] === ";-)") {
      total++;
    }
  }
  return total;
}

//Simpler solution
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length; //The function uses the filter() method to create a new array containing only the elements that match the regular expression /^[:;][-~]?[)D]$/. The regular expression matches strings that start with either a colon or a semicolon, followed by an optional hyphen or tilde, and ending with either a closing parenthesis or a capital letter D. The test() method is used to test each element of the array against the regular expression.
}
//Finally, the length property is used to return the number of elements in the filtered array, which is the number of valid "smiley faces" in the input array.
console.log(countSmileys([":)", ";(", ";}", ":-D"])); //2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); //3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); //1
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //4
console.log(countSmileys([":>", ";-)", ":oD", ":>", ":)", ":>", ":)"])); //3

console.log("---Break---");

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l * 2 + w * 2;
};
console.log(areaOrPerimeter(6, 10)); //32
console.log(areaOrPerimeter(3, 3)); //9

console.log("---Break---");

//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Replace T's with U's
function DNAtoRNA(dna) {
  return dna.replace(/['T]/g, "U");
}
console.log(DNAtoRNA("GCAT")); //GCAU
console.log(DNAtoRNA("TTTT")); //UUUU

console.log("---Break---");

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    //The sort method here organizes the elements in the array from smallest to largest.
    return a - b;
  });
  return numbers.length >= 4 ? numbers[0] + numbers[1] : 0;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); //7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); //3453455

console.log("---Break---");

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let newArr = [];
  let result = 0;
  while (a < b) {
    newArr.push(a);
    a++;
  }

  while (a >= b) {
    newArr.push(a);
    a--;
  }

  for (let i = 0; i < newArr.length; i++) {
    result += newArr[i];
  }

  return result;
}
console.log(getSum(1, 0)); //1
console.log(getSum(-1, 2)); //2
console.log(getSum(1, 2)); //3
console.log(getSum(1, 1)); //1
console.log(getSum(5, -1)); //14
console.log(getSum(-50, 0)); //-1275

console.log("---Break===");

//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  const cost = 40;
  if (d < 3) {
    return cost * d;
  } else if (d >= 3 && d < 7) {
    return cost * d - 20;
  } else if (d >= 7) {
    return cost * d - 50;
  }
}
console.log(rentalCarCost(1)); //40
console.log(rentalCarCost(2)); //80
console.log(rentalCarCost(3)); //100
console.log(rentalCarCost(4)); //140
console.log(rentalCarCost(7)); //230

console.log("---Break---");

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  return str.slice(1, -1); //The slice method can be used for strings and arrays. It can take one or two parameters. If you put two parameters the first is the startIndex and the second is the endIndex and those two will be removed. If you just put -1 the last character will be removed. If you just put 1 the first character will be removed.
}
//When the slice method is used with arrays, the first paramter determines where to start and the second parameter determines how many elements to extract.
//So if it was:
//const arr = [1, 2, 3, 4, 5];
//const slicedArr = arr.slice(0, 3);
//console.log(slicedArr); [1, 2, 3];
console.log(removeChar("eloquent")); //loquen
console.log(removeChar("country")); //ountr

console.log("---Break---");

//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.
function findOdd(a) {
  const counts = a.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .filter(([element, count]) => count % 2 !== 0)
    .map(([element, count]) => parseInt(element))
    .pop(); //The pop method removes the LAST element from an array and returns it. The shift method removes the FIRST element from an array and returns it.
}
console.log(findOdd([7])); //7
console.log(findOdd([1, 1, 2])); //2
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4

console.log("---Break---");

//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}
console.log(hoopCount(3)); //Keep at it until you get it
console.log(hoopCount(11)); //Great, now move on to tricks.

console.log("---Break---");

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//Return True if yes, False otherwise :)
function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false;
}
console.log(hero(10, 5)); //true
console.log(hero(7, 4)); //false
console.log(hero(161, 72)); //true

console.log("---Break---");

//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString) {
  return Number(inputString[0]);
}

//Can also use the parseInt method which returns the number of a string ONLY if it is the first element, if it's not it will return NaN
function getAge(inputString) {
  return parseInt(inputString);
}
console.log(getAge("4 years old")); //4
console.log(getAge("1 year old")); //1

console.log("---Break---");

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//Let's say you are given the array {1,2,3,4,3,2,1}:
//Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
function findEvenIndex(arr) {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  //The reduce method takes two arguments, here (sum, num) => sum + num is the first argument and 0 is the second argument
  //reduce() is called on the arr array, with two arguments: a callback function and an initial value (in this case, 0). The callback function is called for each element in the array and takes two parameters: sum and num. sum is the accumulator that stores the running total sum of all the elements processed so far, while num is the current element being processed.
  //The callback function is defined using an arrow function expression: (sum, num) => sum + num. This function simply adds num to sum and returns the result. So, for example, the first time the callback function is called, sum is 0 (since that's the initial value) and num is the first element in the arr array. The callback function returns sum + num, which becomes the new value of sum for the next call to the function.
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    rightSum = totalSum - arr[i] - leftSum;
    console.log(rightSum);
    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1

console.log("---Break---");

//You will be given a number and you will need to return it as a string in Expanded Form. For example:
function expandedForm(num) {
  const digits = num.toString().split("");
  const numZeros = digits.length - 1;
  let result = "";

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== "0") {
      const zeros = "0".repeat(numZeros - i); //The repeat method takes a single argument that returns a new string with the specified number of copies.
      result += `${digits[i]}${zeros} + `;
    }
  }
  return result.slice(0, -3); //Remove the last '+' from the result. Two spaces and 1 + sign are removed
}
console.log(expandedForm(12)); //'10 + 2'
console.log(expandedForm(42)); //'40 + 2'
console.log(expandedForm(320)); //'300 + 20'
console.log(expandedForm(70304)); //'7000 + 300 + 4'

console.log("---Break---");

//You are given two interior angles (in degrees) of a triangle.
function otherAngle(a, b) {
  return 180 - (a + b);
}
console.log(otherAngle(30, 60)); //90
console.log(otherAngle(60, 60)); //60
console.log(otherAngle(43, 78)); //59
console.log(otherAngle(10, 20)); //150

console.log("---Break---");

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
function domainName(url) {
  let domain;
  if (url.indexOf("://") > -1) {
    domain = url.split("/")[2];
  } else {
    domain = url.split("/")[0];
  }

  // Remove any subdomains
  domain = domain.replace("www.", "");

  domain = domain.split(".")[0];

  return domain;
}
console.log(domainName("http://google.com")); //google
console.log(domainName("www.xakep.ru")); //xakep
console.log(domainName("https://youtube.com")); //youtube

console.log("---Break---");

//Your task is to write a function which returns the sum of following series upto nth term(parameter).
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

function SeriesSum(n) {
  if (n === 0) {
    return n.toFixed(2);
  }
  n = n - 1;
  let arr = [];
  let denom = 4;
  for (let i = 1; i <= n; i++) {
    arr.push(1 / denom);
    denom += 3;
  }
  const sum = arr.reduce((a, b) => a + b, 1);
  return sum.toFixed(2); //the toFixed method takes a single parameter that specifies the number of decimal places to round the number to.
}
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(3)); // 1.39
console.log(SeriesSum(4)); // 1.49
console.log(SeriesSum(0)); // 0

console.log("---Break---");

//Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n to the power of 3, the cube above will have volume of (n - 1) cubed and so on until the top which will have a volume of 1 cubed.
//You are given the total volume of m of the building. Being given m can you find the number n of cubes you will have to build?
function findNb(m) {
  let n = 0;
  let volume = 0;

  while (volume < m) {
    n++;
    volume += Math.pow(n, 3);
  }
  return volume === m ? n : -1;
}
console.log(findNb(1071225)); // 45
console.log(findNb(91716553919377)); // -1

console.log("---Break---");

//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules:
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
function wave(str) {
  const letters = str.split("");
  let count = letters.length;
  let result = [];
  for (let i = 0; i < count; i++) {
    if (letters[i] !== " ") {
      let upper = letters[i].toUpperCase();
      let wave =
        letters.slice(0, i).join("") + upper + letters.slice(i + 1).join("");
      result.push(wave);
    }
  }
  return result;
}
//The slice() method takes two arguments: the starting index and the ending index (optional). The starting index is the position of the first character to include in the slice, and the ending index is the position of the first character to exclude from the slice.
//If two arguments are given, the first is the starting index and the second is the ending index. So if it's slice(0, 5) You start from the first element in the array and counting that element go down 5 elements and that is what is returned.
//If only ONE argument is given, that is the starting index so anything AFTER that element will be returned.

console.log(wave("hello")); //['Hello', 'hEllo', 'heLlo'. 'helLo', 'hellO']

console.log("---Break---");

//Your function takes two arguments:
//1. current father's age (years)
//2. current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld); //The Math.abs method converts a negative number to its absolute or positive value
}
console.log(twiceAsOld(36, 7)); //22
console.log(twiceAsOld(55, 30)); //5
console.log(twiceAsOld(42, 21)); //0

console.log("---Break---");

//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
};
console.log(number([])); //[]
console.log(number(["a", "b", "c"])); //['1: a', '2: b', '3: c']

console.log("---Break---");

//You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
//Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
var number = function (busStops) {
  if (busStops.length === 1 && busStops[0][0] === 0 && busStops[0][1] === 0) {
    return 0;
  }

  let on = 0;
  let off = 0;

  for (let i = 0; i < busStops.length; i++) {
    on += busStops[i][0];
    off += busStops[i][1];
  }
  return on - off;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); //5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); //17
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
); //21

console.log(number([[0, 0]])); //0

console.log("---Break---");

//When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
String.prototype.toJadenCase = function () {
  let words = this.split(" ");
  const capitalized = words.map((x) => {
    let firstLetter = x.charAt(0).toUpperCase();
    let restOfWord = x.slice(1).toLowerCase(); //The slice method can take two arguments. A start index and an end index. IF it doesn't have a second argument, like here, it will return all the elements from the start index to the end of the array or string.
    return firstLetter + restOfWord;
  });
  return capitalized.join(" ");
};
let quote = "How can mirrors be real if our eyes aren't real";
let jadenCasedString = quote.toJadenCase();
console.log(jadenCasedString); //How Can Mirrors Be Real If Our Eyes Aren't Real

console.log("---Break---");

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter((elem) => typeof elem !== "string");
}
console.log(filter_list([1, 2, "a", "b"])); //[1, 2]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); //[1, 2, 123]

console.log("---Break---");

//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string) {
  const regex = /([a-z])(?!.*\1)/gi; //(?!.*\1) checks if the same letter occurs later in the string
  return (string.match(regex) || []).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram")); //false

console.log("---Break---");

//Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x) {
  return x.split(" ").join("").trim(); //The trim method removes whitespaec from both ends of a string. It does NOT modify the original string but returns a NEW string
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); //8j8mBliB8gimjB8B8jlB

console.log("---Break---");

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
function updateLight(current) {
  if (current === "green") {
    current = current.replace(/green/, "yellow");
    return current;
  } else if (current === "yellow") {
    current = current.replace(/yellow/, "red");
    return current;
  } else if (current === "red") {
    current = current.replace(/red/, "green");
    return current;
  }
}
//Simpler answer
function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}
console.log(updateLight("green")); //yellow
console.log(updateLight("yellow")); //red
console.log(updateLight("red")); //green

console.log("---Break---");

//The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//Write a function that returns the first two numbers in a fibonacci sequence, up to the prod, that multiplied equal to the prod.
function productFib(prod) {
  let a = 0,
    b = 1;
  while (a * b < prod) {
    let c = a + b;
    a = b;
    b = c;
  }
  return [a, b, a * b === prod];
}
console.log(productFib(4895)); // [55, 89, true]

console.log("---Break---");

//A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
//He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
//His mother looks out of a window 1.5 meters from the ground.
//How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
function bouncingBall(h, bounce, window) {
  if (bounce >= 1 || bounce <= 0 || h <= window || h <= 0 || window < 0) {
    return -1;
  }

  let number = 1;
  while (h * bounce > window) {
    number += 2;
    h *= bounce;
  }
  return number;
}
console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30, 0.66, 1.5)); //15
console.log(bouncingBall(3.0, 1.0, 1.5)); //-1

console.log("---Break---");

//If a number is a factor return true, if not return false.
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}
console.log(checkForFactor(10, 2)); //true
console.log(checkForFactor(63, 7)); //true
console.log(checkForFactor(9, 2)); //false

console.log("---Break---");

//Convert a cockroach's spped in km/h to cm/h.
function cockroachSpeed(s) {
  return Math.floor(s * 27.777778);
}
console.log(cockroachSpeed(1.08)); //30
console.log(cockroachSpeed(0)); //0
console.log(cockroachSpeed(0.656837159)); //18
console.log(cockroachSpeed(1.043937)); //28

console.log("---Break---");

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i], str[i]);
  }
  return result.join("");
}
console.log(doubleChar("abcd")); //aabbccdd
console.log(doubleChar("123456")); //112233445566

console.log("---Break---");

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
console.log(powersOfTwo(0)); //[1]
console.log(powersOfTwo(1)); //[1, 2]
console.log(powersOfTwo(2)); //[1, 2, 4]

console.log("---Break---");

//Find the average in a given array.
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(findAverage([1, 1, 1])); //1
console.log(findAverage([1, 2, 3, 4])); //2.5

console.log("---Break---");

//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there IS enough space, return 0, and if there isn't, return the number of passengers he can't take.
function enough(cap, on, wait) {
  return cap === on + wait || cap > on + wait ? 0 : on + wait - cap;
}
console.log(enough(10, 5, 5)); //0
console.log(enough(100, 60, 50)); //10
console.log(enough(73, 25, 67)); //19

console.log("---Break---");

//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
function setAlarm(employed, vacation) {
  return employed && !vacation;
}
console.log(setAlarm(true, true)); //false
console.log(setAlarm(false, true)); //false
console.log(setAlarm(true, false)); //true

console.log("---Break---");

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); //['Keep', 'Keep', 'Keep']
console.log(removeEveryOther([[1, 2]])); //[1,2]

console.log("---Break---");

//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//The returned value must be a string, and have "***" between each of its letters.
function twoSort(s) {
  let result = [];
  const word = s.sort().slice(0, 1).toString().split("");

  for (let i = 0; i < word.length - 1; i++) {
    result.push(word[i] + "***");
  }
  result.push(word[word.length - 1]);
  return result.join("");
}
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
); //b***i***t***c***o***i***n

console.log("---Break---");

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
function abbrevName(name) {
  let newName = name.split(" ");
  let arr = [];
  arr.push(newName[0][0], newName[1][0]);
  return arr.join(".").toUpperCase();
}
console.log(abbrevName("Sam Harris")); // S.H
console.log(abbrevName("Patrick Feenan")); // P.F
console.log(abbrevName("P Favozzi")); // P.F

console.log("---Break---");

//When provided with a number between 0-9, return it in words.
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return false;
  }
}
console.log(switchItUp(0)); //Zero
console.log(switchItUp(1)); //One

console.log("---Break---");

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
function count(string) {
  if (string.length === 0) {
    return {};
  }
  let counts = {};
  for (let i = 0; i < string.length; i++) {
    if (counts[string[i]]) {
      counts[string[i]]++;
    } else {
      counts[string[i]] = 1;
    }
  }
  return counts;
}
console.log(count("")); // {}
console.log(count("ABC")); // {'A': 1, 'B': 1, 'C', 1}
console.log(count("aba")); // {'a': 2, 'b': 1}

console.log("---Break---");

//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//If it is the case we will return k, if not return -1.
function digPow(n, p) {
  let arr = [];
  let copyP = p;
  let numbers = n.toString().split("");
  for (let i = 0; i < numbers.length; i++) {
    arr.push(Math.pow(numbers[i], copyP));
    copyP++;
  }
  let total = arr.reduce((total, current) => total + current, 0);
  return total % n === 0 ? total / n : -1;
}
console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51

console.log("---Break---");

//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!
function betterThanAverage(classPoints, yourpoints) {
  return (
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourpoints
  );
}
console.log(betterThanAverage([2, 3], 5)); //true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true

console.log("---Break---");

//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//Complete the method which accepts such an array, and returns that single different number.
function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}
console.log(stray([1, 1, 2])); //2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); //3

console.log("---Break---");

//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum([1, 2, 3], 4)); //[0, 2]
console.log(twoSum([2, 3, 1], 4)); //[1, 2]

console.log("---Break---");

//If North and South are next to each other or East and West remove them and return the reamining directions that are not opposite of each other. North is opposite South and East is opposite West.
function dirReduc(arr) {
  const opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return arr.reduce(function (dirs, dir) {
    //The reduce() method is a higher-order function in JavaScript that allows you to iterate over an array and accumulate a single value based on the values in the array.
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // ['West']
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ['NORTH', 'WEST', 'SOUTH', 'EAST']

console.log("---Break---");

//Remove these birds from a given array "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"
function gooseFilter(birds) {
  return birds
    .map((item) =>
      item.replace(/African|Roman Tufted|Toulouse|Pilgrim|Steinbacher/gi, "")
    )
    .filter((item) => item !== "");
}
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
); //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

console.log("---Break---");

//Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
//IMPORTANT - since getVolumeOfCuboid is defined with the 'static' keyword that means it's a static method so it is NOT needed to create an instance of the class by using the new keyword.
console.log(Kata.getVolumeOfCuboid(1, 2, 2)); //4
console.log(Kata.getVolumeOfCuboid(6, 2, 5)); //60

console.log("---Break---");

//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums) {
  if (nums === null) {
    return [];
  }
  const result = [...nums];
  return result.sort((a, b) => a - b);
}
console.log(solution([1, 2, 10, 50, 5])); // [1, 2, 5, 10, 50]
console.log(solution(null)); //[]

console.log("---Break---");

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash(words) {
  return words.join(" ");
}
console.log(smash(["hello", "world", "this", "is", "great"])); //hello world this is great

console.log("---Break---");

//Given an integral number, determine if it's a square number:
//In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  const root = Math.round(Math.sqrt(n)); //The Math.round method rounds down if the decimal part of the numbrer is less than 0.5 and rounds up if it is greater than or equal to 0.5
  return root * root === n;
};
console.log(isSquare(-1)); //false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true

console.log("---Break---");

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB")); //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //[1, 2, 3]

console.log("---Break---");

//Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
//Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
//Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
//The Database:
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'

function greet(language) {
  switch (language.toLowerCase()) {
    case "english":
      return "Welcome";
    case "czech":
      return "Vitejte";
    case "danish":
      return "Velkomst";
    case "dutch":
      return "Welkom";
    case "estonian":
      return "Tere tulemast";
    case "finnish":
      return "Tervetuloa";
    case "flemish":
      return "Welgekomen";
    case "french":
      return "Bienvenue";
    case "german":
      return "Willkommen";
    case "irish":
      return "Failte";
    case "italian":
      return "Benvenuto";
    case "latvian":
      return "Gaidits";
    case "lithuanian":
      return "Laukiamas";
    case "polish":
      return "Witamy";
    case "spanish":
      return "Bienvenido";
    case "swedish":
      return "Valkommen";
    case "welsh":
      return "Croeso";
    default:
      return "Welcome";
  }
}
console.log(greet("english")); // Welcome
console.log(greet("czech")); // Vitejte
console.log(greet("blah")); //  Welcome

console.log("---Break---");

//Write a function that checks if a given string (case insensitive) is a palindrome.
//A palindrome is a word the reads the same backwards as forwards like madam
function isPalindrome(x) {
  x = x.toLowerCase();
  x = x.replace(/[^a-z0-9]/g, ""); //The replace() method is used with a regular expression to remove all non-alphanumeric characters from the string. The regular expression [^a-z0-9] matches any character that is not a lowercase letter or a digit.
  return x === x.split("").reverse().join("");
}
console.log(isPalindrome("a")); //true
console.log(isPalindrome("aBa")); //true
console.log(isPalindrome("hello")); //false
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("racecar")); //true

console.log("---Break---");

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  return x
    .split("")
    .map((char) => {
      if (parseInt(char) < 5) {
        //The parseInt method converts a string to an integer
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
}
//Simpler Solution
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
console.log(fakeBin("45385593107843568")); //01011110001100111

console.log("---Break---");

//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
//The four operators are "add", "subtract", "divide", "multiply".
function arithmetic(a, b, operator) {
  return operator === "add"
    ? a + b
    : operator === "subtract"
    ? a - b
    : operator === "multiply"
    ? a * b
    : operator === "divide"
    ? a / b
    : null;
}

//Alternate Solution by creating an object
function arithmetic(a, b, operator) {
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operations[operator];
}

console.log(arithmetic(5, 2, "add")); //7
console.log(arithmetic(5, 2, "subtract")); //3
console.log(arithmetic(5, 2, "multiply")); //10
console.log(arithmetic(5, 2, "divide")); //2.5

console.log("---Break---");

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
function sumStr(a, b) {
  a = Number(a);
  b = Number(b);
  return String(a + b);
}
console.log(sumStr("4", "5")); // 9

console.log("---Break---");

//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
var maxSequence = function (arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum < 0) {
      currentSum = 0;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6

console.log("---Break---");

//accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(s) {
  const arr = s.split("");
  let result = [];
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].repeat(num)); //The repeat method returns a new string containing the original string repeated a certain number of times
    num++;
  }
  let total = [];
  for (let i = 0; i < result.length; i++) {
    let char = result[i];
    char = char[0].toUpperCase() + char.substring(1).toLowerCase();
    total.push(char);
  }
  return total.join("-");
}

//Simpler solution
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
//For the map method, the first parameter is a callback function that will be called for each element in the array. The callback function can take up to three parameters: the current element, the index of the current element, and the array itself.
//The second parameter (optional) is the this value that will be used by the callback function.
//In the accum function shown in the map example, map takes a callback function with two parameters (c, i), where c represents the current element (character), and i represents the index of the current element in the array.

console.log(accum("abcdef")); //A-Bb-Ccc-Dddd

console.log("---Break---");

//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs	price per unit (cents)
//    n < 5                   100
//    n >= 5 and n < 10	      95
//    n >= 10                 90
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
console.log(saleHotdogs(1)); //100
console.log(saleHotdogs(9)); //855

console.log("---Break---");

//Write a function that given a floor in the american system returns the floor in the european system.
//With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//Basements (negatives) stay the same as the universal level.
function getRealFloor(n) {
  return n <= 0 ? n : n <= 13 ? n - 1 : n - 2;
}
console.log(getRealFloor(1)); //0
console.log(getRealFloor(5)); //4
console.log(getRealFloor(15)); //13
console.log(getRealFloor(-3)); //-3

console.log("---Break---");

//Convert a string of words to an array of words
function stringToArray(string) {
  return string.split(" ");
}
console.log(stringToArray("Robin Singh")); //[Robin, Singh]

console.log("---Break---");

//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// 1. "I love you"
// 2. "a little"
// 3. "a lot"
// 4. "passionately"
// 5. "madly"
// 6. "not at all"
//If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
function howMuchILoveYou(nbPetals) {
  const phrases = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };
  const result = ((nbPetals - 1) % 6) + 1;
  return phrases[result];
}
console.log(howMuchILoveYou(7)); // I love you
console.log(howMuchILoveYou(3)); // a lot

console.log("---Break---");

//Write a function that always returns 5
//You can't use any of the following characters: 0123456789*+-/

function unusualFive() {
  return "fucku".length;
}
console.log(unusualFive());

console.log("---Break---");

//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//This function should return a number (final grade). There are four types of final grades:
//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases

function finalGrade(exam, projects) {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
}
console.log(finalGrade(100, 12)); // 100
console.log(finalGrade(85, 5)); // 90

console.log("---Break---");

//Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:
function countChange(money, coins) {
  if (money === 0) {
    return 1;
  }

  if (money < 0 || coins.length === 0) {
    return 0;
  }

  const waysWithoutFirstCoin = countChange(money, coins.slice(1));
  const waysWithFirstCoin = countChange(money - coins[0], coins);

  return waysWithoutFirstCoin + waysWithFirstCoin;
}
console.log(countChange(4, [1, 2])); //3
console.log(countChange(10, [5, 2, 3])); //4
console.log(countChange(11, [5, 7])); //0

console.log("---Break---");

//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
var isAnagram = function (test, original) {
  test = test.toLowerCase().split("").sort().join("");
  original = original.toLowerCase().split("").sort().join("");

  return test === original;
};
console.log(isAnagram("fOefet", "toffee"));

console.log("---Break---");

//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
//Note to Tax: not the invested principal is taxed, but only the year's accrued interest
function calculateYears(principal, interest, tax, desired) {
  tax = 1 - tax;
  let years = 0;
  let gain = 0;

  while (principal < desired) {
    gain = principal * interest * tax;
    principal += gain;
    years++;
  }
  return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100)); //3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); //14

console.log("---Break---");

//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
function smallEnough(a, limit) {
  let check = a.map((x) => x <= limit);
  check = new Set(check);
  check = [...check];
  return check.length === 1 && check[0] === true ? true : false;
}
//Simpler solution
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false

console.log("---Break---");

//Your task is to find the first element of an array that is not consecutive.
//E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//If the whole array is consecutive then return null2.
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] + 1) !== Math.abs(arr[i + 1])) {
      return arr[i + 1];
    }
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //6
console.log(firstNonConsecutive([1, 2, 3, 4])); //null
console.log(firstNonConsecutive([-10, -9, -8, -7, -6, -4, -3, -2, -1])); //-4

console.log("---Break---");

//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
function expressionMatter(a, b, c) {
  const total1 = a * (b + c);
  const total2 = a * b * c;
  const total3 = a + b + c;
  const total4 = (a + b) * c;
  let arr = [total1, total2, total3, total4];
  return Math.max(...arr);
}
console.log(expressionMatter(2, 1, 2)); //6
console.log(expressionMatter(2, 1, 1)); //4

console.log("---Break---");

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
function order(words) {
  words = words.split(" ");
  words.sort(function (a, b) {
    const numA = parseInt(a.match(/\d+/));
    const numB = parseInt(b.match(/\d+/));
    //  /\d+/ is a regular expression in JavaScript that matches one or more digits (0-9) in a string.
    //  The forward slashes (/) indicate the start and end of the regular expression, and the \d character class matches any digit character. The + quantifier indicates that one or more digit characters should be matched.
    return numA - numB;
  });
  return words.join(" ");
}
console.log(order("is2 Thi1s T4est 3a")); // Thi1s is2 3a T4est

console.log("---Break---");

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let result = [];
  while (a <= b) {
    result.push(a);
    a++;
  }
  return result;
}
console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]

console.log("---Break---");

//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//For example, a tower with 3 floors looks like this:
//["  *  ", " *** ", "*****"]
function towerBuilder(nFloors) {
  if (nFloors === 1) {
    return ["*"];
  } else if (nFloors === 2) {
    return [" * ", "***"];
  }
  let stars = "***";
  let result = ["*"];
  let x = 1;
  while (x !== nFloors) {
    result.push(stars);
    stars += "**";
    x++;
  }
  let n = 0;
  let arr = [];
  for (let i = result.length - 1; i >= 0; i--) {
    let padding = " ".repeat(n);
    if (i < result.length - 1) {
      arr.push(padding + result[i] + padding);
    } else {
      arr.push(result[i]);
    }
    n++;
  }
  return arr.reverse();
}

console.log(towerBuilder(1)); // ['*']
console.log(towerBuilder(2)); // [' * ', '***']
console.log(towerBuilder(3)); // ['  *  ', ' *** ', '*****']

console.log("---Break---");

//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
console.log(reverse("I am an expert at this")); //this at expert an am I

console.log("---Break---");

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  if (num === 0) {
    return "";
  } else if (num === 1) {
    return "1 sheep...";
  }
  let x = 0;
  let arr = [];
  while (x < num) {
    x++;
    arr.push(`${x} sheep...`);
  }

  return arr.join("");
};
console.log(countSheep(0)); // ''
console.log(countSheep(1)); // '1 sheep...'
console.log(countSheep(2)); // '1 sheep...2 sheep...'
console.log(countSheep(3)); // '1 sheep...2 sheep...3 sheep...'

console.log("---Break---");

//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
  let result = 0;
  number = Math.abs(number).toString().split("");

  number.forEach((x) => (result += parseInt(x)));

  return result;
}
//The forEach method does not return a new array, whereas the map method does.

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5

console.log("---Break---");

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
//The test() method is a built-in method in JavaScript that is used to test whether a given string matches a regular expression pattern. It returns a boolean value true if the string matches the pattern, and false otherwise.
function rot13(message) {
  let arr = [];
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    let cipheredCharCode;
    if (charCode >= 65 && charCode <= 90) {
      // uppercase letters
      cipheredCharCode = ((charCode - 65 + 13) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // lowercase letters
      cipheredCharCode = ((charCode - 97 + 13) % 26) + 97;
    } else {
      // non-alphabetic characters
      cipheredCharCode = charCode;
    }
    arr.push(String.fromCharCode(cipheredCharCode));
  }
  return arr.join("");
}
console.log(rot13("test")); // grfg
console.log(rot13("1")); //1

// letter.charCodeAt(0) - 96;

console.log("---Break---");

String.prototype.toAlternatingCase = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    let char = this[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
};

//Simpler solution
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
};

let word = "hEllo";
let alternateCasedString = word.toAlternatingCase();
console.log(alternateCasedString); // HeLLO

console.log("---Break---");

//Given a string containing the numbers 5, 0, or 1 replace 5 with S, 0 with O, and 1 with I.
function correct(string) {
  let replaced = string
    .replace(/1/g, "I")
    .replace(/0/g, "O")
    .replace(/5/g, "S");
  return replaced;
}
console.log(correct("L0ND0N")); // LONDON
console.log(correct("51NGAP0RE")); //SINGAPORE

console.log("---Break---");

//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
//Considering these factors, write a function that tells you if it is possible to get to the pump or not.
//Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};
console.log(zeroFuel(50, 25, 2)); //true
console.log(zeroFuel(100, 50, 1)); //false

console.log("---Break---");

//In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
  return list.reverse();
}
console.log(reverseList([1, 2, 3, 4])); // [4, 3, 2, 1]

console.log("---Break---");

//Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
console.log(mouthSize("toucan")); //wide
console.log(mouthSize("alligator")); //small

console.log("---Break---");

//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove(string) {
  if (string.endsWith("!")) {
    return string.slice(0, -1);
  }
  return string;
}

//Simpler solution
function remove(string) {
  return string.replace(/!$/, ""); //The $ sign means the end of a string
}

console.log(remove("Hi!")); // Hi
console.log(remove("!Hi!")); // !Hi

console.log("---Break---");

//If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
const sequenceSum = (begin, end, step) => {
  if (begin === end && begin === step) {
    return begin;
  }
  let arr = [];
  while (begin <= end) {
    arr.push(begin);
    begin += step;
  }
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};
console.log(sequenceSum(2, 2, 2)); // 2
console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5

console.log("---Break---");

//I got them at the same time as kitten/puppy. That was humanYears years ago.
//Return their respective ages now as [humanYears,catYears,dogYears]
// Cat Years:
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years:
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
var humanYearsCatYearsDogYears = function (humanYears) {
  const age = humanYears;
  const result = [];
  const year1 = 15;
  const year2 = year1 + 9;
  const moreYearsCat = 4 * (age - 2);
  const moreYearsDog = 5 * (age - 2);
  if (age === 1) {
    result.push(age, year1, year1);
  } else if (age === 2) {
    result.push(age, year2, year2);
  } else {
    result.push(age, moreYearsCat + year2, moreYearsDog + year2);
  }
  return result;
};
console.log(humanYearsCatYearsDogYears(1)); // [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2)); // [2, 24, 24]
console.log(humanYearsCatYearsDogYears(10)); // [10, 56, 64]

console.log("---Break---");

//Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
  if (typeof string !== "string") {
    return "Error: Input is not a string";
  }
  let result = string.replace(/([A-Z])/g, " $1"); //In the replacement string ' $1', the $1 represents the first captured group of characters from the regular expression. In this case, the captured group is a single capital letter, which matches the pattern [A-Z].

  return result;
}
console.log(solution("camelCasing")); //camel Casing
console.log(solution("camelCasingTest")); //camel Casing Test

console.log("---Break---");

//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//If input is below 0 or above 12 throw a RangeError
function factorial(n) {
  let arr = [];
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12"); //throw new RangeError creates an error message instead of logging a message to the console.
  } else if (n === 1 || n === 2) {
    return n;
  } else if (n === 0) {
    return 1;
  }
  while (n !== 1) {
    arr.push(n);
    n--;
  }
  return arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
}
//Simpler solution
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6

console.log("---Break---");

//Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(nameShuffler("John McClane")); // McClane john
console.log(nameShuffler("Mary jeggins")); // jeggins Mary

console.log("---Break---");

//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
function sayHello(name) {
  return `Hello, ${name}`;
}
console.log(sayHello("Mr. Spock")); // Hello, Mr. Spock
console.log(sayHello("Captain Kirk")); // Hello, Captain Kirk

console.log("---Break---");

//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
//Square all numbers k (0 <= k <= n) between 0 and n.
//Count the numbers of digits d used in the writing of all the k**2.
function nbDig(n, d) {
  let count = 0;
  for (let k = 0; k <= n; k++) {
    let square = (k ** 2).toString();
    for (let i = 0; i < square.length; i++) {
      if (square[i] === d.toString()) {
        count++;
      }
    }
  }
  return count;
}
console.log(nbDig(5750, 0)); // 4700
console.log(nbDig(11011, 2)); // 9481
console.log(nbDig(12224, 8)); // 7733

console.log("---Break---");

//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}
console.log(replace("Hi!")); //H!!
console.log(replace("!Hi! Hi!")); //!H!! H!!

console.log("---Break---");

//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//If no occurrences can be found, a count of 0 should be returned.
function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(strCount("Hello", "o")); // 1
console.log(strCount("Hello", "l")); // 2
console.log(strCount("", "z")); // 0

console.log("---Break---");

//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
  let result = [];
  let x = integer;
  while (x <= limit) {
    result.push(x);
    x = x + integer;
  }
  return result;
}
console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2)); // [1, 2]
console.log(findMultiples(5, 7)); // [5]

console.log("---Break---");

//If the given name is Zach return 18 for anything else return 0
function howmManyLightSabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
console.log(howmManyLightSabersDoYouOwn()); // 0
console.log(howmManyLightSabersDoYouOwn("Adam")); // 0
console.log(howmManyLightSabersDoYouOwn("Zach")); // 18

console.log("---Break---");

//Kids drink toddy.
//Teens drink coke.
//Young adults drink beer.
//Adults drink whisky.
//Make a function that receive age, and return what they drink.
//Rules:
//Children under 14 old.
//Teens under 18 old.
//Young under 21 old.
//Adults have 21 or more.
function peopleWithAgeDrink(old) {
  switch (true) {
    case old < 14:
      return "drink toddy";
    case old >= 14 && old < 18:
      return "drink coke";
    case old >= 18 && old < 21:
      return "drink beer";
    case old >= 21:
      return "drink whisky";
    default:
      false;
  }
}
console.log(peopleWithAgeDrink(13)); // drink toddy
console.log(peopleWithAgeDrink(17)); // drinke coke
console.log(peopleWithAgeDrink(18)); // drink beer
console.log(peopleWithAgeDrink(39)); // drink whisky

console.log("---Break---");

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
function findNextSquare(sq) {
  sq = Math.sqrt(sq);
  return !Number.isInteger(sq) ? -1 : Math.pow(sq + 1, 2); //Number.isInteger() is used to check if a number is a whole number. It returns true or false.
}
console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1

console.log("---Break---");

//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
function move(position, roll) {
  return roll * 2 + position;
}
console.log(move(0, 4)); //8
console.log(move(3, 6)); //15
console.log(move(2, 5)); //12

console.log("---Break---");

//Numbers ending with zeros are boring.
//They might be fun in your world, but not here.
//Get rid of them. Only the ending ones.
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}
console.log(noBoringZeros(1450)); //145
console.log(noBoringZeros(960000)); //96
console.log(noBoringZeros(-1050)); //-105
console.log(noBoringZeros(-105)); //-105
console.log(noBoringZeros(0)); //0

console.log("---Break---");

//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
function mergeArrays(arr1, arr2) {
  const newArray = [...arr1, ...arr2];
  let noDuplicates = new Set(newArray);
  let sortedArray = [...noDuplicates].sort((a, b) => a - b) || [];
  return sortedArray || [];
}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8];
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); // [1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //[1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
console.log(mergeArrays([], [])); // []

console.log("---Break---");

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
};

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); //4

console.log("---Break---");

//Now you have to write a function that takes an argument and returns the square of it.
function square(num) {
  return Math.pow(num, 2);
}
console.log(square(3)); //9

console.log("---Break---");

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};
console.log(capitals("CodEWaRs")); //[0, 3, 4, 6]

console.log("---Break---");

//Create a function that returns the name of the winner in a fight between two fighters.
//Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//Your function also receives a third argument, a string, with the name of the fighter that attacks first.
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}
console.log(
  declareWinner(
    { name: "Lew", health: 10, damage: 2 },
    { name: "Harry", health: 5, damage: 4 },
    "Lew"
  )
); // Lew
console.log(
  declareWinner(
    { name: "Lew", health: 10, damage: 2 },
    { name: "Harry", health: 5, damage: 4 },
    "Harry"
  )
); // Harry

console.log("---Break---");

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map((x) => (x >= 0 ? x * -1 : Math.abs(x)));
}
console.log(invert([1, 2, 3, 4, 5])); //[-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); //[-1, 2, -3, 4, -5]
console.log(invert([0]));

console.log("---Break---");

//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//If there are more uppercase letters convert the string to lowercase and vice versa
function solve(s) {
  let lowerCount = 0;
  let upperCount = 0;
  let regexLower = /[a-z]/g;
  let regexUpper = /[A-Z]/g;
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(regexLower)) {
      lowerCount++;
    } else if (s[i].match(regexUpper)) {
      upperCount++;
    }
  }
  return lowerCount > upperCount
    ? s.toLowerCase()
    : upperCount > lowerCount
    ? s.toUpperCase()
    : s.toLowerCase();
}
console.log(solve("code")); //code
console.log(solve("CODe")); //CODE
console.log(solve("COde")); //code
console.log(solve("Code")); //code

console.log("---Break---");

//Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
//First argument (required): the original string to be converted.
//Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
function titleCase(title, minorWords = "") {
  if (title === title.toLowerCase() && !minorWords) {
    return title
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(" ");
  }
  title = title.toLowerCase().split(" ");
  minorWords = minorWords.toLowerCase().split(" ");

  for (let i = 0; i < title.length; i++) {
    if (i === 0 || !minorWords.includes(title[i])) {
      title[i] = title[i].slice(0, 1).toUpperCase() + title[i].slice(1);
    }
  }
  return title.join(" ");
}
console.log(titleCase("a clash of KINGS", "a an the of")); //A Clash of Kings
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); //The Wind in the Willows
console.log(titleCase("the quick brown fox")); //The Quick Brown Fox

console.log("---Break---");

//Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
function getChar(c) {
  return String.fromCharCode(c);
}
console.log(getChar(65)); //A
console.log(getChar(58)); //:

console.log("---Break---");

//Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin) {
  return parseInt(bin, 2);
}
console.log(binToDec("1001001")); //73
console.log(binToDec("0")); //0

console.log("---Break---");

//When provided with a letter, return its position in the alphabet.
function position(letter) {
  let result = [];
  let arr = ["abcdefghijklmnopqrstuvwxyz"];
  arr = arr[0].split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      result.push(i + 1);
    }
  }
  return `Position of alphabet: ${Number(result)}`;
}
console.log(position("a")); //1
console.log(position("z")); //26

console.log("---Break---");

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
  return health > damage ? health - damage : 0;
}
console.log(combat(100, 5)); // 95
console.log(combat(92, 8)); // 84
console.log(combat(20, 30)); // 0

console.log("---Break---");

//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
function toBinary(n) {
  return Number(n.toString(2)); //When toString() is used with a radix of 2, it returns the binary form of a number
}
console.log(toBinary(1)); //1
console.log(toBinary(2)); //10
console.log(toBinary(5)); //101

console.log("---Break---");

//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
function minValue(values) {
  values = values.sort((a, b) => a - b);
  values = new Set(values);
  let arr = [...values];
  return Number(arr.join(""));
}
console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 8, 1, 4])); //148
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); //134679

console.log("---Break---");

//Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//For example: ["3:1", "2:2", "0:1", ...]
//Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

function points(games) {
  games = games.map((x) => x.split(" ")[0]);

  let score = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      score += 3;
    } else if (games[i][0] === games[i][2]) {
      score += 1;
    }
  }
  return score;
}
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); //30

console.log("---Break---");

//Given a string str, reverse it and omit all non-alphabetic characters.
function reverseLetter(str) {
  return str.match(/[a-z]/gi).reverse().join("");
}
console.log(reverseLetter("krishan")); //nahsirk
console.log(reverseLetter("ultr53o?n")); //nortlu

console.log("---Break---");

//This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
//Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
console.log(derive(7, 8)); //56x^7
console.log(derive(5, 9)); //45x^8

console.log("---Break---");

//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  currentDate = currentDate.split(" ");
  let currentDay = Number(currentDate[1][0]);
  currentDate = currentDate[0];
  expirationDate = expirationDate.split(" ");
  let expirationDay = Number(expirationDate[1][0]);
  expirationDate = expirationDate[0];
  let currentDateNum = Number(
    currentDate
      .replace(/January/g, 1)
      .replace(/February/g, 2)
      .replace(/March/g, 3)
      .replace(/April/g, 4)
      .replace(/May/g, 5)
      .replace(/June/g, 6)
      .replace(/July/g, 7)
      .replace(/August/g, 8)
      .replace(/September/g, 9)
      .replace(/October/g, 10)
      .replace(/November/g, 11)
      .replace(/December/g, 12)
  );
  let expirationDateNum = Number(
    expirationDate
      .replace(/January/g, 1)
      .replace(/February/g, 2)
      .replace(/March/g, 3)
      .replace(/April/g, 4)
      .replace(/May/g, 5)
      .replace(/June/g, 6)
      .replace(/July/g, 7)
      .replace(/August/g, 8)
      .replace(/September/g, 9)
      .replace(/October/g, 10)
      .replace(/November/g, 11)
      .replace(/December/g, 12)
  );
  if (enteredCode === correctCode && currentDateNum < expirationDateNum) {
    return true;
  } else if (
    enteredCode === correctCode &&
    currentDateNum === expirationDateNum &&
    currentDay < expirationDay
  ) {
    return true;
  } else if (
    enteredCode === correctCode &&
    currentDateNum === expirationDateNum &&
    currentDay === expirationDay
  ) {
    return true;
  } else if (
    enteredCode === correctCode &&
    currentDateNum === expirationDateNum &&
    currentDay < expirationDay
  ) {
    return true;
  } else {
    return false;
  }
}

//Simpler Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  if (
    enteredCode === correctCode &&
    current.getTime() <= expiration.getTime()
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")); // true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")); // false
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")); // true
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); // false

console.log("---Break---");

//If the input contains a Y return Congratulations! You are going to have a son. If not return Congratulations! You are going to have a daughter.
function chromosomeCheck(sperm) {
  return sperm.match(/Y/g)
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}
console.log(chromosomeCheck("XY")); //Congratulations! You are going to have a son.
console.log(chromosomeCheck("XX")); //Congratulations! You are going to have a daughter.

console.log("---Break---");

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
  const area =
    2 * (width * depth) + 2 * (width * height) + 2 * (height * depth);
  const volume = width * height * depth;
  return [area, volume];
}
console.log(getSize(4, 2, 6)); //[88, 48]
console.log(getSize(10, 10, 10)); //[600, 1000]

console.log("---Break---");

function main(verb = "", noun = "") {
  return verb.trim() + " " + noun.trim(); //the trim method is used to remove any leading or trailing whitespace.
}
console.log(main("take", "item")); //take item

console.log("---Break---");

function multipleOfIndex(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); //[-6, 32, 25]

console.log("---Break---");

//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//   7      6      5      4      3            2      1
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue
function warnTheSheep(queue) {
  let sheep;
  for (let i = 0; i < queue.length; i++) {
    if (queue[queue.length - 1] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (queue[i] === "wolf") {
      sheep = queue.length - (i + 1);
    }
  }
  return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`;
}
console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
); //Oi! Sheep number 2! You are about to be eaten by a wolf!

console.log(warnTheSheep(["sheep", "sheep", "wolf"])); //

console.log("---Break---");

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
function plural(n) {
  return n > 1 || n < 1;
}
console.log(plural(0)); //true
console.log(plural(0.5)); //true
console.log(plural(1)); //false
console.log(plural(100)); //true
console.log(plural(Infinity)); //true

console.log("---Break---");

//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
function include(arr, item) {
  return arr.includes(item);
}
console.log(include([1, 2, 3, 4], 3)); //true
console.log(include([1, 2, 4, 5], 3)); //false

console.log("---Break---");

//Your task is to write function factorial.
function factorial(n) {
  let result = 1;
  let a = n;
  while (a > 1) {
    result *= a;
    a--;
  }
  return result;
}
console.log(factorial(4)); //24
console.log(factorial(5)); //120

console.log("---Break---");

//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
function hello(name = "") {
  name = name.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1); //1 represents the index at which to start. So slice(1) means start at the second letter because 0 is the first letter.
  return name ? `Hello, ${name}!` : "Hello, World!";
}
console.log(hello("alice")); // Hello, Alice!
console.log(hello("")); // Hello, World!
console.log(hello("joHn")); // Hello, World!

console.log("---Break---");

//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
function capitalize(s) {
  let result = "";
  let result2 = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      result2 += s[i].toUpperCase();
    } else {
      result2 += s[i];
    }
  }
  return [result, result2];
}

console.log(capitalize("abcdef")); // [AbCdEf, aBcDeF]

console.log("---Break---");

//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
function sumOfMinimums(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
    result += min;
  }
  return result;
}
console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
); // 26

console.log("---Break---");

//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
function sayHello(name, city, state) {
  let fullName = "";
  for (const x of name) {
    fullName += " " + x;
  }
  return `Hello,${fullName}! Welcome to ${city}, ${state}!`;
}
console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona")); //Hello John Smith! Weclome to Phoneix, Arizona!
console.log(
  sayHello(["Douglas", "Doug", "Stamper"], "Los Angeles", "California")
); //Hello John Smith! Weclome to Phoneix, Arizona!

console.log("---Break---");

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut(string) {
  return string.replace(/[aeiou]/gi, "");
}
console.log(shortcut("hello")); //hll
console.log(shortcut("codewars")); //cdwrs

console.log("---Break---");

//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//"This white dog has 4 legs."
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
console.log(animal({ name: "dog", legs: 4, color: "white" })); // This white dog has 4 legs.

console.log("---Break---");

//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
function findDifference(a, b) {
  return Math.abs(
    a.reduce((total, num) => total * num, 1) -
      b.reduce((total, num) => total * num, 1)
  );
}
console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
console.log(findDifference([9, 7, 2], [5, 2, 2])); // 106
console.log(findDifference([2, 2, 3], [5, 4, 1])); // 8

console.log("---Break---");

//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++;
  }
  return n;
}
console.log(roundToNext5(-5)); // -5
console.log(roundToNext5(0)); // -5
console.log(roundToNext5(2)); // 5
console.log(roundToNext5(21)); // 25

console.log("---Break---");

//A stream of data is received and needs to be reversed.
//Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
function dataReverse(data) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  for (let i = 0; i < data.length; i++) {
    if (arr1.length !== 8) {
      arr1.push(data[i]);
    }
    for (let i = 8; i < data.length; i++) {
      if (arr2.length !== 8) {
        arr2.push(data[i]);
      }
    }
    for (let i = 16; i < data.length; i++) {
      if (arr3.length !== 8) {
        arr3.push(data[i]);
      }
    }
    for (let i = 24; i < data.length; i++) {
      if (arr4.length !== 8) {
        arr4.push(data[i]);
      }
    }
  }
  let result = [];
  result.push(...arr4, ...arr3, ...arr2, ...arr1);
  return result;
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
); // [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]

console.log("---Break---");

//["h","o","l","a"]
//Output: String with comma delimited elements of the array in th same order.
//"h,o,l,a"
function printArray(array) {
  return array.join(",");
}
console.log(printArray(["h", "o", "l", "a"])); // h,o,l,a

console.log("---Break---");

function check(a, x) {
  return a.includes(x);
}
console.log(check([66, 101], 66)); // true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // true

console.log("---Break---");

//Check if a string contains the word 'english'
function spEng(sentence) {
  let sentenceLower = sentence.toLowerCase();
  return sentenceLower.includes("english");
}
console.log(spEng("english"));

console.log("---Break---");

//
function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let x = 1;
  let result = [];
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    result.push(
      "*"
        .repeat(x)
        .padStart(Math.ceil(n / 2) + i, " ")
        .padEnd(n - Math.ceil(n / 2) - i, " ")
    );
    x += 2;
  }
  let y = n - 2;
  for (let i = Math.ceil(n / 2); i < n; i++) {
    result.push(
      "*"
        .repeat(y)
        .padStart(i + 1, " ")
        .padEnd(n - Math.ceil(n / 2) + (n - i - 2), " ")
    );
    y -= 2;
  }
  result = result.join("\n") + "\n";
  return result;
}

console.log(diamond(2)); // null
console.log(diamond(-3)); // null
console.log(diamond(1)); // *\n
console.log(diamond(3)); // *\n***\n *\n
console.log(diamond(5)); // *\n ***\n*****\n ***\n  *\n

console.log("---Break---");

//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str) {
  str = str.split(" ");
  // return str[0].length;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i] + " " + str[i].length);
  }
  return result;
}
console.log(addLength("apple ban")); // [apple 5, ban 3]
console.log(addLength("you will win")); // [you 3, will 4, win 3]

console.log("---Break---");

//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
  return x === x.toString() ? "Error" : x * 50 + 6;
}
console.log(problem(1)); // 56
console.log(problem(5)); // 256
console.log(problem("5")); // 256

console.log("---Break---");

//Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
  let total = 0;
  for (const x of nums) {
    total += x;
  }
  return total / nums.length;
};
console.log(findAverage([1])); // 1
console.log(findAverage([1, 3, 5, 7])); // 4

console.log("---Break---");

//Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function () {
  return this === this.toUpperCase();
};
let word2 = "HELLO WORLD";
let test = word2.isUpperCase();
console.log(test); // false

console.log("---Break---");

//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
function calculateAge(date1, date2) {
  switch (true) {
    case date1 < date2 && date2 - date1 > 1:
      return `You are ${date2 - date1} years old.`;
    case date1 < date2 && date2 - date1 <= 1:
      return `You are ${date2 - date1} year old.`;
    case date1 > date2 && date1 - date2 > 1:
      return `You will be born in ${date1 - date2} years.`;
    case date1 > date2 && date1 - date2 <= 1:
      return `You will be born in ${date1 - date2} year.`;
    case date1 === date2:
      return `You were born this very year!`;
    default:
      "No";
  }
}

console.log(calculateAge(2012, 2016)); // You are 4 years old
console.log(calculateAge(2022, 2016)); // You will be born in 6 years
console.log(calculateAge(2016, 2016)); // You were born this very year!

console.log("---Break---");

//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
console.log(feast("great blue heron", "garlic naan")); //true
console.log(feast("chickadee", "chocolate cake")); //true
console.log(feast("brown bear", "bear claw")); //false

console.log("---Break---");

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url) {
  url = url.split("#");
  let result = "";
  return (result += url[0]);
}
console.log(removeUrlAnchor("www.codewars.com#about")); // 'www.codewars.com'
console.log(removeUrlAnchor("www.codewars.com?page=1")); // 'www.codewars.com?page=1'

console.log("---Break---");

//
function incrementString(string) {
  string = string.split("");
  if (!Number(string[string.length - 1]) && Number(string[string.length - 1])) {
    return string.join("") + "1";
  }
  let number = [];
  let regex = /[a-z]/;
  for (const x of string) {
    if (!regex.test(x)) {
      number.push(x);
    }
  }
  let word = "";
  for (const y of string) {
    if (regex.test(y)) {
      word += y;
    }
  }

  let lastNum = number.slice(-1);
  lastNum = Number(lastNum) + 1;
  let newNum = number.slice(0, -1).join("");
  let fullNum = newNum + lastNum;

  number = Number(number.join("")) + 1;

  return Number(string[string.length - 1]) !== 0
    ? word + number
    : word + fullNum;
}
console.log(incrementString("foo")); // foo1
console.log(incrementString("foobar23")); // foobar24
console.log(incrementString("foobar000")); // foobar001
console.log(incrementString("foobar999")); // foobar1000

console.log("---Break---");

//Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2)); // the toFixed() method rounds a number to the specified number of decimal places
}
console.log(twoDecimalPlaces(5.5589)); // 5.56
console.log(twoDecimalPlaces(3.3424)); // 3.34

console.log("---Break---");

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
function sumMix(x) {
  let arr = [];
  for (const num of x) {
    arr.push(Number(num));
  }
  return arr.reduce((sum, total) => sum + total);
}
console.log(sumMix([9, 3, "7", "3"])); // 22

console.log("---Break---");

//Remove all exclamation marks from the end of sentence.
function remove(string) {
  return string.replace(/!+$/, ""); // + means one or more of the ! sign and $ means at the end of the input string
}
console.log(remove("Hi!")); // Hi
console.log(remove("Hi!!")); // Hi
console.log(remove("!Hi!")); // !Hi

console.log("---Break---");

//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//The input to the function will be an array of three distinct numbers (Haskell: a tuple).
function gimme(triplet) {
  let tripletCopy = triplet.slice(); // this creates a shallow copy of the array
  let copy = tripletCopy.sort(function (a, b) {
    return a - b;
  });
  let compareNum = Number(copy.slice(1, 2));
  let result = "";
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] === compareNum) {
      result += i;
    }
  }
  return Number(result);
}
console.log(gimme([2, 3, 1])); // 0
console.log(gimme([5, 10, 14])); // 1

console.log("---Break---");

//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
function take(arr, n) {
  return arr.slice(0, n);
}
console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2]

console.log("---Break---");

//
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]

console.log("---Break---");

//Complete the function that receives as input a string, and produces outputs according to the following table:
// Input	              Output
// "Jabroni"	          "Patron Tequila"
// "School Counselor"	  "Anything with Alcohol"
// "Programmer"	        "Hipster Craft Beer"
// "Bike Gang Member"	  "Moonshine"
// "Politician"	        "Your tax dollars"
// "Rapper"	            "Cristal"
// anything else	      "Beer"
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  switch (true) {
    case "jabroni" === param:
      return "Patron Tequila";
    case "school counselor" === param:
      return "Anything with Alcohol";
    case "programmer" === param:
      return "Hipster Craft Beer";
    case "bike gang member" === param:
      return "Moonshine";
    case "politician" === param:
      return "Your tax dollars";
    case "rapper" === param:
      return "Cristal";
    default:
      return "Beer";
  }
}
console.log(getDrinkByProfession("jabrOni")); // Patron Tequila
console.log(getDrinkByProfession("schOOl counselor")); // Anything with Alcohol
console.log(getDrinkByProfession("student")); // Beer

console.log("---Break---");

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}
console.log(array("1,2,3")); // 2
console.log(array("1,2,3,4")); // 2 3
console.log(array("1,2,3,4,5")); // 2 3 4

console.log("---Break---");

//Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
// Left side
// w - 4
// p - 3
// b - 2
// s - 1
// Right side
// m - 4
// q - 3
// d - 2
// z - 1

function alphabetWar(fight) {
  let regex = /[wpbsmqdz]/;
  let arr = [];
  for (let i = 0; i < fight.length; i++) {
    if (regex.test(fight[i])) {
      arr.push(fight[i]);
    }
  }
  let leftSide = 0;
  let rightSide = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "w") {
      leftSide += 4;
    }
    if (arr[i] === "p") {
      leftSide += 3;
    }
    if (arr[i] === "b") {
      leftSide += 2;
    }
    if (arr[i] === "s") {
      leftSide += 1;
    }
    if (arr[i] === "m") {
      rightSide += 4;
    }
    if (arr[i] === "q") {
      rightSide += 3;
    }
    if (arr[i] === "d") {
      rightSide += 2;
    }
    if (arr[i] === "z") {
      rightSide += 1;
    }
  }
  let leftRight = [leftSide, rightSide];
  return leftRight[0] > leftRight[1]
    ? "Left side wins!"
    : leftRight[1] > leftRight[0]
    ? "Right side wins!"
    : "Let's fight again!";
}
console.log(alphabetWar("z")); // Right side wins!
console.log(alphabetWar("zdqmwpbs")); // Let's fight again!
console.log(alphabetWar("wwwww")); // Left side wins!

console.log("---Break---");

//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
function multiTable(number) {
  let result = "";
  let x = 1;
  while (x <= 10) {
    result += `${x} * ${number} = ${x * number}\n`;
    x++;
  }
  return result.trim();
}
console.log(multiTable(5)); //

console.log("---Break---");

//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
var greet = function (name) {
  name = name.toLowerCase();
  let firstLetter = name.slice(0, 1).toUpperCase();
  return `Hello ${firstLetter + name.slice(1)}!`;
};
console.log(greet("riley")); // Hello Riley!
console.log(greet("JACK")); // Hello Jack!

console.log("---Break---");

//Given a sequence of numbers, find the largest pair sum in the sequence.
function largestPairSum(numbers) {
  numbers = numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}
console.log(largestPairSum([10, 14, 2, 23, 19])); // 42
console.log(largestPairSum([99, 2, 2, 23, 19])); // 122

console.log("---Break---");

//Your task is simply to count the total number of lowercase letters in a string.
function lowercaseCount(str) {
  let regex = /([a-z])(?!.*\1)/;
  let total = 0;
  for (const x of str) {
    if (regex.test(x)) {
      total++;
    }
  }
  return total;
}
console.log(lowercaseCount("abc")); // 3
console.log(lowercaseCount("abcABC123")); // 3
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); // 26

console.log("---Break---");

//We want to generate a function that computes the series starting from 0 and ending until the given number.
var SequenceSum = {
  showSequence: function (count) {
    let x = 0;
    let total = 0;
    let equation = "";
    while (x <= count) {
      total += x;
      equation += x + "+";
      x++;
    }
    return count > 0
      ? `${equation.slice(0, -1)} = ${total}`
      : count < 0
      ? `${count}<0`
      : `${count}=${count}`;
  },
};

console.log(SequenceSum.showSequence(6)); // 0+1+2+3+4+5+6 = 21
console.log(SequenceSum.showSequence(-15)); // -15 < 0
console.log(SequenceSum.showSequence(0)); // -15 < 0

console.log("---Break---");

//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
function mango(quantity, price) {
  if (quantity <= 2) {
    return quantity * price;
  }
  let threeForTwo = 0;
  while (quantity >= 3) {
    quantity -= 3;
    threeForTwo++;
  }
  return threeForTwo * (price * 2) + quantity * price;
}
console.log(mango(2, 3)); // 6
console.log(mango(3, 3)); // 6
console.log(mango(5, 3)); // 12
console.log(mango(9, 5)); // 30

console.log("---Break---");

//If　a = 1, b = 2, c = 3 ... z = 26
//Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
function wordsToMarks(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i) - 96;
  }
  return sum;
}
console.log(wordsToMarks("attitude")); // 100

console.log("---Break---");

function whatday(num) {
  switch (true) {
    case num === 1:
      return "Sunday";
    case num === 2:
      return "Monday";
    case num === 3:
      return "Tuesday";
    case num === 4:
      return "Wednesday";
    case num === 5:
      return "Thursday";
    case num === 6:
      return "Friday";
    case num === 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}
console.log(whatday(1)); // Sunday
console.log(whatday(18)); // Wrong, please enter a number between 1 and 7.

console.log("---Break---");

//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
function remainder(n, m) {
  let x = 0;
  let y = 0;
  if (n > m) {
    x = n;
    y = m;
  } else if (m > n) {
    x = m;
    y = n;
  } else if (n === m && n < 0 && m < 0) {
    return 0;
  }
  return x % y;
}
console.log(remainder(17, 5)); // 2
console.log(remainder(13, 72)); // 7
console.log(remainder(0, -1)); // 0
console.log(remainder(0, 1)); // NaN
console.log(remainder(-13, -13)); // 0

console.log("---Break---");
//Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
function combineNames(first, last) {
  return first + " " + last;
}
console.log(combineNames("James", "Stevens")); // James Stevens

console.log("---Break---");

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//This is indexed from [1..n] (not zero indexed!)
function vowelIndices(word) {
  word = word.toLowerCase();
  let regex = /[aeiouy]/;
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (regex.test(word[i])) {
      result.push(i + 1);
    }
  }
  return result;
}
console.log(vowelIndices("apple")); // [1, 5]
console.log(vowelIndices("YoMama")); // [1, 2, 4, 6]

console.log("---Break---");

//Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
function xor(a, b) {
  return a === false && b === true
    ? true
    : a === true && b === false
    ? true
    : a === false && b === true
    ? true
    : false;
}
console.log(xor(false, false)); // false
console.log(xor(false, true)); // true
console.log(xor(true, true)); // false

console.log("---Break---");

//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])); // [Eyes, Glasses, Monocles, Telescopes]
console.log(sortByLength(["Beg", "I", "Life", "To"])); // [I To Beg Life]

console.log("---Break---");

//Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
function bump(x) {
  let bumpCount = 0;
  for (const b of x) {
    if (b === "n") {
      bumpCount++;
    }
  }
  return bumpCount <= 15 ? "Woohoo!" : "Car Dead";
}
console.log(bump("n")); // Woohoo!
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // Car Dead

console.log("---Break---");

//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
function flattenAndSort(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }
  return result.sort((a, b) => a - b);
}
console.log(flattenAndSort([[], [1]])); // [1]
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]

console.log("---Break---");

// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
function isSortedAndHow(array) {
  const ascending = array.slice().sort((a, b) => a - b);
  const descending = array.slice().sort((a, b) => b - a);
  return array.join("") === ascending.join("")
    ? "yes, ascending"
    : array.join("") === descending.join("")
    ? "yes, descending"
    : "no";
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));

console.log("---Break---");

//Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
function sumCubes(n) {
  let result = 0;
  while (n !== 0) {
    result += Math.pow(n, 3);
    n--;
  }
  return result;
}
console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36

console.log("---Break---");

//Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
function toNumberArray(stringarray) {
  let result = [];
  for (const x of stringarray) {
    result.push(Number(x));
  }
  return result;
}
console.log(toNumberArray(["1.1", "2.2", "3.3"])); // [1.1, 2.2, 3.3]

console.log("---Break---");

//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
function index(array, n) {
  return array[n] ? Math.pow(array[n], n) : -1;
}
console.log(index([1, 2, 3, 4], 2)); // 9
console.log(index([1, 2, 3], 3)); // -1

console.log("---Break---");

//You get any card as an argument. Your task is to return the suit of this card (in lowercase).
function defineSuit(card) {
  card = card.slice(-1);
  switch (true) {
    case card === "♣":
      return "clubs";
    case card === "♦":
      return "diamonds";
    case card === "♥":
      return "hearts";
    case card === "♠":
      return "spades";
  }
}
console.log(defineSuit("3♣")); // clubs
console.log(defineSuit("10♥")); // hearts

console.log("---Break---");

//
function sortGiftCode(code) {
  return code.split("").sort().join("");
}
console.log(sortGiftCode("fedcba")); // abcdef

console.log("---Break---");

//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
function encode(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      result.push(string[i].replace(string[i], 1));
    } else if (string[i] === "e") {
      result.push(string[i].replace(string[i], 2));
    } else if (string[i] === "i") {
      result.push(string[i].replace(string[i], 3));
    } else if (string[i] === "o") {
      result.push(string[i].replace(string[i], 4));
    } else if (string[i] === "u") {
      result.push(string[i].replace(string[i], 5));
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
}

function encode(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
      result.push(string[i].replace(string[i], "a"));
    } else if (string[i] === "2") {
      result.push(string[i].replace(string[i], "e"));
    } else if (string[i] === "3") {
      result.push(string[i].replace(string[i], "i"));
    } else if (string[i] === "4") {
      result.push(string[i].replace(string[i], "o"));
    } else if (string[i] === "5") {
      result.push(string[i].replace(string[i], "u"));
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
}
console.log(encode("hello")); // h2ll4
console.log(encode("h3 th2r2")); // hi there

console.log("---Break---");

//Write a function that takes the website date/time in its original string format and returns the shortened format.
function shortenToDate(longDate) {
  return longDate.split(" ").slice(0, -1).join(" ").replace(",", "");
}
console.log(shortenToDate("Friday May 2, 9am")); // Friday May 2
console.log(shortenToDate("Tuesday January 29, 10pm")); // Tuesday January 29

console.log("---Break---");

//
function apple(x) {
  return Number(x) * Number(x) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}
console.log(apple("50")); // It'shotter than the sun!!
console.log(apple(4)); // Help yourself to a honeycomb Yorkie for the glovebox.

console.log("---Break---");

//Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.
function isPowerOfTwo(n) {
  if (n === 0) return false;
  while (n != 1) {
    if (n % 2 != 0) return false;
    n = n / 2;
  }
  return true;
}
console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(234));

console.log("---Break---");

//Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
function getNumberFromString(s) {
  let regex = /[0-9]/;
  let result = "";
  for (const x of s) {
    if (regex.test(x)) {
      result += x;
    }
  }
  return Number(result);
}
console.log(getNumberFromString("1")); // 1
console.log(getNumberFromString("123")); // 123
console.log(getNumberFromString("this is number: 7")); // 7

console.log("---Break---");

//But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
//It's up to you to find out whether the cuboid has equal sides (= is a cube).
//Return true if the cuboid could have equal sides, return false otherwise.
//Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
var cubeChecker = function (volume, side) {
  return volume <= 0 || side <= 0 ? false : Math.pow(side, 3) === volume;
};
console.log(cubeChecker(8, 3)); // false
console.log(cubeChecker(8, 2)); // true
console.log(cubeChecker(125, 5)); // true
console.log(cubeChecker(125, -5)); // false

console.log("---Break---");

//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
//We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
function solve(s) {
  let regex = /[aeiou]/g;
  s = s.replaceAll(regex, "1").split("1");
  let result = [];
  for (const x of s) {
    if (x) {
      result.push(x.split(" "));
      // result.push([x.split('')]);
    }
  }
  let newArr = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      const letter = result[i][j];
      newArr.push(result[i][j]);
      newArr.push(letter.charCodeAt(0) - 96);
    }
  }
  return newArr;
}

console.log(solve("zodiacs")); // 26
console.log(solve("strength")); // 57

console.log("---Break---");

//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
//The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
function rowWeights(array) {
  if (array.length === 1) {
    return [...array, 0];
  }
  if (array.length === 2) {
    return array;
  }
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      // even index, add to team 1
      team1 += array[i];
    } else {
      // odd index, add to team 2
      team2 += array[i];
    }
  }
  return [team1, team2];
}
console.log(rowWeights([80])); // [80, 0]
console.log(rowWeights([100, 50])); // [100, 50]
console.log(rowWeights([50, 60, 70, 80])); // [120, 140]

console.log("---Break---");

//Multiply each number by itself.
//Add them all together.
//Take the square root of the result.
//Divide by two
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let array = [age1, age2, age3, age4, age5, age6, age7, age8];
  array = array.map((x) => x * x).reduce((a, b) => a + b);
  return Math.floor(Math.sqrt(array) / 2);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); // 86

console.log("---Break---");

//Count the number of divisors of a positive integer n.
//4 --> 3 // we have 3 divisors - 1, 2 and 4
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) if (!(n % i)) count++;
  return count;
}

console.log(getDivisorsCnt(1)); // 1
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(54)); // 8

console.log("---Break---");

//
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved) {
    moneySaved += savingperMonth;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    months++;
    if (months % 2 == 1) {
      percentLossByMonth += 0.5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}
console.log(nbMonths(2000, 8000, 1000, 1.5)); // [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // [0, 4000]

console.log("---Break---");

//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array) {
  let num = "0";
  for (let i = 0; i < array.length; i++) {
    let string = array[i].toString();
    if (string.length > num.length) {
      num = string;
    }
  }
  return parseInt(num);
}
console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000

console.log("---Break---");

//Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
function validateCode(code) {
  code = code.toString().split("");
  const regex = /[1-3]/;
  return regex.test(Number(code[0]));
}
console.log(validateCode(123)); // true
console.log(validateCode(248)); // true
console.log(validateCode(8)); // false

console.log("---Break---");

//Write a simple regex to validate a username. Allowed characters are:
//lowercase letters,
//numbers,
//underscore
//Length should be between 4 and 16 characters (both included).
function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username); // {4, 16} is a quantifier that specifies the minimum and maximum number of times the preceding character class should match
  // ^ denotes the start of the string and $ denotes the end of the string
}
console.log(validateUsr("asddsa")); // true
console.log(validateUsr("a")); // false

console.log("---Break---");

//You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
//You can not use multiplier "*" operator.
//If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
function billboard(name, price = 30) {
  let result = name.split("").length;
  let x = 0;
  let arr = [];
  while (x < price) {
    arr.push(result);
    x++;
  }
  return arr.reduce((a, b) => a + b);
}
console.log(billboard("Jeong-Ho Aristotelis")); // 600

console.log("---Break---");

//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
//Your function will accept three arguments:
//The first and second argument should be numbers.
//The third argument should represent a sign indicating the operation to perform on these two numbers.
//if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
function calculator(a, b, sign) {
  if (a === Number(a) && b === Number(b)) {
    switch (true) {
      case sign === "+":
        return a + b;
      case sign === "-":
        return a - b;
      case sign === "*":
        return a * b;
      case sign === "/":
        return a / b;
      default:
        return "unknown value";
    }
  }
  return "unknown value";
}
console.log(calculator(1, 2, "+")); // 3
console.log(calculator(1, 2, "&")); // unknown value

console.log("---Break---");

//Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
//You need to consider the following ratings:
//Terrible: tip 0%
//Poor: tip 5%
//Good: tip 10%
//Great: tip 15%
//Excellent: tip 20%
function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  switch (rating) {
    case "terrible":
      return 0;
    case "poor":
      return Math.ceil(0.05 * amount);
    case "good":
      return Math.ceil(0.1 * amount);
    case "great":
      return Math.ceil(0.15 * amount);
    case "excellent":
      return Math.ceil(0.2 * amount);
    default:
      return "Rating not recognised";
  }
}
console.log(calculateTip(20, "Excellent")); // 4
console.log(calculateTip(26.95, "good")); // 3

console.log("---Break---");

//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
function stringClean(s) {
  let regex = /^[0-9]/;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!regex.test(s[i])) {
      result += s[i];
    }
  }
  return result;
}

//Simpler solution
function stringClean(s) {
  return s.replace(/\d/g, "");
}
// The backslash \ is used to give special meaning to a certain chracter. In this case it was used to indicate that the d should be treated as a special character that matches any digit from 0 to 9
// d is a shorthand character class that matches any digit from 0 to 9
console.log(stringClean("! !")); // ! !
console.log(stringClean("This looks5 grea8t!")); // This looks great!
console.log(stringClean("123456789")); // ''

console.log("---Break---");

//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//It’s guaranteed that array contains at least 3 numbers.
function findUniq(arr) {
  let newArr = new Set(arr);
  newArr = [...newArr];
  console.log(newArr);
  console.log(arr);
  if (!newArr[0] === arr[0] && !newArr[0] === arr[1]) {
    return newArr[0];
  } else {
    return newArr[1];
  }
}

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // .55

console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10

console.log("---Break---");

//Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
console.log(hexToDec("1")); // 1
console.log(hexToDec("a")); // 10
console.log(hexToDec("10")); // 16
console.log(hexToDec("FF")); // 255

console.log("---Break---");

//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
//For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}
console.log(dutyFree(12, 50, 1000)); // 166;

console.log("---Break---");

//Finish the uefaEuro2016() function so it return string just like in the examples below:
function uefaEuro2016(teams, scores) {
  return scores[0] > scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : scores[1] > scores[0]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}
console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); // At match Germany - Ukraine, Germany won!
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2])); // At match Belgium - Italy, Italy won!
console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); // At match Portugal - Iceland, teams played draw.!

console.log("---Break---");

//Define a function that removes duplicates from an array of numbers and returns it as a result.
function distinct(a) {
  return [...new Set(a)];
}
console.log(distinct([1, 2])); // [1, 2]
console.log(distinct([1, 1, 2])); // [1, 2]

console.log("---Break---");

//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
function switcheroo(x) {
  let result = "";
  for (const letter of x) {
    if (letter === "a") {
      result += "b";
    } else if (letter === "b") {
      result += "a";
    } else {
      result += letter;
    }
  }
  return result;
}
console.log(switcheroo("abc")); // bac
console.log(switcheroo("aabacbaa")); // bbabcabb

console.log("---Break---");

//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
//Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
function sumTriangularNumbers(n) {
  let x = 0;
  let total = 1;
  let y = 2;
  let arr = [];
  while (x < n) {
    arr.push(total);
    total += y;
    y++;
    x++;
  }
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
}
console.log(sumTriangularNumbers(6)); // 56
console.log(sumTriangularNumbers(34)); // 7140

console.log("---Break---");

//The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
//Note: Math.pow and some other Math functions like eval() and ** are disabled.
function numberToPower(number, power) {
  let x = 0;
  let result = 1;
  while (x < power) {
    result *= number;
    x++;
  }
  return result;
}
console.log(numberToPower(4, 2)); //16

console.log("---Break---");

//Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
function digits(n) {
  return n.toString().length;
}
console.log(digits(5)); // 1
console.log(digits(12345)); // 5

console.log("---Break---");

//
const arr = [1, 2, 3, 4, 5];

const allGreaterThanZero = arr.every((element) => {
  //
  return element > 0;
});

console.log(allGreaterThanZero); // true
//The every() method takes a callback function as its argument, which is applied to each element of the array. The callback function should return a boolean value: true if the element passes the test, and false otherwise.

console.log("---Break---");

//Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.
function f(n) {
  if (n % 2 !== 0 || n <= 0 || typeof n !== "number") {
    return false;
  }
  let x = 0;
  let total = 0;
  while (x < n) {
    x++;
    total += x;
  }
  return total;
}
console.log(f(100)); // 5050
console.log(f(300)); // 45150
console.log(f(50000)); // 1250025000
console.log(f("n")); // false
console.log(f()); // false
console.log(f(3.14)); // false
console.log(f(0)); // false
console.log(f(-10)); // false

console.log("---Break---");

//Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
function isDigit(s) {
  s = s.replaceAll(" ", "");
  return s.length === 1 && typeof Number(s) === "number";
}
console.log(isDigit("3")); // true
console.log(isDigit(" 3 ")); // true
console.log(isDigit("-3.23")); // true
console.log(isDigit("3-4")); // false
console.log(isDigit(" 3  5")); // false

console.log("---Break---");

//Convert roman numberals to numbers
function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanValues[s[i]];
    const nextValue = romanValues[s[i + 1]];

    if (nextValue && currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
}
console.log(romanToInt("XXVII")); // 27
console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("MCMXCIV")); // 1994

console.log("---Break---");

//
var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length == 0) {
    return prefix;
  }
  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] != currentChar) {
        return prefix;
      }
    }
    prefix += currentChar;
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl

console.log("---Break---");

function isDigit(s) {
  return s == parseFloat(s);
}
console.log(isDigit("3")); // true
console.log(isDigit(" 3 ")); // true
console.log(isDigit("-3.23")); // true
console.log(isDigit("3-4")); // false
console.log(isDigit(" 3 5")); // false
console.log(isDigit("3 5")); // false
console.log(isDigit("zero")); // false

console.log("---Break---");

function odd(values) {
  return values.filter((num) => num % 2 !== 0);
}
console.log(odd([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(odd([2, 4, 6])); // []

console.log("---Break---");

var TemplateString = function (obj, feature) {
  return `${obj} are ${feature}`;
};
console.log(TemplateString("Animals", "good"));

console.log("---Break---");

//Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
function parseF(s) {
  s = parseFloat(s);
  return s === Number(s) ? s : null;
}

console.log(parseF("1")); // 1
console.log(parseF("0")); // 0
console.log(parseF("n12")); // null

//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10])); // [2, 6, 8, 10]

console.log("---Break---");

function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}
console.log(rainAmount(100)); // Your plant has had more than enough water for today!
console.log(rainAmount(39)); // You need to give your plant 1mm of water

console.log("---Break---");

//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
//The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}
console.log(usdcny(15)); // 101.25 Chinese Yuan
console.log(usdcny(465)); // 3138.75 Chinese Yuan

console.log("---Break---");

//Given an array/list of integers, find the Nth smallest element in the array.
function nthSmallest(arr, pos) {
  arr = arr.sort((a, b) => a - b);
  return arr[pos - 1];
}
console.log(nthSmallest([3, 1, 2], 2)); // 2

console.log("---Break---");

function automorphic(n) {
  let copyN = n.toString().length;
  let squared = String(Math.pow(n, 2)).split("");
  squared = Number(squared.slice(`-${copyN}`).join(""));
  return n === squared ? "Automorphic" : "Not!!";
}
console.log(automorphic(1)); // Automorphic
console.log(automorphic(3)); // Not!!
console.log(automorphic(6)); // Automorphic
console.log(automorphic(9)); // Not!!
console.log(automorphic(25)); // Automorphic
console.log(automorphic(76)); // Automorphic
console.log(automorphic(95)); // Not!!
console.log(automorphic(225)); // Not!!

console.log("---Break---");

//Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.
function isLockNessMonster(s) {
  return s.includes("tree fiddy") ||
    s.includes("3.50") ||
    s.includes("three fifty")
    ? true
    : false;
}
console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
); // true
console.log(
  isLockNessMonster(
    "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
  )
); // false

console.log("---Break---");

//Modify the spacify function so that it returns the given string with spaces inserted between each character.
function spacify(str) {
  return str.split("").join(" ");
}
console.log(spacify("hello world")); // h e l l o  w o r l d
console.log(spacify("12345")); // 1 2 3 4 5

console.log("---Break---");

//Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
function countRedBeads(n) {
  let x = 1;
  let result = 0;
  if (n < 2) {
    return 0;
  } else {
    while (x < n) {
      x++;
      result += 2;
    }
  }
  return result;
}
console.log(countRedBeads(0)); // 0
console.log(countRedBeads(1)); // 0
console.log(countRedBeads(2)); // 2
console.log(countRedBeads(3)); // 4
console.log(countRedBeads(5)); // 8

console.log("---Break---");

//Get ASCII value of a character.
function getASCII(c) {
  return c.charCodeAt(0);
}
console.log(getASCII("A")); // 65

console.log("---Break---");

//Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
function first(arr, n = 1) {
  return arr.slice(0, n);
}
console.log(first(["a", "b", "c", "d", "e"])); // [a]
console.log(first(["a", "b", "c", "d", "e"], 2)); // [a, b]
console.log(first(["a", "b", "c", "d", "e"], 3)); // [a, b, c]
console.log(first(["a", "b", "c", "d", "e"], 0)); // []

console.log("---Break---");

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
var isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

console.log("---Break---");

//Given an integer x, return true if x is a palindrome and false otherwise
var isPalindrome = function (x) {
  const copyX = x.toString().split("");
  let arr = [];
  for (let i = copyX.length - 1; i >= 0; i--) {
    arr.push(copyX[i]);
  }
  arr = Number(arr.join(""));
  return arr === x;
};
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false

console.log("---Break---");

//
var isPalindrome = function (s) {
  s = s.toLowerCase();
  const regex = /^[a-zA-Z0-9]+$/; // ^ denotes the start of the string.
  // + specifies that the character class should match one or more times.
  // $ denotes the end of the string.
  let letters = "";
  for (const x of s) {
    if (x.match(regex)) {
      letters += x;
    }
  }
  const lettersReversed = letters.split("").reverse().join("");
  return letters === lettersReversed;
};
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false

console.log("---Break---");

//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
var merge = function (nums1, m, nums2, n) {
  const copyNums1 = nums1.splice(0, m);
  const copyNums2 = nums2.splice(0, n);
  const merged = [...copyNums1, ...copyNums2];
  return merged.sort();
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
console.log(merge([1], 1, [], 0)); // [1]

console.log("---Break---");

//A Tidy number is a number whose digits are in non-decreasing order.
function tidyNumber(n) {
  let x = n.toString();
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] > x[i + 1]) {
      return false;
    }
    return true;
  }
}
console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
console.log(tidyNumber(9672)); // false
console.log(tidyNumber(2789)); // true

console.log("---Break---");

//The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
//Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
function abbreviate(string) {
  string = string.split("");
  const number = string.splice(1, string.length - 2).length;
  return string[0] + number + string[string.length - 1];
}

//Full solution
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function (word) {
    // \w{4,}: This regular expression pattern matches any word character (\w) that occurs 4 or more times ({4,}). In other words, it matches words that have at least 4 or more alphanumeric characters.
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}
console.log(abbreviate("internationalization")); // i18n
console.log(abbreviate("accessibility")); // a11y
console.log(abbreviate("Accessibility")); // A11y
console.log(abbreviate("elephant-ride")); // e6t-r2e

console.log("---Break---");

//Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.
function giveMeFive(obj) {
  let result = [];
  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}
console.log(giveMeFive({ Pears: "than", apple: "sweet" })); // [Pears, apple, sweet]

console.log("---Break---");

//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//If they are, change the array value to a string of that vowel.
function isVow(a) {
  let regex = /[aeiou]/gi;
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    if (String.fromCharCode(a[i]).match(regex)) {
      arr.push(String.fromCharCode(a[i]));
    } else {
      arr.push(a[i]);
    }
  }
  return arr;
}
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])); // [e, 121, 110, 113, 113, 103, 121, 121, e, 107, 103]

console.log("---Break---");

//An AI has infected a text with a character!!
//This text is now fully mutated to this character.
//If the text or the character are empty, return an empty string.
//There will never be a case when both are empty as nothing is going on!!
function contamination(text, char) {
  let result = "";
  for (const x of text) {
    result += char;
  }
  return result;
}
console.log(contamination("abc", "z")); //zzz
console.log(contamination("", "z")); // ' '
console.log(contamination("abc", "")); // ''
console.log(contamination("//case", " ")); // ''

console.log("---Break---");

//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
function adjacentElementsProduct(array) {
  let arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    arr.push(array[i] * array[i + 1]);
  }
  return Math.max(...arr);
}
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
console.log(adjacentElementsProduct([1, 2, 3])); // 6
console.log(adjacentElementsProduct([1, 5, 10, 9])); // 90

console.log("---Break---");

//A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
//If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
//The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
function balancedNum(number) {
  const copyNumber = number.toString().split("");
  let middleNumberStartIndex = Math.ceil(copyNumber.length / 2);

  if (copyNumber.length === 1 || copyNumber.length === 2) {
    return "Balanced";
  }

  if (copyNumber.length % 2 === 0) {
    copyNumber.splice(middleNumberStartIndex - 1, 2, "");
  } else {
    copyNumber.splice(middleNumberStartIndex - 1, 1, "");
  }
  let leftNums = [];
  let rightNums = [];
  for (let i = 0; i < copyNumber.length / 2 - 1; i++) {
    leftNums.push(Number(copyNumber[i]));
  }
  for (let i = copyNumber.length - 1; i > copyNumber.length / 2; i--) {
    rightNums.push(Number(copyNumber[i]));
  }
  leftNums = leftNums.reduce((a, b) => a + b);
  rightNums = rightNums.reduce((a, b) => a + b);
  return leftNums === rightNums ? "Balanced" : "Not Balanced";
}
console.log(balancedNum(295591)); // Not Balanced
console.log(balancedNum(27102983)); // Not Balanced
console.log(balancedNum(432)); // Not Balanced
console.log(balancedNum(424)); // Balanced
console.log(balancedNum(42425)); // Not Balanced
console.log(balancedNum(13)); // Balanced
console.log(balancedNum(959)); // Balanced

console.log("---Break---");

//The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8 to the first power + 9 to the second power
//We need a function to collect these numbers, that may receive two integers a, b, that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
function sumDigPow(a, b) {
  let x = a;
  let arr = [];
  let result = [];
  const regex =
    /\b(?:1|2|3|4|5|6|7|8|9|89|135|175|518|598|1306|1676|2427|2646798)\b/; // he he he
  while (x !== b + 1) {
    arr.push(x);
    x++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(90, 100)); // []

console.log("---Break---");

//
function maxRot(n) {
  let max = n;
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.splice(i, 1));
    const num = Number(arr.join(""));
    if (num > max) max = num;
  }
  return max;
}
console.log(maxRot(56789)); // 68957
console.log(maxRot(38458215)); // 85821534

console.log("---Break---");

//Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
//Happiness rating will be total score / number of people in the room.
//Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
function outed(meet, boss) {
  let sum = 0;
  for (const key in meet) {
    if (key === boss) {
      sum += meet[key] * 2;
    } else {
      sum += meet[key];
    }
  }
  return sum / Object.keys(meet).length <= 5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}
console.log(
  outed(
    {
      tim: 2,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  )
); // Get Out Now!
console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 6,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    "katie"
  )
);

console.log("---Break---");

//Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
function sortMyString(S) {
  let odd = "";
  let even = [];
  for (let i = 0; i < S.length; i++) {
    if ((i + 1) % 2 !== 0) {
      odd += S[i];
    } else {
      even += S[i];
    }
  }
  return odd + " " + even;
}
console.log(sortMyString("CodeWars")); // CdWr oeas
console.log(sortMyString("YCOLUE'VREER")); // YOU'RE CLEVER

console.log("---Break---");

//Write a function that will check if two given characters are the same case.
//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0
function sameCase(a, b) {
  let regex = /[a-zA-Z]/;

  if (
    a === a.toUpperCase() &&
    b === b.toUpperCase() &&
    regex.test(a) &&
    regex.test(b)
  ) {
    return 1;
  } else if (
    a === a.toLowerCase() &&
    b === b.toLowerCase() &&
    regex.test(a) &&
    regex.test(b)
  ) {
    return 1;
  } else if (!(regex.test(a) && regex.test(b))) {
    return -1;
  }

  return 0;
}
console.log(sameCase("C", "B")); // 1
console.log(sameCase("b", "a")); // 1
console.log(sameCase("A", "s")); // 0
console.log(sameCase("\t", "Z")); // -1
console.log(sameCase("H", ":")); // -1

console.log("---Break---");

//This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Array.prototype.square = function () {
  return this.map(function (n) {
    return n * n;
  });
};
Array.prototype.cube = function () {
  return this.map(function (n) {
    return n * n * n;
  });
};
Array.prototype.average = function () {
  return this.sum() / this.length;
};
Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  }, 0);
};
Array.prototype.even = function () {
  return this.filter(function (item) {
    return 0 == item % 2;
  });
};
Array.prototype.odd = function () {
  return this.filter(function (item) {
    return 0 != item % 2;
  });
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square()); // [1, 4, 8, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.average()); // 3
console.log(numbers.sum()); // 15
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]

console.log("---Break---");

//Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
reverse = function (array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};
console.log(reverse([1, 2, 3])); // [3, 2, 1]
console.log(reverse([1, null, 14, "two"])); // ['two', 14, null, 1]

console.log("---Break---");

//For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
function cookie(x) {
  return x === x.toString()
    ? "Who ate the last cookie? It was Zach!"
    : x === Number(x) || x === Boolean
    ? "Who ate the last cookie? It was Monica!"
    : "Who ate the last cookie? It was the dog!";
}
console.log(cookie("Ryan")); // Who ate the last cookie? It was Zach!
console.log(cookie(26)); // Who ate the last cookie? It was Monica!
console.log(cookie(2.3)); // Who ate the last cookie? It was Monica!
console.log(cookie(true)); // Who ate the last cookie? It was the dog!

console.log("---Break---");

//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      return undefined;
    } else {
      if (arr[i] % 2 !== 0) {
        result += Math.pow(arr[i], 3);
      }
    }
  }
  return result;
}
console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([-3, -2, 2, 3])); // 0
console.log(cubeOdd(["a", 12, 9, "z", 42])); // undefined

console.log("---Break---");

//An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
//Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
function pointsPer48(ppg, mpg) {
  if (ppg === 0 && mpg === 0) {
    return 0;
  }
  return Math.round((48 / mpg) * ppg * 10) / 10;
}
console.log(pointsPer48(12, 20)); // 28.8
console.log(pointsPer48(10, 10)); // 48.0
console.log(pointsPer48(5, 17)); // 14.1

console.log("---Break---");

//Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
function whoIsPaying(name) {
  if (name.length <= 2) {
    return [name];
  } else {
    return [name, name[0] + name[1]];
  }
}
console.log(whoIsPaying("Mexico")); // ['Mexico', 'Me']
console.log(whoIsPaying("Melania")); // ['Melania', 'Me']
console.log(whoIsPaying("Melissa")); // ['Melissa', 'Me']
console.log(whoIsPaying("Me")); // ['Me']
console.log(whoIsPaying("")); // ['']
console.log(whoIsPaying("I")); // ['I']

console.log("---Break---");

//Create a function add(n)/Add(n) which returns a function that always adds n to any number
function add(n) {
  return function (a) {
    return n + a;
  };
}
console.log(add(1)(3)); // 4

console.log("---Break---");

//
function decipherThis(str) {
  // str = Number(str[0] + str[1]);
  // str = str.split(' ');
  const regex = /^\d+$/;

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      arr.push("-");
    } else {
      arr.push(str[i]);
    }
  }
  return arr;
  // return String.fromCharCode(str);
}
console.log(decipherThis("72olle 103doo 100ya")); // Hello good day
console.log(decipherThis("82yade 115te 103o")); // Ready set go

console.log("---Break---");

//In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
//For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
function integrate(coefficient, exponent) {
  const firstNum = coefficient / (exponent + 1);
  const secondNum = exponent + 1;
  return `${firstNum}x^${secondNum}`;
}
console.log(integrate(3, 2)); // 1x^3
console.log(integrate(12, 5)); // 2x^6
console.log(integrate(20, 1)); // 10x^2

console.log("---Break---");

//In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
function solve(s) {
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const numbersRegex = /[0-9]/;
  var specialCharsRegex = /[^A-Za-z0-9\s]/;
  let upperCaseCount = 0;
  let lowercaseCount = 0;
  let numbersCount = 0;
  let specialCharsCounts = 0;

  for (let i = 0; i < s.length; i++) {
    if (upperCaseRegex.test(s[i])) {
      upperCaseCount++;
    }
    if (lowerCaseRegex.test(s[i])) {
      lowercaseCount++;
    }
    if (numbersRegex.test(s[i])) {
      numbersCount++;
    }
    if (specialCharsRegex.test(s[i])) {
      specialCharsCounts++;
    }
  }
  return [upperCaseCount, lowercaseCount, numbersCount, specialCharsCounts];
}
console.log(solve("")); // [0, 0, 0, 0]
console.log(solve("aAbBcC")); // [3, 3, 0, 0]
console.log(solve("Codewars@codewars123.com")); // [1, 18, 3, 2]
console.log(solve("E19GS2|Q7IF&3S:J%6_0`#1H`2DD-4XS6[GZ2EN")); // [17, 0, 12, 10]

console.log("---Break---");

//Your task is to return a number from a string.
var filterString = function (value) {
  const regex = /[0-9]/;
  let result = "";
  for (let i = 0; i < value.length; i++) {
    if (regex.test(value[i])) {
      result += value[i];
    }
  }
  return Number(result);
};
console.log(filterString("123")); // 123
console.log(filterString("a1b2c3")); // 123

console.log("---Break---");

//You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
var rooms = {
  name: {
    name: "Kitchen",
    description: "Cooking",
    completed: true,
  },
  description: {
    name: "Bedroom",
    description: "Sleeping",
    completed: false,
  },
  completed: {
    name: "Living Room",
    description: "TV",
    completed: true,
  },
};

console.log("---Break---");

//ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
//+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}
console.log(joinStrings("string1", "string2")); // 'string1 string2'
console.log(joinStrings("testing", "testing")); // 'testing testing'
console.log(joinStrings(134, 234)); // '134 234'

console.log("---Break---");

//Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
//Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
function incrementer(nums) {
  let arr = [];
  nums.map((x, i) => arr.push((x + (i + 1)) % 10));
  return arr;
}
console.log(incrementer([1, 2, 3])); // [2, 4, 6]
console.log(incrementer([4, 6, 7, 1, 3])); // [5, 8, 0, 5, 8]

console.log("---Break---");

//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//If the score < 0, return 0.
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return score > 0 ? score : 0;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7

console.log("---Break---");

//Given an array/list [] of integers , Find the product of the k maximal numbers.
//maxProduct ({4, 3, 5}, 2) ==>  return (20)
//Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20.
function maxProduct(numbers, size) {
  numbers = numbers.sort((a, b) => b - a);
  numbers = numbers.slice(0, size);
  let result = 1;
  for (const x of numbers) {
    result *= x;
  }
  return result;
}
console.log(maxProduct([4, 3, 5], 2)); // 20
console.log(maxProduct([10, 8, 7, 9], 3)); // 720

console.log("---Break---");

//Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
//You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
//When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else continue; // continue means to ignore whatever does not meet the conditions of the if statement
    if (bag.length === 3) break; // break means that the loop will finish when the condition is true
  }
  return bag;
}
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"])); // [Hello Kitty]
console.log(
  grabDoll([
    "Mickey Mouse",
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty",
    "Hello Kitty",
    "Snow white",
  ])
); // [Barbie doll, Hello Kitty, Hello Kitty]

console.log("---Break---");

//Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i += 2) {
    //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;
}

console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.40
console.log(fuelPrice(5, 5.6)); // 27.50

console.log("---Break---");

//If the winner is George Saint Pierre he will obviously say:
//"I am not impressed by your performance."
//If the winner is Conor McGregor he will most undoubtedly say:
//"I'd like to take this chance to apologize.. To absolutely NOBODY!"
var quote22 = function (fighter) {
  fighter = fighter.toLowerCase();
  return fighter === "conor mcgregor"
    ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : "I am not impressed by your performance.";
};

console.log(quote22("george saint pierre")); // I am not impressed by your performance.
console.log(quote22("Conor mcgregor")); // I'd like to take this chance to apologize..To absolutely NOBODY!
console.log(quote22("George Saint Pierre")); // I am not impressed by your performance.
console.log(quote22("Conor McGregor")); // I'd like to take this chance to apologize..To absolutely NOBODY!

console.log("---Break---");

//You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
//if lst is empty or contains a single element, return 0
function maxDiff(list) {
  list = list.sort((a, b) => a - b);
  return list.length > 0 ? list[list.length - 1] - list[0] : 0;
}
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11

console.log("---Break---");

//Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
function minSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let array = [];
  let x = 1;
  for (let i = 0; i < arr.length / 2; i++) {
    array.push(arr[i] * arr[arr.length - x]);
    x++;
  }
  return array.reduce((sum, num) => sum + num, 0);
}
console.log(minSum([5, 4, 2, 3])); // 22 [2, 3, 4, 5]
console.log(minSum([12, 6, 10, 26, 3, 24])); // 342

console.log("---Break---");

//For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).
//
function presses(phrase) {
  phrase = phrase.toUpperCase();
  let numOfBtnPresses = 0;
  let regex = /[2-8]/;
  for (const x of phrase) {
    if (
      x === " " ||
      x === "A" ||
      x === "D" ||
      x === "G" ||
      x === "J" ||
      x === "M" ||
      x === "P" ||
      x === "T" ||
      x === "W"
    ) {
      numOfBtnPresses += 1;
    } else if (
      x === "B" ||
      x === "E" ||
      x === "H" ||
      x === "K" ||
      x === "N" ||
      x === "Q" ||
      x === "U" ||
      x === "X"
    ) {
      numOfBtnPresses += 2;
    } else if (
      x === "C" ||
      x === "F" ||
      x === "I" ||
      x === "L" ||
      x === "O" ||
      x === "R" ||
      x === "V" ||
      x === "Y"
    ) {
      numOfBtnPresses += 3;
    } else if (x === "S" || x === "Z") {
      numOfBtnPresses += 4;
    } else if (regex.test(x)) {
      numOfBtnPresses += 4;
    } else if (x === "0") {
      numOfBtnPresses += 2;
    } else {
      numOfBtnPresses += 1;
    }
  }
  return numOfBtnPresses;
}
console.log(presses("LOL")); // 9
console.log(presses("HOW R U")); // 13
console.log(presses("WHERE DO U WANT 2 MEET L8R")); // 47

console.log("---Break---");

//Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  let result = [];
  for (let i = 0; i < x.length - 1; i++) {
    result.push(Number(Math.abs((3600 * (x[i] - x[i + 1])) / s)));
  }
  result = result.sort((a, b) => b - a);
  return Math.floor(result[0]);
}
console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])); // 74

console.log("---Break---");

//Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
function removeRotten(bagOfFruits) {
  if (bagOfFruits.length === 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i].includes("rotten")) {
      let nonRottenFruit = bagOfFruits[i].replace("rotten", "");
      result.push(nonRottenFruit.toLowerCase());
    } else {
      result.push(bagOfFruits[i].toLowerCase());
    }
  }

  return result;
}
console.log(removeRotten(["apple", "banana", "kiwi", "melon", "orange"])); // ['apple', 'banana', 'kiwi', 'melon', 'orange']
console.log(removeRotten(["apple", "rottenBanana", "apple"])); // ['apple', 'banana', 'apple']
console.log(removeRotten([])); // []

console.log("---Break---");

//
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}
console.log(closeCompare(2, 5, 3)); // 0
console.log(closeCompare(1.99, 5, 3)); // -1

console.log("---Break---");

//You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
//(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)
//Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.
function foldTo(distance) {
  if (distance < 0) {
    return null;
  }

  let thickness = 0.0001;
  let folds = 0;
  while (thickness < distance) {
    thickness *= 2;
    folds++;
  }
  return folds;
}
console.log(foldTo(384000000)); // 42
console.log(foldTo(-1)); // null

console.log("---Break---");

//Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
function isPythagoreanTriple(integers) {
  let a = Math.pow(integers[0], 2);
  let b = Math.pow(integers[1], 2);
  let c = Math.pow(integers[2], 2);
  return a + b === c ? true : a + c === b ? true : b + c === a ? true : false;
}
console.log(isPythagoreanTriple([3, 4, 5])); // true
console.log(isPythagoreanTriple([3, 5, 9])); // false

console.log("---Break---");

//Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
//Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
function solve(arr) {
  let randomArr = [];
  for (const x of arr) {
    randomArr.push(x.toLowerCase());
  }
  arr = randomArr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let subArray = [];
    for (let j = 0; j < word.length; j++) {
      subArray.push(word[j].charCodeAt(0) - 96);
    }
    result.push(subArray);
  }
  let totals = [];
  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    let newArray = result[i];
    let newSubArray = [];
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === j + 1) {
        sum++;
        newSubArray.push(sum);
      }
    }
    if (newSubArray.length > 0) {
      totals.push(...newSubArray.slice(-1));
    } else {
      totals.push(0);
    }
  }
  return totals;
}
console.log(solve(["abode", "ABc", "xyzD"])); // [4, 3, 1];
console.log(solve(["abide", "ABc", "xyz"])); // [4, 3, 0];

console.log("---Break---");

//Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).
function calculate(num1, operation, num2) {
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "/" &&
    operation !== "*"
  ) {
    return null;
  }
  if (num2 === 0 && operation === "/") {
    return null;
  }
  const expression = num1 + operation + num2;
  const result = eval(expression);
  return result;
}

console.log(calculate(3.2, "+", 8)); // 11.2
console.log(calculate(3.2, "-", 8)); // -4.8
console.log(calculate(3.2, "/", 8)); // 0.4
console.log(calculate(3.2, "m", 8)); // null
console.log(calculate(4, "/", 0)); // null

console.log("---Break---");

//
var Ghost = function () {
  const colors = ["white", "yellow", "purple", "red"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  this.color = colors[randomIndex];
};
console.log(new Ghost().color);

console.log("---Break---");

//Multiply two numbers! Simple!
//The arguments are passed as strings.
//The numbers may be way very large
//Answer should be returned as a string
//The returned "number" should not start with zeros e.g. 0123 is invalid
function multiply(a, b) {
  const len1 = a.length;
  const len2 = b.length;
  let result = Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const product = Number(a[i]) * Number(b[j]);
      const sum = product + result[i + j + 1];

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  if (result[0] === 0) {
    result.shift();
  }

  result = result.join("");
  return result.startsWith("0") ? result.slice(1) : result;
}

//Simple solution
function multiply(a, b) {
  const num1 = BigInt(a);
  const num2 = BigInt(b);
  const result = String(num1 * num2);
  return result;
}

console.log(multiply("2", "3")); // '6'
console.log(multiply("30", "69")); // '2070'
console.log(multiply("2", "0")); // '0'
console.log(multiply("0", "30")); // '0'
console.log(multiply("0000001", "3")); // '3'
console.log(multiply("1020303004875647366210", "2774537626200857473632627613")); // 2830869077153280552556547081187254342445169156730
console.log(multiply("1009", "03")); // '3027'

console.log("---Break---");

//Find the sum of all multiples of n below m
//m is excluded from the multiples
function sumMul(n, m) {
  let result = 0;
  let copyN = n;
  while (n < m) {
    result += n;
    n += copyN;
  }
  return result > 0 ? result : "INVALID";
}
console.log(sumMul(0, 0)); // INVALID
console.log(sumMul(2, 9)); // 20
console.log(sumMul(4, -7)); // INVALID

console.log("---Break---");

//Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.
//To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
function adding(a, b) {
  const sumA = a * a;
  const sumB = b * b;
  return sumA === sumB;
}

console.log(adding("1", 1)); //true
console.log(adding(1, "1")); //true
console.log(adding(1, "0")); //false

console.log("---Break---");

//Modify the kebabize function so that it converts a camel case string into a kebab case.
function kebabize(str) {
  let regex = /[A-Z]/;
  let secondRegex = /[0-9]/;

  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      result.push("-");
      result.push(str[i].toLowerCase());
    } else {
      result.push(str[i]);
    }
  }

  result = result.filter((n) => !secondRegex.test(n)).join("");
  return result[0] === "-" ? result.replace(result[0], "") : result;
}
console.log(kebabize("myCamelCasedString")); // my-camel-cased-string
console.log(kebabize("myCamelHas3Humps")); // my-camel-has-humps

console.log("---Break---");

//Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function (name, password) {
  return this.name == name && this.password == password;
};
const mySleigh = new Sleigh();
console.log(mySleigh.authenticate("Santa Claus", "Ho Ho Ho!")); // true

console.log("---Break---");

//Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
String.prototype.digit = function () {
  const regex = /[0-9]/;
  return regex.test(this) && this.length === 1;
};
const string2 = "7";
const string3 = "";
const string4 = "a5";
const string5 = "14";
console.log(string2.digit()); // true
console.log(string3.digit()); // false
console.log(string4.digit()); // false
console.log(string5.digit()); // false

function lotteryCalculatorCalifornia(jackpot, choice, state) {
  let yearlyPayment = Math.ceil((jackpot / 29) * 0.76);
  let monthlyPayment = Math.ceil(yearlyPayment / 12);
  let weeklyPayment = Math.ceil(yearlyPayment / 52);
  let dailyPayment = Math.ceil(yearlyPayment / 365);

  yearlyPayment = yearlyPayment.toString().split("");
  monthlyPayment = monthlyPayment.toString().split("");
  weeklyPayment = weeklyPayment.toString().split("");
  dailyPayment = dailyPayment.toString().split("");

  let updatedYearlyPayment = [];
  let updatedMonthlyPayment = [];
  let updatedWeeklyPayment = [];
  let updatedDailyPayment = [];

  for (let i = 0; i < yearlyPayment.length; i++) {
    if (i === 1 || i === 4) {
      updatedYearlyPayment.push(yearlyPayment[i]);
      updatedYearlyPayment.push(",");
    } else {
      updatedYearlyPayment.push(yearlyPayment[i]);
    }
  }
  yearlyPayment = updatedYearlyPayment.join("");

  for (let i = 0; i < monthlyPayment.length; i++) {
    if (i === 0 || i === 3) {
      updatedMonthlyPayment.push(monthlyPayment[i]);
      updatedMonthlyPayment.push(",");
    } else {
      updatedMonthlyPayment.push(monthlyPayment[i]);
    }
  }
  monthlyPayment = updatedMonthlyPayment.join("");

  for (let i = 0; i < weeklyPayment.length; i++) {
    if (i === 2) {
      updatedWeeklyPayment.push(weeklyPayment[i]);
      updatedWeeklyPayment.push(",");
    } else {
      updatedWeeklyPayment.push(weeklyPayment[i]);
    }
  }
  weeklyPayment = updatedWeeklyPayment.join("");

  for (let i = 0; i < dailyPayment.length; i++) {
    if (i === 1) {
      updatedDailyPayment.push(dailyPayment[i]);
      updatedDailyPayment.push(",");
    } else {
      updatedDailyPayment.push(dailyPayment[i]);
    }
  }
  dailyPayment = updatedDailyPayment.join("");

  let lumpSum = (jackpot * 0.5051 * 0.76).toString().split("");

  let arr = [];
  lumpSum = lumpSum.map((x, i) =>
    i === 2 || i === 5 ? arr.push(x) && arr.push(",") : arr.push(x)
  );
  lumpSum = `$${arr.join("")}`;

  if (choice === "cash" && state === "California") {
    return `Lump sum payment of ${lumpSum} in ${state}`;
  } else {
    return `Annual payments of $${yearlyPayment}; monthly payments of $${monthlyPayment}; weekly payments of $${weeklyPayment}; daily payments of $${dailyPayment}!`;
  }
}
console.log(lotteryCalculatorCalifornia(875000000, "cash", "California"));
console.log(lotteryCalculatorCalifornia(875000000, "annual", "California"));
// alert(lotteryCalculatorCalifornia(875000000, 'cash', 'California'));
// alert(lotteryCalculatorCalifornia(875000000, 'annual', 'California'));

console.log("---Break---");

//In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
//pairs([1,2,5,8,-4,-3,7,6,5]) = 3
//The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
      count++;
    }
  }
  return count;
}
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); // 3
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])); // 2
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])); // 0

console.log("---Break---");

//Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
function solution(value) {
  return `Value is ${String(value).padStart(5, "0")}`;
}
console.log(solution(5)); // Value is 00005
console.log(solution(1204)); // Value is 01204
console.log(solution(109)); // Value is 00109
console.log(solution(0)); // Value is 00000

console.log("---Break---");

//
function stat(strg) {
  strg = strg.replaceAll("|", ",").replaceAll(" ", "").split(",");
  let arr = [];
  let tempArr = [];
  let average = [];
  let range = [];
  let median = [];

  for (let i = 0; i < strg.length; i++) {
    if (strg[i][0] === "0") {
      tempArr.push(Number(strg[i][1]));
    } else {
      tempArr.push(Number(strg[i]));
    }
    if (tempArr.length === 3) {
      arr.push(tempArr);
      tempArr = [];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].splice(0, 1, arr[i][0] * 60);
    arr[i].splice(2, 1, arr[i][2] / 60);
    average.push(arr[i].reduce((a, b) => a + b));
  }
  median = [...average];

  range = [...average].sort((a, b) => a - b);
  range = (range[range.length - 1] - range[0]) / 60;
  range = Number(range.toFixed(2));
  average = average.reduce((a, b) => a + b) / average.length / 60;
  average = Number(average.toFixed(2));

  if (median.length % 2 !== 0) {
    const index = Math.floor(median.length / 2);
    median = median[index];
  } else {
    const index1 = median.length / 2;
    const index2 = median.length / 2 - 1;
    median = (median[index1] + median[index2]) / 2;
  }
  median = Number((median / 60).toFixed(2));
  return `Range: ${range} Average: ${average} Median: ${median}`;
}
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34")); // Range: 01|01|18 Average: 01|38|05 Median: 01|32|34
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")); // Range: 01|01|18 Average: 01|38|05 Median: 01|32|34
console.log(
  stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41")
); // Range: 00|31|17 Average: 02|26|18 Median: 02|22|00

console.log("---Break---");

//Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
//Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}
console.log(min([1, 2, 3, 4, 5], "value")); // 1
console.log(min([1, 2, 3, 4, 5], "index")); // 0
console.log(min([6, 2, 3, 4, 5], "index")); // 1

console.log("---Break---");

//If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
//If n is not an integer, return the string "NaN".
function dashatize(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "NaN";
  }
  num = String(num).split("");
  let arr = [];
  if (num[0] === "-") {
    num.shift();
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      arr.push("-");
      arr.push(num[i]);
      arr.push("-");
    } else {
      arr.push(num[i]);
    }
  }
  if (arr[arr.length - 1] === "-") {
    arr.pop();
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" && arr[i + 1] === "-") {
      arr[i] = "";
      result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  let finalResult = [];
  for (const x of result) {
    if (x !== "") {
      finalResult.push(x);
    }
  }
  if (finalResult[0] === "-") {
    finalResult.shift();
  }
  return finalResult.join("");
}
console.log(dashatize(274)); // 2-7-4
console.log(dashatize(6815)); // 68-1-5
console.log(dashatize(NaN)); // NaN
console.log(dashatize(-1)); // 1
console.log(dashatize(-28369)); // 28-3-6-9
console.log(dashatize(9884)); // 9-884

console.log("---Break---");

//I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}
console.log(generateShape(3)); // '++++++++\n++++++++\n++++++++'
console.log(generateShape(8)); // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'

console.log("---Break---");

//John has invited some friends. His list is:
//s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//Could you make a program that
//makes this string uppercase
//gives it sorted in alphabetical order by last name.
//When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
function meeting(s) {
  const regex = /[;:]/;
  s = s.toUpperCase().split(regex);

  let tempArr = [];
  let arr = [];
  let lastNameFirstArr = [];
  let newTempArr = [];

  for (let i = 0; i < s.length; i++) {
    tempArr.push(s[i]);
    if (tempArr.length === 2) {
      arr.push(tempArr);
      tempArr = [];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    newTempArr.push("(" + arr[i][1]);
    newTempArr.push(" " + arr[i][0] + ")");

    if (newTempArr.length === 2) {
      lastNameFirstArr.push(newTempArr);
      newTempArr = [];
    }
  }
  return lastNameFirstArr.sort().join("");
}
console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
); // (CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)
console.log(
  meeting(
    "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"
  )
); // (ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)

console.log("---Break---");

//The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
//We will write a function gap with parameters:
//g (integer >= 2) which indicates the gap we are looking for
//m (integer > 2) which gives the start of the search (m inclusive)
//n (integer >= m) which gives the end of the search (n inclusive)
//In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
//So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
function subtractAndRemove(arr, target) {
  const resultElements = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const subtractedResult = arr[i + 1] - arr[i];
    if (subtractedResult === target) {
      resultElements.push(arr[i], arr[i + 1]);
      break;
    }
  }

  return resultElements;
}

function gap(g, m, n) {
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primeNumsArr = [];
  for (let i = m; i <= n; i++) {
    if (sieve[i] && i % 2 !== 0) {
      primeNumsArr.push(i);
    }
  }

  const modifiedArray = subtractAndRemove(primeNumsArr, g);

  return modifiedArray.length > 0 ? modifiedArray : null;
}

console.log(gap(2, 100, 110)); // [101, 103]
console.log(gap(4, 100, 110)); // [103, 107]
console.log(gap(6, 100, 110)); // null
console.log(gap(8, 300, 400)); // [359, 367]

console.log("---Break---");

//The number n is Evil if it has an even number of 1's in its binary representation.
//The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20
//The number n is Odious if it has an odd number of 1's in its binary representation.
//You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.
function evil(n) {
  n = n.toString(2).split("");
  n = n.map((num) => Number(num));
  return n.reduce((a, b) => a + b) % 2 === 0 ? "It's Evil!" : "It's Odious!";
}
console.log(evil(1)); // It's Odious!
console.log(evil(2)); // It's Odious!
console.log(evil(3)); // It's Evil!

console.log("---Break---");

//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
function reverse2(str) {
  if (str.trim() === "") {
    return "";
  }

  str = str.split(" ");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      result.push(str[i].split("").reverse().join(""));
    } else {
      result.push(str[i]);
    }
  }
  return result.join(" ");
}
console.log(reverse2("Reverse this string, please!")); // Reverse siht string, !esaelp
console.log(reverse2("I really don't like reversing strings!")); // I yllaer don't ekil reversing !sgnirts

console.log("---Break---");

//Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//the array can't be empty
//only non-negative, single digit integers are allowed
//Return nil (or your language's equivalent) for invalid inputs.
//[1, -9] is invalid because -9 is not a non-negative integer
//[1, 2, 33] is invalid because 33 is not a single-digit integer
function upArray(arr) {
  let zerosArr = [];
  for (const x of arr) {
    if (x === 0) {
      zerosArr.push(0);
    } else if (x !== 0) break;
  }

  for (const x of arr) {
    if (x > 9 || x < 0) {
      return null;
    }
  }

  arr = String(1 + Number(arr.join(""))).split("");
  let result = [];
  if (zerosArr.length > 0) {
    for (const x of zerosArr) {
      result.push(x);
    }
  }
  for (const num of arr) {
    result.push(Number(num));
  }
  return result;
}
console.log(upArray([4, 3, 2, 5])); // [4, 3, 2, 6]
console.log(upArray([1, 2, 3, 9])); // [1, 2, 4, 0]
console.log(upArray([1, -9])); // null
console.log(upArray([1, 2, 33])); // null
console.log(upArray([0, 7])); // [0, 8]
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
); // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]

console.log("---Break---");

//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
//If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
console.log(last("man i need a taxi up to ubud")); // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last("what time are we climbing up the volcano")); // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last("take me to semynak")); // ['take', 'me', 'semynak', 'to']

console.log("---Break---");

//
function boredom(staff) {
  let total = 0;
  for (let key in staff) {
    if (staff[key] === "accounts") {
      total += 1;
    }
    if (staff[key] === "finance") {
      total += 2;
    }
    if (staff[key] === "canteen") {
      total += 10;
    }
    if (staff[key] === "regulation") {
      total += 3;
    }
    if (staff[key] === "trading" || staff[key] === "change") {
      total += 6;
    }
    if (staff[key] === "IS") {
      total += 8;
    }
    if (staff[key] === "retail") {
      total += 5;
    }
    if (staff[key] === "cleaning") {
      total += 4;
    }
    if (staff[key] === "pissing about") {
      total += 25;
    }
  }
  return total <= 80
    ? "kill me now"
    : total < 100 && total > 80
    ? "i can handle this"
    : "party time!!";
}
console.log(
  boredom({
    tim: "accounts",
    jim: "accounts",
    randy: "pissing about",
    sandy: "finance",
    andy: "change",
    katie: "IS",
    laura: "IS",
    saajid: "canteen",
    alex: "pissing about",
    john: "retail",
    mr: "pissing about",
  })
); // party time!!

console.log("---Break---");

//You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
//Xray should not have a dash within.
//Every word and punctuation mark should be seperated by a space ' '.
//There should be no trailing whitespace
//The set of used punctuation is ,.!?.
function to_nato(words) {
  let result = "";
  words = words.split("");

  for (let i = 0; i < words.length; i++) {
    switch (words[i].toUpperCase()) {
      case "A":
        result += "Alfa";
        result += " ";

        break;
      case "B":
        result += "Bravo";
        result += " ";

        break;
      case "C":
        result += "Charlie";
        result += " ";

        break;
      case "D":
        result += "Delta";
        result += " ";
        break;
      case "E":
        result += "Echo";
        result += " ";

        break;
      case "F":
        result += "Foxtrot";
        result += " ";

        break;
      case "G":
        result += "Golf";
        result += " ";

        break;
      case "H":
        result += "Hotel";
        result += " ";

        break;
      case "I":
        result += "India";
        result += " ";

        break;
      case "J":
        result += "Juliett";
        result += " ";

        break;
      case "K":
        result += "Kilo";
        result += " ";

        break;
      case "L":
        result += "Lima";
        result += " ";

        break;
      case "M":
        result += "Mike";
        result += " ";

        break;
      case "N":
        result += "November";
        result += " ";

        break;
      case "O":
        result += "Oscar";
        result += " ";

        break;
      case "P":
        result += "Papa";
        result += " ";

        break;
      case "Q":
        result += "Quebec";
        result += " ";

        break;
      case "R":
        result += "Romeo";
        result += " ";

        break;
      case "S":
        result += "Sierra";
        result += " ";

        break;
      case "T":
        result += "Tango";
        result += " ";

        break;
      case "U":
        result += "Uniform";
        result += " ";

        break;
      case "V":
        result += "Victor";
        result += " ";

        break;
      case "W":
        result += "Whiskey";
        result += " ";

        break;
      case "X":
        result += "Xray";
        result += " ";

        break;
      case "Y":
        result += "Yankee";
        result += " ";

        break;
      case "Z":
        result += "Zulu";
        result += " ";

        break;
      case "!":
        result += words[i];
        break;
      case ",":
        result += words[i];
        result += " ";
        break;
      case "?":
        result += words[i];
        result += " ";
        break;
      case ".":
        result += words[i];
        result += " ";
        break;
      default:
        result += "";
        break;
    }
  }

  return result.trim();
}

console.log(to_nato("Did not see that coming")); // "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf
console.log(to_nato("go, for it!")); // Golf Oscar Foxtrot Oscar Romeo India Tango !

console.log("---Break---");

//To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
//The returned array should consist of each of the elements from the first array multiplied by the integer.
// Currying practice problem. Currying is when you call functions within a function each taking a single argument
function multiplyAll(arr) {
  return function doubleNums(num) {
    return arr.map((x) => x * num);
  };
}
console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 6]

console.log("---Break---");

//Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
//Given a number, Find if it is Disarium or not .
function disariumNumber(n) {
  let factor = 0;
  let num = n
    .toString()
    .split("")
    .map((x) => {
      factor++;
      return Number(Math.pow(x, factor));
    })
    .reduce((a, b) => a + b);
  return num === n ? "Disarium !!" : "Not !!";
}
console.log(disariumNumber(89)); // Disarium !!
console.log(disariumNumber(564)); //Not !

console.log("---Break---");

//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
function explode(s) {
  return s
    .split("")
    .map((x) => x.repeat(x))
    .join("");
}
console.log(explode("312")); // 333122

console.log("---Break---");

//Write a function that accepts str string and key number and returns an array of integers representing encoded str.
//Digital Cypher assigns to each letter of the alphabet unique number. For example:
// a  b  c  d  e  f  g  h  i  j  k  l  m
// 1  2  3  4  5  6  7  8  9 10 11 12 13
//Instead of letters in encrypted word we write the corresponding number, eg. The word scout:
// s  c  o  u  t
//19  3 15 21 20
function encode(str, n) {
  let charCodesArr = [];
  let result = [];

  let numArr = String(n)
    .split("")
    .map((x) => Number(x));

  for (let i = 0; i < str.length; i++) {
    charCodesArr.push(str[i].charCodeAt(0) - 96);
  }

  let numArrLength = numArr.length;
  let charCodesArrLength = charCodesArr.length;

  let x = 0;
  while (numArrLength < charCodesArrLength) {
    numArr.push(numArr[x]);
    x++;
    numArrLength++;
  }

  for (let i = 0; i < numArr.length; i++) {
    let value = charCodesArr[i] + numArr[i];
    if (!isNaN(value)) {
      result.push(value);
    }
  }
  return result;
}
console.log(encode("scout", 1939)); // [20, 12, 18, 30, 21]
console.log(encode("masterpiece", 1939)); // [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

console.log("---Break---");

//Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
function vaporcode(string) {
  return string.toUpperCase().replaceAll(" ", "").split("").join("  ");
}
console.log(vaporcode("Lets go to the movies")); // L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S
console.log(vaporcode("Why isnt my code working")); // W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G

console.log("---Break---");

//In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).
//'X' --> busy
//'O' --> empty
//If all rooms are busy, return "None available!"
function meeting2(x) {
  if (!x.includes("O")) {
    return "None available!";
  }
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "O") {
      result += i;
      break;
    }
  }
  return result;
}

console.log(meeting2(["X", "O", "X"])); // 1
console.log(meeting2(["O", "X", "X"])); // 0
console.log(meeting2(["X", "X", "X"])); // None available!
console.log(meeting2(["X", "X", "O", "X", "O", "X"])); // 2

console.log("---Break---");

//Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
function sumOfIntegersInString(s) {
  return s
    .replace(/[a-zA-Z\W]/g, "|") // letters and special characters regex
    .split("|")
    .map((s) => Number(s))
    .reduce((a, b) => a + b);
}
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
); // 3635
console.log(sumOfIntegersInString("12.4")); // 16

console.log("---Break---");

//A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
//Given a number determine if it special number or not .
function specialNumber(n) {
  const regex = /[012345]/g;
  n = n.toString().split("");
  let calc = 0;
  for (const x of n) {
    if (regex.test(n)) {
      calc += 0;
    } else {
      calc += 1;
    }
  }
  return calc === 0 ? "Special!!" : "NOT!!";
}
//Simpler answer
function specialNumber(n) {
  return /[6-9]/.test(n) ? "NOT!!" : "Special!!";
}

console.log(specialNumber(2)); // Special!!
console.log(specialNumber(6)); // NOT!!
console.log(specialNumber(2783)); // NOT!!

console.log("---Break---");

//Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
//xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
function Xbonacci(signature, n) {
  const x = signature.length;
  if (n <= x) {
    return signature.slice(0, n); // Return the first n elements if n is less than or equal to the length of the signature array.
  }

  let result = signature.slice(); // Copy the initial signature array to the result array

  while (result.length < n) {
    const nextNum = result.slice(-x).reduce((a, b) => a + b);
    result.push(nextNum);
  }

  return result;
}

console.log(Xbonacci([1, 1, 1, 1], 10)); // [1, 1, 1, 1, 4, 7, 13, 25, 49, 94]
console.log(Xbonacci([0, 0, 0, 0, 1], 10)); // [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]

console.log("---Break---");

//You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
//C.....m returns 'Escaped!' <-- more than three characters between
//C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
function catMouse(x) {
  let count = 0;
  x = x.split("").map((dot) => {
    if (dot.match(/[.]/g)) {
      count++;
    }
  });
  return count > 3 ? "Escaped!" : "Caught!";
}
console.log(catMouse("C....m")); // Escaped!
console.log(catMouse("C..m")); // Caught!
console.log(catMouse("C.....m")); // Escaped!

console.log("---Break---");

//Define a method/function that removes from a given array of integers all the values contained in a second array.
Array.prototype.remove_ = function (value_list) {
  const s = new Set(value_list);
  return integer_list.filter((x) => !s.has(x));
};
const integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
const values_list = [1, 3];
console.log(integer_list.remove_(values_list)); // [ 2, 2, 4 ]

console.log("---Break---");

//Given a string and an array of integers representing indices, capitalize all letters at the given indices.
function capitalize(s, arr) {
  let result = "";
  if (!Array.isArray(arr)) {
    console.error("The 'arr' argument must be an array.");
    return result;
  }
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }
  return result;
}

console.log(capitalize("abcdef", [1, 2, 5])); // aBCdeF

console.log("---Break---");

//
const reverseSeq = (n) => {
  let result = [];
  while (n > 0) {
    result.push(n);
    n--;
  }
  return result;
};
console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]

console.log("---Break---");

//We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.
//Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
function discoverOriginalPrice(discountedPrice, salePercentage) {
  salePercentage = (100 - salePercentage) / 100;
  return Number((discountedPrice / salePercentage).toFixed(2));
}
console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(25, 75)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101

console.log("---Break---");

//Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
class Animal {
  speak() {
    return this.name;
  }
}
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

console.log("---Break---");

//data and data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.
//function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
//function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
//if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)
function mean(town, strng) {
  strng = strng.split("\n");
  const regexMonths = /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/g;
  const regexNums = /[0-9]/;
  let newStrng = strng.join(" ").split(":").join(" ").split(" ");
  console.log(newStrng);

  newStrng = newStrng.filter(
    (n) => !n.match(regexNums) && !n.match(regexMonths)
  );
  console.log(newStrng);
  console.log(town);

  let index = [];
  for (let i = 0; i < newStrng.length; i++) {
    if (newStrng[i] === town) {
      index.push(i);
    }
  }
  console.log(index);
  if (index.length === 0) {
    return -1;
  }
  let result = [];
  for (let i = 0; i < strng.length; i++) {
    if (strng[i].includes(town)) {
      result.push(strng[i]);
    }
  }
  if (result.length === 0) {
    return -1;
  }

  let regex = /[0-9]/;
  let regex2 = /[a-z]/i;
  result = result.join("").split(regex2);
  result = result.filter((x) => regex.test(x));
  let numsData = [];
  for (let i = 0; i < result.length; i++) {
    numsData.push(result[i].slice(1));
  }
  numsData = numsData.map((str) => str.replace(/,/g, "")).map((x) => Number(x));
  numsData = numsData.reduce((a, b) => a + b) / numsData.length;
  return numsData;
}

function variance(town, strng) {
  strng = strng.split("\n");
  const regexMonths = /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/g;
  const regexNums = /[0-9]/;
  let newStrng = strng.join(" ").split(":").join(" ").split(" ");
  console.log(newStrng);

  newStrng = newStrng.filter(
    (n) => !n.match(regexNums) && !n.match(regexMonths)
  );
  console.log(newStrng);
  console.log(town);

  let index = [];
  for (let i = 0; i < newStrng.length; i++) {
    if (newStrng[i] === town) {
      index.push(i);
    }
  }
  console.log(index);
  if (index.length === 0) {
    return -1;
  }
  let result = [];
  for (let i = 0; i < strng.length; i++) {
    if (strng[i].includes(town)) {
      result.push(strng[i]);
    }
  }
  if (result.length === 0) {
    return -1;
  }
  let regex = /[0-9]/;
  let regex2 = /[a-z]/i;
  result = result.join("").split(regex2);
  result = result.filter((x) => regex.test(x));
  let numsData = [];
  for (let i = 0; i < result.length; i++) {
    numsData.push(result[i].slice(1));
  }
  numsData = numsData.map((str) => str.replace(/,/g, "")).map((x) => Number(x));
  let data = numsData;
  numsData =
    numsData.length > 0
      ? numsData.reduce((a, b) => a + b) / numsData.length
      : -1;
  let mean = numsData;
  let subtractMeanArr = [];
  for (let x of data) {
    subtractMeanArr.push(Math.pow(x - mean, 2));
  }
  return subtractMeanArr.reduce((a, b) => a + b) / data.length;
}

console.log(
  mean(
    "London",
    "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" +
      "\n" +
      "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" +
      "\n" +
      "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" +
      "\n" +
      "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" +
      "\n" +
      "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" +
      "\n" +
      "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" +
      "\n" +
      "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" +
      "\n" +
      "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" +
      "\n" +
      "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" +
      "\n" +
      "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7"
  )
); // 51.199999999999996
console.log(
  variance(
    "London",
    "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" +
      "\n" +
      "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" +
      "\n" +
      "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" +
      "\n" +
      "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" +
      "\n" +
      "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" +
      "\n" +
      "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" +
      "\n" +
      "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" +
      "\n" +
      "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" +
      "\n" +
      "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" +
      "\n" +
      "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7"
  )
); // 57.42833333333374

console.log("---Break---");

//Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
function switcher(x) {
  let result = "";
  for (const num of x) {
    if (Number(num) === 27) {
      result += "!";
    } else if (Number(num) === 28) {
      result += "?";
    } else if (Number(num) === 29) {
      result += " ";
    } else {
      result += String.fromCharCode(123 - Number(num));
    }
  }
  return result;
}

console.log(switcher(["4", "24", "29"])); // Output: 'wc'

console.log("---Break---");

//Given a string, return a new string that has transformed based on the input:
//Change case of every character, ie. lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
function stringTransformer(str) {
  str = str.split("").map((x) => {
    if (x === x.toUpperCase()) {
      return x.toLowerCase();
    } else {
      return x.toUpperCase();
    }
  });
  return str.join("").split(" ").reverse().join(" ");
}
console.log(stringTransformer("Example Input")); // iNPUT eXAMPLE

console.log("---Break---");

//The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
function solve(s) {
  let regex = /[bcdfghjklmnpqrstvwxyz]/g;
  let result = [];
  if (typeof s !== "string") {
    s = String(s);
  }
  s = s.split(regex);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      result.push(s[i].length);
    }
  }
  return Math.max(...result);
}
console.log(solve("codewarriors")); // 2
console.log(solve("cuboideonavicuare")); // 2
console.log(solve("chrononhotonthuooaos")); // 5

console.log("---Break---");

//Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.
//For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].
function beggars(values, n) {
  if (n === 0) {
    return [];
  }

  let result = Array(n).fill(0); // Initialize the result array with n elements, all set to 0.
  for (let i = 0; i < values.length; i++) {
    result[i % n] += values[i]; // Distribute the values among beggars by using the modulo operator.
  }

  return result;
}

console.log(beggars([1, 2, 3, 4, 5], 1)); // [15]
console.log(beggars([1, 2, 3, 4, 5], 2)); // [9,6]
console.log(beggars([1, 2, 3, 4, 5], 3)); // [5, 7, 3]

console.log("---Break---");

//You have to extract a portion of the file name as follows:
//Assume it will start with date represented as long number
//Followed by an underscore
//You'll have then a filename with an extension
//it will always have an extra extension at the end
function fileName(dirtyFileName) {
  let fileName = [];
  let count = 0;
  let arr = [];
  for (let i = 0; i < dirtyFileName.length; i++) {
    if (dirtyFileName[i] === "_") {
      arr.push(dirtyFileName.slice(i + 1, dirtyFileName.length - 1));
      count++;
    }
    if (count === 1) break;
  }
  let count2 = 0;
  arr = arr.join("").split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") {
      count2++;
    }
    if (count2 === 2) break;
    fileName.push(arr[i]);
  }
  return fileName.join("");
}
console.log(fileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION")); // FILE_NAME.EXTENSION
console.log(
  fileName("1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34")
); // This_is_an_otherExample.mpg
console.log(fileName("1231231223123131_myFile.tar.gz2")); // myFile.tar

console.log("---Break---");

//Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
//Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).
//So 128.32.10.1 == 10000000.00100000.00001010.00000001
function ipToInt32(ip) {
  ip = ip.split(".").map((x) => Number(x));
  let arr = [];
  for (const num of ip) {
    arr.push(num.toString(2).padStart(8, "0"));
  }
  arr = arr.join("");
  return parseInt(arr, 2);
}
console.log(ipToInt32("128.32.10.1")); // 2149583361

console.log("---Break---");

//Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSecondsAfterHours = seconds % 3600;
  const minutes = Math.floor(remainingSecondsAfterHours / 60);

  return hours + " hour(s) and " + minutes + " minute(s)";
}
console.log(toTime(3500)); // 0 hour(s) and 58 minute(s)
console.log(toTime(323500)); // 89 hour(s) and 51 minute(s)

console.log("---Break---");

//Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
function squares(x, n) {
  let result = [];
  let power = 1;
  while (result.length < n) {
    result.push(Math.pow(x, power));
    power *= 2;
  }
  return result;
}
console.log(squares(2, 5)); // [2, 4, 16, 256, 65536]
console.log(squares(3, 3)); // [3, 9, 81]

console.log("---Break---");

//You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
function fireFight(s) {
  return s.replaceAll("Fire", "~~");
}
console.log(
  fireFight(
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
  )
); // Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast

console.log("---Break---");

//Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
//-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
//Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
function findChildren(dancingBrigade) {
  const lowerRegex = /[a-z]/;
  const upperRegex = /[A-Z]/;
  dancingBrigade = dancingBrigade.split("").sort();
  console.log(dancingBrigade);
  let children = dancingBrigade.filter((x) => x.match(lowerRegex));
  let parents = dancingBrigade.filter((x) => x.match(upperRegex));
  let arr = [" "];
  for (let i = 0; i < children.length; i++) {
    if (children[i] !== children[i + 1]) {
      arr.push(children[i]);
      arr.push(" ");
    } else {
      arr.push(children[i]);
    }
  }
  arr.pop();
  let index = 0;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = parents[index];
      result += arr[i];
      index++;
    } else {
      result += arr[i];
    }
  }
  return result;
}
console.log(findChildren("beeeEBb")); // BbbEeee
console.log(findChildren("uwwWUueEe")); // EeeUuuWww

console.log("---Break---");

//A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".
//In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".
//Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
function sumOfN(n) {
  if (n === 0) {
    return [0];
  }

  let arr = [0, 1];
  let x = 1;
  let l = 2;
  if (n > 0) {
    while (arr.length < n + 1) {
      x += l;
      arr.push(x);
      l++;
    }
  }
  if (n < 0) {
    arr = [0, -1];
    x = 1;
    l = -2;

    while (arr.length < Math.abs(n) + 1) {
      x -= l;
      arr.push(-x);
      l--;
    }
  }
  return arr;
}
console.log(sumOfN(3)); // [0, 1, 3, 6]
console.log(sumOfN(-4)); // [0, -1, -3, -6, -10]
console.log(sumOfN(1)); // [0, 1]
console.log(sumOfN(-6)); // [0, -1, -3, -6, -10, -15, -21]

console.log("---Break---");

//Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
//You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
//You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
//If you do, return 'Clean', else return 'Cr@p'.
//Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
function crap(x, bags, cap) {
  x = x.join("");
  if (x.match("D")) {
    return "Dog!!";
  }
  let totalCapacity = bags + cap;
  let crapCount = 0;
  for (const el of x) {
    if (el === "@") {
      crapCount++;
    }
  }
  return totalCapacity > crapCount && cap > 0 ? "Clean" : "Cr@p";
}
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    2,
    2
  )
); // Clean
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1
  )
); // Cr@p
console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
); // Dog!!

console.log("---Break---");

//Write a program that outputs the top n elements from a list.
function largest(n, array) {
  if (n === 0) {
    return [];
  }
  let result = [];
  let x = 0;
  array = array.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
    if (result.length === n) break;
  }
  return result.sort((a, b) => a - b);
}
console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // [6, 7]
console.log(largest(0, [10, 9, 8])); // []

console.log("---Break---");

//Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
function multiples(m, n) {
  let result = [];
  let x = 0;
  let copyN = n;
  while (x < m) {
    result.push(n);
    n += copyN;
    x++;
  }
  return result;
}
console.log(multiples(3, 5)); // [5, 10, 15]

console.log("---Break---");

//Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
//The length of the firstname is added to the sum of these ranks hence a number som.
//An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
//Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
//return: the firstname of the participant whose rank is n (ranks are numbered from 1)
//If st is empty return "No participants".
//If n is greater than the number of participants then return "Not enough participants".
function rank(st, we, n) {
  let copySt = st;
  let arr = [];
  let lengthOfFirstNameArr = [];
  let length = 0;

  copySt = copySt.split(",");

  if (st === "") {
    return "No participants";
  }
  if (n > copySt.length) {
    return "Not enough participants";
  }

  st = st
    .toLowerCase()
    .split("")
    .filter((x) => x !== " ");

  st.push(",");
  st.map((x) => {
    if (x !== ",") {
      length++;
    }
    if (x === ",") {
      lengthOfFirstNameArr.push(length);
      length = 0;
    }
  });

  st = st.slice(0, -1);

  let num = 0;
  let charValuesArr = [];

  for (let i = 0; i < st.length; i++) {
    for (let j = 0; j < st[i].length; j++) {
      arr.push(st[i][j].charCodeAt(0) - 96);
    }
  }
  arr.push(-52);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -52) {
      num += arr[i];
    }
    if (arr[i] === -52) {
      charValuesArr.push(num);
      num = 0;
    }
  }
  let som = [];

  for (let i = 0; i < charValuesArr.length; i++) {
    som.push((charValuesArr[i] + lengthOfFirstNameArr[i]) * we[i]);
  }

  let participants = copySt.map((name, index) => ({
    name,
    score: som[index],
  }));

  participants.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return participants[n - 1].name;
}

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    4
  )
); // "Benjamin"
console.log(rank("Lagon, Lily", [1, 5], 2)); // "Lagon" 54
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6)); // "No participants"
console.log(rank("Jess,John,Jake", [4, 2, 1, 4, 3, 1, 2], 6)); // "No participants"

console.log("---Break---");

//You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//Your message is a string containing space separated words.
//You need to encrypt each word in the message using the following rules:
//The first letter must be converted to its ASCII code.
//The second letter must be switched with the last letter
var encryptThis = function (text) {
  if (text.length === 1) {
    return String(text.charCodeAt(0));
  }
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    const asciiValue = text[i].charCodeAt(0);
    if (text[i].length === 1) {
      text[i] = asciiValue;
    } else if (text[i].length === 2) {
      text[i] = asciiValue + text[i][1];
    } else {
      text[i] =
        asciiValue +
        text[i][text[i].length - 1] +
        text[i].slice(2, -1) +
        text[i][1];
    }
  }

  return text.join(" ");
};

console.log(encryptThis("Hello")); // 72olle
console.log(encryptThis("hello world")); // 104olle 119drlo
console.log(encryptThis("A wise old owl lived in an oak")); // 65 119esi 111dl 111lw 108dvei 105n 97n 111ka

console.log("---Break---");

//Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
function hydrate(s) {
  let regex = /[a-z]/;
  s = s
    .split("")
    .filter((x) => !x.match(regex))
    .join("")
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .split("")
    .map((x) => Number(x))
    .reduce((a, b) => a + b);
  return s !== 1 ? s + " " + "glasses of water" : s + " " + "glass of water";
}
console.log(hydrate("1 beer")); // 1 glass of water
console.log(hydrate("2 glasses of wine and 1 shot")); // 3 glasses of water
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")); // 10 glasses of water

console.log("---Break---");

//
class Block {
  constructor(data) {
    [this.w, this.l, this.h] = data;
  }
  getWidth() {
    return this.w;
  }
  getLength() {
    return this.l;
  }
  getHeight() {
    return this.h;
  }
  getVolume() {
    let { l, w, h } = this;
    return l * w * h;
  }
  getSurfaceArea() {
    let { l, w, h } = this;
    return 2 * (l * w + l * h + w * h);
  }
}
const classArr = new Block([2, 4, 6]);
console.log(classArr.getWidth()); // 2
console.log(classArr.getVolume()); // 48
console.log(classArr.getSurfaceArea()); // 88

console.log("---Break---");

//An element is leader if it is greater than The Sum all the elements to its right side.
//Given an array/list [] of integers , Find all the LEADERS in the array.
//Note : The last element 0 is equal to right sum of its elements (abstract zero).
function arrayLeaders(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let slicedArr = numbers.slice(i + 1);
    if (slicedArr.length > 0) {
      if (numbers[i] > slicedArr.reduce((a, b) => a + b)) {
        result.push(numbers[i]);
      }
    }
    if (slicedArr.length < 0) break;
  }
  if (numbers[numbers.length - 1] > 0) {
    result.push(numbers[numbers.length - 1]);
  }
  return result;
}
console.log(arrayLeaders([1, 2, 3, 4, 0])); // [4]
console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17, 5, 2]
console.log(arrayLeaders([-1, -29, -26, -2])); // [-1]
console.log(
  arrayLeaders([
    -7, 327, -63, 84, 97, -444, 717, -61, -201, -559, -588, 149, 53, 836, 19,
    -221, -110, 646, 180, -243, 561, -464, 85, -77, -194, 656, 807, -302, -62,
    408, 587, 224, 624, 672, -738, -427, 489, -195, -705, 553, 481, -344, -116,
    -124, 265, -235, -816, 787, 607, 167, -13, -175, -488, 801, 405, 304, 549,
    195, 79, -546, 222, -313, -492, 622, 725, -584, -116, -150, -164, 623, 312,
    -245, 569, 801,
  ])
); // [801]

console.log("---Break---");

//Implement a function that returns the minimal and the maximal value of a list (in this order).
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(getMinMax([1])); // [1, 1]
console.log(getMinMax([1, 2])); // [1, 2]

console.log("---Break---");

//Jumping number is the number that All adjacent digits in it differ by 1.
function jumpingNumber(n) {
  let test = [];
  n = String(n)
    .split("")
    .map((x) => Number(x));
  if (n.length === 1) {
    return "Jumping!!";
  }
  for (let i = 0; i < n.length - 1; i++) {
    test.push(Math.abs(n[i] - n[i + 1]));
  }
  test = new Set(test);
  test = [...test];
  return test[0] === 1 && test.length === 1 ? "Jumping!!" : "Not!!";
}
console.log(jumpingNumber(23)); // Jumping!!
console.log(jumpingNumber(32)); // Jumping!!
console.log(jumpingNumber(79)); // Not!!
console.log(jumpingNumber(4343456)); // Jumping!!
console.log(jumpingNumber(65088)); // Not!!

console.log("---Break---");

//Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
//If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
function balance(left, right) {
  left = left
    .replaceAll("!", 2)
    .replaceAll("?", 3)
    .split("")
    .map((x) => Number(x))
    .reduce((a, b) => a + b);
  right = right
    .replaceAll("!", 2)
    .replaceAll("?", 3)
    .split("")
    .map((x) => Number(x))
    .reduce((a, b) => a + b);
  return left > right ? "Left" : right > left ? "Right" : "Balance";
}
console.log(balance("!!", "??")); // Right
console.log(balance("!??", "?!!")); // Left
console.log(balance("!?!!", "!?!")); // Left
console.log(balance("!!???!????", "??!!?!!!!!!!")); // Balance

console.log("---Break---");

//In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
function arithmeticSequenceElements(a, d, n) {
  let result = [a];
  while (result.length < n) {
    result.push((a += d));
  }
  return result.join(", ");
}
console.log(arithmeticSequenceElements(1, 2, 5)); // 1, 3, 5, 7, 9

console.log("---Break---");

//
function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) count += deepCount(a[i]);
  }
  return count;
}
console.log(deepCount(["x", "y", ["z"]])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7

console.log("---Break---");

//Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
function minimumSteps(numbers, value) {
  numbers = numbers.sort((a, b) => a - b);
  if (numbers[0] > value) {
    return 0;
  }
  let count = 0;
  for (let i = 0, sum = 0; i < numbers.length; i++) {
    // You can define a variable, like sum = 0, inside
    sum += numbers[i];
    count++;
    if (sum >= value) break;
  }
  return count - 1;
}
console.log(minimumSteps([4, 6, 3], 7)); // 1
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(
  minimumSteps(
    [
      9, 3, 64, 73, 1, 9, 8, 1, 26, 2, 2, 96, 57, 53, 5, 42, 5, 10, 85, 45, 35,
      68, 9, 79, 78, 4, 94, 81, 9, 32, 69, 87, 4, 29, 77, 10, 48, 2, 91, 4, 7,
      86, 90, 2, 53,
    ],
    1358
  )
); // 40

console.log("---Break---");

//Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
Math.round = function (number) {
  return Math.floor(number + 0.5);
};

Math.ceil = function (number) {
  return Number.isInteger(number) ? number : Math.floor(number + 1);
};

Math.floor = function (number) {
  return parseInt(number);
};

console.log("---Break---");

//My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized
//However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front)
function bandNameGenerator(str) {
  if (str[0] === str[str.length - 1]) {
    return str[0].toUpperCase() + str.slice(1) + str.slice(1);
  }
  return "The" + " " + str[0].toUpperCase() + str.slice(1);
}
console.log(bandNameGenerator("knife")); // The Knife
console.log(bandNameGenerator("tart")); // Tartart

console.log("---Break---");

//Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
//In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
function shorter_reverse_longer(a, b) {
  let firstWord;
  let middleWord;
  if (a.length < b.length) {
    firstWord = a;
    middleWord = b;
  } else {
    firstWord = b;
    middleWord = a;
  }
  return firstWord + middleWord.split("").reverse().join("") + firstWord;
}
console.log(shorter_reverse_longer("first", "abcde")); // abcdetsrifabcde
console.log(shorter_reverse_longer("fghi", "abcde")); // fghiedcbafghi

console.log("---Break---");

//You throw a ball vertically upwards with an initial speed v (in km per hour). The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. For example with v = 15 km/h the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.
//Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.
function maxBall(v0) {
  const g = 9.81,
    mpsToKph = 3.6,
    secondsToTenths = 10;
  return Math.round((secondsToTenths * v0) / mpsToKph / g);
}
console.log(maxBall(37)); // 10
console.log(maxBall(45)); // 13

console.log("---Break---");

//
function solution(pairs) {
  let result = [];
  for (const key in pairs) {
    result.push(key + " " + "=" + " " + pairs[key]);
    console.log(key);
    console.log(pairs[key]);
  }
  return result.join(",");
}
console.log(solution({ a: 1, b: "2" })); // a = 1,b = 2

console.log("---Break---");

//Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
//You have to validate input:
//v can be anything (primitive or otherwise)
//if v is ommited, fill the array with undefined
//if n is 0, return an empty array
//if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
function prefill(n, v) {
  let copyN = n;
  if (!Number.isInteger(Number(n))) {
    // throw new TypeError(`${copyN} is invalid`);
    return null;
  }

  n = parseInt(n);
  if (isNaN(n) || n < 0 || typeof n === "boolean") {
    // throw new TypeError(`${copyN} is invalid`);
    return null;
  }

  return Array(n).fill(v);
}
console.log(prefill(3, 1)); // [1, 1, 1]
console.log(prefill(2, "abc")); // [abc, abc]
console.log(prefill("1", 1)); // [1]
console.log(prefill(3, prefill(2, "2d"))); // [[2d, 2d], [2d, 2d], [2d, 2d]]
console.log(prefill("xyz", 1)); // xyz is invalid

console.log("---Break---");

//In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
function twoHighest(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  arr = arr.sort((a, b) => b - a);
  arr = new Set(arr);
  arr = [...arr];
  return [arr[0], arr[1]];
}
console.log(twoHighest([])); // []
console.log(twoHighest([15])); // [15]
console.log(twoHighest([15, 20, 20, 17])); // [20, 17]

console.log("---Break---");

//You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
//The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
function flyBy(lamps, drone) {
  let droneLength = drone.length;
  if (droneLength > lamps.length) {
    droneLength = droneLength - 1;
  }
  const result = Array(droneLength).fill("o");
  return (result + lamps.slice(droneLength)).replaceAll(",", "");
}
console.log(flyBy("xxxxxx", "====T")); // ooooox
console.log(flyBy("xxxxxxxxx", "==T")); // oooxxxxxx
console.log(flyBy("xxxxxxxx", "========T")); // oooooooo

console.log("---Break---");

//Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
//1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
function isLucky(n) {
  let sumN = String(n)
    .split("")
    .map((x) => Number(x))
    .reduce((a, b) => a + b);
  return sumN % 9 === 0 || n === 0;
}
console.log(isLucky(1892376)); // true
console.log(isLucky(189237)); // false
console.log(isLucky(1098)); // true
console.log(isLucky(0)); // true

console.log("---Break---");

//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
//Split the below string into other strings of size #3
//'supercalifragilisticexpialidocious'
//Will return a new string
//'sup erc ali fra gil ist ice xpi ali doc iou s'
var splitInParts = function (s, partLength) {
  if (partLength >= s.length) {
    return s;
  }
  let x = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    x++;
    if (x !== partLength) {
      result += s[i];
    }
    if (x === partLength) {
      result += s[i];
      result += " ";
      x = 0;
    }
  }
  return result.trim();
};
console.log(splitInParts("supercalifragilisticexpialidocious", 3)); // sup erc ali fra gil ist ice xpi ali doc iou s
console.log(splitInParts("HelloKata", 1)); // H e l l o K a t a
console.log(splitInParts("HelloKata", 9)); // HelloKata

console.log("---Break---");

//The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
//The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
function newAvg(arr, newavg) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let result = newavg * (arr.length + 1) - sum;
  if (result > 0) {
    return newavg * (arr.length + 1) - sum;
  } else {
    return "Expected New Average is too low";
  }
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); // 628
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 2)); // Expected New Average is too low

console.log("---Break---");

//There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.
function createDict(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] !== undefined ? values[i] : null;
  }
  return obj;
}
console.log(createDict(["a", "b", "c"], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(["a", "b", "c", "d"], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}

console.log("---Break---");

//A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.
function isNice(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter++;
  }
  if (counter == arr.length && arr.length != 0) return true;
  return false;
}
console.log(isNice([2, 10, 9, 3])); // true
console.log(isNice([3, 4, 5, 7])); // false

console.log("---Break---");

//Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//Don't round the numbers! Just cut them after two decimal places!
function twoDecimalPlaces2(number) {
  number = String(number).split("");
  let result = "";
  for (let i = 0; i < number.length; i++) {
    result += number[i];
    if (number[i] === ".") {
      result += number[i + 1];
      result += number[i + 2];
      break;
    }
  }
  return Number(result);
}
console.log(twoDecimalPlaces2(10.1289767789)); // 10.12
console.log(twoDecimalPlaces2(-7488.83485834983)); // -7488.83

console.log("---Break---");

//Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
function evenLast(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let evenNums = 0;
  numbers.map((x, i) => {
    if (i % 2 === 0) {
      evenNums += x;
    }
  });
  return evenNums * numbers[numbers.length - 1];
}
console.log(evenLast([2, 3, 4, 5])); // 30

console.log("---Break---");

//In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
function makeString(s) {
  s = s.split(" ");
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i][0];
  }
  return result;
}
console.log(makeString("sees eyes xray yoat")); // sexy

console.log("---Break---");

//When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
function longestWord(stringOfWords) {
  stringOfWords = stringOfWords.split(" ");
  let arr = [];
  for (let i = 0; i < stringOfWords.length; i++) {
    arr.push(stringOfWords[i].length);
  }
  let longestWord = Math.max(...arr);

  let result = "";
  for (let i = stringOfWords.length - 1; i >= 0; i--) {
    if (stringOfWords[i].length === longestWord) {
      result += stringOfWords[i];
      break;
    }
  }
  return result;
}
console.log(longestWord("a b c d e fgh")); // fgh
console.log(longestWord("one two three")); // three

console.log("---Break---");

//Given a series of digits as a string, determine if the number represented by the string is divisible by three.
function divisibleByThree(str) {
  return (
    str
      .split("")
      .map((x) => Number(x))
      .reduce((a, b) => a + b) %
      3 ===
    0
  );
}
console.log(divisibleByThree("123")); // true
console.log(divisibleByThree("100853")); // false

console.log("---Break---");

//Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

function differenceOfSquares(n) {
  let arrOfNums = [];
  let x = 0;
  while (x !== n) {
    x++;
    arrOfNums.push(x);
  }
  let squareSumOfNums = Math.pow(
    arrOfNums.reduce((a, b) => a + b),
    2
  );
  let sumSquaresOfNums = arrOfNums
    .map((x) => Math.pow(x, 2))
    .reduce((a, b) => a + b);

  return squareSumOfNums - sumSquaresOfNums;
}
console.log(differenceOfSquares(5)); // 170
console.log(differenceOfSquares(10)); // 2640
console.log(differenceOfSquares(100)); // 25164150

console.log("---Break---");

//Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
function maxGap(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let totals = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    totals.push(Math.abs(numbers[i] - numbers[i + 1]));
  }
  return Math.max(...totals);
}
console.log(maxGap([13, 10, 2, 9, 5])); // 4
console.log(maxGap([13, 3, 5])); // 8

console.log("---Break---");

//Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
function mostFrequentItemCount(collection) {
  if (collection.length === 0) {
    return 0;
  }
  let counts = {};
  for (let i = 0; i < collection.length; i++) {
    const number = collection[i];
    counts[number] = (counts[number] || 0) + 1;
  }
  return Math.max(...Object.values(counts));
}
console.log(mostFrequentItemCount([3, -1, -1])); // 2
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
); // 5

console.log("---Break---");

//Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
var filterLucky = (x) => {
  x = x.filter((y) => /7/.test(y));
  return x;
};
console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])); // [7, 70, 17]
console.log(filterLucky([71, 9907, 69])); // [71, 9907]

console.log("---Break---");

//For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:
function validSpacing(s) {
  if (s[0] === " " || s[s.length - 1] === " ") {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && s[i + 1] === " ") {
      return false;
    }
  }
  return true;
}
console.log(validSpacing("Hello world")); // true
console.log(validSpacing(" Hello world")); // false
console.log(validSpacing("Hello world ")); // false
console.log(validSpacing("Hello  world ")); // false
console.log(validSpacing("Hello")); // true

console.log("---Break---");

//Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
function insertDash(num) {
  num = String(num).split("");
  let result = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0 && num[i + 1]) {
      result += num[i];
      result += "-";
    } else {
      result += num[i];
    }
  }
  return result;
}
console.log(insertDash(454793)); // 4547-9-3
console.log(insertDash(123456)); // 123456

console.log("---Break---");




console.log("---Break---");

//Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
//To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
//Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
function bingo(ticket, win) {
  for (let i = 0; i < ticket.length; i++) {
    for (let j = 0; j < ticket[i].length / 2; j++) {
      ticket[i][0] = ticket[i][0].split("").map((x) => x.charCodeAt(0));
    }
  }
  console.log(ticket.length, "length");
  for (let i = 0; i < ticket.length; i++) {
    let count = 0;
    ticket[i][0].map((x) => {
      if (x > win) {
        i++;
        count++;
      }
    });
  }
  return ticket;
  let arr = [];
  for (let i = 0; i < ticket.length; i++) {
    for (let j = 0; j < ticket[i].length; j++) {
      arr.push(ticket[i][j]);
    }
  }
  return ticket[0][0];
  return arr;
  return ticket[0][0][0];
}
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
); // Loser!
// console.log(
//   bingo(
//     [
//       ['ABC', 65],
//       ['HGR', 74],
//       ['BYHT', 74],
//     ],
//     1
//   )
// ); // Winner!
// console.log(
//   bingo(
//     [
//       ['HGTYRE', 74],
//       ['BE', 66],
//       ['JKTY', 74],
//     ],
//     3
//   )
// ); // Loser!

console.log("---Break---");
console.log("UU");

//

//--------------------------------------
console.log("---Break---");

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
const counter = createCounter(1);
console.log(counter());
