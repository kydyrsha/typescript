//interface if we have variable like isPerson than it MUST have these properties
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Sanat',
  age: 22,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): any {
    console.log('I spent', amount);
  }
};

console.log(me);
import { Invoice } from './classes/invoice.js';


const invOne = new Invoice (`mario`, `work on the mario website`, 250);
const invTwo = new Invoice (`luigi`, `work on the luigi website`, 300);

console.log(invOne,invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
})

// invOne.client = 'sanat';
// invTwo.amount = 333;

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
