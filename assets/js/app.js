const pricingInput = document.querySelector('#pricing-input');
const price = document.querySelector('#price');
const pageViews = document.querySelector('.pageviews');
const billingSelector = document.querySelector('#month-year-selector');

pricingInput.addEventListener('input',(e) => getValue(e));

function getValue(e){
    let inputValue = e.target.value
    if(billingSelector.classList.contains('active')){
        inputValue = inputValue * 12;
        price.textContent = `$${inputValue - inputValue/4}.00`;
        pageViews.textContent = `${(inputValue - inputValue/4) * 5}K PAGEVIEWS`;
    }else{
        price.textContent = `$${inputValue}.00`;
        pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;
    }
    
}

billingSelector.addEventListener('click',billingType);

function billingType(){
    if(this.classList.contains('active')){
        this.classList.remove('active');
        inputValue = pricingInput.value;
        price.textContent = `$${inputValue}.00`;
        pageViews.textContent = `${inputValue * 5}K PAGEVIEWS`;
    }else{
        this.classList.add('active');
        inputValue = pricingInput.value * 12;
        price.textContent = `$${inputValue - inputValue/4}.00`;
        pageViews.textContent = `${(inputValue - inputValue/4) * 5}K PAGEVIEWS`;
    }
}