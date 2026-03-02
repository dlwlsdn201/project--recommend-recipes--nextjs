// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
};

// 로그인 여부 판단 API
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	// res.status(200).json({ name: null });
	if (req.method === 'POST') {
		console.log({ method: req.method });
		res.setHeader('Set-Cookie', 'a_name=JinWoo;Max-Age=3600;HttpOnly,Secure'); // 쿠키명
		res.statusCode = 200;
		res.json({ message: 'Login ok' });
	}
};
