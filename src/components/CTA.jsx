import React from "react";
import { f1, f2 } from "../assets";
import { FaDesktop, FaGem, FaSmile } from "react-icons/fa"; // FontAwesome icons

const CTA = () => {
  return (
    <div className="w-full   grid h-auto lg:grid-cols-2 gap-2 mb-10 " id="CTA">
      <div className="  grid sm:grid-cols-2   py-12 ">
        <img src={f1} className=" hidden lg:block mx-auto my-auto rounded-xl sm:w-64 sm:h-44" />
        <img src={f2} className=" hidden lg:block  sm:w-64 rounded-xl sm:h-96" />
      </div>
      <div className=" mt-[-100px] lg:mt-0 ">
        <h3 className="font-poppins uppercase text-gray-200 font-medium cursor-pointer text-center sm:text-left mb-2 text-[20px] fade-in">
          PLUS QU'UNE AGENCE DIGITAL
        </h3>
        <div className="w-44 h-2 bg-move mb-5 fade-in"></div>
        <h1 className="font-poppins uppercase text-white font-bold cursor-pointer text-center sm:text-left mb-2 text-[35px] fade-in">
          Votre Partenaire Innovant pour Réussir en Ligne
        </h1>
        <p className="font-poppins text-white font-medium cursor-pointer text-justify text-[16px] fade-in">
          Notre équipe, riche de plus de 8 ans d'expérience et composée
          d'ingénieurs compétents ainsi que d'experts en technologie digitale,
          est la pierre angulaire de notre expertise. Cette expérience
          approfondie, alliée à notre savoir-faire technique et notre esprit
          créatif, nous permet de vous offrir des solutions web et mobiles
          exceptionnelles. Chez LABOOK DIGITAL, nous prenons à cœur de concrétiser
          vos ambitions numériques en adaptant nos services à vos besoins
          spécifiques, grâce à une équipe expérimentée et passionnée par
          l'innovation.
        </p>
        <div className="  lg:grid grid-cols-3 ">
          <div className="  mx-auto w-52 h-52 flex justify-center items-center">
            {/* diamond icon */}
            <div>
              <FaGem size={50} className="text-move mx-auto mb-5" />
              <p className="font-poppins text-white font-medium text-center cursor-pointer text-[18px]">
                QUALITÉ ET INNOVATION
              </p>
            </div>
          </div>
          <div className=" mx-auto  w-52 h-52 flex justify-center items-center">
            {/* smile icon */}
            <div>
              <FaDesktop size={50} className="text-move mx-auto mb-5" />
              <p className="font-poppins text-white font-medium text-center cursor-pointer text-[18px]">
                PERSONNALISATION ET EXPERTISE
              </p>
            </div>
          </div>
          <div className=" mx-auto  w-52 h-52 flex justify-center items-center">
            <div>
              <FaSmile size={50} className="text-move mx-auto mb-5" />
              <p className="font-poppins text-white font-medium text-center cursor-pointer text-[18px]">
                RÉSULTATS ET SATISFACTION CLIENT
              </p>
            </div>

            {/* desktop icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
