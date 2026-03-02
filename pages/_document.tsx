import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='ko' className='h-[100%]' data-theme='recipeTheme'>
			<Head>
				{/* Pretendard 폰트 - Clean & Warm 테마 Typography */}
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'
				/>
			</Head>
			<body className='h-[100%]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
