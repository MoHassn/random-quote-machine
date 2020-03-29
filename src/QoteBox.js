import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function QuoteBox (props) {

  let quoteText, quoteAuthor;

  // to make sure that there are quote and quote is not undefined
  if (props.quote) {
    quoteText = props.quote.quote;
    quoteAuthor = props.quote.author;
  } else { // and if there are no quote assing them to empty string
    quoteText='';
    quoteAuthor='';
  }
  return (
    <div className='quote-box' id='quote-box'>
      <div className='text' id='text'>
        <h1>{quoteText}</h1>
      </div>
      <div className='author' id='author'>
        <h2>-{quoteAuthor}</h2>
      </div>
      <div className='buttons'>
        <a
          className='tweet-quote'
          id='tweet-quote'
          target='_blank'
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=MuhmdHassn,freecodecamp&text= ${encodeURIComponent('"' + quoteText + '" ' + quoteAuthor)}`}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className='twitter-icon'
              title='tweet quote'
             />
        </a>
        <button
          onClick={props.onNewQuote}
          className='new-quote'
          id='new-quote'
          >New quote</button>

      </div>
    </div>
  );
}

export default QuoteBox;