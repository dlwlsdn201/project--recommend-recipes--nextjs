import React from 'react';

interface Props {
	label?: string;
	onSubmit?: Function;
	testId: string;
}

const Primary = ({ label, onSubmit, testId }: Props): JSX.Element => {
	return (
		<button
			data-testid={testId}
			onClick={() => onSubmit()}
			className='btn btn-xs w-[100%] btn-active btn-primary mobile:btn-sm tablet:btn-md laptop:btn-lg'>
			{label ?? '실행'}
		</button>
	);
};

export default Primary;
