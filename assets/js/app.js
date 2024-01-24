const pricingInput = document.querySelector('#pricing-input');
const price = document.querySelector('#price');
const pageViews = document.querySelector('.pageviews');
const billingSelector = document.querySelector('#month-year-selector');
const toggleFill = document.querySelector('.toggle-fill');
const period = document.querySelector('.period');

pricingInput.addEventListener('input',(e) => getValue(e));

function getValue(e){
    let inputValue = e.target.value
    if(billingSelector.classList.contains('active')){
        inputValue = inputValue * 12;
        price.textContent = `$${inputValue - inputValue/4}.00`;
        pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;
    }else{
        price.textContent = `$${inputValue}.00`;
        pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;
    }
    
}

billingSelector.addEventListener('click',billingType);

function billingType(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
        toggleFill.style.background = "#CFD8EF";
        inputValue = pricingInput.value;
        price.textContent = `$${inputValue}.00`;
        pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;
        period.innerHTML = `/ month`;
    }else{
        this.classList.add('active');
        toggleFill.style.background = "#7AEADF";
        inputValue = pricingInput.value * 12;
        price.textContent = `$${inputValue - inputValue/4}.00`;
        pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;
        period.innerHTML = `/ year`;
    }
}