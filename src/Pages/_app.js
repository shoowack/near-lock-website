import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.scss';
import Head from 'next/head';

import { StateStore } from '../context';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';

const app = ({ Component, pageProps }) => (
  <StateStore>
    <Head>
      <title>Near Lock - Lock and unlock your Mac with your iPhone</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </StateStore>
);

export default app;
