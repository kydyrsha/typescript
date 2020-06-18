// explicit Type
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn: true;

//arrays
let ninjas: string [];

ninjas = ['yoshi', 'sanat'];

ninjas.push('shaun'); // we can do it like, but if array is EMPTY WE CAN'T

// union types
let mixed: (string|number) [] = [];
mixed.push('Hello');
mixed.push(20);

let uid: string|number;
uid = '123';
uid = 123;


// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};
ninjaOne = [] // allowed

let ninjaTwo: {
  name:string,
  age:number,
  beltColour: string
}
