"use strict";
exports.__esModule = true;
var me = {
    name: 'Sanat',
    age: 22,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
    }
};
console.log(me);
var invoice_js_1 = require("./classes/invoice.js");
var invOne = new invoice_js_1.Invoice("mario", "work on the mario website", 250);
var invTwo = new invoice_js_1.Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// invOne.client = 'sanat';
// invTwo.amount = 333;
console.log(invoices);
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
