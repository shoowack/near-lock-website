import React, { createContext, useState } from "react";
import "./i18next";
import { useTranslation } from "react-i18next";
import * as Media from './media';

const StateContext = createContext();

const withState = (Component) => {
  return function ConnectedComponent(props) {
    return (
      <StateContext.Consumer>
        {(state) => <Component {...props} state={state} />}
      </StateContext.Consumer>
    );
  };
};

const StateStore = ({ children }) => {
  const { t, i18n } = useTranslation();

  const scrollWithOffset = (el, offset = -55) => {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset + offset,
      behavior: "smooth"
    });
  };

  /* eslint-disable-next-line no-unused-vars */
  const [state, setState] = useState({
    translations: { t, i18n },
    scrollWithOffset: scrollWithOffset,

    underConstruction: false,
    videoUrl: "https://www.youtube.com/embed/mvlcCQ1RWXc?rel=0",
    downloadLinks: {
      appStoreLinkUrl:
        "https://itunes.apple.com/us/app/near-lock/id886882252?mt=8",
      macAppLinkUrl: ""
    },
    socialLinks: {
      youtube: "https://www.youtube.com/channel/UCAsGat6-KYwuh6Uhu9OrQ7g",
      twitter: "https://twitter.com/nearlockapp",
      facebook: "https://www.facebook.com/nearlockapp"
    },
    contactEmailAddress: "contact@nearlock.me",
    newsletterEmailAddress: "subscribe@nearlock.me",
    supportEmailAddress: "support@nearlock.me",
    homePage: {
      visibleSections: {
        topSection: true,
        problemsSection: true,
        downloadsSection: true,
        familySection: true,
        toolsSection: true,
        featuresSection: true,
        compatibilitySection: true,
        testimonialsSection: true,
        newsletterSection: true
      },
      downloadsSection: {
        showIphoneDownloadHomepageLink: true,
        showWatchDownloadHomepageLink: true
      },
      toolsSection: {},
      featuresSection: {},
      compatibilitySection: {},
      testimonialsSection: {},
      newsletterSection: {}
    },
    featuresPage: {
      visibleSections: {
        accessAnywhereSection: true,
        macControlSection: true,
        macUnlockConfirmationSection: true,
        unlockOptionsSection: true,
        lockSettingsSection: true,
        appleWatchSection: true,
        clipboardOptionsSection: true,
        authenticationSection: true,
        macMenuBarSection: true,
        musicSection: true,
        blueToothLeSection: true,
        retinaGraphicsSection: true,
        securitySection: true,
        findYourIphoneSection: true,
        localizationsSection: true,
        newsletterSection: true
      }
    },
    pressPage: {
      pressKitFile: "http://nearlock.me/downloads/presskit.zip",
      images: {
        press: Media.press,
        nearlockWhite: Media.nearlockWhite,
        nearlockWhiteSvg: Media.nearlockWhiteSvg,
        nearlockColor: Media.nearlockColor,
        nearlockColorSvg: Media.nearlockColorSvg,
        nearlockText: Media.nearlockText,
        nearlockTextSvg: Media.nearlockTextSvg
      }
    }
  });

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export { StateContext, StateStore, withState };
