import React, { Fragment } from "react";
import TitleHeader from "./../Components/TitleHeader";
import Accordion from "../Components/FaqPage/Accordion";

function FaqPage() {
  let faq = require("./../Data/faq.json");

  return (
    <>
      <TitleHeader>FAQ</TitleHeader>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            {faq.map((item) => {
              const { id, question, answer } = item;

              return <Accordion key={id} title={question} content={answer} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqPage;
