import React, { ReactNode } from 'react';
import Name from './Inputs/Name';
import Email from './Inputs/Email';
import PhoneNumber from './Inputs/PhoneNumber';
import Primary from '../Modules/Buttons/Primary';

const Contact = (): React.ReactElement => {
	return (
		<div
			id='inner-container'
			className='border-2 border-yellow-300 grid gap-y-8 py-6 px-32'>
			<div id='title-wrapper' className='w-[100%] grid-cols-1'>
				<h1 className='col-span-1 text-center text-2xl'>Contact Me</h1>
			</div>
			<form onSubmit={() => console.log('form 완성')}>
				<div id='form-wrapper' className='grid grid-cols-1 gap-8'>
					<Name />
					<Email />
					<PhoneNumber />
					<div id='grid-row' className='w-[37%]'>
						<Primary
							label='Send'
							disabled={false}
							onSubmit={() => console.log('전송')}
							testId='submit-button'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
