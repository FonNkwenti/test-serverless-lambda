"use strict";

module.exports.randomNumberGenerator = async (event) => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`My random number: ${randomNumber}`);
  return randomNumber;
};
