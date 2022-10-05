import React from "react";
import FinishedClass from "./finishedClass";
import DoingClass from "./doingClass";
import WaitingClass from "./waitingClass";
import styles from "./takeClass.module.css";
const TakeClass = (props) => {
  //수강중인 강의

  return (
    <>
      <section className={styles.section}>
        <DoingClass />
      </section>
      <section className={styles.section}>
        <FinishedClass />
      </section>
      <section className={styles.section}>
        <WaitingClass />
      </section>
    </>
  );
};

export default TakeClass;
