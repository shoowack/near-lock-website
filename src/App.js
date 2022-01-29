import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import { useTranslation } from 'react-i18next';
// import "bootstrap/dist/js/bootstrap.js"; // uncomment when needed later
// import "jquery"; // uncomment when needed later
// import "popper.js"; // uncomment when needed later

import * as pages from './Pages';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading';

const App = () => {
  useTranslation();
  // eslint-disable-next-line global-require
  const settings = require('./Data/settings.json');

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Near Lock - Lock and unlock your Mac with your iPhone</title>
        <link rel="canonical" href={`${window.location.protocol}//${window.location.hostname}`} />
      </Helmet>
      {settings.underConstruction ? (
        <pages.UnderConstructionPage />
      ) : (
        <BrowserRouter>
          <Navigation />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route exact path="/" element={<pages.HomePage />} />
              <Route path="/features" element={<pages.FeaturesPage />} />
              <Route path="/faq" element={<pages.FaqPage />} />
              <Route path="/whats-new" element={<pages.VersionsPage />} />
              <Route path="/press" element={<pages.PressPage />} />
              <Route path="/terms" element={<pages.TermsOfUsePage />} />
              <Route path="/impressum" element={<pages.ImpressumPage />} />
              <Route path="/problems" element={<pages.ProblemsPage />} />
              <Route path="*" element={<pages.ErrorPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
