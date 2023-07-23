import TextInput from '@/components/Modules/TextInput';
import React, {ReactNode} from 'react';

interface IProps {
  value: string | null;
  setEmail: Function;
}

const Email= ({value,setEmail}:IProps):React.ReactElement => {
	return (
		<div id='grid-row'>
			<label htmlFor='email'>이메일</label>
      {/* <input id='email' type='text' /> */}
      <TextInput id="email" testId='input--email' placeholder='***@gmail.com' value={value} onChange={setEmail} />
		</div>
	);
};

export default Email;
