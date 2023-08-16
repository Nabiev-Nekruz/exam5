import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import picture1 from "../assets/0_9 1 (1).png"
import picture2 from "../assets/Слой 0 1 (1).png"
import picture3 from "../assets/Vector (3).png"
import IconNavbar from "../components/burger/burger";
import Switcher from "../components/Switcher/Switcher";
import picture4 from "../assets/search (1) 2.png"
import picture5 from "../assets/Group 81.png"
import { useTranslation } from "react-i18next";


const Layout = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  const { pathname } = useLocation();


  return (
    <div className=" bg-white dark:bg-gradient-to-r from-cyan-500 to-blue-500  dark:text-white">
      <div className=" w-[95%] m-auto p-[10px] ">
        <div className="navbar flex  justify-between items-center">
          <ul className=" flex gap-[100px] justify-center">
            <Link to="/">
              <img src={picture2} alt="" />
            </Link>
          </ul>
          <div className="sm:flex lg:hidden">
            <IconNavbar />
          </div>
          <div className=" sm:hidden lg:flex items-center gap-[10px]">
            <div>
              <ul className=" flex gap-[40px] items-center">
                {pathname === "/Komp" ? (
                  <Link to="/Komp">
                    <li className=" text-red-600  hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000 ">
                      {t("navbar1.text1")}
                    </li>
                  </Link>
                ) : (
                  <Link to="/Komp">
                    <li className=" hover:bg-red-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000">
                      {t("navbar1.text1")}
                    </li>
                  </Link>
                )}
                {pathname === "/Obj" ? (
                  <Link to="Obj">
                    <li className="  hover:bg-red-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000 text-blue-500">
                      {t("navbar1.text2")}
                    </li>
                  </Link>
                ) : (
                  <Link to="Obj">
                    <li className=" hover:bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000">
                      {t("navbar1.text2")}
                    </li>
                  </Link>
                )}
                {pathname === "/Press" ? (
                  <Link to="Press">
                    <li className="  hover:bg-gray-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000 text-green-500">
                      {t("navbar1.text3")}
                    </li>
                  </Link>
                ) : (
                  <Link to="Press">
                    <li className=" hover:bg-green-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000">
                      {t("navbar1.text3")}
                    </li>
                  </Link>
                )}

                {pathname === "/About" ? (
                  <Link to="About">
                    <li className="  hover:bg-green-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000 text-pink-300">
                      {t("navbar1.text4")}
                    </li>
                  </Link>
                ) : (
                  <Link to="About">
                    <li className=" hover:bg-gray-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000 ">
                      {t("navbar1.text4")}
                    </li>
                  </Link>
                )}

                {pathname === "/Contact" ? (
                  <Link to="Contact">
                    <li className="  hover:bg-red-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000 text-violet-700">
                      {t("navbar1.text5")}
                    </li>
                  </Link>
                ) : (
                  <Link to="Contact">
                    <li className=" hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  hover:pl-[20px] hover:pr-[20px] hover:pt-[10px] hover:pb-[10px] hover:rounded-[10px] transition ease-in-out delay-1500  hover:scale-110  duration-1000">
                      {t("navbar1.text5")}
                    </li>
                  </Link>
                )}
              </ul>
            </div>
            <div className=" flex gap-[20px] items-center">
              <img src={picture4} alt="" />
              <select
                onChange={(event) => changeLanguage(event.target.value)}
                className=" dark:text-black"
                name=""
                id=""
              >
                <option value="ru">RU</option>
                <option value="en">En</option>
              </select>
              <div className=" items-center">
                <p>Наши номера</p>
                <div className=" flex items-center">
                  <img src={picture3} alt="" />
                  <p>+38 (067) 822-85-58</p>
                </div>
              </div>
              <Switcher />
            </div>
          </div>
        </div>
        <Outlet />
        <div className="footer w-[95%] m-auto  mt-[100px]">
          <div className=" flex  flex-wrap gap-[100px] items-center">
            <div>
              <img src={picture2} alt="" />
              <p className=" w-[172px] pt-[20px]">
                © 2021 ООО «ОЛИС». Все права защищены
              </p>
              <p className=" text-yellow-400 pt-[20px]">Карта сайта</p>
            </div>
            <div className=" sm:hidden lg:block">
              <p className=" font-bold text-[18px]">Подпишись на рассылку</p>
              <img className=" dark:bg-white" src={picture5} alt="" />
            </div>
            <div>
              <p>Наша компания</p>
              <p>Как мы работаем</p>
              <p>Отзывы о компании</p>
              <p>Новинки компании</p>
            </div>
            <div>
              <p>Пресс-центр</p>
              <p>Новости</p>
              <p>Статьи</p>
              <p>Выставки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
