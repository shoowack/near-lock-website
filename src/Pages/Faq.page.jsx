import React, { Fragment } from "react";
import TitleHeader from "./../Components/TitleHeader";

function FaqPage() {
  let faq = require("./../Data/faq.json");

  return (
    <>
      <TitleHeader>FAQ</TitleHeader>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div
              id="accordion"
              class="ui-accordion ui-widget ui-helper-reset"
              role="tablist"
            >
              {faq.map((item) => {
                const { id, question, answer } = item;

                return (
                  <Fragment key={id}>
                    <h3
                      class="ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active"
                      role="tab"
                      id={`ui-id-${id}`}
                      aria-controls={`ui-id-${id + 1}`}
                      aria-selected="true"
                      aria-expanded="true"
                      tabindex="0"
                    >
                      <span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
                      {question}
                    </h3>
                    <div
                      class="ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active"
                      id={`ui-id-${id + 1}`}
                      aria-labelledby={`ui-id-${id}`}
                      role="tabpanel"
                      aria-hidden="false"
                    >
                      <div dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqPage;
