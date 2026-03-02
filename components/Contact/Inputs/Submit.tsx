import React from 'react';

interface IProps {
	onSubmit: Function;
}

const Submit = (props) => {
	return (
		<button type='button' onClick={props?.onSubmit}>
			Send
		</button>
	);
};

export default Submit;
