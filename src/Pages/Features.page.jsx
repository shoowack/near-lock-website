import React from "react";
import TitleHeader from "./../Components/TitleHeader";
import { AccessAnywhereSection } from "./../Components/FeaturesPage";
import NewsletterSection from "./../Components/NewsletterSection";

function FeaturesPage(props) {
  const {
    featuresPage: {
      visibileSections: { accessAnywhereSection, newsletterSection }
    }
  } = props.settings;

  return (
    <>
      <TitleHeader>Features</TitleHeader>
      {accessAnywhereSection && <AccessAnywhereSection />}
      {newsletterSection && <NewsletterSection />}
    </>
  );
}

export default FeaturesPage;
