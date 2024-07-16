import React from "react";
import { FaRegLightbulb, FaUsers, FaCogs } from "react-icons/fa";

const FeedbackCard = () => {
  return (
    <div className="w-full h-auto grid lg:pl-32     lg:grid-cols-3 lg:mt-[-100px] mt-20 mb-10 gap-10">
      {cardsData.map((card, index) => (
        <div key={index} className="flip-card lg:mx-0 mx-auto w-72 h-72">
          <div className="flip-card-inner bg-move  rounded-[35px]">
            <div className="flip-card-front bg-move border-4 border-gray-500 rounded-[35px] flex justify-center items-center">
              <div className="text-center bg-white py-8 px-6 rounded-2xl">
                {card.icon}
                <p className="font-poppins uppercase text-center text-black font-semibold text-[20px]">
                  {card.title}
                </p>
                <div className="w-7 h-2 bg-move mt-2"></div>
              </div>
            </div>
            <div className="flip-card-back bg-move border-4 border-gray-500 rounded-[35px] flex justify-center items-center">
              <div className="w-60 h-auto text-center text-white font-poppins">
                <p className="text-[20px] font-semibold">{card.backTitle}</p>
                <p className="text-[15px] font-semibold">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardsData = [
  {
    icon: <FaCogs size={50} className="mb-4 mx-auto text-move" />,
    title: "EXPÉRIENCE",
    backTitle: "EXPÉRIENCE",
    description:
      "Depuis plus de 8 ans, nous accompagnons nos clients dans leur parcours de modernisation et de digitalisation. Notre agence intègre le meilleur des stratégies et des innovations observées à travers une vaste gamme de secteurs, assurant ainsi une expertise à la fois riche et adaptée.",
  },
  {
    icon: <FaUsers size={50} className="mb-4 mx-auto text-move" />,
    title: "EQUIPE",
    backTitle: "EQUIPE EXPÉRIMENTÉE",
    description:
      "L'équipe de LABOOK DIGITAL c'est avant tout des experts spécialisés dans leur domaine, passionnés et certifiés par les meilleurs outils et les plateformes publicitaires.",
  },
  {
    icon: <FaRegLightbulb size={50} className="mb-4 mx-auto text-move" />,
    title: "INNOVATION",
    backTitle: "INNOVATION",
    description:
      "Nous nous engageons quotidiennement à perfectionner nos services et nos outils, les rendant plus flexibles et entièrement adaptés à des développements personnalisés, pour répondre précisément et intégralement à vos besoins spécifiques.",
  },
];

export default FeedbackCard;
