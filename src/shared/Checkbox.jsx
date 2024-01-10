import React from "react";

function Checkbox({data}) {
  return (
    <div>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
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
