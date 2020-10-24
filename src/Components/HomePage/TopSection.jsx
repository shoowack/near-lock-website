import React, { useState } from "react";
import Modal from "./../../Components/Modal";

function TopSection({ videoUrl }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <Modal show={modalIsOpen} onClose={toggleModal} modalColor={"#000"}>
        <div
          className="embed-responsive embed-responsive-16by9"
          style={{ width: "900px", height: "506px" }}
        >
          <iframe
            title="pressVideo"
            className="embed-responsive-item"
            src={videoUrl}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </Modal>

      <section
        className="title_and_video container-fluid pb-5"
        id="top"
        style={{ paddingTop: "100px" }}
      >
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>A new way to lock your Mac. Just walk away.</h1>

                <p>
                  Use your iPhone to lock and unlock your Mac automatically.
                  When you walk away from your Mac, it will be automatically
                  locked. Once you approach your workplace, Near Lock will
                  unlock your Mac.
                  <br />
                  <br />
                  You can easily <strong>set the distance</strong> on which your
                  Mac should automatically be locked or unlocked. For additional
                  security use <strong>Touch ID</strong> or{" "}
                  <strong>Apple Watch</strong> to confirm each Mac login.
                  <br />
                  <br />
                  Try it out for FREE!
                </p>
              </div>
              <div className="col-md-6">
                <div className="video_wrapper">
                  <div className="videoplay" onClick={() => toggleModal()}>
                    <img
                      src="img/video.jpg"
                      className="img-responsive videoimg"
                      alt=""
                    />
                    <div className="play">
                      <img src="img/play.svg" alt="" />
                      Play Video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopSection;
