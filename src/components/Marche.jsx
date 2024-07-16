import React from 'react';
import { FaLightbulb, FaPencilAlt, FaCode, FaCheck } from 'react-icons/fa';

const Marche = () => {
  return (
    <div className="w-full h-auto mb-20 ">
      <h2 className="font-poppins font-semibold text-center text-move text-[50px]">LABOOK DIGITAL</h2>
      <div className="w-44 mx-auto h-2 bg-move"></div>
      <h1 className="font-poppins font-bold text-center text-gray-400 text-[40px] mb-10">Comment ça marche</h1>
      <div className="grid lg:grid-cols-4 w-full h-auto">
        <div className="w-full h-full flex flex-col items-center justify-center border-r-2 border-gray-400">
          <FaLightbulb className="text-gray-400 text-6xl mb-5" />
          <h1 className="font-poppins font-bold uppercase text-move text-2xl text-center">On Vous Conseil</h1>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center border-r-2 border-gray-400">
          <FaPencilAlt className="text-gray-400 text-6xl mb-5" />
          <h1 className="font-poppins font-bold uppercase text-move text-2xl">On Crée</h1>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center border-r-2 border-gray-400">
          <FaCode className="text-gray-400 text-6xl mb-5" />
          <h1 className="font-poppins font-bold uppercase text-move text-2xl text-center">On Vous Développe</h1>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <FaCheck className="text-gray-400 text-6xl mb-5" />
          <h1 className="font-poppins font-bold uppercase text-move text-2xl text-center">On Teste et <br /> on Vous Livre</h1>
        </div>
      </div>
    </div>
  );
};

export default Marche;
