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
}

const Select = ({
	options,
	isExistAll,
	onChange,
	value
}: SelectProps): JSX.Element => {
	return (
		<select
			className='select w-full max-w-xs'
			onChange={(e) => onChange(e.currentTarget.value)}
			defaultValue={0}
			value={value}>
			{/* <option disabled selected>
				Pick your favorite Simpson
			</option> */}
			{isExistAll && <option value={0} label='전체' />}
			{options &&
				options?.map((item: optionType) => (
					<option key={item?.value} value={item?.value} label={item?.label} />
				))}
		</select>
	);
};

export default Select;
