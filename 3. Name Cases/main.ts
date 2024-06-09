let personName: string = "SaHar MugHaL";

console.log('lowercase:' , personName.toLowerCase());

console.log('uppercase', personName.toUpperCase());

// console.log("tittlecase:", personName.split(" ")).map(word => word.charAt(0).toUpperCase()
// + item.slice(1).toLowerCase()).join(" ");;
// ;

let titleCaseName: string = personName.split(" ")
  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log("titlecase:", titleCaseName);