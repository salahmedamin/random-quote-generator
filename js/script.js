/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source:"Nelson Mandela",
    citation: "Facebook",
    year: 2010,
    tags:["GREATNESS","INSPIRING"]
  },
  {
    quote:"The way to get started is to quit talking and begin doing.",
    source:"Walt Disney",
    citation: "Twitter",
    year: 1999,
    tags:["HARDWORK"]
  },
  {
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source:"Steve Jobs",
    citation: "Instagram",
    year: 1800,
    tags:["INSPIRING"]
  },
  {
    quote:"Life is what happens when you're busy making other plans.",
    source:"John Lennon",
    citation:"Telegram",
    year:2003,
    tags:["DESTINY"]
  },
  {
    quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    source: "James Cameron",
    citation: "Facebook",
    year: 2200,
    tags:["THINK"]
  }
]


/***
 * `getRandomQuote` return a quote from the quotes object
***/
const getRandomQuote = ()=>{
  let index = Math.floor((Math.random())*3)
  return quotes[index]
}


/***
 * `printQuote` prints a quote to the screen from quote
***/
const printQuote = ()=>{
  let rand = getRandomQuote()
  document.querySelector("p.quote").innerHTML = rand.quote
  document.querySelector(".tags").innerHTML = rand.tags.map(v=>v="#"+v).join(" ")
  let src = `${rand.source}<span class="citation">${rand.citation}</span><span class="year">${rand.year}</span>`
  document.querySelector("p.source").innerHTML = src
}


/*
* We'll be getting random color every amount of time, in addition to printing a quote
*/
document.getElementById('load-quote').addEventListener("click", ()=>{
    printQuote()
    let rand = ()=>Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`
  }, false);
setInterval(()=>{
  printQuote()
  let rand = ()=>Math.floor(Math.random()*255)
  document.body.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`
},2000)