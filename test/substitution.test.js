// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should encode a message using the provided alphabet", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
  });

  it("should encode a message with spaces using the provided alphabet", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters when encoding", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });

  it("should decode a message using the provided alphabet", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.eql(expected);
  });

  it("should decode a message with spaces using the provided alphabet", () => {
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "you are an excellent spy";
    expect(actual).to.eql(expected);
  });

  it("should return false if the alphabet parameter does not have exactly 26 characters", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });

  it("should return false if the alphabet parameter has duplicate characters", () => {
    const actual = substitution("thinkful", "shhorrt");
    expect(actual).to.be.false;
  });
});
