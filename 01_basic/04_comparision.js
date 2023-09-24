/* The reason is that an  equality check == and comparision > <>=
<= work differently
comparisoon convert null to a number ,treating it is a 0.
thats why (3) null >= 0 is true and (1)null > 0 is false */
console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1);  //false
console.log(2 == 1); //false
console.log(2 != 1);  //true


console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //flase
console.log(null >= 0); //true

console.log(undefined == 0);  //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === strictly check (it's check datatype also)

console.log("2" === 2); //flase