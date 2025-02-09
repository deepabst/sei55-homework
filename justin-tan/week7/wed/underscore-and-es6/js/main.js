
// console.log(`loaded`);
// console.log(`Underscore:`, _);


// example data:

const bros = ['Groucho', 'Harpo', 'Chico'];

// Two styles of using the underscore:

// #1
// _.each(bros, function(){});

// #2 - More like Ruby arr.each(), or JS arr.forEach()
// _(bros).each( function(){} );

_(bros).each( function(item){
    // This function is run by .each for every item in the array
    // and each item is passed into the function as its first arg
    console.log(`item`, item);
})

const groucho = {
    name: 'groucho',
    instrument: 'guitar',
    vice: 'cigars'
};

_(groucho).each( function(val, key){
    console.log(`object item:`, key, val);

})

// Nope! .forEach only works for arrays
// bros.forEach( function(item){
//     console.log('forEach item', item);
// })

// ES6 version
bros.forEach( function(item, index){
    console.log('forEach item', item, index);
});

console.log(`ES6 Arrow Functions ====================`);

// Simplest version:
// - no parentheses needed around single argument (optional)
// - no curly brackets around the body of the function,
//   but it must be a single expression, no semicolon
// - implicit return of the expression's value
bros.forEach( item => console.log('item', item ) )

// Longer version: multiple arguments (parameters)
bros.forEach( (item, index) => console.log(index, item) )

// Longer again:
// - curly brackets are REQUIRED for more than one statement
// i.e. more than a single expression
// - implicit return no longer applies; you now need
// to use the 'return' keyword to return a value
bros.forEach( (item, index) => {
    console.log(`index:`, index);
    console.log(`item:`, item);
    // if(){

    // }
    // return 'something'
})

// Creating named functions looks the same:
// const add = (first, second) => {
//     console.log(first, second);
//     return first + second
// }

// One-liner with implicit return
const add = (first,second) => first + second

// ARROW FUNCTIONS DO NOT WORK WELL WITH 'this',
// i.e. they do not change it in the way you might
// expect; DON'T USE THEM WITH JQUERY
// becareful using them in methods (functions inside objects)

console.log(`map() ====================================`);

const nums = [1, 2, 3, 4, 5, 6];

// map() transforms an input array of values
// into an output array of values, depending on
// what your callback function returns
// NOTE that map will always return an array of
// the same length as your input
// ALSO NOTE: map returns its result, i.e. it's non-descructive
// so you will want to save the result of the map(), unlike
// with forEach()

const output = _(nums).map( function(item){
    console.log(`current item:`, item);
    return item * 2
})

console.log(`output of map():`, output);

const arrowOutput = _(nums).map( item => item * 2 )
console.log(`arrow fn output using underscore:`, arrowOutput);

//ES6 version of map, built-in to JS, no library required:
// const es6MapOutput = nums.map( function(item){
//     return item * 2
// })
const es6MapOutput = nums.map( item => item * 2)
console.log(`es6MapOutput`, es6MapOutput);

// You can use .map() on any kind of array
const upperBros = bros.map( b => b.toUpperCase() )
console.log(`upperBros:`, upperBros);

// Reduce (aka 'inject' in Ruby) takes an input array,
// and 'boils it down' to a single value, by repeatedly
// applying the function you give it; as with map(),
// reduce() cares about the return value from your callback

// const nums = [1, 2, 3, 4, 5, 6];

let runningTotal = 0

nums.forEach( function(item){
    console.log(`runningTotal:`, runningTotal);
    console.log(`item:`, item);
    runningTotal += item; // runnningTotal = runningTotal + item
    console.log(`-----------------------`);
})

console.log(`sum of nums:`, runningTotal);


const sum = _(nums).reduce( function(total, item){
    console.log(`total:`, total);
    console.log(`item:`, item);
    console.log(`total + item:`, total + item);
    console.log(`=====================`);
    return total + item
}, 1000);

// const sum = _(nums).reduce( (total, item) => total + item )

console.log(`sum of reduce:`, sum);

const concatBros = bros.reduce( (obj, bro) => {
    console.log(`obj:`, obj);
    console.log(`bro:`, bro);
    obj[bro] = true;
    return obj;
}, {})

console.log(`concatBros:`, concatBros);

// ActiveRecord-style Underscore methods
// - for searching through data, usually an array of objects

const brothers = [
    { name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44, nums: [1,2,3,5]},
    { name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42, nums: [1,2,3]},
    { name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39, nums: [1,2,3,5]},
]

// Like AR's Brother.find_by instrument: 'guitar'
// This method ASSUMES it is dealing with an array of objects, so the argument
// you give it is an object of keys: values to match against each object in the array
const guitarist = _(brothers).findWhere( {instrument: 'guitar', age: 39} )
console.log(`guitarist:`, guitarist);

// The ES6 equivalent is slightly different, in that it does NOT assume the array
// elements are all objects - so instead of passing it a "search criteria object"
// as an argument, you have to give it a "test function": the first array element
// which causes the function to return true is what the find() itself returns
// const es6Guitarist = brothers.find( function(item){
//     // return true; // will return the first item and stop
//     console.log(`item`, item.name);
//     return item.instrument === 'guitar' && item.age === 39;
// });

const es6Guitarist = brothers.find( b => b.instrument === 'guitar');
console.log(`es6Guitarist:`, es6Guitarist);

// const nums = [1, 2, 3, 4, 5, 6];

const foundNum = nums.find( n => n > 3);
console.log(`foundNum:`, foundNum);

// Like ActiveRecord's Brother.where instrument: 'guitar'
// returns an array of EVERY matching record (not just the first match)
const allGuitarists = _(brothers).where( {instrument: 'guitar', age: 39} )
console.log(`allGuitarists:`, allGuitarists);

// ES6 equivalent: 'filter', same as Ruby's 'select'
// const es6AllGuitarists = brothers.filter( function(item){
//     return item.instrument === 'guitar'
// })
const es6AllGuitarists = brothers.filter( b => b.instrument === 'guitar')
console.log(`es6AllGuitarists:`, es6AllGuitarists);

const foundNums = nums.filter( n => n > 3);
console.log(`foundNum:`, foundNums);

// How do I get a true/false answer as to whether ANY element in the array
// passes some test? Should be called .any()
const areThereAnyHarpists = brothers.some( function(bro){
    console.log(`bro:`, bro.name);
    return bro.instrument === 'harp';
});
console.log(`areThereAnyHarpists:`, areThereAnyHarpists);

const isEveryoneAbove30 = brothers.every( bro => bro.age > 30);
console.log(`isEveryoneAbove30:`, isEveryoneAbove30);

brothers
	.map( bro => bro.age)
	.filter( age => age > 40)
	.reduce( (acc, n) => acc + n)

console.clear()

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

numbers.forEach( item => console.log(item))

const multiplyOutput = numbers.map( item => item * 5)
console.log(multiplyOutput);

const sumOutput = numbers.reduce( (total, item) => total + item)
console.log(sumOutput);

const usernameE = people.filter( p => p.username === 'E');
console.log(usernameE);

const id3 = people.find( p => p.id === 3)
console.log(id3);

const firstAgeLess50 = people.find( p => p.age < 50)
console.log(firstAgeLess50);

const agesOver60 = people.filter( p => p.age > 60);
console.log(agesOver60);

// Remove all the people with an age less than 40
const reduce40 = people.filter( p => p.age >= 40);
console.log(reduce40);

// _(people).reject( p => p.age < 40)
