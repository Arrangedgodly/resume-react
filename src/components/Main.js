import '../blocks/page.css';
import '../blocks/grid.css';
import ContactInfo from './ContactInfo';
import AboutMe from './AboutMe';
import Education from './Education';

function Main() {
    return (
        <main class='page'>
            <div class="grid">
                <ContactInfo />
                <AboutMe />
                <Education />
            </div>
            
        </main>
    )
}

export default Main;