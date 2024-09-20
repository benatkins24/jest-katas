import nock from "nock";
//import { fizzBuzz, mapWithCb, getPokemon } from ".";
//import React from "react";
//import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
//import "@testing-library/jest-dom";
import { fizzBuzz } from "./fizzbuzz";
import { mapWithCb } from "./mapWithCb";
import { getPokemon } from "./getPokemon";
jest.mock("./getPokemon");

describe("1. fizzBuzz", () => {
  it("returns fizzbuzz when num is 0", () => {
    //const result = {fizzBuzz(0)};
    //const result = <fizzBuzz {num1: 0} />;
    const result = fizzBuzz(0);
    //const result = fizzBuzz({num1: 0});
    //const result = {fizzBuzz({num1: 0})};
    //const result = () => {fizzBuzz({ num1: 0 })};
    expect(result).toEqual("fizzbuzz");
    // expect(() =>
    //   fizzBuzz({
    //     num1: 0,
    //   }).toBe("fizzbuzz")
    // );
  });

  it("returns num when num is not divisible by 3 or 5", () => {
    const result = fizzBuzz(4);
    expect(result).toEqual("4");
    //     const res1 = () =>
    //   fizzBuzz({
    //     num1: 4,
    //   });
    // expect(res1).toEqual("4");
    // expect(() =>
    //   fizzBuzz({
    //     num1: 4,
    //   }).toEqual("4")
    // );
  });

  it("returns fizzbuzz when num is divisible by both 3 and 5", () => {
    //const result = {fizzBuzz(15)};
    //const result = <fizzBuzz {num1: 15} />;
    const result = fizzBuzz(15);
    //const result = fizzBuzz({num1: 15});
    //const result = {fizzBuzz({num1: 15})};
    //const result = () => {fizzBuzz({ num1: 15 })};
    expect(result).toEqual("fizzbuzz");
    // const res2 = () => {
    //   fizzBuzz({
    //     num1: 15,
    //   });
    // };
    // expect(res2).toEqual("fizzbuzz");
    // expect(() =>
    //   fizzBuzz({
    //     num1: 15,
    //   }).toEqual("fizzbuzz")
    // );
  });

  it("returns fizz when num is only divisible 3", () => {
    const result = fizzBuzz(18);
    expect(result).toEqual("fizz");
    // expect(() =>
    //   fizzBuzz({
    //     num1: 18,
    //   }).toEqual("fizz")
    // );
  });

  it("returns buzz when num is only divisible 5", () => {
    const result = fizzBuzz(25);
    expect(result).toEqual("buzz");
    // expect(() =>
    //   fizzBuzz({
    //     num1: 25,
    //   }).toEqual("buzz")
    // );
  });

  //console.log(() => fizzBuzz({ num1: "string" }));
  //Not sure on this one without being able to run
  it("returns correctly when num is sent in as a string", () => {
    const result = fizzBuzz("5");
    expect(result).toEqual("buzz");
    // expect(() =>
    //   fizzBuzz({
    //     num1: "string",
    //   }).toEqual("Dave")
    // );
  });

  it("returns string when non numeric string is sent", () => {
    const result = fizzBuzz("string");
    expect(result).toEqual("string");
    // expect(() =>
    //   fizzBuzz({
    //     num1: "string",
    //   }).toEqual("Dave")
    // );
  });
}); //End fizzbuzz

describe("2. mapWithCb", () => {
  it("throws an error if first argument is not an array", () => {
    const notArray = "string";
    const mockFunk = jest.fn();
    const result = mapWithCb(notArray, mockFunk);
    expect(result).toThrow();
  });

  it("throws an error if second argument is not a function", () => {
    const array = ["aaa", "bbb", "ccc"];
    const notFunk = "";
    const result = mapWithCb(array, notFunk);
    expect(result).toThrow();
  });

  it("calls the given function at least once", () => {
    const array = ["aaa", "bbb", "ccc"];
    const mockFunk = jest.fn();
    const result = mapWithCb(array, mockFunk);
    expect(mockFunk).toHaveBeenCalled();
    expect(mockFunk).toHaveReturned();
  });

  it("calls the given function a number of times equal to the length of the given array", () => {
    const array = ["aaa", "bbb", "ccc"];
    const mockFunk = jest.fn();
    const result = mapWithCb(array, mockFunk);
    expect(mockFunk).toHaveBeenCalledTimes(3);
    expect(mockFunk).toHaveReturnedTimes(3);
  });

  it("calls the given function with any one item from the given array", () => {
    const array = ["aaa", "bbb", "ccc"];
    const mockFunk = jest.fn();
    const result = mapWithCb(array, mockFunk);
    expect(mockFunk).toHaveBeenCalledWith("bbb");
  });

  it("calls the given function a second time with the second item in the given array", () => {
    const array = ["aaa", "bbb", "ccc"];
    const mockFunk = jest.fn();
    const result = mapWithCb(array, mockFunk);
    expect(mockFunk).toHaveBeenNthCalledWith(2, "bbb");
  });

  it("calls the given function a final time with the final item in the given array", () => {
    const array = ["aaa", "bbb", "ccc"];
    const mockFunk = jest.fn();
    const result = mapWithCb(array, mockFunk);
    expect(mockFunk).toHaveBeenNthCalledWith(3, "ccc");
    expect(mockFunk).toHaveBeenLastCalledWith("ccc");
  });
});

describe("3. getPokemon", () => {
  it("returns an object of character information", () => {
    const charName = "Pikachu";
    const expectedValue = { name: "pikachu", order: 35, height: 4 };
    const mockData = {
      name: "pikachu",
      order: 35,
      height: 4,
    };
    getPokemon.mockResolvedValueOnce(mockData);
    const returnChar = getPokemon(charName);
    expect(returnChar).toEqual(expectedValue);
  });
});
