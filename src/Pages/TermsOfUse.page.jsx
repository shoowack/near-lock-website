import React from "react";
import TitleHeader from "./../Components/TitleHeader";
import { Col, Container, Row } from "reactstrap";

const TermsOfUsePage = () => (
    <>
      <TitleHeader>Near Lock Terms of Use</TitleHeader>
      <Container className="py-3 py-md-5">
        <Row>
          <Col>
            <p className="text-right mb-5 small">
              Document last updated Thursday, 29 January 2015
              <br />
              Property of Filip Duvnjak
            </p>
            <p>
              This is a legally binding contract between you and Near Lock. Make
              sure that you read the Terms of Use before downloading and using
              Near Lock because Near Lock allows an iOS device (and its
              presence), such as an iPhone, to allow access to your computer and
              sensitive information stored on it.
            </p>
            <h4>Definitions</h4>
            <p>
              “Near Lock” refers to the services and functionality provided by
              Near Lock for iOS, Near Lock for OS X, the Near Lock website and
              may also refer to the creator or creators and affiliates of Near
              Lock.
              <br />
              <br />
              “We”, “us”, or “our” refers to the creators of Near Lock.
              <br />
              “You” of “user” refers to the user of the software or viewer of
              our website.
              <br />
              “Data” or “information” refers to digital information stored on
              Mac or iOS devices.
              <br />
              “Terms” refers to the Near Lock Terms of Use.
            </p>
            <h4>(1) Accepting these Terms of Use</h4>
            <p>
              Before downloading Near Lock, make sure you read these Terms of
              Use and agree to them. If you do not agree to these Terms, do not
              download or use Near Lock. In case we make significant changes to
              this Terms, we will publish them on our website. Using Near Lock
              after the notification on our website has been published
              constitutes your acceptance of the new Terms of Use. Meaning that
              in case of disagreeing to those changes, you must stop using Near
              Lock.
            </p>
            <h4>(2) Privacy Policy</h4>
            <p>
              Near Lock stores your data only locally (on your devices). We use
              encryption algorithms to store sensitive information, such as your
              credentials.
              <br />
              Installing and using the app you agree to the terms and
              conditions of the 3rd party frameworks we are using:
            </p>
            <ul>
              <li>
                Google Analytics – 
                <a href="https://www.google.com/intl/en/policies/privacy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                Crashlytics – 
                <a href="https://try.crashlytics.com/terms/">Privacy Policy</a>
              </li>
            </ul>
            <p>
              We may be required to disclose this information in order to:
              comply with the law or legal process; protect or defend our rights
              or property, or the rights or property of others; enforce these
              terms.
            </p>
            <h4>(3) Disclaimer of Warranties</h4>
            <p>
              We believe that using Near Lock is a safer way to protect your Mac
              from an unauthorized access than using a password alone. With this
              in mind, we do not guarantee or make any warranty that Near Lock
              will protect your Mac or the data on your Mac. We disclaim all
              warranties of any kind, whether express or implied, including
              without limitation any warranty of merchantability, fitness for a
              particular purpose, or non-infringement.
              <br />
              By using Near Lock you understand and agree to do so entirely at
              your own discretion and risk.
            </p>
            <h4>(4) Limitations of Liability</h4>
            <p>
              Under absolutely no circumstances — including, without limitation,
              negligence — will we be liable for any direct, indirect,
              incidental, special or consequential damages, including loss or
              theft of your iOS device, your Mac, or your Mac's data, resulting
              from the use of or the inability to use Near Lock.
              <br />
              <br />
              You understand and agree that Near Lock is not intended to replace
              your Mac’s password, but rather enables to enter that password
              automatically after Near Lock determines certain conditions have
              been met. You understand and agree that Near Lock has no
              affiliation with Apple beyond the iOS App Store and its respective
              policies, and that Apple does not approve of and may in fact
              disapprove of Near Lock as a method of authenticating with your
              Mac. We're not saying they disapprove of it, but just that we make
              no claims to the contrary.
            </p>
            <h4>(5) Software Licence Agreement</h4>
            <p>
              Whether you purchase Near Lock or you obtain Near Lock free
              version, you are not buying the software, you are buying a license
              to use the software we own.
              <br />
              <br />
              The license we grant you when you purchase Near Lock entitles you
              to a personal, limited, non-exclusive, non-transferable use of
              Near Lock, which is in accordance with these Terms of Use.
              <br />
              <br />
              You are not permitted to sublicense Near Lock nor tamper with the
              way in which it operates, or the code upon which Near Lock is
              built or the binary that Near Lock is compiled to.
              <br />
              <br />
              We reserve the right to charge or not charge for further updates
              to Near Lock or change the terms of this license at any time.
            </p>
            <h4>(6) Indemnification</h4>
            <p>
              By using Near Lock you agree to indemnify, defend and hold
              harmless us and anyone affiliated with Near Lock for any and all
              claims and expenses, including any fees arising out of your use of
              Near Lock, including that of the Near Lock website.
              <br />
              <br />
              We may, at our sole discretion, assume the exclusive defense and
              control of any matter subject to indemnification by you. The
              assumption of such defense or control by us, however, shall not
              excuse any of your indemnity obligations.
            </p>
            <h4>(7) Dispute Resolution</h4>
            <p>
              You agree to contact us directly with any disputes that you may
              have with us or with Near Lock and provide a written description
              of the problem, all relevant documents and information along with
              the proposed resolution. For disputes that cannot be settled
              directly between us and you, you agree to arbitrate all disputes
              that you may have with us.
              <br />
              <br />
              By using Near Lock you specifically acknowledge and agree that you
              waive your right to bring a lawsuit against us or anyone
              associated with Near Lock, and you waive your right to participate
              in a Class Arbitration against us.
              <br />
              <br />
              This document is created, edited, used and distributed under the
              “Creative Commons Attribution-Sharealike License”.
              <br />
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                https://creativecommons.org/licenses/by-sa/3.0/
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );

export default TermsOfUsePage;