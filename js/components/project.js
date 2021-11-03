// Set up the Project Class
class Project {
    constructor(
      projectName,
      description,
      githubLink,
      livesiteLink,
      screenshot
    ) {
      this.projectName = projectName;
      this.description = description;
      this.githubLink = githubLink;
      this.livesiteLink = livesiteLink;
      this.screenshot = screenshot;
    }
  } 
  
  export default Project;
  
  