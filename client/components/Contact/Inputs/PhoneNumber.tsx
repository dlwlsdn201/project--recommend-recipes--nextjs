import TextInput from '@/components/Modules/TextInput';
import React, {ReactNode} from 'react';

interface IProps {
  value: string | null;
  setPhoneNumber: Function;
}

const PhoneNumber = ({value, setPhoneNumber}:IProps):React.ReactElement => {  
	return (
		<div id='grid-row'>
			<label htmlFor='phoneNumber'>연락처</label>
			{/* <input id='phoneNumber' type='text' /> */}
      <TextInput id="phoneNumber" testId='input--phone-number' placeholder='010-0000-0000 or 052-000-0000' value={value} onChange={setPhoneNumber}/>
		</div>
	);
};

export default PhoneNumber;
