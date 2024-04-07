import inquirer from "inquirer";
import chalk from "chalk";
//intilize user balance and pin
let myBalance = 5000;
let mypin = 23456;
//print welcome message 
console.log(chalk.greenBright("\n\tWelcome to mine ATM Machine\n"));
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("Enter your pincode")
    }
]);
if (pinAns.pin === mypin) {
    console.log(chalk.yellowBright("\nPin is COrrect Login Successfully\n"));
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["WithDraw Amount", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationsAns.operation === "WithDraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to WithDraw Amount:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("\n\tInsufficant Balance\n\t"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.grey `${amountAns.amount} WithDraw Amount Successfully`);
            console.log(`Your remaing Balance is ${myBalance}`);
        }
    }
    else if (operationsAns.operation === "Check Balance") {
        console.log(chalk.yellow `Your Current Balance is:${myBalance}`);
    }
    else if (operationsAns.operation === "Fast Cash") {
        let FastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "2000", "5000", "8000"]
            }
        ]);
        if (FastCashAns.amount <= myBalance) {
            let balance2 = myBalance - FastCashAns.amount;
            console.log(chalk.magenta `The Remaining Balance is ${balance2}`);
        }
        else {
            console.log(chalk.red `You Have Insufficant Amount`);
        }
    }
}
else {
    console.log(chalk.red("\nPin is Incorrect, Try Again\n"));
}
