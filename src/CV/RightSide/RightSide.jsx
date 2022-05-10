import React from "react";
import classes from "./rightside.module.css";
const RightSide = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h2>Summary</h2>
        <hr />
        <p className={classes.paragraph}>
          I am a JavaScript Developer. Having 2+ year experience in ReactJs. My
          Aim and Goal is To secure a challenging position in a reputable
          organization to expand my learnings, knowledge, and skills. Secure a
          responsible career opportunity to fully utilize my training and
          skills, while making a significant contribution to the success of the
          company
        </p>
        <h2>Skill Highlights</h2>
        <hr />

        <ul className={classes.listItems}>
          <li>Reactjs</li>
          <li>Redux</li>
          <li>Nodejs</li>
          <li>MongoDB</li>
          <li>Mysql</li>
        </ul>
        <h2>Professional Experience</h2>
        <hr />
        <div>
          <strong>React Developer (Oct 2020 - April 2022)</strong>
          <br />
          <br />
          <strong>Company Name: Avalogix Technologies (Remote Job)</strong>
          <br />
          <strong className="ml-4 mt-4">
            Key Qualifications & Responsibilities
          </strong>
          <ul>
            <li className="mt-4">
              Planned, wrote, and debugged web applications and software with
              complete accuracy. Work on Long duration project (1.5 Month).
            </li>
            <li className="mt-4">
              Managed time-sensitive updates, including content changes and
              database upgrades.
            </li>
            <li className="mt-4">
              API Integration, Database Operations(MongoDB,MYSQL) using REST
              API.
            </li>
            <li className="mt-4">Worked on Nivo Charts. </li>
            <li className="mt-4">Deployment of Projects on Netlify</li>
          </ul>
          <hr />
          <strong>Junior Web Developer (Oct 2019 – june 2020) </strong>
          <br />
          <br />
          <strong>Company Name: Creative Tech Solutions </strong>
          <strong className="ml-4 mt-4">
            Key Qualifications & Responsibilities
          </strong>
          <ul>
            <li className="mt-4">Web Design creation and web fixes.</li>
            <li className="mt-4">CSS And SCSS styling and CSS Modules.</li>
            <li className="mt-4">Backend Security and DB Fixes.</li>
            <li className="mt-4">Maintain and Agile Development of project.</li>
          </ul>
        </div>
        <h2>Education</h2>
        <hr />
        <div>
          <strong className="mt-4">Comsats University Islamabad</strong>
          <div className="mt-4">
            Bachelor of Science:<strong> Software Engineering</strong>
          </div>
          <div className="mt-4">CGPA 2.89</div>
          <div className="mt-4">2015 - 2019</div>
          <strong className="mt-4">Punjab Group of College, Rawalpindi</strong>
          <div className="mt-4">
            Intermediate:<strong>Pre-Engineering</strong>
          </div>
          <div className="mt-4">Grade B</div>
          <div className="mt-4">2013-2015</div>
        </div>
      </section>
    </div>
  );
};

export default RightSide;
