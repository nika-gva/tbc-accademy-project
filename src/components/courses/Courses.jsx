import React, { useEffect, useState } from "react";
import styles from "./courses.module.scss";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch("../../../courses.json");
      const data = await response.json();
      setCourses(data);
    };
    getCourses();
  }, []);
  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        <h1 className={styles.title}>სასწავლო კურსები</h1>
        <div className={styles.boxContainer}>
          {courses.map((item, index) => {
            const { title, imageUrl, register, rout } = item;
            return (
              <div className={styles.courseItem} key={index}>
                <div className={styles.courseIMage}>
                  <img src={imageUrl} alt="" />
                </div>
                <div className={styles.courseInfo}>
                  <div>
                    <h1>{title}</h1>
                    <p>
                      {register
                        ? "რეგისტრაცია მალე დაიწყება"
                        : "რეგისტრაცია დასრულებულია"}
                    </p>
                  </div>
                  <div>
                    <IoArrowForwardSharp size={30} />
                    <Link to={rout}>კურსის დეტალები</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
