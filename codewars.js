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

/* function vowelIndices(word) {
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
} */
/* 
const combinations = [];
let best_sum = 0;

array = [50];
t = 163;
k = 3;

function generateCombinations(arr, size, start, temp) {
  if (temp.length === size) {
    combinations.push([...temp]);
    return;
  }
  for (let i = start; i < arr.length; i++) {
    temp.push(arr[i]);
    generateCombinations(arr, size, i + 1, temp);
    temp.pop();
  }
}

function chooseBestSum(t, k, ls) {
  generateCombinations(ls, k, 0, []);
  for (let i of combinations) {
    const accumulator = i.reduce((acc, val) => acc + val);
    if (accumulator > best_sum && accumulator <= t) {
      best_sum = accumulator;
    }
  }
  return best_sum > 0 ? best_sum : null;
}

console.log(chooseBestSum(163, 3, array));
 */

/* function abbreviate(string) {
  const array = string.match(/[a-zA-Z]+|[^a-zA-Z]+/g);
  return array
    ? array
        .map((word) => {
          return [...word].filter((el) => el.match(/[a-zA-Z]+/g)).length >= 4
            ? word[0] + (word.length - 2).toString() + word.at(-1)
            : word;
        })
        .join("")
    : "";
} */
/* 
function abbreviate(string) {
  return string.replace(/[a-zA-Z]{4,}/g, word => word[0] + (word.length - 2) + word.at(-1));
} */

/* function service(score) {
  const points = score.split(":");
  const sum = Number(points[0]) + Number(points[1]);
  if (sum === 0) return "first";
  if (sum <= 40) {
    return Math.floor(sum / 5) % 2 === 0 ? "first" : "second";
  }
  return sum % 4 === 0 || (sum - 1) % 4 === 0 ? "first" : "second";
}
 */

/* function sortTheInnerContent(words) {
  return words.replace(/(?<=\w)\w+(?=\w)/g, (word) =>
    [...word].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join("")
  );
}
 */

/* function maxProfit(prices) {
  let bestProfit = prices.at(-1) - prices.at(-2);
  let lowPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= lowPrice) {
      lowPrice = prices[i];
      if (prices[i + 1] && prices[i + 1] - lowPrice > bestProfit)
        bestProfit = prices[i + 1] - lowPrice;
      continue;
    }
    if (prices[i] - lowPrice > bestProfit) bestProfit = prices[i] - lowPrice;
  }
  return bestProfit;
}

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = -Infinity;
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}
 */
/*
const hash = Object.freeze({
  queen: 9,
  rook: 5,
  bishop: 3,
  knight: 3,
  pawn: 1,
});

function piecesValue(arr, s) {
  let totalValue = 0;
  for (let i = 0; i < arr.length; i++) {
    totalValue += arr[i].reduce((acc, val) => {
      const pieceVal = val[0] === s[0] ? hash[val.slice(2)] : 0;
      return acc + pieceVal;
    }, 0);
  }
  return totalValue;
} */

/* amount = 43;

const makeChange = (amount) => {
  const coins = ["H", "Q", "D", "N", "P"];
  const values = [50, 25, 10, 5, 1];
  const object = {};
  for (let i = 0; i < values.length; i++) {
    while (amount >= values[i]) {
      if (amount === 0) break;
      amount -= values[i];
      object[coins[i]] ? (object[coins[i]] += 1) : (object[coins[i]] = 1);
    }
  }
  return object;
};
console.log(makeChange(amount)); */

/* class WordDictionary {
  constructor() {
    this.array = [];
  }
  addWord(word) {
    this.array.push(word);
  }

  search(word) {
    const regex = new RegExp("^" + word.replace(/\./g, "[a-z]") + "$");
    return this.array.some((word) => regex.test(word));
  }
}

const wd = new WordDictionary();
wd.addWord("a");
wd.addWord("at");
wd.addWord("ate");
wd.addWord("ear");
console.log(wd.search("a"));
console.log(wd.search("a."));
console.log(wd.search("a.e"));
console.log(wd.search("b"));
console.log(wd.search("e."));
console.log(wd.search("ea."));
console.log(wd.search("ea.."));
 */

/* function matrixfy(str) {
  if (str === "") return "name must be at least one letter";
  const matrixSize = Math.floor(Math.sqrt(str.length));
  let array = [];
  for (let i = 0; i < matrixSize; i++) {
    let element = array.slice(i, i + matrixSize);
    while (element.length < matrixSize){
      element.push(".");
    }
    array.push(element)
  }
  return array;
} */
/* function x(n) {
  let mainArr = [];
  for (let i = 0; i < n; i++) {
    let arr = Array(n).fill(0);
    arr[i] = 1;
    arr[arr.length - (i + 1)] = 1;
    mainArr.push(arr);
  }
  return mainArr;
}
 */

/* function sc(apple) {
  for (let i = 0; i < apple.length; i++) {
    const bug = apple[i].findIndex((c) => c === "B");
    if (bug !== -1) return [i, bug];
  }
} */
/* 
function roundRobin(jobs, slice, index) {
  let counter = 0;
  while (jobs[index] > 0) {
    const recursive = () => {
      for (let i = 0; i < jobs.length; i++) {
        if (slice > jobs[i]) {
          counter += jobs[i];
          jobs[i] = 0;
        } else {
          counter += slice;
          jobs[i] -= slice;
        }
        if (jobs[index] === 0) return;
      }
    };
    recursive();
  }
  return counter;
}
console.log(roundRobin([10, 20], 5, 0));
 */

