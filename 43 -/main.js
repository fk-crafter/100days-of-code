const nextBtn = document.getElementById('nextQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

const quotes = [
    {
        quote: 'The joy of looking and understanding is the most beautiful gift.',
        author: 'Albert Einstein'

    },
    {
        quote: 'A man without flaws is a mountain without crevices. He doesn\'t interest me.',
        author: 'René Char'
    },
    {
        quote: 'There is little ideal in this world, but it is with that little that the world lives.',
        author: 'Ernest Renan'
    },
    {
        quote: 'A friend loves at all times, and in adversity he becomes a brother.',
        author: 'Salomon'
    },
    {
        quote: 'Success annoys. Don\'t talk about it.',
        author: 'Félix Leclerc'
    },
    {
        quote: 'The only truth is the one we seek.',
        author: 'Feltin Stani'
    },
    {
        quote: 'I never lose. Either I win, or I learn.',
        author: 'Nelson Mandela'
    }
];

let quoteLength = quotes.length;
quote.innerHTML = quotes[0].quote;
author.innerHTML = quotes[0].author;

nextBtn.addEventListener('click', function () {
    let randomQuote = Math.round(Math.random() * quoteLength);
    if (randomQuote == 7) {
        randomQuote = 1;
    }
    
    let todayQuote = quotes[randomQuote].quote;
    let quoteAuthor = quotes[randomQuote].author;

    let quoteHTML = todayQuote;
    quote.innerHTML = quoteHTML;
    author.innerHTML = quoteAuthor;
});
