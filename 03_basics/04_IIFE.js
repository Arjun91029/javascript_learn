//immediately Invoked Function Expression (IIFE)


// function one(){
       //console.log(`DB CONNECTED`);
// }
// one()  


(function one(){
    //named iffe
    console.log(`DB CONNECTED`);
})();

//()() 

(  (roll) => {
    console.log(`DB CONNECTED TWO ${roll}`);
} )('21')

//