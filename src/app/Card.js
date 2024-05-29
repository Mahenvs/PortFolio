import React from "react";
import "./Projects.css";
const Card = ({
  title,
  startYear,
  cover_pic,
  endYear,
  list_type,
  contentDetClass,
  proj_title,
  description,
  bodyClass,
  list_title,
  url,
}) => {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="card">
      <div className={bodyClass}>
        <span className="card-header">
          <span>{title && <h4>{title}</h4>}</span>
          <button className="linkButton" onClick={() => openLink(url)}>
            Open Link
          </button>
        </span>
        {list_title && <li>{list_title}</li>}
        {/* <h4>{proj_title}</h4> */}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
