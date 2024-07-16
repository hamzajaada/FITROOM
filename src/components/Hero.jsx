import React from "react";
import { heroPage } from "../assets";


const Hero = () => {
  return (
    <div className=" bg-black grid lg:grid-cols-2 " id="hero">
      <div className="  pt-52 h-96 pl-24">
        <h1 className="font-poppins uppercase text-white font-bold cursor-pointer text-center sm:text-left mb-2 text-[35px] fade-in">
          FITROOM : COMMENCER PAR UN PLAN, TERMINER PAR DES RÉSULTATS.
        </h1>

        <div className="w-44 h-2 lg:ml-0 mx-auto bg-move mb-5 fade-in"></div>

        <p className="font-poppins text-white font-normal cursor-pointer lg:text-justify text-center text-[16px] fade-in">
        FITROOM : Votre partenaire pour un parcours fitness réussi. Nous combinons expertise, technologie et motivation pour transformer vos objectifs de fitness en résultats concrets et mesurables.
        </p>

        <div className="lg:flex lg:items-center space-x-4 mt-10">
          <div className="flex justify-center ">
             <button className="bg-move rounded-xl font-poppins text-black font-semibold uppercase    h-14 lg:px-5  px-10 hover:bg-purple-950 transition duration-300 ease-in-out fade-left">
            En savoir plus
          </button>
          </div>
          <div className="flex justify-center my-5">
          <button className="border-2 border-move rounded-xl font-poppins uppercase text-white font-normal py-3 lg:px-5 px-10 hover:bg-purple-950  transition duration-300 ease-in-out fade-left">
            Contactez-nous
          </button>
          </div>
        </div>
      </div>
      <div className=" mt-[-450Px]">
        <img
          src={heroPage}
          className="  "
          alt="Background"
        />
      </div>

      
    </div>
  );
};

export default Hero;
