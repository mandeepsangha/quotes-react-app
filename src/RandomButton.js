import React from "react";

const RandomButton = ({ setButtonClicked, buttonClicked }) => {
  return (
    <button
      className="button-64"
      onClick={() => setButtonClicked(!buttonClicked)}
    >
      <span>Random Quote</span>
    </button>
  );
};

export default RandomButton;
