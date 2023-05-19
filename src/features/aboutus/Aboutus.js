import React from "react";

import styles from "./style.module.css";
const Aboutus = () => {
  return (
    <section className={`text-center ${styles.about} d-`}>
      <h1>About US</h1>
      <div className="container-fluid d-flex align-items-center h-75 ">
        <div className="row m-auto w-100">
          <div
            className={`col-lg-3 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span class="fa-solid fa-people-group mb-2"></span>
            <h2>Frontend</h2>
            <p className={styles.lead}>Ali Saad Ahmed</p>
          </div>
          <div
            className={`col-lg-3 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span className="fa fa-info mb-2"></span>
            <h2>Frontend</h2>
            <p className={styles.lead}>Adel Abdellatif</p>
          </div>
          <div
            className={`col-lg-3 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span className="fa fa-file mb-2"></span>
            <h2>Backend</h2>
            <p className={styles.lead}>Mohammed Abdallah</p>
          </div>
          <div
            className={`col-lg-3 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span className="fa fa-file mb-2"></span>
            <h2>Backend</h2>
            <p className={styles.lead}>Mahmoud Awd</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
