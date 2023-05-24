import React from 'react';

interface Props {
	label?: string;
}

const Primary = ({ label }: Props): JSX.Element => {
	return (
		<button className='btn btn-xs w-[100%] btn-active btn-primary mobile:btn-sm tablet:btn-md laptop:btn-lg'>
			{label ?? '실행'}
		</button>
	);
};

export default Primary;
