/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
/*** EXTRA WHAT I WANT TO DO IT!!!
.random gradadien on every quote.
.User can create his own quote, with will show up: Quote, Name, Citation(website),Date, all will be adder to the Array!
**/


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

  let quotes = [ 
  {
    quote:'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    citation: 'Twitter',
    year: 2001
},
{
  quote:'Programs must be written for people to read, and only incidentally for machines to execute.',
  source: 'Harold Abelson',
  citation:'Structure and Interpretation of Computer Programs',
  year: 1984
},
{
  quote:'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  source: 'Winston S. Churchill',
  citation:'Inspiration Magazine',
  year:''
},
{ 
  quote:"If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.",
  source: 'W.C. Fields', 
  citation:'',
  year:''
},
{
  quote:'Try not to become a man of success. Rather become a man of value.',
  source: 'Albert Einstein', 
  citation:'University Newspaper',
  year:1972},
{
  quote:'Success is getting what you want, happiness is wanting what you get',
  source: 'W. P. Kinsella',
  citation:'',
  year:1976
}
  
  ];

//console.log(quotes);


/***
  The `getRandomQuote` function is create
  to search for a nem/random Quote insite of the variable [quote] array.
 */ 
 function getRandomQuote(quotes)
{
  return quotes[Math.floor(Math.random()*quotes.length)];
};


//console.log(getRandomQuote(quotes));
  


/*  This function changes the background color of the page.
every times that a page reloads or a new quote is generated.
*/

let randBackground = (function() {
  let rand = function(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}
    return function(){
    return 'rgb('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+')';
};

})();


function changeBackgroundColor() {
  let backgroundColor = getRandomQuote(randBackground);
  document.body.style.backgroundColor = backgroundColor;

  //This will set the background color of the 'click' button to the new background color
 document.getElementById("loadQuote").style.backgroundColor = backgroundColor;
}




function getRandomQuote() {
    let random_nub = Math.floor(Math.random() * (quotes.length));
    return quotes[random_nub];
}

/***
   - Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable. 
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  changeBackgroundColor();

  let callQuote = getRandomQuote(quotes);
  let x = callQuote;
  let quote = "<p class='quote'>"+ x.quote +"</p>";
  quote +=  "<p class='source'>"+ x.source +"</p>";
  if(x.citation !== ''){
    quote += "<span class='source'>"+ x.citation +"</span>";
  }
  if(x.year !== '')  {
    quote += "<span class='source'>"+ x.year +"</sapn>";
  }

  document.getElementById('quote-box').innerHTML = quote;

  }






/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
document.getElementById('loadQuote').addEventListener("click", function () {

    printQuote();
   
  }, false);
printQuote();

// Remember to delete the comments that came with this file, and replace them with your own code comments.