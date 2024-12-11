import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faAws,
  faGitAlt,
  faGithub,
  faDocker,
  faNpm,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faSlack,
  faFigma,
  faVuejs,
  faAngular,
  faDiscord,
  faStackOverflow
  
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faPaintBrush, 
  faWrench, 
  faDraftingCompass, 
  faCogs 
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { icon: faJs, label: "JavaScript", className: "icon-js" },
    { icon: faReact, label: "React", className: "icon-react" },
    { icon: faNodeJs, label: "Node.js", className: "icon-nodejs" },
    { icon: faDatabase, label: "MongoDB", className: "icon-mongodb" },
    { icon: faAws, label: "AWS", className: "icon-aws" },
    { icon: faGitAlt, label: "Git", className: "icon-git" },
    { icon: faGithub, label: "GitHub", className: "icon-github" },
    { icon: faDocker, label: "Docker", className: "icon-docker" },
    { icon: faHtml5, label: "HTML5", className: "icon-html5" },
    { icon: faCss3Alt, label: "CSS3", className: "icon-css3" },
    { icon: faSass, label: "Sass", className: "icon-sass" },
    { icon: faBootstrap, label: "Bootstrap", className: "icon-bootstrap" },
    { icon: faSlack, label: "Slack", className: "icon-slack" },
    { icon: faNpm, label: "NPM", className: "icon-npm" },
    { icon: faPaintBrush, label: "Canvas", className: "icon-canvas" },
    { icon: faDraftingCompass, label: "Adobe XD", className: "icon-adobexd" },
    { icon: faCogs, label: "Express.js", className: "icon-expressjs" },
    { icon: faDatabase, label: "Mongoose", className: "icon-mongoose" },
    { icon: faWrench, label: "Babel", className: "icon-babel" },
    { icon: faFigma, label: "figma", className: "icon-figma" },
    { icon: faVuejs, label: "vue", className: "icon-vue" },
    { icon: faAngular , label: "angular", className: "icon-angular" },
    { icon: faDiscord , label: "discord", className: "icon-discord" },
    { icon: faStackOverflow , label: "StackOverflow", className: "icon-StackOverflow" },
  ];

  return (
    <div className="skills-background-container">
      <section className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className={`icon-container ${skill.className}`}>
              <FontAwesomeIcon icon={skill.icon} />
            </div>
            <p className="skill-label">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Skills;
