const pricingInput = document.querySelector('#pricing-input');

pricingInput.addEventListener('input',(e) => getValue(e));

function getValue(e){
    console.log(e.target.value)
}