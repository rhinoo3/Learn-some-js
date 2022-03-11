# Learn-some-js

number: floating point numbers - used for integers ex. let age = 23;

String: sequence of characters - used for text ex. let firstName = 'Jonas';
// always use quotations for this
strings are always printed in white

Boolean: logical type that can only be true or false - used for decisions
ex. let fullAge = true;

undefined: Value taken by a variable that is not yet defined ('empty value')
ex. let children;

Null: Also means 'empty value'
will show up as object if used under typeof which is a bug. not fixed because of legacy reasons

Symbol (ES2015):Value that is unique and cannot be changed [not useful for now]

BigInt (ES2020): Larger integers than the 'Number type' can hold

//Javascript has dynamic typing: we do not have to manually define the data type of the value stored in a variable. Instead, Data types are determinede automatically.
js value has a type not the variable. they simply just store the type.

Use let when defining a variable at first but if you would like to change the value afterwards just type the variable without let and use =;
ex. let javascriptIsFun = true;
javascript = 'YES!'

Javascript is a highlevel object oriented multi-paradigm programming language
-High level:Don't have to worry about complex things like memory managament
-object oriented: based on objets, for storing most kinds of data
Multi-paradigm: Can use different styles(structing)
Programming: instructing computers to do things

Role in web dev.
HTML: content, images, buttons
CSS: Presentating, styling & layout
JS:Real language, add interactive, load data, load apps

ES6/ES2016: Biggest update(Modern Javascript)
ECMAscript (ES5)

const living = {
rent: 2400 _ 12,
carPayment: 600 _ 12,
gas: (90 _ 2) _ 12,
insurance: 200 _ 12,
phone: 90 _ 12,
grocery: (100 _ 4) _ 12,
utility: (64 + 50 + 80 + 95) _ 12, //water, gas, internet, electricity
misc: 500 _ 12,//coffee, dinners, clothes, gym, subscriptons(netflix)
travel: 2500 \* 2

}
const costOfLiving = (living.rent + living.carPayment + living.gas + living.insurance + living.phone + living.grocery + living.utility + living.misc + living.travel)

const moneyLeft = 57000 - costOfLiving;
console.log(moneyLeft)

//let computerchoice = Math.random();

let myChoice = Number(prompt('any number below 1'));

if (computerchoice < 0.33) {
console.log('low');
} else if (computerchoice > 0.33 && computerchoice < 0.67) {
console.log('mid');
} else {
console.log('high');
}
console.log(computerchoice);
