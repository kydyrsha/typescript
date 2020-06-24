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

class Invoice {
  client:string;
  details: string;
  amount: number;

  constructor(c:string, d:string, a:number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes £$(this.amount) for $(this.details)`;
  }
}

const invOne = new Invoice (`mario`, `work on the mario website`, 250);
const invTwo = new Invoice (`luigi`, `work on the luigi website`, 300);

console.log(invOne,invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'sanat';
invTwo.amount = 333;

console.log(invoices)
const form = document.querySelector('.new-item-form') as HTMLFormElement; // as HTMLBlaBlaElemnt will as IT type
// console.log(form.children);

// inputs

const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#toform')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // prevents the page refreshing\

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value
  );
})
