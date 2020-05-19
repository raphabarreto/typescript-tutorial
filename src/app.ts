// classes
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;


  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {

  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice('Raphael', 'work on the Mario Website', 250);
const invoiceTwo = new Invoice('Mario', 'work on the Luigi Website', 400);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(invoice => {
  console.log(invoice.client, invoice.amount, invoice.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})
