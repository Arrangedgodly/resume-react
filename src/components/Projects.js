
function Projects() {
  return (
    <div class="container container_alt  container-bottom">
          <h2 class="section section_alt">PROJECTS</h2>
          <ul class="list list_flex_project"></ul>
          <template id="project">
            <li class="list_sm list_project">
              <iframe src="" alt="" class="image_l"></iframe>
              <a href="" target="_blank" class="link link-alt">
                <p class="list_sm_alt list_sm_alt_projects"></p>
              </a>
            </li>
          </template>
          <div class="icon__arrows">
            <button class="icon_arrow icon_left-arrow" type="button">
              <i class="fa-solid fa-arrow-left fa-5x"></i>
            </button>
            <button class="icon_arrow icon_right-arrow" type="button">
              <i class="fa-solid fa-arrow-right fa-5x"></i>
            </button>
          </div>
        </div>
  );
}

export default Projects;