import React, {useEffect, useState} from "react";
import "./Accordion.css"


const dataCollection = [
  {
    question: "When can I expect to receive my packages?",
    answer: "Packages are usually delivered between 7-15 days. If it indicates 'ships between 1-2' business days, it does not mean you will get it on a certain day, just that it will be shipped within 1-2 business days. What the postal service does with it after that will determine how quickly you receive your item. If anything comes up, we'll do well to reach out in a timely manner."
  },
  {
    question: "Do you have a return policy?",
    answer: "Yes. It's available here"
  },
  {
    question: "Can I cancel an order after 24hrs?",
    answer: "Unfortunately, no. We only allow cancellations within 24 hours after order confirmation."
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes. We ship worldwide. Alternatively, you can let us know beforehand if you need us to ship to a US, Europe address even if you don't live there and we'll handle your package to make sure they get delivered."
  }
]

const Accordion = () => {
  const [accordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    document.title = `FAQ — Hashingmart`
  })

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index)
  }

  return <section className="accordion-section">
    <div className="container">
      <div className="accordion__titlediv">
        <span className="accordion__title">Frequently asked questions</span>
        <h1 className="accordion__h1">Let's answer some of your questions</h1>
      </div>
      <div className="accordion__faq">
        {dataCollection.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className="accordion__faq-heading">
              <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
              <div>
                {accordion === index ? (
                  <>
                    <span className="vertical">-</span>
                  </>
                  ) : (
                  <>
                    <span className="vertical">+</span>
                  </>
                )}
              </div>
            </div>
            <div>
              <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
};

export default Accordion;
