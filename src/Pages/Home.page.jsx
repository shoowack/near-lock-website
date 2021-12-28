import React from "react";
import {
  TopSection,
  ProblemsSection,
  DownloadsSection,
  FamilySection,
  ToolsSection,
  FeaturesSection,
  CompatibilitySection,
  TestimonialsSection
} from "./../Components/HomePage";
import NewsletterSection from "./../Components/Newsletter/NewsletterSection";
import { withState } from "./../context";

const HomePage = withState(
  ({
    state: {
      videoUrl,
      downloadLinks: { appStoreLinkUrl },
      homePage: {
        visibileSections: {
          topSection,
          problemsSection,
          downloadsSection,
          familySection,
          toolsSection,
          featuresSection,
          compatibilitySection,
          testimonialsSection,
          newsletterSection
        },
        downloadsSection: {
          showIphoneDownloadHomepageLink,
          showWatchDownloadHomepageLink
        }
      },
      scrollWithOffset,
      translations: { t }
    }
    // location: { pathname }
  }) => (
    <>
      <div
        style={{
          background: `linear-gradient(134deg, #3291e0 25%, rgba(53, 214, 120, 0) 100%), url(/topBackground.jpg) no-repeat center`,
          backgroundSize: "cover",
          color: "#fff"
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
  )
);

export default HomePage;
