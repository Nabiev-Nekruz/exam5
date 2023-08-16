
import picture1 from "../././../assets/Mask Group (1).jpg"
import picture2 from "../././../assets/XMLID 1119.png"
import picture3 from "../././../assets/0_9 1 (1).png";
import picture4 from "../././../assets/Group 115.png";
import picture5 from "../././../assets/021   Gears Cutting.svg";
import picture6 from "../././../assets/ОМП-1 1 (1).png";
import picture7 from "../././../assets/flask 1.svg";
import picture8 from "../././../assets/Слой 0 1 (1).png";
import picture10 from "../././../assets/30.svg";
import picture11 from "../././../assets/31.svg";
import picture12 from "../././../assets/32.svg";
import picture13 from "../././../assets/33.svg";
import picture14 from "../././../assets/34.svg";
import picture15 from "../././../assets/35.svg";
import picture16 from "../././../assets/36.svg";
import picture17 from "../././../assets/Mask Group (2).jpg";
import picture18 from "../././../assets/Mask Group (7).png";
import picture19 from "../././../assets/Mask Group (8).png";
import picture20 from "../././../assets/Mask Group (9).png";
import picture21 from "../././../assets/Mask Group (10).png";
import picture22 from "../././../assets/Mask Group (11).png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import picture44 from "../././../assets/Group 115.png";
import picture55 from "../././../assets/Group 116.png";
import picture66 from "../././../assets/Group 117.png";
import picture77 from "../././../assets/Group 118.png";
import picture23 from "../././../assets/Mask Group (12).png";
import picture24 from "../././../assets/map (1).png";
import picture25 from "../././../assets/Group 122.png";
import picture26 from "../././../assets/Group 123.png";
import picture27 from "../././../assets/Group 124.png";
import picture28 from "../././../assets/Group 120.png";
import picture29 from "../././../assets/Group 119.png";
import picture30 from "../././../assets/Group 121.png";
import picture31 from "../././../assets/Mask Group (13).png";
import picture35 from "../././../assets/50.svg";

