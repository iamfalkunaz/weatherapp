import React from 'react';

function Textarea({ label, name, value, onChange, disabled = false }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        disabled={disabled}
      />
    </div>
  );
}

export default Textarea;
