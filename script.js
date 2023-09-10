const quote = document.querySelector('.quotes-area')

const quoteBtn = document.querySelector('.btn');

function randonQuote() {
    // console.log('Clicked')
fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(result => {
    // console.log(result);
    quote.innerHTML = 
    `
    <div class="quotes-area">
            <h3 class="quote">Quote of the day: <span>" ${result.quote} " <span></h3>
        </div>
    `
});
}

quoteBtn.addEventListener('click', randonQuote);