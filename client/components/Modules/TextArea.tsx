import React, { useState } from 'react';

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: Function;
  testId?: string;
  id?: string;
}

const TextArea = ({ placeholder, value, onChange, testId, id }: TextAreaProps): JSX.Element => {
  return (
    <textarea
      id={id}
      data-testid={testId}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="input input-bordered input-primary w-full text-white"
      value={value}
    />
  );
};

export default TextArea;
