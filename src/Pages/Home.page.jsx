import React from "react";
import {
  DownloadsSection,
  TopSection,
  FamilySection,
  ToolsSection,
  FeaturesSection,
  CompatibilitySection,
  TestimonialsSection
} from "./../Components/HomePage";
import NewsletterSection from "./../Components/NewsletterSection";
import { topBackground } from "./../assets";

function HomePage(props) {
  console.log(props);
  const {
    videoUrl,
    downloadLinks: { appStoreLinkUrl },
    homePage: {
      visibileSections: {
        topSection,
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
    }
  } = props.settings;

  return (
    <>
      <div
        style={{
          background: `linear-gradient(134deg, #3291e0 25%, rgba(53, 214, 120, 0) 100%), url(${topBackground}) no-repeat center`,
          backgroundSize: "cover",
          color: "#fff"
        }}
      >
        {topSection && <TopSection videoUrl={videoUrl} />}
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
  );
}

export default HomePage;
