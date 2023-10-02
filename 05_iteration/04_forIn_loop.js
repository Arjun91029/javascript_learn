const myObject = {
    js: 'javascript',
    cpp: 'c++',
    dart: 'Dart for android',
    rb: 'Ruby'
}


for (const key in myObject) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
}


const programming = ['java', 'py', 'cpp', 'js']

for (const key in programming) {
    console.log(programming[key]);
}