const quotes = [
    {
        quote: "Keep moving ahead because action creates momentum, which in turn creates unanticipated opportunities.",
        author: "Nick Vujicic",
    },
    {
        quote: "Excitement must lead to immediate action or you will lose the power of momentum. More dreams die because we fail to seize the moment. Do it now!",
        author: "Tony Robbins",
    },
    {
        quote: "For any movement to gain momentum, it must start with a small action.",
        author: "Adam Braun",
    },
    {
        quote: "Forward momentum. That’s my new motto. No regrets. And no going back.",
        author: "Gayle Forman",
    },
    {
        quote: "While a good leader sustains momentum, a great leader increases it.",
        author: "John C. Maxwell",
    },
    {
        quote: "We have got to keep the momentum going in order to achieve all of our objectives.",
        author: "Bill Vaughan",
    },
    {
        quote: "What simple action could you take today to produce a new momentum toward success in your life?",
        author: "Tony Robbins",
    },
    {
        quote: "The most important thing you can do to achieve your goals is to make sure that as soon as you set them you immediately begin to create momentum.",
        author: "Tony Robbins",
    },
    {
        quote: "When you have momentum going, play the momentum.",
        author: "Donald Trump",
    },
    {
        quote: "Never surrender to the momentum of mediocrity.",
        author: "Marlon Brando",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;