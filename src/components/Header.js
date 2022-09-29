import '../blocks/header.css';
import '../blocks/image.css';
import myPic from '../images/profile.png';

function Header() {
    return (
        <header class="header">
            <img src={myPic} class="image" alt="Picture of Grady" />
            <h1 class="header__title">
                GRAYDON<br />
                <span class="header__title_span">WASIL</span>
            </h1>
            <p class="header__text">Assistant Store Manager</p>
        </header>
    );
}

export default Header;