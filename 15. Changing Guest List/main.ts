let guest_list: string[] = ["Suma" , "Mano" , "Khsuhi"];

// for (let i = 0; i < guest_list.length; i++) {
//     console.log("Dear Friend\n" , guest_list[i], "\nIt's a great pleasure if you join me on tonight's dinner," , "Thank you");
// }

let absent_guest = "Khushi";

let new_guest = "Naz";

guest_list[2] = new_guest;

for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Friend\n" , guest_list[i], "\nIt's a great pleasure if you join me on tonight's dinner," , "Thank you");
}

console.log(absent_guest, "has another commitments, so she is not available for dinner.");