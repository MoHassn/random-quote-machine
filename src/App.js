import React from 'react';
import QuoteBox from './QoteBox'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      quotes: [],
      currentQuoteIndex: 0
    }
  }

  newQuote = () => {
    let newQuoteIndex = this.randomIndex(this.state.quotes);
    while (newQuoteIndex === this.state.currentQuoteIndex) {
      newQuoteIndex = this.randomIndex(this.state.quotes);
    }

    this.setState({
      currentQuoteIndex: newQuoteIndex
    });
  }

  randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  }
  componentDidMount() {
    // Fetching the array of quotes
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
      method:'GET',
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({quotes: data.quotes});
      // to change the value currenQuoteIndex of 0 to another value
      this.newQuote();
    })
    .catch((err)=> {
      console.log("Error occured ", err);
    });
  }


  render() {
    return (
      <div className='container'>
        <QuoteBox
          quote={this.state.quotes[this.state.currentQuoteIndex]}
          onNewQuote={this.newQuote}
        />
      </div>
    );
  }
}

export default App;
