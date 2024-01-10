import React from "react";

const Button = ({data, fun}) => {
  return (
    <button onClick={fun} type="submit" className="btn btn-primary btn-block">
      {data}
    </button>
  );
};

export default Button;
