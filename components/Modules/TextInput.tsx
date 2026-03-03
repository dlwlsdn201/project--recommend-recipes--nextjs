import React, { useState } from 'react';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: Function;
  testId?: string;
  id?: string;
  disabled?: boolean;
}

const TextInput = ({ placeholder, value, onChange, testId, id, disabled }: TextInputProps): JSX.Element => {
  return (
    <input
      id={id}
      data-testid={testId}
      type="text"
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="input input-bordered w-full focus:input-primary rounded-xl text-body2 text-base-content"
      value={value}
      disabled={disabled}
    />
  );
};

export default TextInput;
