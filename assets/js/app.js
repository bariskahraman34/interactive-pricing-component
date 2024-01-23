const pricingInput = document.querySelector('#pricing-input');
const price = document.querySelector('#price');

pricingInput.addEventListener('input',(e) => getValue(e));

function getValue(e){
    price.textContent = `$${e.target.value}.00`
}