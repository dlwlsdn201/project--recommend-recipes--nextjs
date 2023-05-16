// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '@/components/layout';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue
} from 'recoil';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	);
}
