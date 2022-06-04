import React, { useState, useEffect } from "react";

import RandomButton from "./RandomButton";

const QuoteMessage = () => {
  const [message, setMessage] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const url = "https://mandeepsangha-quote-server.glitch.me/quotes/random";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      });
  }, [buttonClicked]);

  return (
    <div className="card">
      <p className="quote">{message.quote}</p>
      <p className="author">{message.author}</p>
      <RandomButton
        setButtonClicked={setButtonClicked}
        buttonClicked={buttonClicked}
      />
    </div>
  );
};

export default QuoteMessage;
