#!/usr/bin/env node

import inquirer from "inquirer";

console.log(" Welcome to the Currency convertor!!")

const currency:any =
{IND: 1,     // BASE CURRENCY
EUR: 0.011,
PKR: 3.34,
JPY: 1.86,
CAD: 0.016,
}


let userAnswer = await inquirer.prompt(
    [            
   {name: "from",
    message: "Enter from currency",
    type: "list",
    choices: [ "EUR", "IND", "JPY", "CAD", "PKR"],},


    {name: "to",
    message: "Enter to currency",
    type: "list",
    choices: [ "EUR", "IND", "JPY", "CAD", "PKR"],},

    {
        name:"amount",
        message:"Enter your amount",
        type: "number",

    }
])

let fromAmount = currency[userAnswer.from];//exchange rate          // dynamic approach
let toAmount = currency[userAnswer.to];    //exchange rate
let amount = userAnswer.amount;
let baseAmount = amount/fromAmount;
let convertedAmount = amount * (toAmount / fromAmount);


console.log(convertedAmount.toFixed(2));
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
// console.log(baseAmount);

