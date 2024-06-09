"use strict";
//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, 
//but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 11 work:
let friends_name = ["Jack", "Warren", "Gibson", "Backet"];
let message = "Its a nice day but tough";
for (let i = 0; i < friends_name.length; i++) {
    console.log(message + " " + friends_name[i]);
}
for (let i = 0; i < friends_name.length; i++) {
    console.log(`${message} ${friends_name[i]}`);
}
