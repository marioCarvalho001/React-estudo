import React from 'react';

const input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name="" id={id} {...props} />
    </div>
  );
};

export default input;
