import React from "react";
import './ProdAccordion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ProdAccordion = ({title, active, setActive, content}) => {
  return (
    <div className="accordion">
      <div className="accordionHeading" onClick={() => setActive(title)}>
        <div className="container">
          <p>{title}</p>
          <span>
            {active === title ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + " accordionContent"}>
        <div className="container">
          <p>{content}</p>
        </div>
      </div>

    </div>
  );
};

export default ProdAccordion;
