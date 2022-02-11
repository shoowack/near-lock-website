import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.scss';
import { AppProps } from 'next/app';
import { StateStore } from '../context';
import Layout from '../Layouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateStore>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </StateStore>
  );
}
