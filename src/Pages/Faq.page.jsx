import React, { useState } from "react";
import TitleHeader from "./../Components/TitleHeader";
import Accordion from "../Components/FaqPage/Accordion";

function FaqPage() {
  const [search, setSearch] = useState(null);
  let faq = require("./../Data/faq.json");

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  const searchResults = faq
    .filter((data) => {
      if (search == null) return data;
      else if (
        data.question.toLowerCase().includes(search.toLowerCase()) ||
        data.answer.toLowerCase().includes(search.toLowerCase())
      ) {
        return data;
      } // TODO fix this
    })
    .map((item) => {
      const { id, question, answer } = item;

      return <Accordion key={id} title={question} content={answer} />;
    });

  return (
    <>
      <TitleHeader>FAQ</TitleHeader>
      <div
        className="container-fluid py-3 py-md-5"
        style={{ background: "#F2F9F6" }}
      >
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12">
              <input
                type="search"
                placeholder="Search..."
                style={{
                  // appearance: "none",
                  border: "none",
                  background: "#fff",
                  borderRadius: "10px",
                  margin: "0",
                  boxShadow: "0px 10px 40px -15px rgba(0, 0, 0, 0.5)",
                  padding: "10px 30px",
                  width: "600px",
                  color: "#333333",
                  fontSize: "1.5em"
                }}
                onChange={(e) => searchSpace(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 py-md-5">
        <div className="row">
          <div className="col-12">
            {searchResults}
            {/* {faq.map((item) => {
              const { id, question, answer } = item;

              return <Accordion key={id} title={question} content={answer} />;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqPage;
