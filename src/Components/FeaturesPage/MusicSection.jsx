import React from "react";
import FeatureContainer from "./../FeatureContainer";

function AuthenticationSection() {
  return (
    <FeatureContainer
      odd
      newFeature
      featureTitle={"Music"}
      featureDescription={
        "Seamless music control when locking and unlocking your Mac."
      }
    >
      <div className="row">
        <div className="col-md-6 play_icon">
          <h3>Pause audio when mac is locked</h3>
        </div>
        <div className="col-md-6 pause_icon">
          <h3>Continue music after login</h3>
        </div>

        <h1 className="text-center supported-players-title">
          Currently supported players:
        </h1>

        <div className="dock backdropfilter">
          <div className="dock-item" data-toggle="tooltip" title="iTunes">
            <img src="img/dock-itunes.svg" alt="iTunes" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="QuickTime">
            <img src="img/dock-quicktime.png" alt="QuickTime" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="VLC">
            <img src="img/dock-vlc.svg" alt="VLC" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="Spotify">
            <img src="img/dock-spotify.svg" alt="Spotify" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="Near Lock">
            <img src="img/dock-nearlock.svg" alt="Near Lock" />
          </div>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default AuthenticationSection;
