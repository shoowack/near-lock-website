import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import TitleHeader from '../Components/TitleHeader';
import * as sections from '../Components/FeaturesPage';
import NewsletterSection from '../Components/Newsletter/NewsletterSection';
import { withState } from '../context';

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
  }) => {
    const { t } = useTranslation('common');

    return (
      <>
        <TitleHeader>{t('features_title')}</TitleHeader>
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
    );
  },
);

export default FeaturesPage;
