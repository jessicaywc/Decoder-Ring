// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//Encoded each letter in the word and shift to the right if it's positive and left if negative.
// if the the shift value isn't present, less than -25 or greater than 25 it should return false. if false, we need to decode. if it's true, we need to encode.
//spaces should be maintained throughout
//capital letters can be ignored so we need to make input toLowerCase() to make it easier to sort.
//if the letter is off the alphabet, just circle around to the beginning.
//Start by defining the letters in the alphabet.
// we need to should set the boundaries. if the shift value is not present or less than -25, or greater than 25, it should return false. if it returns false, the encode needs to decode it.
//The encode's default is "true" so we should make encode return false so we can decode each letter.
// go thru each letter in the input. Set all the input's to lowercase so it's easier to sort thru each letter.
//if the character is a letter in the alphabet we find the index in the "letters" string. if it goes beyonf the range of the alphabet, (greater than 25), we adjust it by subtracting 26 so it loops back around to the beginning.
//if the characters are not a letter, add it to the result string without any shifting.

//we need to go thru each letter in the input and shift it depending on what the shift argument is if the encoding returns false. then shift the letters

const caesarModule = (function () {
  //set the letters of the alphabet
  const letters = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    let result = "";
    if (encode === false) {
      shift = shift * -1;
    }
    //loop thru each letter in input and set everything to lowerCase
    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase();
      if (letters.includes(letter)) {
        const letterOfIndex = letters.indexOf(letter);
        let shiftIndex = letterOfIndex + shift;
        if (shiftIndex > 25) {
          shiftIndex -= 26;
        } else if (shiftIndex < 0) {
          shiftIndex += 26;
        }
        const shiftedLetter = letters[shiftIndex];
        result += shiftedLetter;
      } else {
        result += letter; // Maintain non-alphabetic characters as is
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
