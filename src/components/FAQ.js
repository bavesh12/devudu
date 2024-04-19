import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="faq" id="accordion">
              {faqData.map((item, index) => (
                <div className="card" key={index}>
                  <div
                    className="card-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        aria-expanded={expanded === index}
                      >
                        <span className="badge">{index + 1}</span>{" "}
                        {item.question}
                      </h5>
                    </div>
                  </div>
                  <div
                    className={
                      "collapse" +
                      (expanded === index ? " show" : "")
                    }
                    aria-labelledby={"faqHeading-" + index}
                    data-parent="#accordion"
                  >
                    <div className="card-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "how to book the ticket?",
    answer:
      "You can book the ticket in the online booking option available in the navbar.",
  },
  {
    question: "Where is the temple is located?",
    answer:
      "The temple is located near in the Tirupati District , ",
  },
];
