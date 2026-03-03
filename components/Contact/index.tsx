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
      phoneNumber: props?.phoneNumber,
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
      <div className="root-container flex-1 basis-0 max-w-2xl">
        <div className="card bg-base-100 shadow-xl rounded-2xl p-6 md:p-8">
          <div id="title-wrapper">
            <span className="text-center text-h2 tablet:text-h1 text-base-content">Contact Me</span>
          </div>
          <form className="mt-8">
            <div id="form-wrapper" className="grid grid-cols-1 gap-8">
              <Name value={name} setName={setName} />
              <Email value={email} setEmail={setEmail} />
              <PhoneNumber value={phoneNumber} setPhoneNumber={setPhoneNumber} />
              <Comment value={comment} setComment={setComment} />
              <div id="grid-row">
                <Primary label="Send" disabled={disabled} onSubmit={() => onSubmit()} testId="submit-button" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Loading>
  );
};

export default Contact;
