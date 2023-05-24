import React from 'react';

interface TextInputProps {
	placeholder: string;
	onChange: Function;
}

const TextInput = ({ placeholder, onChange }: TextInputProps): JSX.Element => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
			className='input input-bordered input-primary w-full text-white'
		/>
	);
};

export default TextInput;
