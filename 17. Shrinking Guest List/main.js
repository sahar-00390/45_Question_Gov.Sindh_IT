"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Andy", "Warren", "Jack"];
// for (let i = 0; i < guest_list.length; i++) {
//     console.log("Dear Friend\n" , guest_list[i], "\nIt's a great pleasure if you join me on tonight's dinner," , "Thank you");
// }
let absent_guest = "Jack";
let new_guest = "Robert";
guest_list[2] = new_guest;
guest_list.unshift("Bishop"); //unshift used to add variable on starting
guest_list.splice(2, 0, "Mack"); // splice use to add or remover the variable in between
guest_list.push("Backet"); // push used to add variable in last of the list or array
// While Loop used to add condition
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(remove_guest, "\nSorry, this invitaion only for two guest, you will be inivited on next dinner, Thank You.");
}
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Friend\n", guest_list[i], "\nYou are still invited on dinner,", "Thank you");
}
guest_list.splice(0, 2); // splice use to add or remove
console.log(guest_list);
