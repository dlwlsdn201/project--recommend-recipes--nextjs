import React, { useState } from 'react';
import Name from './Inputs/Name';
import Email from './Inputs/Email';
import PhoneNumber from './Inputs/PhoneNumber';
import Primary from '../Modules/Buttons/Primary';
import Comment from './Inputs/Comment';
import sendMail from './Modules/Mail';

const initialState = '';

const Contact = (): React.ReactElement => {
  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [phoneNumber, setPhoneNumber] = useState(initialState);
  const [comment, setComment] = useState(initialState);

  // input 초기화
  const resetInputs = () => {
    setName(initialState);
    setEmail(initialState);
    setPhoneNumber(initialState);
    setComment(initialState);
  };

  const disabled: boolean = !name.length || !email.length || !phoneNumber.length || !comment.length;

  return (
    <div id="inner-container" className="border-2 border-yellow-300 grid gap-y-8 py-6 px-32">
      <div id="title-wrapper" className="w-[100%] grid-cols-1">
        <h1 className="col-span-1 text-center text-2xl">Contact Me</h1>
      </div>
      <form>
        <div id="form-wrapper" className="grid grid-cols-1 gap-8">
          <Name value={name} setName={setName} />
          <Email value={email} setEmail={setEmail} />
          <PhoneNumber value={phoneNumber} setPhoneNumber={setPhoneNumber} />
          <Comment value={comment} setComment={setComment} />
          <div id="grid-row" className="w-[50%]">
            <Primary
              label="Send"
              disabled={disabled}
              onSubmit={() => {
                sendMail({ service: 'gmail', name, email, content: comment, phoneNumber });
                resetInputs();
              }}
              testId="submit-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
