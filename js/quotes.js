const qoutes = [{
   qoute: "The journey of a thousand miles begins with one step.",
   author: "Lao Tzu",
},{
   qoute: "That which does not kill us makes us stronger.",
   author: "Friedrich Nietzsche",
},{
   qoute: "You only live once, but if you do it right, once is enough.",
   author: "Mae West",
},{
   qoute: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
   author: "Mark Twain",
},{
   qoute: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
   author: "Eleanor Roosevelt",
},{
   qoute: "The opposite of love is not hate; it’s indifference.",
   author: "Elie Wiesel",
},{
   qoute: " In the long run, the sharpest weapon of all is a kind and gentle spirit.",
   author: "Anne Frank",
},{
   qoute: "The only impossible journey is the one you never begin.",
   author: "Tony Robbins",
},{
   qoute: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
   author: "Audre Lorde",
},{
   qoute: "Always remember that you are absolutely unique. Just like everyone else.",
   author: "Margaret Meade",
}]

const qoute = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");
const todaysQuotes = qoutes[Math.floor(Math.random()*qoutes.length)];

qoute.innerText = todaysQuotes.qoute;
author.innerText = todaysQuotes.author;