import React from "react";

import styles from "./style.module.css";
const Aboutus = () => {
  return (
    <section className={`text-center ${styles.about} d-`}>
      <h1>About US</h1>
      <div className="container-fluid d-flex align-items-center h-75">
        <div className="row m-auto">
          <div
            className={`col-lg-4 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span class="fa-solid fa-people-group"></span>
            <h2>Section 1</h2>
            <p className={styles.lead}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
          <div
            className={`col-lg-4 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span className="fa fa-info"></span>
            <h2>Section 2 </h2>
            <p className={styles.lead}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
          </div>
          <div
            className={`col-lg-4 col-sm-6 col-ex-12 ${styles.aboutItem} wow lightSpeedIn`}
            data-wow-offset="200"
          >
            <span className="fa fa-file"></span>
            <h2>Section 3</h2>
            <p className={styles.lead}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
