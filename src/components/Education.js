import React from "react";

function Education() {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggleContainer = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className="container container_alt container-bottom">
    <button className="section section_alt" type="button" onClick={toggleContainer}>EDUCATION</button>
    {isOpened && (
      <div className="lists">
      <ul className="list list_flex list_m list_education">
        <li>
          2022 - Present<br />
          <span className="list_m_alt">Practicum by Yandex</span>
        </li>
        <li>
          2022 - Present<br />
          <span className="list_m_alt">FreeCodeCamp</span>
        </li>
      </ul>
      <ul className="list list_flex list_sm">
        <li>
          Full Stack Software Engineering<br />
          <span className="list_sm_alt list_sm_education"
            >Currently Learning: JavaScript & React, HTML5 & CSS3, Git &
            GitHub, Webpack, MongoDB, Node.js, Express.js, and REST
            API</span>
        </li>
        <li>
          Various Certification Paths<br />
          <span className="list_sm_alt list_sm_education"
            >received Responsive Web Design (HTML / CSS) Certificate in
            April 2022<br />
            working on JavaScript Algorithms and Data Structures and Front
            End Development Libraries (Bootstrap / JQuery / SASS / React /
            Redux)</span>
        </li>
      </ul>
    </div>
    )}
  </div>
  );
}

export default Education;