import React from "react";

function FaqPage() {
  let faq = require("./../Data/faq.json");

  return (
    <div>
      <h1>FAQ</h1>
      {faq.map((item) => {
        return (
          <>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </>
        );
      })}
    </div>
  );
}

export default FaqPage;
