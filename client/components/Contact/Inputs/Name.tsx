import TextInput from '@/components/Modules/TextInput';
import React, {ReactNode} from 'react';

interface IProps {
  value: string | null;
  setName: Function;
}

const Name = ({value,setName}:IProps):React.ReactElement => {
	return (
		<div id='grid-row'>
			<label htmlFor='name'>이름</label>
			{/* <input id='name' type='text' /> */}
      <TextInput id="name" testId='input--name' placeholder='성함을 입력해주세요.' value={value} onChange={setName}/>
		</div>
	);
};

export default Name;
