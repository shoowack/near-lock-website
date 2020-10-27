import React from "react";
import FeatureContainer from "./../FeatureContainer";

function SecuritySection() {
  return (
    <FeatureContainer
      featureTitle={"Security"}
      featureDescription={
        "Your security is extremely important to us. That's why we encrypt your data and never send it to any remote server. The only reason we use network connections is for application updates, crash reporting, and to be able to send you iPhone push notifications on important events (such as when a wrong password is inserted into your Mac)."
      }
    >
      <div className="row">
        <div className="col-md-6 private_informations_icon">
          <h3>Private (User) Information</h3>
          <p>
            Your private - user information is encrypted and never leaves your
            devices.
          </p>
        </div>
        <div className="col-md-6 encryption_icon">
          <h3>AES encryption</h3>
          <p>
            For the internal data encryption we use AES: The Advanced Encryption
            Standard. Read more about it here:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
              target="_blank"
            >
              AES
            </a>
            . In addition, the bluetooth communication channel is also
            internally encrypted.
          </p>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default SecuritySection;
