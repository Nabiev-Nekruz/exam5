import React from 'react'
import picture1 from "../../assets/100.svg"
// import loadingGif from "../assets/waiting.gif";
// import { Gif } from '@mui/icons-material'
const Nothing = () => {
    return (
      <div className=" w-[95%] m-auto">
        <div className=" flex justify-center">
          <img width={750} src={picture1} alt="" />
        </div>
        <div className=" text-center">
          <p className=" sm:text-[30px] md:text-[50px] font-bold">
            Запрошенная вами
            <br /> страница не найдена
          </p>
          <p className="text-[26px]">
            Мы просим прощение за доставленные
            <br /> неудобства и предлагаем следующие пути:
          </p>
          <p className=" mt-[10px]">
            Вернуться при помощи кнопки браузера или по этой ссылке
          </p>
          <p className=" mt-[10px]">
            Проверить правильность написания адреса страницы (URL)
          </p>
          <p className=" mt-[10px]">Перейти на главную страницу сайта</p>
          <button className=" mt-[10px] pl-[100px] pr-[100px] pt-[15px] pb-[15px] rounded-[10px] bg-yellow-400">На главную</button>
        </div>
      </div>
    );
}

export default Nothing