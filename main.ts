#! /usr/bin/env node
import inquirer from "inquirer"
const randomNumber:number = Math.floor(10000 + Math.random() * 90000)
console.log(randomNumber);
let viewBlance : Number = 0 
let answer = await inquirer .prompt(
    [
        {
            name:"studentname",
            type:"input",
            message: "Enter Your Name:",
            validate: function(value){
                if (value.trim() !== ""){
                    return true
                }
                return "Please Enter Your Name"
            },
        },
        {
            name: "Courses",
            type: "list",
            message: "Select The Course You Want To Enroll",
            choices: ["MS.Office","HTML","Javascript","Typescript","Python"]
        }
    ]
);
const tutionfees : {[key: string]:number}={
    "MS.Office" : 1500,
    "HTML": 2500,
    "Javascript": 10000,
    "Typescript":12000,
    "Python": 15000
};
console.log(`\n Tution Fees:${tutionfees[answer.Courses]}/-\n`);
console.log(`Balace: ${viewBlance}\n`);

let paymentMethod = await inquirer.prompt(
    [
        {
            name:"paymentmethod",
            type: "list",
            message: "Select Payment Method",
            choices: ["Easypaisa","Jazzcash","Debit Card","Credit Card"]
        },
        {
            name:"amount",
            type:"input",
            message:"Transfer Money",
            validate: function(value){
                if (value.trim() !== ""){
                    return true;}
                    return "Please Enter Value"
            }
        }
    ]
)
console.log(`\nYour Payment Method is ${paymentMethod.paymentmethod}`);

const tutionfee = tutionfees[answer.Courses]
const paymentamount = parseFloat(paymentMethod.amount)
if (tutionfee === paymentamount){
    console.log(`Congratulation You Have Successfully Enrolled in ${answer.Courses}`); 
    let ans = await inquirer.prompt(
        [
            {
                name:"Select",
                type: "list",
                message: "Select what you want to do Next",
                choices:["Viewstatus","Exit"]

            }
        ]
    )
    if (ans.Select === "Viewstatus"){
        console.log("\n Your Status");
        console.log(`Student Name: ${answer.studentname}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fees Paid: ${paymentamount}`);
                   
    }else {
        console.log("\n Exit Student Management System");
        
    }
} else {
    console.log("Invalid Amount");
    
}


    

