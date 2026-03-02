import React, { useState } from 'react';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: Function;
  testId?: string;
  id?: string;
}

const TextInput = ({ placeholder, value, onChange, testId, id }: TextInputProps): JSX.Element => {
  return (
    <input
      id={id}
      data-testid={testId}
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="input input-bordered input-primary w-full text-white"
      value={value}
    />
  );
};

export default TextInput;
