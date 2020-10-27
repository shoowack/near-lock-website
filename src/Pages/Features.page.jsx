import React from "react";
import TitleHeader from "./../Components/TitleHeader";
import {
  AccessAnywhereSection,
  MacControlSection,
  MacUnlockConfirmationSection,
  UnlockOptionsSection,
  LockSettingsSection,
  AppleWatchSection,
  ClipboardOptionsSection,
  AuthenticationSection,
  MacMenuBarSection,
  MusicSection,
  BlueToothLeSection,
  RetinaGraphicsSection,
  SecuritySection,
  FindYourIphoneSection,
  LocalizationsSection
} from "./../Components/FeaturesPage";
import NewsletterSection from "./../Components/NewsletterSection";
import "./../Components/FeaturesPage/style.scss";

function FeaturesPage(props) {
  const {
    featuresPage: {
      visibileSections: {
        accessAnywhereSection,
        macControlSection,
        macUnlockConfirmationSection,
        unlockOptionsSection,
        lockSettingsSection,
        appleWatchSection,
        clipboardOptionsSection,
        authenticationSection,
        macMenuBarSection,
        musicSection,
        blueToothLeSection,
        retinaGraphicsSection,
        securitySection,
        findYourIphoneSection,
        localizationsSection,
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
      {macUnlockConfirmationSection && <MacUnlockConfirmationSection />}
      {unlockOptionsSection && <UnlockOptionsSection />}
      {lockSettingsSection && <LockSettingsSection />}
      {appleWatchSection && <AppleWatchSection />}
      {clipboardOptionsSection && <ClipboardOptionsSection />}
      {authenticationSection && <AuthenticationSection />}
      {macMenuBarSection && <MacMenuBarSection />}
      {musicSection && <MusicSection />}
      {blueToothLeSection && <BlueToothLeSection />}
      {retinaGraphicsSection && <RetinaGraphicsSection />}
      {securitySection && <SecuritySection />}
      {findYourIphoneSection && <FindYourIphoneSection />}
      {localizationsSection && <LocalizationsSection />}
      {newsletterSection && <NewsletterSection />}
    </>
  );
}

export default FeaturesPage;
