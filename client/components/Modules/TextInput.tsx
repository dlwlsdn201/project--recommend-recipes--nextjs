import React, { useState } from 'react';

interface TextInputProps {
	placeholder: string;
	value: string;
	onChange: Function;
	testId: string;
}

const TextInput = ({
	placeholder,
	value,
	onChange,
	testId
}: TextInputProps): JSX.Element => {
	const [currentValue, setCurrentValue] = useState(value);
	return (
		<input
			data-testid={testId}
			type='text'
			placeholder={placeholder}
			onChange={(e) => {
				onChange(e.target.value);
				setCurrentValue(e.target.value);
			}}
			className='input input-bordered input-primary w-full text-white'
			defaultValue={currentValue}
		/>
	);
};

export default TextInput;
