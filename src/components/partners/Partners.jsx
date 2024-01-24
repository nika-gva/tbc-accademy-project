import React, { useEffect, useState } from "react";
import styles from "./partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import usaid from "../../assets/usaid-logo.webp";
import space from "../../assets/space.webp";
import tineti from "../../assets/tineti.webp";
import tegeta from "../../assets/tegeta.webp";
import spectre from "../../assets/tineti.webp";
import tbc from "../../assets/tbc-liz.webp";
import ufc from "../../assets/ufc.webp";

const Partners = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowWidth);

    return () => {
      window.removeEventListener("resize", windowWidth);
    };
  }, []);

  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h1>პროექტის პარტნიორები</h1>
        <div className={styles.partnerContainer}>
          <Swiper
            effect={"fade"}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={screenWidth > 1280 && true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className={`${styles.swiper} mySwiper`}
            style={{
              maxWidth: "100%",
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            <SwiperSlide>
              <div className={styles.partnerLogos}>
                <img src={usaid} alt="" />
                <img src={space} alt="" />
                <img src={tineti} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partnerLogos}>
                <img src={tegeta} alt="" />
                <img src={spectre} alt="" />
                <img src={tbc} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.partnerLogos}>
                <img src={ufc} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
