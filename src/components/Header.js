import myPic from '../images/profile.png';

function Header() {
    return (
        <header className="header">
            <img src={myPic} className="image" alt="Picture of Grady" />
            <h1 className="header__title">
                GRAYDON<br />
                <span className="header__title_span">WASIL</span>
            </h1>
            <p className="header__text">Assistant Store Manager</p>
        </header>
    );
}

export default Header;