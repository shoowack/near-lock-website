import React, { Fragment } from "react";

function FaqPage() {
  let faq = require("./../Data/faq.json");

  return (
    <div>
      <h1>FAQ</h1>
      {faq.map((item) => {
        const { id, question, answer } = item;

        return (
          <Fragment key={id}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </Fragment>
        );
      })}
    </div>
  );
}

export default FaqPage;
