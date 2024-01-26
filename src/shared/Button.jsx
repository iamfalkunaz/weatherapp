import React from "react";

const Button = ({ data, onClick, disabled, signUpbtn}) => {
  return (
    <button onClick={onClick}  type="submit" className={`btn  btn-block btn-primary ${signUpbtn}`} disabled={disabled}>
      {data}
    </button>
  );
};

export default Button;
