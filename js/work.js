import projectObjectArray from "./components/project-data.js";

const projectList = projectObjectArray.map((project) => {
  let projectArticle = document.createElement("div");
  projectArticle.classList.add("project__item");
  projectArticle.setAttribute("id", project.projectName);
  
  if (project.githubLink == "none") {
 
  projectArticle.innerHTML = `
    <div class="screenshot">
    <img src="${project.screenshot}" alt="${project.projectName}" class="project_image"> 
    </div>
 
    <div class="project__info">
    <h3 class="project__name">${project.projectName}</h3>
    <p class="project__description">${project.description}</p>
    <div class="portfolio-links">
    <a href="${project.livesiteLink}" target="_blank" class="portfolio-logo"><img src="img/2305615_address_globe_internet_network_site_icon.svg" alt="Check out the live website" ></a>
    </div>
    </div>
    `;
  } else {
    projectArticle.innerHTML = `
    <div class="screenshot">
    <img src="${project.screenshot}" alt="${project.projectName}" class="project_image"> 
    </div>
  
    <div class="project__info">
    <h3 class="project__name">${project.projectName}</h3>
    <p class="project__description">${project.description}</p>
    <div class="portfolio-links">
    <a href="${project.githubLink}" target="_blank" class="portfolio-logo"><img src="img/1298743_github_git_logo_social_icon.svg" alt="See my project on Github" ></a>
    <a href="${project.livesiteLink}" target="_blank" class="portfolio-logo"><img src="img/2305615_address_globe_internet_network_site_icon.svg" alt="Check out the live website" ></a>
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


const portfolioLinks = document.querySelectorAll(".portfolio-links");
	portfolioLinks.forEach(portfoliolink => {
	  portfoliolink.style.transform = "translateY(20px)";
	});

const projectInfos = document.querySelectorAll(".project__info");
	projectInfos.forEach(projectInfo => {
    projectInfo.style.transform = "translateY(-100px) translateX(20px)";
    projectInfo.style.width = "90%";
	});