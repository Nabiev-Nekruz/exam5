import React from 'react'
import picter1 from "../../assets/Mask Group (5).png"
import picture2 from "../././../assets/Mask Group (1).jpg";
import picture3 from "../././../assets/image 55.jpg";
import picture4 from "../././../assets/Group 115.png";
import picture5 from "../././../assets/Group 116.png";
import picture6 from "../././../assets/Group 117.png";
import picture7 from "../././../assets/Group 118.png";
import picture8 from "../././../assets/image 50.jpg";
import picture31 from "../././../assets/Mask Group (13).png";

const About = () => {
  return (
    <div>
      <div className=" w-[95%] m-auto">
        <div className=" grid sm:grid-cols-1 xl:grid-cols-2 items-center">
          <div>
            <div className=" bg-[#FEAD04] p-[10px] sm:w-auto md:w-[380px] rounded-[10px]">
              <p>Верещинский Александр Павлович</p>
              <p>Основатель компании, доктор технических наук</p>
            </div>
            <p>
              Наши знания и возможности для Вас открыты и доступны. Рады будем
              принимать Вас в нашей компании и в нашем городе.
            </p>
            <p className=" text-yellow-500">
              с Уважением, Верещинский Александр Павлович
            </p>
          </div>
          <div>
            <img className=" sm:w-[1200px]" src={picter1} alt="" />
          </div>
        </div>
        <div>
          <div>
            <p className=" sm:text-[30px] md:text-[50px]">О компании</p>
            <p>
              ООО “ОЛИС” специализируется в разработке, производстве и внедрении
              в промышленность технологий и оборудования для переработки зерна
            </p>
          </div>
          <div className=" grid sm:grid-cols-1 xl:grid-cols-2 items-center gap-[30px]">
            <div>
              <p className=" text-[26px] text-yellow-400">Сегодня мы: </p>
              <p>
                Обладаем оригинальными современными технологиями и оборудованием
                по всем основным направлениям очистки зерна, производства муки и
                крупы, что подтверждается более чем 30-ю патентами в указанной
                области;
              </p>
              <p className=" mt-[20px]">
                Располагаем возможностью производства различных
                зерноочистительных комплексов, мельниц и крупоцехов от этапа
                разработки технологии до ввода объектов в эксплуатацию на
                оборудовании собственного производства.
              </p>
            </div>
            <div>
              <p className=" text-[26px] text-yellow-400">Наша миссия</p>
              <p>
                Среди развиваемых нами направлений особое внимание уделяется
                контролю качества зерна и продуктов его переработки. Результаты
                приложенных усилий воплощены в более чем 20-ти наименованиях
                серийно выпускаемых лабораторных приборов. С гордостью сообщаем,
                что в Украине, которая является крупнейшим мировым
                производителем зерна, каждая лаборатория по оценке его качества
                работает на оборудовании нашего производства!
              </p>
              <p className=" mt-[20px]">
                На нашем предприятии внедрены и используются самые современные
                технологии проектирования, конструирования и обработки металлов,
                а также управления качеством и предприятием в целом.
                Технологический уровень и организация нашего производства
                позволяет обеспечить высокое качество изделий по убедительным
                ценам и поставлять их более чем в 25 стран ближнего и дальнего
                зарубежья. Прилагаемые в течении двадцати лет усилия позволили
                нам завоевать это доверие.
              </p>
            </div>
          </div>
          <div className=" grid sm:grid-cols-1 xl:grid-cols-2 mt-[60px] items-center">
            <div>
              <p>
                Мы изобретаем, экспериментируем, проектируем, конструируем,
                изготавливаем, внедряем, обучаем и постоянно учимся сами.
                Отличительным нашим принципом является поиск рациональных
                методов для решения сложных технологических задач, что позволяет
                обеспечить значительный экономический эффект при внедрении.
                Поэтому наши проекты и отдельные изделия выгодно отличаются
                эффективностью от созданных по традиционным подходам.
              </p>
              <p className=" mt-[30px]">
                Основу исследовательского и инженерно-технического персонала
                нашего предприятия составляют лучшие выпускники Одесской
                национальной академии пищевых технологий, получившие огромный
                практический опыт на предприятиях отрасли хлебопродуктов.
                Основой конструкторской группы и производственного персонала
                являются бывшие работники станкостроительных предприятий г.
                Одессы, чей высокий профессионализм известен далеко за пределами
                нашего города.
              </p>
            </div>
            <div>
              <img className=" sm:w-[1200px]" src={picture2} alt="" />
            </div>
          </div>
          <div>
            <div>
              <p className=" text-center sm:text-[30px] md:text-[50px] font-bold">
                НАПРАВЛЕНИЯ
                <br /> ДЕЯТЕЛЬНОСТИ ООО "ОЛИС"
              </p>
            </div>
            <div className=" grid  sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              <p>
                Зерноочистительные комплексы Крупоцеха универсальные агрегатные
                Крупоцеха универсальные комплектные Крупоцеха по переработке
                гречихи Крупоцеха по переработке овса
              </p>
              <p>
                Крупоцеха по переработке кукурузы Мельницы агрегатные Мельницы
                сортового помола пшеницы Зерноочистительное оборудование
                Транспортное оборудование
              </p>
              <p>
                Технологическое оборудование для производства муки
                Технологическое оборудование для производства крупы
                Аспирационное оборудование Самотечное оборудование Лабораторное
                оборудование
              </p>
              <p>
                Комплексное оснащение лабораторий Проектирование Монтаж и
                наладка Реконструкции Сервисное обслуживание
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[40px]">
          <img src={picture3} alt="" />
        </div>
        <div>
          <p className=" text-center sm:text-[30px] md:text-[50px]">
            Преимущества
          </p>
        </div>
        <div className=" flex flex-wrap justify-center gap-[40px]">
          <img src={picture4} alt="" />
          <img src={picture5} alt="" />
          <img src={picture6} alt="" />
          <img src={picture7} alt="" />
        </div>
        <div className=" mt-[70px]">
          <p className=" sm:text-[30px] md:text-[50px]">наши сертификаты</p>
        </div>
        <div className=" grid md:grid-cols-3 xl:grid-cols-5 justify-center gap-[60px]">
          <img src={picture8} alt="" />
          <img src={picture8} alt="" />
          <img src={picture8} alt="" />
          <img src={picture8} alt="" />
          <img src={picture8} alt="" />
        </div>
      </div>
      <div className="r dark:text-black mt-[60px] grid sm:grid-cols-1 xl:grid-cols-2 p-[20px] items-center">
        <div>
          <img className=" xl:w-[300px]" src={picture31} alt="" />
        </div>
        <div className=" border-[1px] bg-white p-[40px]">
          <p className=" sm:text-[30px] md:text-[50px]">Форма обратной связи</p>
          <p>Заполните форму и мы свяжемся с вами</p>
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
    </div>
  );
}

export default About