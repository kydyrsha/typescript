// let character = 'mario'; // string
// let age = 30; // number
// let isBlackBelt = false; // boolean
//
// // character = 20; // can't do like this
// character = "luigi" // we must change only the VALUE not the TYPE
// isBlackBelt = true;
//
// const circ = (diameter:number) => {
//   return diameter * Math.PI
// }
//
// console.log(circ(7))



// ARRAYS
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3); not gonna work
// names[0]=3;

let numbers = [10,20,30,40];
numbers.push(25);
// numbers.push('shaun'); not gonna work

let mixed = ['ken', 4, 'mekin', 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;



// OBJECTS
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
}

ninja.age = 40;
ninja.name = 'ray'
// ninja.age = 'thirty' ERROR
// ninja.skills = ['skill1', 'skill2']  CANT ADD NEW ONE

ninja = {
  name: 'sanat',
  belt: 'purple',
  age: 22
  // skills: [] can't be added TYPE IS VERY STRICT
}
