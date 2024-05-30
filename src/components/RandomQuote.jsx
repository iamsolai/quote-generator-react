import React from "react";
import "../css/RandomQuote.css";

const RandomQuote = ({ quote, author, handleGenerate, handleTweet }) => {
  return (
    <div className="quote-container">
      <div className="quote">{quote}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {author}</div>
          <div className="icon-wrapper">
            <button className="btn" onClick={handleGenerate}>
              Regenerate
            </button>
            <button className="btn" onClick={handleTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
