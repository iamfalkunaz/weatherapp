import React from "react";

function InputFeilds({data}) {
  return (
    <input
      type="text"
      class="form-control"
      placeholder={data}
      required
      autofocus
    />
  );
}

export default InputFeilds;
