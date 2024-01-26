import React from "react";

function InputFeilds({data, onChange, name, value}) {
  return (
    <input
      type="text"
      class="form-control"
      placeholder={data}
      onChange={onChange}
      name={name}
      value={value}
      autofocus
    />
  );
}

export default InputFeilds;
