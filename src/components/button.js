import React from 'react';
import "./button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { disabled, path, text } = props;

  return (
    <Link to={`${path}`}>
      <button
        className="gradientbutton"
        disabled={disabled}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
