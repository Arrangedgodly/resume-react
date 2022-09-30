import ContactInfo from './ContactInfo';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Accomplishments from './Accomplishments';

function Main() {
    return (
        <main className='page'>
            <div className="grid">
                <ContactInfo />
                <AboutMe />
                <Education />
                <Projects />
                <Skills />
                <Accomplishments />
            </div>
            
        </main>
    )
}

export default Main;