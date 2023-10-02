// for of

const arr = [1, 2, 3, 4, 5] 

for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello world!"

for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}


//Map

const map = new Map()
map.set('Br', "Bihar")
map.set('Up', "uttar pradesh")
map.set('MP', "Madhya pradesh")
map.set('Hr', "Harayana")

//console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key ,value ]of map) {
  ///  console.log(key, ':-' ,value);
}


const myObject = {
    'game1': 'pubg',
    'game2': 'Freefire',
    'game3': 'subwaysuffer'
}
// for (const [key ,value ] of myObject) {
//     console.log(key, ':-' ,value);//myObject is not itreable
// }