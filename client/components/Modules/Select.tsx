import React from 'react';

export type optionType = {
	label: string;
	value: string | number;
};

interface SelectProps {
	options: Array<optionType>;
	isExistAll?: Boolean;
	onChange: Function;
}

const Select = ({
	options,
	isExistAll,
	onChange
}: SelectProps): JSX.Element => {
	return (
		<select
			className='select w-full max-w-xs text-black'
			onChange={(e) => onChange(e.currentTarget.value)}>
			{/* <option disabled selected>
				Pick your favorite Simpson
			</option> */}
			{isExistAll && <option selected value={0} label='전체' />}
			{options &&
				options?.map((item: optionType) => (
					<option key={item?.value} value={item?.value} label={item?.label} />
				))}
		</select>
	);
};

export default Select;
