import React from 'react';
import phone from '../images/phone.svg';
import envelope from '../images/envelope.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';
import link from '../images/link.svg';


function ContactInfo() {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggleContainer = () => {
    setIsOpened(!isOpened);
  }

    return (
        <div className="container container-bottom container_alt">
          <button className="section" type='button' onClick={toggleContainer}>CONTACT INFO</button>
          {isOpened && (
            <ul className="list list_l">
            <li className="list__item">
              <a href="tel:+3032609261" className="link">
                <img src={phone} alt="phone" className="list__icon" />
                303-260-9261</a>
            </li>
            <li className="list__item">
              <a href="mailto:graydonwasil@gmail.com" className="link">
                <img
                  src={envelope}
                  alt="envelope"
                  className="list__icon"
                />
                graydonwasil@gmail.com</a>
            </li>
            <li className="list__item">
              <a
                href="https://www.linkedin.com/in/graydon-wasil/"
                target="_blank"
                className="link"
              >
                <img
                  src={linkedIn}
                  alt="linkedin"
                  className="list__icon"
                />
                LinkedIn
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://github.com/Arrangedgodly"
                target="_blank"
                className="link"
              >
                <img
                  src={github}
                  alt="github"
                  className="list__icon"
                />
                GitHub
              </a>
            </li>
            <li className="list__item">
              <a
                href="https://arrangedgodly.com/portfolio-project/"
                target="_blank"
                className="link"
              >
                <img src={link} alt="link" className="list__icon" />
                Portfolio
              </a>
            </li>
          </ul>
          )}
        </div>
    );
}

export default ContactInfo;