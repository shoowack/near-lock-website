import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.scss';

import { StateStore } from '../context';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';

const app = ({ Component, pageProps }) => (
  <StateStore>
    <Navigation />

    <Component {...pageProps} />
    <Footer />
  </StateStore>
);

export default app;
