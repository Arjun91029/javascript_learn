const name = "Arjun";

const countId = 40;

//console.log(name + countId + " something");

// use back tick(``) for making placeholder

console.log(`My name is ${name} and my id count is ${countId}`);

//output-My name is Arjun my and id count is 40


//create string in other way

const gameName = new String("poggo")

/*
console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // POGGO
console.log(gameName.__proto__); // {}
console.log(gameName[0]); // p

console.log(gameName.charAt(3)); //g
console.log(gameName.indexOf('o')); //1
*/

const newString = gameName.substring(0, 4)
console.log(newString);  //pogg

const anotherastring = gameName.slice(-5, 3)
console.log(anotherastring); //pog

const newStringOne = "      Arjun.   ";
console.log(newStringOne);// '    Arjun.     '
console.log(newStringOne.trim());   //Arjun


const url = "https:/random.com/random%50click";

console.log(url.replace('%50','-')); //https:/random.com/random-click

console.log(url.includes(randomly));  //false