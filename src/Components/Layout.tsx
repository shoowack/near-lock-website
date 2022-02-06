import Head from 'next/head';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Near Lock - Lock and unlock your Mac with your iPhone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  );
}
