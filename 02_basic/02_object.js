//singleton

//object literals

const myUser = {
    name: "Arjun",
    age: 22,
    location: "kolkata",
    email: "random@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "tuesday"] 
}

console.log(myUser.email);
console.log(myUser);



// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

myUser.email = "random@chatgpt.com"
// Object.freeze(JsUser)
myUser.email = "randomh@microsoft.com"
// console.log(JsUser);

myUser.greeting = function(){
    console.log("Hello JS user");
}
myUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(myUser.greeting());  ///hello Js user
console.log(myUser.greetingTwo());  //hello JS user, user