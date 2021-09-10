import React from "react";

export const Quote = ({ quote, author }) => {
  return (
    <div className="quoteHolder">
      <p className="quote">{quote}</p>
      <p className="author">..{author}</p>
    </div>
  );
};
