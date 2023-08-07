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
    const transfer: string = process.env.NEXT_PUBLIC_NODE_MAILER_USERNAME;
    const pass: string = process.env.NEXT_PUBLIC_NODE_MAILER_PASS;

    const sendMail = async () => {
      // 메일 발신자 설정
      const transporter = nodemailer.createTransport({
        // service: req?.service ?? 'Gmail',
        service: 'gmail',
        auth: {
          user: transfer,
          pass,
        },
      });

      const body: IPostBody = req.body;

      const mailOptions = {
        from: body.email,
        to: 'dlwlsdn201@naver.com',
        subject: '[냉장고를 부탁해] 으로부터 메일이 수신되었습니다.',
        // text: body.content,
        html: `${body.content}<br/><br/><br/><i><strong>${body.name}</strong> 님이 보냄</i><br/>${body.phoneNumber}}`,
      };

      try {
        await transporter?.sendMail(mailOptions);
      } catch (error) {
        throw Error();
      }
    };

    try {
      await sendMail();
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error: 'API Error' });
    }
  } else {
    return res.status(400).json({ message: 'Bad request' });
  }
}
