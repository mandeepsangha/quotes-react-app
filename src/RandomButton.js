import React from "react";

const RandomButton = ({ setButtonClicked, buttonClicked }) => {
  return (
    <button onClick={() => setButtonClicked(!buttonClicked)}>
      Random Quote
    </button>
  );
};

export default RandomButton;
