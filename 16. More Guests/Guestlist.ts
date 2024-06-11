let guest_list: string[] = ["Guest1" , "Guest2" , "Guest3"];

// for (let i = 0; i < guest_list.length; i++) {
//     console.log("Dear Friend\n" , guest_list[i], "\nIt's a great pleasure if you join me on tonight's dinner," , "Thank you");
// }

let absent_guest = "Guest3";

let new_guest = "Guest4";

guest_list[2] = new_guest;

console.log("its a good new, that we found a bigger table, so we can inviter 3 more guest at diiner")

guest_list.unshift("Guset5"); //unshift used to add variable on starting
guest_list.splice(2,0,"Guest6"); // splice use to add or remover the variable in between
guest_list.push("Guest7"); // push used to add variable in last of the list or

for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Friend\n" , guest_list[i], "\nIt's a great pleasure if you join me on tonight's dinner," , "Thank you");
}
