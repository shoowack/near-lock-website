import React from "react";

function PressPage({ settings }) {
  const {
    appStoreLinkUrl,
    pressPage: { pressVideoUrl, pressKitFile }
  } = settings;

  return (
    <>
      <section className="heading container">
        <div className="row">
          <div className="col-12">
            <h1>Press kit</h1>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <div className="presskit-images">
              <a href="img/press.jpg" target="_blank">
                <img src="img/press.jpg" alt="" />
              </a>
              <a href="img/nearlock_white.jpg" target="_blank">
                <img src="img/nearlock_white.svg" alt="" />
              </a>
              <a href="img/nearlock_color.jpg" target="_blank">
                <img src="img/nearlock_color.svg" alt="" />
              </a>
              <a href="img/nearlock_text.jpg" target="_blank">
                <img src="img/nearlock_text.svg" alt="" />
              </a>
            </div>

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
              <a href={appStoreLinkUrl} target="_blank" rel="noreferrer">
                App Store
              </a>{" "}
              and accompanying <a href="downloads/nearlock.dmg">Mac app</a> from
              the Near Lock website.
            </p>
            <br />
            <p>
              You can download the full presskit{" "}
              <a href={pressKitFile} target="_blank" rel="noreferrer">
                here
              </a>
            </p>
            <br />

            <iframe
              title="pressvideo"
              className="pressvideo"
              src={pressVideoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <textarea
              type="text"
              style={{
                display: "block",
                margin: "1em auto",
                height: "5em",
                width: "50vw",
                fontSize: "1.5em",
                padding: ".5em"
              }}
              onClick={(e) => navigator.clipboard.writeText(e.target.value)}
              defaultValue={`<iframe width="560" height="315" src="${pressVideoUrl}" frameborder="0" allowfullscreen></iframe>`}
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}

export default PressPage;
