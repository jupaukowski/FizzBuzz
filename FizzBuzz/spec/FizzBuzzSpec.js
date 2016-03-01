var fizzBuzz = require("../src/FizzBuzz.js")

describe("FizzBuzz", function () {

  it("see if it works", function (){
    expect(true).toBe(true);
  });

  it("should return an array with 0 and 1", function(){
    expect(fizzBuzz(0,1)).toEqual([0,1]);
  });

  it("should return Fizz if number equals 3", function(){
    expect(fizzBuzz(0,4)).toEqual([0,1,2,"Fizz",4]);
  });

  it("should return Fizz if (mod 3) equals zero", function(){
    expect(fizzBuzz(6,8)).toEqual(["Fizz", 7,8]);
  });

  it("should return Buzz if number equals 5", function(){
    expect(fizzBuzz(0,6)).toEqual([0,1,2,"Fizz",4, "Buzz","Fizz"]);
  });

  it("should return Buzz if (mod 5) equals zero", function(){
    expect(fizzBuzz(10,11)).toEqual(["Buzz", 11]);
  });

  it("should return FizzBuzz if number divisible by both 3 and 5", function(){
    expect(fizzBuzz(0,17)).toEqual([0,1,2,"Fizz",4, "Buzz","Fizz", 7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17]);
  });

});
