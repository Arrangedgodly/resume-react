import React from 'react';
import {icons} from '../utils/constants';


function Skills() {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggleContainer = () => {
    setIsOpened(!isOpened);
  }

    return (
        <div className="container container-left container_alt">
        <button className="section" type='button' onClick={toggleContainer}>PROFESSIONAL SKILLS</button>
        {isOpened && (
          <ul className="list list_alt icons">
          {
            icons.map((icon, i) => (
              <li className="icon_new" key={`icon-${i}`}>
                <img src={icon.link} className="icon" alt={`Official Icon for ${icon.name}`} />
                <p className="icon__desc">{icon.name}</p>
              </li>
            ))
          }
        </ul>
        )}
      </div>
    );
}

export default Skills;