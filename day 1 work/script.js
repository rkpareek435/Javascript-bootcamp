//console.log('good morning');
//Assignment 1: Array Operations
//1. Create an empty array called "fruits".

let fruits = [];
console.log(fruits)
//2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

// fruits[0] = 'apple', 'banana', 'orange'
// fruits[1] = 'banana'
// fruits[2] = 'orange'
// console.log(fruits);
fruits.push('apple','banana','orange')

console.log(fruits)


//3. Remove the first fruit from the array

// delete fruits[0]
fruits.splice(0,1)
console.log(fruits);


//4. Add "grape" to the end of the array.

// fruits[3] = 'grapes'
// fruits.splice(4,0 ,'grapes')
fruits.push('grapes')
console.log(fruits); 

//5. Update the second fruit in the array to "pear"

// fruits[1] = 'pear'
fruits.splice(1,0,'pear')
console.log(fruits)

//6. Print the final "fruits" array after performing the above operations.
console.log(fruits);

// Assignment 2: Object Operations
//1. Create an empty object called "person".
let person = {}
console.log(person);

//2. Add the following properties to the "person" object:
// - name: "John"
// - age: 30
// - city: "New York"
person = {
    name : "John",
    age : 30 ,
    city : "New York"
}

console.log(person)

//3. Remove the "age" property from the "person" object.

delete person.age;
console.log(person)
//4. Add a new property called "job" with the value "Engineer" to the "person" object.

person.job = "Engineer";
console.log(person);
//5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";
console.log(person);
//6. Print the final "person" object after performing the above operations.

console.log(person)


//Assignment 3: Array of Objects Operations

//1. Create an empty array called "cars".

let cars = [];
console.log(cars)

// 2. Add three car objects to the "cars" array. Each car object should have the following
// properties:
// - make: "Toyota"
// - model: "Camry"
// - year: 2018

// cars.make = "Toyota";
// cars.model = "Camry";
// cars.year = 2018;
cars = [
{
    make: "Toyota",
    model: "Camry",
    year: 2018
},
{
    make: "Audi A4",
    model: "Germany",
    year: 2015
},
{
    make: "Tata Nexon",
    model: "India",
    year: 2023
}
]
console.log(cars);

//3. Remove the first car object from the "cars" array.

cars.splice(0,1)
console.log(cars)
// 4. Add a new car object to the "cars" array with the following properties:
// - make: "Honda"
// - model: "Civic"
// - year: 2020

cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
})
console.log(cars)
//5. Update the "model" property of the second car object in the array to "Accord".
//cars.splice(1, 0 , model = "Accord");
// cars.splice(1,0 model)

//console.log(cars)

//6. Print the final "cars" array after performing the above operations.
console.log(cars);



