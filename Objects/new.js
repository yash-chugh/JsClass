// firstName = 'Hello'

// let newObj = {
//     prop1 : 'Hello',
//     getName : function(){
//         return 'Gaurav'
//     }
// }

// // console.log(newObj.getName());

// newObj.neProp = 'New Property';

// console.log(newObj);

// delete newObj.prop1;

// console.log(newObj);



// function Person(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let newPerson = new Person('Gaurav' , 'Sharma');

// console.log(newPerson);

// let obj = new Object()


// obj.name = 'Gaurav'

// console.log(obj)

person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    // getName : function(){
    //     return this.firstName;
    // }

    // getName(){
    //     return this.firstName;
    // }

    // getName : () => {
    //     // console.log(this);

    //     return this.firstName
    // }

    // key : value

    get fullaName(){
        return `${this.firstName} ${this.lastName}`
    },

    set name(param){
        this.firstName = param;
    }
};

// person.firstName;
// person['firstName'] = 'Example';

// console.log(person['first Name']);


// console.log(Object.keys(person));

// for (let key in person) {
//     console.log(key + ' ' +person[key])      
// }

// console.log(person.getName());

person.name = 'Gaurav'

console.log(person.fullaName);