import "../../App.css"
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  return (
    <div>
      <div className=" w-[95%] m-auto">
        <div className=" grid sm:grid-cols-1 xl:grid-cols-2 pt-[50px]">
          <div>
            <p className=" sm:text-[30px] md:text-[50px] text-[#FEAD04] font-bold">
              {t("navbar.text1")}
            </p>
            <p className=" sm:text-[30px] md:text-[50px] ">
              <p className=" sm:text-[30px] md:text-[50px] ">
                {t("navbar.text2")}
              </p>
            </p>
          </div>
          <div>
            <img
              className=" transition ease-in-out delay-1500  hover:scale-110  duration-1000 "
              src={picture1}
              alt=""
            />
          </div>
        </div>
        <div className=" mt-[60px]">
          <div>
            <p className="  sm:text-[30px] md:text-[50px] ">
              {t("navbar.text3")}
            </p>
          </div>
          <div className=" flex flex-wrap justify-center gap-[20px]">
            <div className="l  transition ease-in-out delay-1500  hover:scale-110  duration-1000  border-[1px] p-[40px] w-[400px] ">
              <div className="  grid grid-cols-3 items-center">
                <img src={picture2} alt="" />
                <p> {t("navbar.text5")}</p>
                <img src={picture3} alt="" />
              </div>
            </div>
            <div className="q  transition ease-in-out delay-1500  hover:scale-110  duration-1000  border-[1px] p-[40px] w-[400px] ">
              <div className=" grid grid-cols-3 items-center">
                <img src={picture5} alt="" />
                <p> {t("navbar.text5")}</p>
                <img src={picture6} alt="" />
              </div>
            </div>
            <div className="e  transition ease-in-out delay-1500  hover:scale-110  duration-1000  border-[1px] p-[40px] w-[400px]  ">
              <div className=" grid grid-cols-3 items-center">
                <img src={picture7} alt="" />
                <p> {t("navbar.text5")}</p>
                <img src={picture8} alt="" />
              </div>
            </div>
            <div className="e  transition ease-in-out delay-1500  hover:scale-110  duration-1000  border-[1px] p-[40px] w-[400px]  ">
              <div className=" grid grid-cols-3 items-center">
                <img src={picture7} alt="" />
                <p> {t("navbar.text5")}</p>
                <img src={picture8} alt="" />
              </div>
            </div>
            <div className="q  transition ease-in-out delay-1500  hover:scale-110  duration-1000  border-[1px] p-[40px] w-[400px] ">
              <div className=" grid grid-cols-3 items-center">
                <img src={picture5} alt="" />
                <p> {t("navbar.text5")}</p>
                <img src={picture6} alt="" />
              </div>
            </div>
            <div className="q  transition ease-in-out delay-1500  hover:scale-110  duration-1000  border-[1px] p-[40px] w-[400px] ">
              <div className=" grid grid-cols-3 items-center">
                <img src={picture3} alt="" />
                <p> {t("navbar.text5")}</p>
                <img src={picture3} alt="" />
              </div>
            </div>
          </div>
          <div className=" mt-[40px] grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <img
              className="  transition ease-in-out delay-1500  hover:scale-110  duration-1000  sm:w-[1200px]"
              src={picture16}
              alt=""
            />
            <img
              className="  transition ease-in-out delay-1500  hover:scale-110  duration-1000  sm:w-[1200px]"
              src={picture11}
              alt=""
            />
            <img
              className="  transition ease-in-out delay-1500  hover:scale-110  duration-1000  sm:w-[1200px]"
              src={picture12}
              alt=""
            />
            <img
              className="  transition ease-in-out delay-1500  hover:scale-110  duration-1000  sm:w-[1200px]"
              src={picture13}
              alt=""
            />
            <img
              className="  transition ease-in-out delay-1500  hover:scale-110  duration-1000  sm:w-[1200px]"
              src={picture14}
              alt=""
            />
            <img
              className="  transition ease-in-out delay-1500  hover:scale-110  duration-1000  sm:w-[1200px]"
              src={picture15}
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <p className=" sm:text-[30px] md:text-[50px]">
              {t("navbar.text55")}
            </p>
          </div>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
            <div>
              <img className=" sm:w-[1200px]" src={picture17} alt="" />
              <p className=" text-center">{t("navbar.text6")}</p>
            </div>
            <div>
              <img className=" sm:w-[1200px]" src={picture18} alt="" />
              <p className=" text-center">
                {" "}
                <p className=" text-center">{t("navbar.text7")}</p>
              </p>
            </div>
            <div>
              <img className=" sm:w-[1200px]" src={picture19} alt="" />
              <p className=" text-center">
                <p className=" text-center">{t("navbar.text8")}</p>
              </p>
            </div>
            <div>
              <img className=" sm:w-[1200px]" src={picture20} alt="" />
              <p className=" text-center">
                {" "}
                <p className=" text-center">{t("navbar.text9")}</p>
              </p>
            </div>
            <div>
              <img className=" sm:w-[1200px]" src={picture21} alt="" />
              <p className=" text-center">
                {" "}
                <p className=" text-center">{t("navbar.text10")}</p>
              </p>
            </div>
            <div>
              <img className=" sm:w-[1200px]" src={picture22} alt="" />
              <p className=" text-center">
                <p className=" text-center">{t("navbar.text11")}</p>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className=" sm:text-[30px] md:text-[50px]">
              {t("navbar.text111")}
            </p>
          </div>
          <div className=" flex flex-wrap gap-[70px] justify-center">
            <img src={picture44} alt="" />
            <img src={picture55} alt="" />
            <img src={picture66} alt="" />
            <img src={picture77} alt="" />
          </div>
        </div>
        <div className=" mt-[50px] grid sm:grid-cols-1 xl:grid-cols-2 items-center gap-[10px]">
          <div>
            <p className=" sm:text-[30px] md:text-[50px]">
              {t("navbar.text12")}
            </p>
            <p>{t("navbar.text13")}</p>
            <button className=" mt-[20px] p-[10px] bg-yellow-500">
              {t("navbar.text14")}
            </button>
          </div>
          <div>
            <img className=" sm:w-[1200px]" src={picture23} alt="" />
          </div>
        </div>
        <div className=" mt-[50px] grid sm:grid-cols-1 xl:grid-cols-2 items-center gap-[10px]">
          <div>
            <img src={picture24} alt="" />
          </div>
          <div>
            <p className=" sm:text-[30px] md:text-[50px]">
              {t("navbar.text15")}
            </p>
            <p>{t("navbar.text16")}</p>
            <button className=" p-[10px] bg-yellow-500 mt-[30px]">
              {t("navbar.text17")}
            </button>
          </div>
        </div>
        <div>
          <div>
            <p className="  sm:text-[30px] md:text-[50px]">
              {t("navbar.text18")}
            </p>
          </div>
          <div className=" grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-6  gap-[10px]">
            <img className=" sm:w-[1200px]" src={picture25} alt="" />
            <img className=" sm:w-[1200px]" src={picture26} alt="" />
            <img className=" sm:w-[1200px]" src={picture27} alt="" />
            <img className=" sm:w-[1200px]" src={picture28} alt="" />
            <img className=" sm:w-[1200px]" src={picture29} alt="" />
            <img className=" sm:w-[1200px]" src={picture30} alt="" />
          </div>
        </div>
      </div>
      <div className="r dark:text-black grid mt-[60px] sm:grid-cols-1 xl:grid-cols-2 p-[20px] items-center">
        <div>
          <img className=" xl:w-[300px]" src={picture31} alt="" />
        </div>
        <div className=" border-[1px] bg-white p-[40px]">
          <p className=" sm:text-[30px] md:text-[50px]">{t("navbar.text19")}</p>
          <p>{t("navbar.text20")}</p>
          <div className=" grid grid-cols-2 gap-[20px]">
            <p className=" font-bold mt-[10px] border-b-[2px] border-black ">
              Иван
            </p>
            <p className=" font-bold mt-[10px] border-b-[2px] border-black ">
              Телефон
            </p>
          </div>
          <p className=" font-bold mt-[10px] border-b-[2px] border-black ">
            E-mail
          </p>
          <button className=" p-[15px] pl-[50px] pr-[50px] bg-yellow-500 mt-[20px]">
            Оставить заявку
          </button>
        </div>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={picture35} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={picture35} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={picture35} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={picture35} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={picture35} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home