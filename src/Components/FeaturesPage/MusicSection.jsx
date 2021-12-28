import React, { useState } from "react";
import FeatureContainer from "./../FeatureContainer";
import {Row, Col} from "reactstrap";

const DockItem = ({ tooltip, image }) => {
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

const AuthenticationSection = () => 
  <FeatureContainer
    newFeature
    featureTitle={"Music"}
    featureDescription={
      "Seamless music control when locking and unlocking your Mac."
    }
  >
    <Row>
      <Col md={6} className="play_icon">
        <img src="/feature/pause_icon.svg" alt="" className="feature-icon" />
        <h4>Pause audio when mac is locked</h4>
      </Col>
      <Col md={6} className="pause_icon">
        <img src="/feature/play_icon.svg" alt="" className="feature-icon" />
        <h4>Continue music after login</h4>
      </Col>

      <Col>
        <h5 className="text-center supported-players-title">
          Currently supported players:
        </h5>
      </Col>

      <div className="dock backdropfilter">
        <DockItem tooltip="iTunes" image="/feature/dock-itunes.svg" />
        <DockItem tooltip="QuickTime" image="/feature/dock-quicktime.png" />
        <DockItem tooltip="VLC" image="/feature/dock-vlc.svg" />
        <DockItem tooltip="Spotify" image="/feature/dock-spotify.svg" />
      </div>
    </Row>
  </FeatureContainer>

export default AuthenticationSection;