// const myArr  = [1, 2, 4, 5, 6];
// const superHero = ["shaktimaan", "naagraj"]


// const myArr2  = new Array(0,1,3,4,5,6,7,8,9);

// console.log(myArr);
// console.log(superHero);
// console.log(myArr2);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

/*
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); */

//**********Part_2**********//


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);  //["thor", "Ironman", "spiderman",["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);  //flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //["thor", "Ironman", "spiderman","superman", "flash", "batman"]

const allNewHero = [...marvel_heros,...dc_heros];
// console.log(allNewHero)

const anotherArray = [1, 2, 3, [4, 5, 6],7 ,[6, 7, [4, 5]]]

const newAnotherArray = anotherArray.flat(Infinity)
console.log(newAnotherArray); //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("arjun"))
console.log(Array.from("arjun"))
console.log(Array.from({name: "arjun"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
