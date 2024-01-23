const pricingInput = document.querySelector('#pricing-input');
const price = document.querySelector('#price');
const pageViews = document.querySelector('.pageviews');
const billingSelector = document.querySelector('#month-year-selector');

pricingInput.addEventListener('input',(e) => getValue(e));
function getValue(e){
    let inputValue = e.target.value
    price.textContent = `$${inputValue}.00`;

    pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;

}