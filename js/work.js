import projectObjectArray from "./components/project-data.js";

const projectList = projectObjectArray.map((project) => {
  let projectArticle = document.createElement("div");
  projectArticle.classList.add("project");
  projectArticle.setAttribute("id", project.projectName);
  
  if (project.githubLink == "none") {
 
  projectArticle.innerHTML = `
    <div class="project_inner">
      <div class="project_front">
        <img src="${project.screenshot}" alt="${project.projectName}" class="project_image"> 
      </div>
  
      <div class="project_info">
        <h4 class="project__name">${project.projectName}</h4>
        <p class="project__description">${project.description}</p>
        <div>
          <a href="${project.livesiteLink}" target="_blank" class="portfolio-logo1"><img src="img/2305615_address_globe_internet_network_site_icon.svg" alt="Check out the live website" ></a>
        </div>
      </div>
    </div>
    `;
  } else {
    projectArticle.innerHTML = `
    <div class="project_inner">
    <div class="project_front">
      <img src="${project.screenshot}" alt="${project.projectName}" class="project_image"> 
    </div>

    <div class="project_info">
      <h4 class="project__name">${project.projectName}</h4>
      <p class="project__description">${project.description}</p>
      <div class="portfolio-link-width">
        <a href="${project.githubLink}" target="_blank" class="portfolio-logo1"><img src="img/1298743_github_git_logo_social_icon.svg" alt="See my project on Github" ></a>
      </div>
      <div class="portfolio-link-width">  
        <a href="${project.livesiteLink}" target="_blank" class="portfolio-logo2"><img src="img/2305615_address_globe_internet_network_site_icon.svg" alt="Check out the live website" ></a>
      </div>
    </div>
  </div>   
    
    `;
    
  }

  return projectArticle;
});

console.log("These are all the projects:", projectList);

// let portfolioLinksList = document.querySelectorAll(".portfolio-links");

// portfolioLinksList.forEach "translateY(100px)";


const projectsection = document.querySelector(".projects");

projectList.forEach((project) => {
  projectsection.append(project)
});


// const portfolioLinks = document.querySelectorAll(".portfolio-links");
// 	portfolioLinks.forEach(portfoliolink => {
// 	  portfoliolink.style.transform = "translateY(20px)";
// 	});

// const projectInfos = document.querySelectorAll(".project__info");
// 	projectInfos.forEach(projectInfo => {
//     projectInfo.style.transform = "translateY(-100px) translateX(20px)";
//     projectInfo.style.width = "90%";
// 	});