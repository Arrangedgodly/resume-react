import React from "react";

function Accomplishments() {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggleContainer = () => {
    setIsOpened(!isOpened);
  }

    return (
        <div className="container container-left container_alt">
          <button className="section" type="button" onClick={toggleContainer}>ACCOMPLISHMENTS</button>
          {isOpened && (
            <ul className="list list_flex section__text list_l">
            <li>
              Responsive Web Design Certification<br />
              <span className="list_m_alt"
                >Awarded from FreeCodeCamp in April 2022</span>
            </li>
            <li>
              Top Sales with Silver Stem<br />
              <span className="list_m_alt"
                >Oct. and Dec. 2018, Jan, Feb, Mar, and June 2019</span>
            </li>
            <li>
              Eagle Scout<br />
              <span className="list_m_alt">Received 2015</span>
            </li>
          </ul>
          )}
        </div>
    );
}

export default Accomplishments;