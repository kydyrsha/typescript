// const anchor = document.querySelector('a')!;
//
// // if (anchor) {
// //   console.log(anchor.href);
// // }
//
// console.log(anchor.href);
//
//
// !mark "I KNOW THAT NOT NULL | ITS NOT ERROR"
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form'); // as HTMLBlaBlaElemnt will as IT type
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevents the page refreshing\
    console.log(type.value, tofrom.value, details.value, amount.value);
});
