import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-main-container" id="skills">
      <div className="skills-category-container">
        {/* FRONTEND */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="devicon-materialui-plain"></i>
              <span>Material-UI</span>
            </div>
            <div className="skill-item">
              <i className="devicon-tailwindcss-plain"></i>
              <span>Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <i className="devicon-javascript-plain"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="devicon-html5-plain"></i>
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <i className="devicon-css3-plain"></i>
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <i className="devicon-dotnetcore-plain"></i>
              <span>.NET Core</span>
            </div>
            <div className="skill-item">
              <i className="devicon-postgresql-plain"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="skill-item">
              <i className="devicon-mysql-plain"></i>
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <i className="devicon-csharp-plain"></i>
              <span>C#</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <i className="devicon-git-plain"></i>
              <span>Git</span>
            </div>
            <div className="skill-item">
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <i className="devicon-docker-plain"></i>
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <i className="devicon-figma-plain"></i>
              <span>Figma</span>
            </div>
            <div className="skill-item">
              <i className="devicon-vscode-plain"></i>
              <span>VS Code</span>
            </div>
          </div>
        </div>
        {/* LANGUAGES */}
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skills-item-container">
            <div className="skill-item">
              <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-tr" viewBox="0 0 512 512">
                <g fill-rule="evenodd">
                  <path fill="#e30a17" d="M0 0h512v512H0z" />
                  <path
                    fill="#fff"
                    d="M348.8 264c0 70.6-58.3 127.9-130.1 127.9s-130.1-57.3-130.1-128 58.2-127.8 130-127.8S348.9 193.3 348.9 264z"
                  />
                  <path
                    fill="#e30a17"
                    d="M355.3 264c0 56.5-46.6 102.3-104.1 102.3s-104-45.8-104-102.3 46.5-102.3 104-102.3 104 45.8 104 102.3z"
                  />
                  <path
                    fill="#fff"
                    d="m374.1 204.2-1 47.3-44.2 12 43.5 15.5-1 43.3 28.3-33.8 42.9 14.8-24.8-36.3 30.2-36.1-46.4 12.8z"
                  />
                </g>
              </svg>
              <span>Türkçe</span>
            </div>
            <div className="skill-item">
              <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-de" viewBox="0 0 512 512">
                <path fill="#fc0" d="M0 341.3h512V512H0z" />
                <path fill="#000001" d="M0 0h512v170.7H0z" />
                <path fill="red" d="M0 170.7h512v170.6H0z" />
              </svg>
              <span>Almanca</span>
            </div>
            <div className="skill-item">
              <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 512 512">
                <path fill="#012169" d="M0 0h512v512H0z" />
                <path
                  fill="#FFF"
                  d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
                />
                <path
                  fill="#C8102E"
                  d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
                />
                <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
                <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
              </svg>
              <span>İngilizce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
