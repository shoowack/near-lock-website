import { lazy } from 'react';

const UnderConstructionPage = lazy(() => import('./UnderConstructionPage/UnderConstruction.page'));
const HomePage = lazy(() => import('./Home.page'));
const FeaturesPage = lazy(() => import('./Features.page'));
const FaqPage = lazy(() => import('./Faq.page'));
const VersionsPage = lazy(() => import('./Versions.page'));
const PressPage = lazy(() => import('./Press.page'));
const TermsOfUsePage = lazy(() => import('./TermsOfUse.page'));
const ImpressumPage = lazy(() => import('./Impressum.page'));
const ProblemsPage = lazy(() => import('./Problems.page'));
const ErrorPage = lazy(() => import('./Error.page'));

export {
  UnderConstructionPage,
  HomePage,
  FaqPage,
  FeaturesPage,
  VersionsPage,
  PressPage,
  TermsOfUsePage,
  ImpressumPage,
  ErrorPage,
  ProblemsPage,
};
