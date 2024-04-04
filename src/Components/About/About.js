import React from "react";
import styles from "./About.module.css"
import short from "../../Assets/short.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center text-uppercase pt-5 mt-5 fs-2">about us</h1>
      <img src={short} alt="" className="mx-auto d-block" />
      <p className={`text-center pt-3 text-justify pb-5 mb-5${styles.about_text}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,when an unknown
        printer took a galley. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining <span style={{color:" #d83616"}}>essentially unchanged.</span>
      </p>
    </div>
  );
};

export default About;
