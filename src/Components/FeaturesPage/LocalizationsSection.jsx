import React from "react";
import FeatureContainer from "./../FeatureContainer";

function LocalizationsSection() {
  return (
    <FeatureContainer odd featureTitle={"Localizations"}>
      <div className="row">
        <div className="col-md-12">
          <h3 className="no-icon">
            We are proud to offer Near Lock in these languages:
          </h3>
          <p>
            English, German, Chinese - simplified, Chinese traditional, Spanish,
            Portuguese - Portugal, Portuguese - Brazilian, Japanese, Korean,
            French, Italian, Dutch, Russian and Arabic.
            <br />
            <br />
            Select your desired language in your iPhone settings under Near
            Lock.
          </p>

          <div className="flags">
            <img src="img/languages/english.svg" className="language" alt="" />
            <img src="img/languages/german.svg" className="language" alt="" />
            <img src="img/languages/chinese.svg" className="language" alt="" />
            <img src="img/languages/spanish.svg" className="language" alt="" />
            <img
              src="img/languages/portuguese.svg"
              className="language"
              alt=""
            />
            <img src="img/languages/japanese.svg" className="language" alt="" />
            <img src="img/languages/korean.svg" className="language" alt="" />
            <img src="img/languages/french.svg" className="language" alt="" />
            <img src="img/languages/italian.svg" className="language" alt="" />
            <img src="img/languages/dutch.svg" className="language" alt="" />
            <img src="img/languages/russian.svg" className="language" alt="" />
            <img src="img/languages/arabic.svg" className="language" alt="" />
          </div>
        </div>
        <div className="col-md-12">
          <h3 className="no-icon">Measurement Units</h3>
          <p>
            Measurement units are also adjusted wheather you are using metric or
            imperial units. Signal strength is the third and most accurate
            option you can choose for distance estimation.
            <br />
            <br />
            Select your desired measurement units in your iPhone settings under
            Near Lock.
          </p>
        </div>
        {/* <p>
            When you get asked for your password on your Mac, while installing new apps or (ne znam kaj), Near Lock sends you interactive push notification asking you to confirm password input, without typing anything.
        </p> */}
      </div>
    </FeatureContainer>
  );
}

export default LocalizationsSection;
