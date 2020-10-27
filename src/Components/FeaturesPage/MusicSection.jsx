import React from "react";
import FeatureContainer from "./../FeatureContainer";

function AuthenticationSection() {
  return (
    <FeatureContainer
      newFeature
      featureTitle={"Music"}
      featureDescription={
        "Seamless music control when locking and unlocking your Mac."
      }
    >
      <div className="row">
        <div className="col-md-6 play_icon">
          <img src="/feature/pause_icon.svg" alt="" className="feature-icon" />
          <h4>Pause audio when mac is locked</h4>
        </div>
        <div className="col-md-6 pause_icon">
          <img src="/feature/play_icon.svg" alt="" className="feature-icon" />
          <h4>Continue music after login</h4>
        </div>

        <div className="col-12">
          <h3 className="text-center supported-players-title">
            Currently supported players:
          </h3>
        </div>

        <div className="dock backdropfilter">
          <div className="dock-item" data-toggle="tooltip" title="iTunes">
            <img src="/feature/dock-itunes.svg" alt="iTunes" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="QuickTime">
            <img src="/feature/dock-quicktime.png" alt="QuickTime" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="VLC">
            <img src="/feature/dock-vlc.svg" alt="VLC" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="Spotify">
            <img src="/feature/dock-spotify.svg" alt="Spotify" />
          </div>
          <div className="dock-item" data-toggle="tooltip" title="Near Lock">
            <img src="/feature/dock-nearlock.svg" alt="Near Lock" />
          </div>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default AuthenticationSection;
