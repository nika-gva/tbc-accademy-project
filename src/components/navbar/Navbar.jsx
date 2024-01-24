import React, { useEffect, useState } from "react";
import tbcLogo from "../../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";

const routes = [
  {
    title: "მთავარი",
    path: "/",
  },
  {
    title: "TBC IT",
    path: "#",
  },
  {
    title: "TBC x USAID",
    path: "/usaid",
  },
  {
    title: "რისკები",
    path: "#",
  },
];

const Navbar = () => {
  const [mobileNavbarState, setMobileNavbarState] = useState("off");
  const [navbarScrolled, setNavbarScrolled] = useState("false");

  const currentRoute = useLocation();

  const changeMenuPosition = ()=>{
    if(window.innerWidth > 769){
      setMobileNavbarState("off")
    }
  }



  useEffect(()=>{
    const scrollActionsForNavbar = () => {
      if (window.scrollY >= 34) {
        setNavbarScrolled("true");
      }else{
        setNavbarScrolled("false")
      }
      
    };
    window.addEventListener("scroll", scrollActionsForNavbar);
    window.addEventListener("resize", changeMenuPosition)
    
  },[])

  return (
    <header scroll={navbarScrolled}>
      <div className={styles.container}>
        <div>
          <img src={tbcLogo} alt="tbc accademy" />
        </div>
        <nav active={mobileNavbarState}>
          <ul>
            {routes.map((route, index) => {
              const { path, title } = route;
              return (
                <li key={index}>
                  <Link
                    to={path}
                    current={path === currentRoute.pathname ? "on" : "off"}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={styles.hamburgerMenu}
          onClick={() =>
            setMobileNavbarState(mobileNavbarState === "off" ? "on" : "off")
          }
          active={mobileNavbarState}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
