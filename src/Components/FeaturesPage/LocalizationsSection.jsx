import React from "react";
import FeatureContainer from "./../FeatureContainer";

export default function LocalizationsSection() {
  return (
    <FeatureContainer odd featureTitle={"Localizations"}>
      <div className="row">
        <div className="col-md-12">
          <h3>We are proud to offer Near Lock in these languages:</h3>
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
            <img src="/feature/languages/english.svg" alt="" />
            <img src="/feature/languages/german.svg" alt="" />
            <img src="/feature/languages/chinese.svg" alt="" />
            <img src="/feature/languages/spanish.svg" alt="" />
            <img src="/feature/languages/portuguese.svg" alt="" />
            <img src="/feature/languages/japanese.svg" alt="" />
            <img src="/feature/languages/korean.svg" alt="" />
            <img src="/feature/languages/french.svg" alt="" />
            <img src="/feature/languages/italian.svg" alt="" />
            <img src="/feature/languages/dutch.svg" alt="" />
            <img src="/feature/languages/russian.svg" alt="" />
            <img src="/feature/languages/arabic.svg" alt="" />
          </div>
        </div>
        <div className="col-md-12">
          <h3>Measurement Units</h3>
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
