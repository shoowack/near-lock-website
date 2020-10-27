import React from "react";
import TitleHeader from "./../Components/TitleHeader";
import {
  AccessAnywhereSection,
  MacControlSection,
  MacUnlockConfirmation,
  UnlockOptions
} from "./../Components/FeaturesPage";
import NewsletterSection from "./../Components/NewsletterSection";
import "./../Components/FeaturesPage/style.scss";

function FeaturesPage(props) {
  const {
    featuresPage: {
      visibileSections: {
        accessAnywhereSection,
        macControlSection,
        macUnlockConfirmation,
        unlockOptions,
        newsletterSection
      }
    }
  } = props.settings;

  return (
    <>
      <TitleHeader
        scrollWithOffset={props.scrollWithOffset}
        location={props.location.pathname}
      >
        Features
      </TitleHeader>
      {accessAnywhereSection && <AccessAnywhereSection />}
      {macControlSection && <MacControlSection />}
      {macUnlockConfirmation && <MacUnlockConfirmation />}
      {unlockOptions && <UnlockOptions />}
      {newsletterSection && <NewsletterSection />}
    </>
  );
}

export default FeaturesPage;
