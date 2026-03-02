import React from 'react';

export type optionType = {
  label: string;
  value: string | number;
};

interface SelectProps {
  options: Array<optionType>;
  isExistAll?: Boolean;
  onChange: Function;
  value: number;
  testId: string;
}

const Select = ({ options, isExistAll, onChange, value, testId }: SelectProps): JSX.Element => {
  return (
    <select
      data-testid={testId}
      className="select w-full min-w-min"
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value ?? 0}
    >
      {/* <option disabled selected>
				Pick your favorite Simpson
			</option> */}
      {isExistAll && <option value={0} label="전체" />}
      {options &&
        options?.map((item: optionType) => <option key={item?.value} value={item?.value} label={item?.label} />)}
    </select>
  );
};

export default Select;
