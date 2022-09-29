import Project from "./project.js";

const webPortfolio = new Project(
  "DSP Portfolio",
  "Check out my portfolio, created during my Intro to Frontend Development course at Career Foundry. I learned about coding in HTML, applying styling with CSS, version control with Git, and much more.",
  "https://github.com/Sanparty/portfolio-website",
  "http://dansanpedro.com/index.html",
  "img/web_portfolio_square.png"
);

const annWebsite = new Project(
    "Ann Nakajima, ND",
    "A professional website for my wife's Naturopathy business. The website is still in the early stages as we work together to create a website to promote her business to clients.",
    "none",
    "http://dansanpedro.com/ann/ann_index.html",
    "img/ann_website_square.png"
);

const editPortfolio = new Project(
    "DSP Video Editing Portfolio",
    "This is my current Video Editing Portfolio. Utilizing JavaScript, CSS and HTML to showcase my editing and producing skills.",
    "https://github.com/Sanparty/editing-portfolio-website",
    "http://edit.dansanpedro.com/index.html",
    "img/editing_portfolio_square.png"
);

const quizTimer = new Project(
    "Quiz Timer DSP",
    `I created this small web application after searching for a timer online to use during the test. I wanted to follow how much time I had remaining and also the pace I was keeping.`,
    "https://github.com/Sanparty/Quiz-Timer",
    "http://dansanpedro.com/quiztimer",
    "img/quiz_timer_square.png"
);

// OLD QUIZ TIMER DESCRIPTION
// const quizTimer = new Project(
//     "Quiz Timer DSP - JavaScript coding practice",
//     `I created this small web application after taking an assessment test for a position in Web Development training at my current company.<br><br>

//     I was searching for a timer online to use during the test, as it was a timed test with a set amount of questions. I wanted to follow how much time I had remaining but also at what pace I was finishing questions.<br><br>
    
//     This was very good practice in coding in JavaScript.`,
//     "https://github.com/Sanparty/Quiz-Timer",
//     "http://dansanpedro.com/quiztimer",
//     "img/quiz_timer_square.png"
// );

const editwpPortfolio= new Project(
    "DSP Video Editing Portfolio - WordPress version",
    `This is a WordPress themed website I created in 2014 to showcase my video editing portfolio. I had completed two courses at Camptech and this was the resulting project.`,
    "none",
    "http://dansp.ca",
    "img/editing_wp_square.png"
);



const projectObjectArray = [webPortfolio, editPortfolio, annWebsite, quizTimer];

// Export the array to be used in other files
export default projectObjectArray;





