import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Course = ({styles,title, imageUrl, register, rout}) => {
  return (
    <div className={styles.courseItem}>
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
};

export default Course;
