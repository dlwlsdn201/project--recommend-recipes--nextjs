// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

// 로그인 여부 판단 API
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({ name: req.cookies.a_name });
};
