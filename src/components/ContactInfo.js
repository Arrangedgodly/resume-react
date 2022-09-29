import '../blocks/container.css';
import '../blocks/section.css';
import '../blocks/list.css';
import '../blocks/link.css';
import phone from '../images/phone.svg';
import envelope from '../images/envelope.svg';
import linkedIn from '../images/linkedin.svg';
import github from '../images/github.svg';
import link from '../images/link.svg';


function ContactInfo() {
    return (
        <div class="container container-left">
          <h2 class="section">CONTACT INFO</h2>
          <ul class="list list_l">
            <li class="list__item">
              <a href="tel:+3032609261" class="link">
                <img src={phone} alt="phone" class="list__icon" />
                303-260-9261</a>
            </li>
            <li class="list__item">
              <a href="mailto:graydonwasil@gmail.com" class="link">
                <img
                  src={envelope}
                  alt="envelope"
                  class="list__icon"
                />
                graydonwasil@gmail.com</a>
            </li>
            <li class="list__item">
              <a
                href="https://www.linkedin.com/in/graydon-wasil-503952239/"
                target="_blank"
                class="link"
              >
                <img
                  src={linkedIn}
                  alt="linkedin"
                  class="list__icon"
                />
                LinkedIn
              </a>
            </li>
            <li class="list__item">
              <a
                href="https://github.com/Arrangedgodly"
                target="_blank"
                class="link"
              >
                <img
                  src={github}
                  alt="github"
                  class="list__icon"
                />
                GitHub
              </a>
            </li>
            <li class="list__item">
              <a
                href="https://arrangedgodly.com/portfolio-project/"
                target="_blank"
                class="link"
              >
                <img src={link} alt="link" class="list__icon" />
                Portfolio
              </a>
            </li>
          </ul>
        </div>
    );
}

export default ContactInfo;