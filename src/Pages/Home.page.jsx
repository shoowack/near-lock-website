import React from "react";
import {
  DownloadsSection,
  TopSection,
  FamilySection,
  ToolsSection,
  FeaturesSection,
  CompatibilitySection
} from "./../Components/HomePage";

function HomePage({ settings }) {
  const {
    videoUrl,
    homePage: {
      topSection,
      downloadsSection,
      familySection,
      toolsSection,
      featuresSection,
      compatibilitySection
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
    </>
  );
}

export default HomePage;
