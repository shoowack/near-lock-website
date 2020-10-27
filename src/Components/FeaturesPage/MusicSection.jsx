import React, { useState } from "react";
import FeatureContainer from "./../FeatureContainer";

function DockItem({ tooltip, image }) {
  const [tooltipActive, setTooltipActive] = useState(false);
  return (
    <div
      className="dock-item"
      onMouseEnter={() => setTooltipActive(true)}
      onMouseLeave={() => setTooltipActive(false)}
    >
      {tooltipActive && <div className="dock-tooltip">{tooltip}</div>}
      <img src={image} alt={tooltip} />
    </div>
  );
}

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
          <h5 className="text-center supported-players-title">
            Currently supported players:
          </h5>
        </div>

        <div className="dock backdropfilter">
          <DockItem tooltip="iTunes" image="/feature/dock-itunes.svg" />
          <DockItem tooltip="QuickTime" image="/feature/dock-quicktime.png" />
          <DockItem tooltip="VLC" image="/feature/dock-vlc.svg" />
          <DockItem tooltip="Spotify" image="/feature/dock-spotify.svg" />
          <DockItem tooltip="Near Lock" image="/feature/dock-nearlock.svg" />
        </div>
      </div>
    </FeatureContainer>
  );
}

export default AuthenticationSection;
