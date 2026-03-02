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
      className="input min-h-20 input-bordered w-full rounded-xl text-body2 text-base-content focus:input-primary placeholder:text-base-content/50"
      value={value}
    />
  );
};

export default TextArea;
