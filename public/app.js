"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('Raphael', 'work on the Mario Website', 250);
var invoiceTwo = new Invoice('Mario', 'work on the Luigi Website', 400);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoiceOne.client = 'yoshi';
invoiceTwo.amount = 500;
console.log(invoices);
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
