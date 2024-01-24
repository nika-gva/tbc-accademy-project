import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/tbc-footer.webp";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <FaFacebook size={45} className={styles.footerIcon}/>
          <FaYoutube size={45} className={styles.footerIcon}/>
        </div>

        <div>
            <button>მოგვწერეთ</button>
        </div>

        <div>
            <p>წესები და პირობები</p>
            <p>&copy; 2023 ყველა უფლება დაცულია</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
