import React from "react";

function InputFeilds({ data, onChange, name, value, disabled = false }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={data}
      onChange={onChange}
      name={name}
      value={value}
      autoFocus
      disabled={disabled}
    />
  );
}

export default InputFeilds;
