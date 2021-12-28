import React from "react";
import TitleHeader from "./../Components/TitleHeader";
import { withState } from "./../context";
import { Container, Row, Col } from "reactstrap";

const PressPage = withState(
  ({
    state: {
      appStoreLinkUrl,
      videoUrl,
      pressPage: {
        pressKitFile,
        images: { press, nearlockWhite, nearlockColor, nearlockText }
      },
      translations: { t }
    }
  }) => (
    <>
      <TitleHeader>Press kit</TitleHeader>
      <Container className="py-3 py-md-5">
        <Row className="mb-4">
          <a
            href={press}
            target="_blank"
            rel="noreferrer noopener"
            className="col-6 col-md-3 mb-3"
          >
            <img src={press} alt="" className="img-fluid" />
          </a>
          <a
            href={nearlockWhite}
            target="_blank"
            rel="noreferrer noopener"
            className="col-6 col-md-3 mb-3"
          >
            <img src={nearlockWhite} alt="" className="img-fluid" />
          </a>
          <a
            href={nearlockColor}
            target="_blank"
            rel="noreferrer noopener"
            className="col-6 col-md-3 mb-3"
          >
            <img src={nearlockColor} alt="" className="img-fluid" />
          </a>
          <a
            href={nearlockText}
            target="_blank"
            rel="noreferrer noopener"
            className="col-6 col-md-3 mb-3"
          >
            <img src={nearlockText} alt="" className="img-fluid" />
          </a>
        </Row>
        <Row>
          <Col>
            <p>
              Near Lock, a newly released app for iOS and Mac, is designed to
              allow users to lock and unlock their Macs with an iPhone,
              replacing traditional password logins.
              <br />
              <br />
              Mac app works in tandem with an iPhone app that turns your phone
              into an authentication device. When you walk away from your Mac,
              it will be automatically locked. Once you approach your workplace,
              Near Lock unlocks your Mac. It is the latest and most convenient
              way to protect your computer from unauthorized access.
              <br />
              <br />
              You can easily set the required distance on which your Mac should
              automatically lock and unlock. For additional protection use your
              Apple watch, Touch ID or passcode to verify each user login.
              <br />
              <br />
              When apps pair, they create a secure connection between the two
              and the process doesn’t require opening the Near Lock app. It’s
              always ready because it uses Low Energy Bluetooth 4.0 so you
              should be able to leave it on all day without draining your iPhone
              battery.
              <br />
              <br />
              Near Lock - makes security simple, invisible and fun!
              <br />
              <br />
              Bluetooth 4.0 is available on these devices:
            </p>

            <ul>
              <li>iPhone 4s, 5, 5c, 5s, 6 and 6 plus</li>
              <li>iMac late 2012 or newer</li>
              <li>MacBook Air 2011 or newer</li>
              <li>MacBook Pro 2012 or newer</li>
              <li>Mac mini 2011 or newer</li>
              <li>Mac Pro late 2013 or newer</li>
            </ul>

            <p>
              Both Near Lock apps are free and you can download the iOS version
              from the{" "}
              <a
                href={appStoreLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>{" "}
              and accompanying <a href="downloads/nearlock.dmg">Mac app</a> from
              the Near Lock website.
            </p>
            <br />
            <p>
              You can download the full presskit{" "}
              <a href={pressKitFile} target="_blank" rel="noopener noreferrer">
                here
              </a>
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={{ size: 8, offset: 2 }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                style={{
                  borderRadius: "30px"
                }}
                title="pressVideo"
                className="embed-responsive-item"
                src={videoUrl}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>

            <textarea
              type="text"
              className="col-12 pressVideoCode"
              autoCorrect="off"
              spellCheck="false"
              style={{
                margin: "1em auto",
                height: "140px",
                fontSize: "1.5em",
                padding: ".5em 1em",
                border: "none",
                background: "#eee",
                borderRadius: "20px",
                resize: "none"
              }}
              onClick={(e) => navigator.clipboard.writeText(e.target.value)}
              defaultValue={`<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`}
            ></textarea>
          </Col>
        </Row>
      </Container>
    </>
  )
);

export default PressPage;
