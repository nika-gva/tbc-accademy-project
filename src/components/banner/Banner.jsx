import React from "react";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className={styles.bannerImage}>
        <div>
          <h1>TBC x USAID</h1>
          <h1>ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ</h1>
        </div>
      </div>
      <div className={styles.bannerInfo}>
        <p>
          „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
          ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
          ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT მიმართულებით.
          წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა
          და მის პარტნიორ კომპანიებში.
        </p>
        <Link to="">გაიგეთ მეტი</Link>
      </div>
    </section>
  );
};

export default Banner;
