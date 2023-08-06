import React, { useState } from 'react';
import Name from './Inputs/Name';
import Email from './Inputs/Email';
import PhoneNumber from './Inputs/PhoneNumber';
import Primary from '../Modules/Buttons/Primary';
import Comment from './Inputs/Comment';
import { commonStore } from '@/source/store';
import { handleApiFailed, handleApiSucceed, postApiData } from './Modules/FetchHandler';
import Loading from '../Modules/Loading';

interface IMailInfo {
  service: 'gmail' | 'Naver' | 'Daum';
  name: string;
  email: string;
  content: string;
  phoneNumber: string;
}

const initialState = '';

const Contact = (): React.ReactElement => {
  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [phoneNumber, setPhoneNumber] = useState(initialState);
  const [comment, setComment] = useState(initialState);
  const { setLoading, setIsFetched, setIsError, loading } = commonStore();

  // input 초기화
  const resetInputs = () => {
    setName(initialState);
    setEmail(initialState);
    setPhoneNumber(initialState);
    setComment(initialState);
  };

  const sendMail = async (props: IMailInfo) => {
    const updateSucceed = (): void => {
      handleApiSucceed({
        setLoading,
        setIsFetched,
      });
    };
    const updateFailed = (): void => {
      handleApiFailed({
        setLoading,
        setIsFetched,
        setIsError,
      });
    };
    const bodyData = {
      service: props?.service,
      name: props?.name,
      email: props?.email,
      content: props?.content,
    };

    setLoading(true);
    const response = await postApiData({ endPoint: 'mail', bodyData });

    if (response.isError) updateFailed();
    else updateSucceed();
  };

  const onSubmit = () => {
    sendMail({ service: 'gmail', name, email, content: comment, phoneNumber });
    resetInputs();
  };

  const disabled: boolean = !name.length || !email.length || !phoneNumber.length || !comment.length;

  return (
    <Loading spinning={loading}>
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
              <Primary label="Send" disabled={disabled} onSubmit={() => onSubmit()} testId="submit-button" />
            </div>
          </div>
        </form>
      </div>
    </Loading>
  );
};

export default Contact;
