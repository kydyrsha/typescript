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
//classes
var Invoice = /** @class */ (function () {
    // readonly client:string;
    // private details: string;
    // public amount: number;
    // public user modifier, default one
    // private has no access, only can be used inside CLASS
    // only can read inside/outside the class
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3$(this.amount) for $(this.details)";
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
invOne.client = 'sanat';
invTwo.amount = 333;
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
