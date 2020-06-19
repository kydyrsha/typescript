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
