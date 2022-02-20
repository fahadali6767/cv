import React from "react";
import classes from "./leftside.module.css";
import profileImg from "../../Assets/profileImg.jpg";
const LeftSide = () => {
  return (
    <div className={classes.container}>
      <h2>Fahad Ali Ghouri</h2>
      <img src={profileImg} alt="" width={140} />
      <section>
        <div>
          <h2 className={classes.contactHeading}>Contact</h2>
          <hr />
          <strong>Address:</strong>
          <div>
            House No:45A/1 Gulistan Colony 7th Road Sattellite Town Rawalpindi
          </div>
          <strong className="mt-4">Phone:</strong>
          <div>03405230079</div>
          <strong className="mt-4">Email:</strong>
          <div>alif55054@gmail.com</div>
        </div>
        <div>
          <h2 className={classes.contactHeading}>Language</h2>
          <div className="mt-4">English</div>
          {/* <br /> */}
          <div className="mt-4">Urdu</div>
        </div>
      </section>
    </div>
  );
};

export default LeftSide;
