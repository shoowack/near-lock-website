import React from 'react';
import {
  TopSection,
  ProblemsSection,
  DownloadsSection,
  FamilySection,
  ToolsSection,
  FeaturesSection,
  CompatibilitySection,
  TestimonialsSection,
} from '../components/HomePage';
import NewsletterSection from '../components/Newsletter/NewsletterSection';
import { withState } from '../context';
import topBackground from '../media/topBackground.jpg';

const HomePage = withState(
  ({
    state: {
      videoUrl,
      downloadLinks: { appStoreLinkUrl },
      homePage: {
        visibleSections: {
          topSection,
          problemsSection,
          downloadsSection,
          familySection,
          toolsSection,
          featuresSection,
          compatibilitySection,
          testimonialsSection,
          newsletterSection,
        },
        downloadsSection: { showIphoneDownloadHomepageLink, showWatchDownloadHomepageLink },
      },
    },
  }) => (
    <>
      <div
        style={{
          background: `linear-gradient(134deg, #3291e0 25%, rgba(53, 214, 120, 0) 100%), url(${topBackground}) no-repeat center`,
          backgroundSize: 'cover',
          color: '#fff',
        }}
      >
        {topSection && <TopSection videoUrl={videoUrl} />}
        {problemsSection && <ProblemsSection />}
        {downloadsSection && (
          <DownloadsSection
            showIphoneDownloadHomepageLink={showIphoneDownloadHomepageLink}
            showWatchDownloadHomepageLink={showWatchDownloadHomepageLink}
            appStoreLinkUrl={appStoreLinkUrl}
          />
        )}
      </div>
      {familySection && <FamilySection />}
      {toolsSection && <ToolsSection />}
      {featuresSection && <FeaturesSection />}
      {compatibilitySection && <CompatibilitySection />}
      {testimonialsSection && <TestimonialsSection />}
      {newsletterSection && <NewsletterSection />}
    </>
  ),
);

export default HomePage;
