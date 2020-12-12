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
    year: 2010
  },
  {
    quote:"The way to get started is to quit talking and begin doing.",
    source:"Walt Disney",
    citation: "Twitter",
    year: 1999
  },
  {
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source:"Steve Jobs",
    citation: "Instagram",
    year: 1800
  },
  {
    quote:"Life is what happens when you're busy making other plans.",
    source:"John Lennon",
    citation:"Telegram",
    year:2003
  },
  {
    quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    source: "James Cameron",
    citation: "Facebook",
    year: 2200
  }
]


/***
 * `getRandomQuote` function
***/
const getRandomQuote = ()=>{
  let index = Math.floor((Math.random())*3)
  return quotes[index]
}


/***
 * `printQuote` function
***/
const printQuote = ()=>{
  let rand = getRandomQuote()
  document.querySelector("p.quote").innerHTML = rand.quote
  let src = `${rand.source}<span class="citation">${rand.citation}</span><span class="year">${rand.year}</span>`
  document.querySelector("p.source").innerHTML = src
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);