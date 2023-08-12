// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should encode the input string with the given positive shift value", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected);
  });

  it("should wrap characters around when going over 'z'", () => {
    const actual = caesar("Zelda", 3);
    const expected = "chogd";
    expect(actual).to.equal(expected);
  });

  describe("caesar", () => {
    it("should decode the input string with the given negative shift value", () => {
      const actual = caesar("ocdn dn v nzxmzo hznnvbz!", -5, false);
      const expected = "this is a secret message!";
      expect(actual).to.eql(expected);
    });

    it("should maintain spaces in the input string", () => {
      const actual = caesar("abc !", 8);
      const expected = " ";
      expect(actual.charAt(3)).to.equal(expected);
    });

    it("should maintain special characters in the input string", () => {
      const actual = caesar("abc !", 8);
      const expected = "!";
      expect(actual.charAt(4)).to.equal(expected);
    });

    it("should ignore capitalization of letters", () => {
      const actual = caesar("Hello", 2);
      const expected = "jgnnq";
      expect(actual).to.eql(expected);
    });

    it("should return false if the shift parameter is not present", () => {
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
    });

    it("should return false if the shift is greater than 25", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 56);
      expect(actual).to.be.false;
    });

    it("should return false if the shift is less than -25", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", -75);
      expect(actual).to.be.false;
    });

    it("should return false if the shift is 0", () => {
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 0);
      expect(actual).to.be.false;
    });
  });
});
