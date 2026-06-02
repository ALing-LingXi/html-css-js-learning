// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

let i = 1
function lookUpProfile(name, prop) {
  for(let x =0;x<contacts.length;x++){
    if(name === contacts[x].firstName){
      if(contacts[x].hasOwnProperty(prop)){
        return contacts[x][prop]
      }
      else{
        return  "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");