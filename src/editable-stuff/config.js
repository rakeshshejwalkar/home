// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rakesh",
  middleName: "",
  lastName: "Shejwalkar",
  message: "Driving Financial Vehicle, Fuelled by Technology",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rakeshshejwalkar",
    },
        //{
      //image: "fa-instagram",
      //url: "https://www.instagram.com/rakeshshejwalkar/",
    //},
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rakesh-shejwalkar/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/rakeshshejwalkar",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/rakeshshejwalkar.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/rakeshshejwalkar.jpg"),
  imageSize: 375,
  message:
    "My name is Rakesh Shejwalkar. I am an engineering B.Tech (IIT Kharagpur) by academic background. I am currently working as an Executive Director in global markets of a multinational investment bank. My job life has been a mix of Financial Products’ experience (front to back life cycle for Derivatives) and experience in delivering huge volume based business through various B2C to B2B platforms. Product Portfolio Management has been a key role. My passion lies in the use of Technology for delivering dynamic solutions/answers to usual yet painful problems leveraging common interactive platforms like web application, pwas, standalone apps or as embedded solution in an existing app ecosystem. My mission has been to bring efficiency in Personal Finance space. Continuing Education is my hobby and motto. Of late I have ventured into various kind of content management and design applications. This webpage is an output of the same curiosity.",
  resume: "https://drive.google.com/file/d/1CuymnyEyhswFbckv1QFSPSwm2UYm11ih/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rakeshshejwalkar", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/rakeshshejwalkar.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/rakeshshejwalkar.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 90 },
    { name: "VBA", value: 85 },
    { name: "Thunderhead/Document Automation", value: 85 },
    { name: "JavaScript", value: 65 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
    { name: "Confluence, Sharpoint, Office, JIRA, Git & Github,", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "TeamBuilding", value: 85 },
    { name: "Creativity", value: 95 },
  ],
  domainKnowledge: [
    { name: "OTC Derivatives", value: 90 },
    { name: "Equities", value: 90 },
    { name: "European Derivative Markyte", value: 85 },
    { name: "FX and IRP", value: 85 },
    { name: "Credit", value: 65 },
    { name: "Risk Management", value: 90 },
    { name: "Operations", value: 85 },
    { name: "Tool (Reuters/Bloomberg)", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you are interested in any discussion, have any questions, or if you just want to say hi, please feel free to email me at",
  email: "rakesh.shej@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
