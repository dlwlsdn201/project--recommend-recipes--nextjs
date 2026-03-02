import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();
interface IPostBody {
  service: 'Gmail' | 'Naver' | 'Daum';
  name: string;
  email: string;
  pass: string;
  content: string;
  phoneNumber: string;
  method: 'POST';
}

export default async function handler(req, res) {
  // 메일 전송 함수

  if (req.method === 'POST') {
    const transfer: string = process.env.NODE_MAILER_USERNAME;
    const pass: string = process.env.NODE_MAILER_PASS;
    console.log({ transfer, pass });
    const sendMail = async () => {
      // 메일 발신자 설정
      const transporter = nodemailer.createTransport({
        // service: req?.service ?? 'Gmail',
        // service: 'naver',
        host: 'smtp.naver.com',
        /** @see https://nodemailer.com/smtp/well-known-services#list-of-built-in-services */
        port: 587,
        secure: false,
        auth: {
          user: transfer,
          pass,
        },
      });

      const body: IPostBody = req.body;

      const mailOptions = {
        from: transfer, // 정식 인증된 수신자의 Naver 메일 주소
        to: transfer, // 수신자의 Naver 메일 주소
        replyTo: body.email, // 송신자의 메일 주소
        subject: '[냉장고를 부탁해] 으로부터 메일이 수신되었습니다.',
        // text: body.content,
        html: `${body.content}<br/><br/><br/><i><strong>${body.name}</strong> 님이 보냄</i><br/>${body.phoneNumber}`,
      };

      await transporter?.sendMail(mailOptions);
    };

    try {
      await sendMail();
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('[mail API]', error);
      res.status(500).json({ error: 'API Error' });
    }
  } else {
    return res.status(400).json({ message: 'Bad request' });
  }
}
