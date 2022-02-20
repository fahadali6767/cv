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
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Redux</li>
          <li>Nodejs</li>
        </ul>
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
        <h2>Professional Experience</h2>
        <hr />
        <div>
          <strong>React Developer (Oct 2020 -Present)</strong>
          <br />
          <strong>Company Name: Avalogix Technologies (Remote Job)</strong>
          <p>
            Working as a ReactJs developer . I have hand on experience of many
            react concepts like material ui, react-table,react-query,ant design
            , css modules, Nested Routing ,Context API etc
          </p>
          <strong>Junior Sotware Developer (Oct 2019 – june 2020) </strong>
          <strong>Company Name: Creative Tech Solutions </strong>
          <ul>
            <li>Worked as a MEAN Stack developer for 2 months. </li>
            <li>Angular</li>
            <li>Frigma Designs</li>
            <li>Adobe Designs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RightSide;
