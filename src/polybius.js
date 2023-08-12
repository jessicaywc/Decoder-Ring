// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//we need to define the encode and decode object for the Polybius Square.
//make the input into lowercase for consistent processing.
//split the input string into an array of individual characters for decoding. use the .split method.
//if we need to decode, check the total number of characters in the input to make sure it is even. if Odd, it needs to return false since it requires even characters
//after they are filtered, reduce the arrays to a single string and concat to join them together with spaces between each coordinate pair
//if the character is a valid coordinate in the "key" object, it is mapped to a space. The resulting array is joined together by "join"

const polybiusModule = (function () {
  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let splitString;
    let key = encodeKey;
    if(encode) {
      splitString = input.split("");
    } else {
      key = decodeKey;
      splitString = input.split(" ");
      const isOdd = splitString.reduce((acc, array) => acc + array.length, 0) % 2;
      if(isOdd) {
        return false;
      }
      splitString = splitString.map(section => {
        console.log('section on line 70: ', section)
        return section.split("").reduce((acc, char, index, collect) => {
          if(char === " ") {
            acc.push(" ");
          } else if(!(index % 2)) {
            acc.push(char + collect[index + 1]);
          }
          return acc;
        }, [])
      })
      .reduce((a, b) => a.concat(" ", b));
    }
    return splitString.map(char => key[char] || " ").join("");
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };