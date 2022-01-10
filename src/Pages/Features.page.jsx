import React from 'react';
import TitleHeader from '../components/TitleHeader';
import * as sections from '../components/FeaturesPage';
import NewsletterSection from '../components/Newsletter/NewsletterSection';
import { withState } from '../context';
import '../components/FeaturesPage/style.scss';

const FeaturesPage = withState(
  ({
    state: {
      featuresPage: {
        visibleSections: {
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
          newsletterSection,
        },
      },
    },
  }) => (
    <>
      <TitleHeader>Features</TitleHeader>
      {accessAnywhereSection && <sections.AccessAnywhereSection />}
      {macControlSection && <sections.MacControlSection />}
      {macUnlockConfirmationSection && <sections.MacUnlockConfirmationSection />}
      {unlockOptionsSection && <sections.UnlockOptionsSection />}
      {lockSettingsSection && <sections.LockSettingsSection />}
      {appleWatchSection && <sections.AppleWatchSection />}
      {clipboardOptionsSection && <sections.ClipboardOptionsSection />}
      {authenticationSection && <sections.AuthenticationSection />}
      {macMenuBarSection && <sections.MacMenuBarSection />}
      {musicSection && <sections.MusicSection />}
      {blueToothLeSection && <sections.BlueToothLeSection />}
      {retinaGraphicsSection && <sections.RetinaGraphicsSection />}
      {securitySection && <sections.SecuritySection />}
      {findYourIphoneSection && <sections.FindYourIphoneSection />}
      {localizationsSection && <sections.LocalizationsSection />}
      {newsletterSection && <NewsletterSection />}
    </>
  ),
);

export default FeaturesPage;
