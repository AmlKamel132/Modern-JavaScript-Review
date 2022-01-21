/**
 * BigInt_ECMAScript 2020
 * new primitive type ... 
 */

var num1 = BigInt(10);
var num2 = 10n;
console.log(`num1 ${num1}`);
console.log(`num2 ${num2}`);

var num3 = 10;

console.log(num1 == num3); // true

console.log(num1 === num3); // false


// console.log(num1+num3); // will throw exception  ...  Cannot mix BigInt and other types, use explicit conversions


console.log(parseInt(num1)+num3); // 20 .. if you want to parse use parseInt .. not use + (cause + will throw exception )

// console.log(+(num1)); //  will throw exception  ...  Cannot convert a BigInt value to a number
 