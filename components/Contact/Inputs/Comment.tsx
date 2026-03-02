import TextArea from '@/components/Modules/TextArea';
import React from 'react';

interface IProps {
  value: string | null;
  setComment: Function;
}

const Comment = ({ value, setComment }: IProps): React.ReactElement => {
  return (
    <div id="grid-row">
      <label htmlFor="comment">내용</label>
      {/* <input id='comment' type='text' /> */}
      <TextArea id="comment" testId="input--comment" placeholder="" value={value} onChange={setComment} />
    </div>
  );
};

export default Comment;
