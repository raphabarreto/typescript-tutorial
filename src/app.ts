import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne.age);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'raphael' }
}

const docThree: Resource<string[]> = {
  uid: 2,
  resourceName: 'shopping list',
  data: ['bread', 'milk', 'toilet roll']
}

console.log(docTwo, docThree);
