import React from 'react';

interface TextInputProps {
	placeholder: string;
	value: string;
	onChange: Function;
}

const TextInput = ({
	placeholder,
	value,
	onChange
}: TextInputProps): JSX.Element => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
			className='input input-bordered input-primary w-full text-white'
			value={value}
		/>
	);
};

export default TextInput;
