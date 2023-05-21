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
			onChange={(e) => onChange(e.target)}
			className='input input-bordered input-primary w-full max-w-xs'
		/>
	);
};

export default TextInput;
