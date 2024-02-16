import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly Enter your ID: "
    },
    {
        type: "input",
        name: "userPIN",
        message: "Kindly Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your account Type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Select Your Amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userID && answers.userPIN) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
