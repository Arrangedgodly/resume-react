import React from 'react';
import {projects} from '../utils/constants';

function checkZero(val) {
    if (val === 0) {
        return false;
    }
    else {
        return true;
    }
}

function checkLast(arr, val) {
    if (val === (arr.length - 1)) {
        return false;
    }
    else {
        return true;
    }
}

function Projects() {
    const [projectCount, setProjectCount] = React.useState(0);
    const [isOpened, setIsOpened] = React.useState(false);

    const incrementProjects = () => {setProjectCount(projectCount + 1)};
    const decrementProjects = () => {setProjectCount(projectCount - 1)};

    const toggleContainer = () => {
        setIsOpened(!isOpened);
      }

    return (
        <div className="container container_alt container-left">
            <button className="section section_alt" type='button' onClick={toggleContainer}>PROJECTS</button>
            {isOpened && (
                            <>
                            <ul className="list list_flex_project">
                            {
                                (
                                    <li className="list_sm list_project" key={`project-${projectCount}`}>
                                        <iframe src={projects[projectCount].link} alt={projects[projectCount].name} className="image_l"></iframe>
                                        <a href={projects[projectCount].link} target="_blank" className="link link-alt">{projects[projectCount].name}
                                            <p className="list_sm_alt list_sm_alt_projects">{projects[projectCount].desc}</p>
                                        </a>
                                    </li>
                                )
                            }
                            </ul>
                            <div className="icon__arrows">
                                <button className={checkZero(projectCount) ? "icon_arrow icon_left-arrow" : "icon_arrow icon_left-arrow icon_hidden"} type="button" onClick={decrementProjects} disabled={checkZero(projectCount) ? false : true}>
                                Prev
                                </button>
                                <button className={checkLast(projects, projectCount) ? "icon_arrow icon_right-arrow" : "icon_arrow icon_right-arrow icon_hidden" } type="button" onClick={incrementProjects} disabled={checkLast(projects, projectCount) ? false : true}>
                                Next
                                </button>
                            </div>
                            </>
            )}
        </div>
  );
}

export default Projects;