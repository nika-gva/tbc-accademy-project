import React, { useEffect, useState } from "react";
import styles from "./courses.module.scss";
import { Link } from "react-router-dom";
import courseData from "../../../courses.json"
import Course from "../../containers/Course";

const Courses = () => {
  const [courses, setCourses] = useState(courseData);
  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        <h1 className={styles.title}>სასწავლო კურსები</h1>
        <div className={styles.boxContainer}>
          {courses.map((item, index) => {
            return (
              <Course key={index} styles={styles} {...item}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
