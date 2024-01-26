import React from "react";

function Checkbox({data, onClick,checked}) {
  return (
    <div>
      <div className="custom-control custom-checkbox">
        <input
          checked={checked}
          type="checkbox"
          className="custom-control-input"
          onClick={onClick}
          id="remember-me"
        />
        <label className="custom-control-label" for="remember-me">
          {data}
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
