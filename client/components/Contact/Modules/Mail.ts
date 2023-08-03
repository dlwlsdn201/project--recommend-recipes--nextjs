import axios from 'axios';

interface IMailInfo {
  service: 'gmail' | 'Naver' | 'Daum';
  name: string;
  email: string;
  content: string;
  phoneNumber: string;
}

const sendMail = async (props: IMailInfo) => {
  try {
    const bodyData = {
      service: props?.service,
      name: props?.name,
      email: props?.email,
      content: props?.content,
    };
    const response = await axios.post('http://localhost:3000/api/mail', bodyData);
    console.log('success =>', response);
  } catch (error) {
    console.error('메일 전송 실패 =>', error);
  }
};

export default sendMail;
