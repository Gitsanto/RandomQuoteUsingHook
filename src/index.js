import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const quotes = [
  {
    quote: "Practice practice practice",
    author: "me"
  },
  {
    quote: "Your attitude determines your direction.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Do what you have to do until you can do what you want to do.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Being alone has a power that very few people can handle.",
    author: "Steven Aitchison"
  },
  {
    quote: "My goal is to build a life I don't need a vacation from.",
    author: "Rob Hill Sr"
  },
  { quote: "Always do what you are afraid to do.", author: "Unknown" },
  {
    quote: "Be somebody who makes everybody feel like a somebody.",
    author: "Unknown"
  },
  {
    quote: "Make it happen. Shock everyone.",
    author: "Unknown"
  },
  {
    quote: "Three months from now, you'll thank yourself.",
    author: "Unknown"
  },
  {
    quote: "Travel far enough to meet yourself.",
    author: "Unknown"
  },
  {
    quote: "Progress, not perfection.",
    author: "Unknown"
  },
  {
    quote: "Just keep swimming .",
    author: "Dory, Find Nemo"
  },
  {
    quote: "Remember why you started.",
    author: "Unknown"
  }
];

const colors = [
  "#D99AAB",
  "#1FA675",
  "#0D688C",
  "#0889A6",
  "#BF9411",
  "#D99AAB",
  "#BF9411",
  "#0D688C",
  "#1FA675",
  "#0889A6",
  "#F27C38",
  "#F27C38"
];

function MyReactElement() {
  const [quote, setQuote] = useState(
    "Your attitude determines your direction."
  );
  const [author, setAuthor] = useState("Ralph Waldo Emerson");
  const [color, setColor] = useState("#0889A6");

  const handleClick = e => {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    setQuote(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
    setColor(colors[randomNumber]);
  };

  return (
    <div
      id="main"
      style={{
        backgroundColor: color,
        transition: "background-color 1s"
      }}
    >
      <div id="quote-box">
        <div id="text-box">
          <i
            className="fa fa-quote-left"
            id="quote-left"
            style={{
              color: color,
              transition: "background-color 1s"
            }}
          >
            {" "}
          </i>
          <p
            id="text"
            style={{
              color: color,
              transition: "background-color 1s"
            }}
          >
            {quote}
          </p>
        </div>
        <p
          id="author"
          style={{
            color: color,
            transition: "background-color 1s"
          }}
        >
          -{author}
        </p>
        <div id="buttons">
          <div>
            <button
              id="button"
              onClick={handleClick}
              style={{
                backgroundColor: color,
                transition: "background-color 1s",
                color: "white"
              }}
            >
              Next quote
            </button>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<MyReactElement />, document.getElementById("root"));
