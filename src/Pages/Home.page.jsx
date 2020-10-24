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
import "./../Components/HomePage/style.scss";

function HomePage({ settings }) {
  const {
    videoUrl,
    homePage: {
      topSection,
      downloadsSection,
      familySection,
      toolsSection,
      featuresSection,
      compatibilitySection,
      testimonialsSection,
      newsletterSection
    }
  } = settings;

  return (
    <>
      {topSection.showSection && <TopSection videoUrl={videoUrl} />}
      {downloadsSection.showSection && <DownloadsSection settings={settings} />}
      {familySection.showSection && <FamilySection />}
      {toolsSection.showSection && <ToolsSection />}
      {featuresSection.showSection && <FeaturesSection />}
      {compatibilitySection.showSection && <CompatibilitySection />}
      {testimonialsSection.showSection && <TestimonialsSection />}
      {newsletterSection.showSection && <NewsletterSection />}
    </>
  );
}

export default HomePage;
