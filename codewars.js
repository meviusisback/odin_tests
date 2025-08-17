/* function titleCase(title, minorWords) {
  if (!title) return "";
  const minorWordsArray = minorWords ? minorWords.toLowerCase().split(" ") : [];
  return title
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0 || !minorWordsArray.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
} */

/* function openOrSenior(data) {
  return data.map((element) => {
    if (element[0] >= 55 && element[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
} */
/* 
function include(arr, item) {
  return arr.includes(item);
}
 */
/* 
let evenText = "";
let oddText = "";

function encrypt(text, n) {
  let productText = text;
  for (let m = 0; m < n; m++) {
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        evenText += productText[i];
      } else {
        oddText += productText[i];
      }
    }
    productText = oddText + evenText;
    oddText = "";
    evenText = "";
  }
  return productText;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  let text = encryptedText;
  for (let m = 0; m < n; m++) {
    const half = Math.floor(text.length / 2);
    oddText = [...text.slice(0, half)];
    evenText = [...text.slice(half)];
    let decryptedText = "";
    for (let i = 0; i < evenText.length; i++) {
      decryptedText += evenText[i];
      if (i < oddText.length) decryptedText += oddText[i];
    }
    text = decryptedText;
  }
  return text;
} */

/* Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
 

var encryptThis = function (text) {
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    const chars = [...words[i]];
    chars[0] = words[i].charCodeAt(0);
    if (chars.length >= 3) {
      [chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]];
    }
    words[i] = chars.join("");
  }
  return words.join(" ");
};

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
Note:
See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers (in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds"



*/

/* function race(v1, v2, g) {
  if (v1 > v2) return "-1 -1 -1";
  const timeDecimal = g / (v2 - v1);
  const totalSeconds = Math.floor(timeDecimal * 3600);
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  return [hours, minutes, seconds];
} */

/* function isSortedAndHow(array) {
  const ascending = [...array].sort((a, b) => a - b);
  const descending = [...array].sort((a, b) => b - a);
  if (array.every((val, i) => val === ascending[i])) return "yes, ascending";
  if (array.every((val, i) => val === descending[i])) return "yes, descending";
  return "no";
} */
/* 
function meeting(s) {
  const namesArray = s
    .toUpperCase()
    .split(";")
    .map((person) => {
      return person.split(":");
    })
    .sort((a, b) => {
      const surnameCompare = a[1].localeCompare(b[1]);
      if (surnameCompare !== 0) return surnameCompare;
      return a[0].localeCompare(b[0]);
    });
  return namesArray.reduce((acc, val) => (acc += `(${val[1]}, ${val[0]})`), "");
} */

/* function evenNumbers(array, number) {
  let counter = 0;
  const reducedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      reducedArray.push(array[i]);
      counter += 1;
      if (counter === number) break;
    }
  }
  return reducedArray.reverse();
}

function wordsToMarks(string) {
  const alphabet = {};
  for (let i = 0; i < 26; i++) {
    alphabet[String.fromCharCode("a".charCodeAt(0) + i)] = i + 1;
  }
  return [...string].reduce((acc, val) => (acc += alphabet[val]), 0);
}

function solve(s) {
  const alphabet = {};
  for (let i = 0; i < 26; i++) {
    alphabet[String.fromCharCode("a".charCodeAt(0) + i)] = i + 1;
  }
  const substrArr = s.split(/[aeiou]+/);
  if (substrArr === "") return 0;
  let total = 0;
  substrArr.forEach((element) => {
    const strTotal = [...element].reduce(
      (acc, char) => acc + alphabet[char],
      0
    );
    if (strTotal > total) total = strTotal;
  });
  return total;
} */
/* 
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const findOccurence = numbers.indexOf(target - numbers[i], i + 1);
    if (findOccurence !== -1) return [i, findOccurence];
  }
}

function twoSum(numbers, target) {
  const seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i];
    const diff = target - curr;
    if (seen.has(diff)) return [seen.get(diff), i];
    seen.set(numbers[i], i);
  }
}
 */

function vowelIndices(word) {
  return [...word].reduce(
    (acc, val, i) => (/[aeiouy]/i.test(val) ? acc.concat(i + 1) : acc),
    []
  );
}

function dataReverse(data) {
  let groupArr = [];
  for (let i = 0; i < data.length; i += 8) {
    groupArr.push(data.slice(i, i + 8));
  }
  return groupArr.reverse().flat();
}
