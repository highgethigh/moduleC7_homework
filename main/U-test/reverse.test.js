/*
    const sum = require('./sum');

    test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });
*/

import { reverseStr } from "../reverse.js";

describe("Test_1 reverse string", () => {
  //true
  it("delicios -> soiciled", () => {
    const result = reverseStr("delicios");
    expect(result).toBe("soiciled");
  });
  it("My name is Ilon Mask -> aezakmi", () => {
    //false
    const result = reverseStr("My name is Ilon Mask");
    expect(result).toBe("aezakmi");
  });
  it("Life is beatiful -> lufitaeb si efiL", () => {
    //true
    const result = reverseStr("Life is beatiful");
    expect(result).toBe("lufitaeb si efiL");
  });
});