/* function sequenceClassifier(arr) {
  let allEqual = true;
  let strictlyIncreasing = true;
  let strictlyDecreasing = true;
  let nonDecreasing = true;
  let nonIncreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) allEqual = false;
    if (arr[i] <= arr[i - 1]) strictlyIncreasing = false;
    if (arr[i] >= arr[i - 1]) strictlyDecreasing = false;
    if (arr[i] < arr[i - 1]) nonDecreasing = false;
    if (arr[i] > arr[i - 1]) nonIncreasing = false;
  }

  if (allEqual) return 5;
  if (strictlyIncreasing) return 1;
  if (strictlyDecreasing) return 3;
  if (nonDecreasing) return 2;
  if (nonIncreasing) return 4;
  return 0;
} */

/* function reverseFizzBuzz(array) {
  let f = 0;
  let b = 0;
  for (let i = 0; i < array.length; i++) {
    if (f !== 0 && b !== 0) break;
    if (array[i] === "Fizz" && f === 0) {
      f = i + 1;
    }
    if (array[i] === "Buzz" && b === 0) {
      b = i + 1;
    }
    if (array[i] === "FizzBuzz") {
      if (f === 0 && b === 0) {
        f = i + 1;
        b = f;
      }
      f !== 0 ? (b = i + 1) : (f = i + 1);
    }
  }
  return [f, b];
} */

/* function leastLarger(a, i) {
  return (
    a
      .map((el, id) => (el > a[i] ? id : -1))
      .filter((id) => id !== -1)
      .sort((b, c) => a[b] - a[c])[0] ?? -1
  );
}
 */

/* function window(length, offset, list) {
  const result = [];
  for (let i = 0; i < list.length; i += offset) {
    result.push(list.slice(i, i + length));
  }
  return result;
}
 */

/* function validateBase(num, base) {
  const based = (char) => char.charCodeAt(0) - 54;
  for (let i = 0; i < num.length; i++) {
    if (/[A-Z]/.test(num[i])) {
      if (based(num[i]) > base) return false;
    }
    if (num[i] >= base) return false;
  }
  return true;
} */

/* function format(text, width) {
  const array = text.split(" ");
  let lineLength = 0;
  const formattedText = array.reduce((acc, val) => {
    if (lineLength + val.length + (lineLength > 0 ? 1 : 0) <= width) {
      acc += (lineLength > 0 ? " " : "") + val;
      lineLength += val.length + (lineLength > 0 ? 1 : 0);
    } else {
      acc += "\n" + val;
      lineLength = val.length;
    }
    return acc;
  }, "");
  return formattedText;
} */

/* function subsetSum(xs, target, index = 0) {
  if (target === 0) return [];
  if (index >= xs.length) return null;
  const withCurrent = subsetSum(xs, target - xs[index], index + 1);
  if (withCurrent !== null) {
    return [xs[index], ...withCurrent];
  }
  return subsetSum(xs, target, index + 1);
}

function subsetSum(xs, target) {
  const stack = [{ index: 0, total: target, path: [] }];
  const visited = new Set();

  while (stack.length > 0) {
    const { index, total, path } = stack.pop();
    const key = `${index}-${total}`;
    if (visited.has(key)) continue;
    visited.add(key);

    if (total === 0) return path;
    if (index >= xs.length || total < 0) continue;

    // Prova includere xs[index]
    stack.push({
      index: index + 1,
      total: total - xs[index],
      path: [...path, xs[index]],
    });

    // Prova escludere xs[index]
    stack.push({
      index: index + 1,
      total: total,
      path: [...path],
    });
  }

  return null;
} */

/* function subsetSum(xs, target) {
  const stack = [{ index: 0, total: target, path: [] }];
  const visited = new Set();

  while (stack.length > 0) {
    const { index, total, path } = stack.pop();
    const key = `${index}-${total}`;
    if (visited.has(key)) continue;
    visited.add(key);

    if (total === 0) return path;
    if (index >= xs.length || total < 0) continue;

    stack.push({
      index: index + 1,
      total: total - xs[index],
      path: [...path, xs[index]],
    });

    stack.push({
      index: index + 1,
      total: total,
      path: [...path],
    });
  }
  return null;
}
 */
/* 
var searchInsert = function (nums, target) {
  const found = nums.findIndex((num) => num === target);
  if (found !== -1) return found;
  const newIndex = nums.findIndex((num) => num > target);
  return newIndex === -1 ? nums.length : newIndex;
};

function giveAndTake(people, friendships) {
  connections = {};
  friendships.forEach((element) => {
    element[0] in connections
      ? connections[element[0]].push(element[1])
      : (connections[element[0]] = [element[1]]);
    element[1] in connections
      ? connections[element[1]].push(element[0])
      : (connections[element[1]] = [element[0]]);
  });
  for (let i = 0; i < people.length; i++) {
    if (people[i] < 0) {
      people[i] = 0;
      people[connections[]
    }
  }
} */

/* function locate(arr, value) {
  if (arr.some((item) => item === value)) return true;
  for (let i of arr) {
    if (Array.isArray(i) && locate(i, value)) {
      return true;
    }
  }
  return false;
}
 */
/* 
function sumRange(num) {
  if (num === 0) return 0;
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
 */

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(factorial(5));

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

var allAreLessThanSeven = all([1,2,18], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

function all (arr, f) {
  for (let i of arr) {
    if (!f(i)) return false
  }
  return true;
}

function productOfArray (arr) {
  
}