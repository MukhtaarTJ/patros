import React from "react";
import styles from "./Services.module.css";
import { BsCodeSlash } from "react-icons/bs";
import { PiChartLineUpLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

const Services = () => {
  return (
    <div
      className="container-fluid my-5 py-5 "
      style={{ background: "#d83616" }}>
      <p
        className={`text-white text-center text-uppercase fs-2 ${styles.text}`}
        style={{ fontWeight: "100" }}>
        services
      </p>
      <div
        className={`px-5  ms-auto me-auto   ${styles.services}`}
        style={{  }}>
        <div className={styles.service}>
          <div className={styles.border}>
            <FaUsers className={styles.icons} />
          </div>
          <h1 className={`text-center mt-4 text-white fs-4 text-capitalize ${styles.header}`}>
            strategy
          </h1>
          <p className={`text-white text-center ${styles.bottom_text}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod
            iste doloribus
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.border}>
            <BsCodeSlash className={styles.icons} />
          </div>
          <h1 className={`text-center mt-4 text-white fs-4 text-capitalize ${styles.header}`}>
            strategy
          </h1>
          <p className={`text-white text-center ${styles.bottom_text}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod
            iste doloribus
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.border}>
            <PiChartLineUpLight className={styles.icons} />
          </div>
          <h1 className={`text-center mt-4 text-white fs-4 text-capitalize ${styles.header}`}>
            strategy
          </h1>
          <p className={`text-white text-center ${styles.bottom_text}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod
            iste doloribus
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.border}>
            <IoSettingsOutline className={styles.icons} />
          </div>
          <h1 className={`text-center mt-4 text-white fs-4 text-capitalize ${styles.header}`}>
            strategy
          </h1>
          <p className={`text-white text-center ${styles.bottom_text}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod
            iste doloribus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
