#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condion = true ;
while (condion) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in todo?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false",
        },
    ]);

todos.push(addTask.todo);
condion= addTask.addMore;
console.log(todos);    
}