// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '@/components/layout';

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
