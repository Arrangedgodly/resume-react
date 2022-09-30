import React from "react";

function AboutMe() {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggleContainer = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className="container container_alt container-left">
          <button className="section" type="button" onClick={toggleContainer}>WHO AM I?</button>
          {isOpened && (
            <p className="section__text section__text-alt">
            I am a retail cannabis manager aspiring for a new career path in web
            development or software engineering. In my free time, I work on
            teaching myself to code, produce/mix/master music, graphic design,
            and video edit. I aim to be a jack of all trades, unveiling the
            mystery from concepts I find interesting, and teaching myself with
            the graces of the internet.
          </p>
          )}
        </div>
  );
}

export default AboutMe;