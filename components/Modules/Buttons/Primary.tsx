import React, { CSSProperties } from 'react';

interface Props {
  label?: string;
  onSubmit?: Function;
  testId: string;
  disabled: boolean;
  style?: CSSProperties;
}

const Primary = ({ label, onSubmit, testId, disabled, style }: Props): JSX.Element => {
  return (
    <button
      style={{ ...style }}
      data-testid={testId}
      onClick={() => onSubmit()}
      disabled={disabled}
      type="button"
      className="btn btn-xs w-[100%] btn-active btn-primary mobile:btn-sm tablet:btn-md laptop:btn-lg"
    >
      {label ?? '실행'}
    </button>
  );
};

export default Primary;
