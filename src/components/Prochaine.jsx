import React from "react";

const Prochaine = () => {
  return (
    <div className="bg-mvg w-full h-auto lg:h-96 rounded-[20px] grid lg:grid-cols-4">
      <div className=" lg:col-span-3   w-full flex items-center pl-5">
        <div>
          <p className="font-poppins text-gray-400 font-bold tracking-[2px] text-center lg:text-left text-[15px] my-2">
            PARLONS
          </p>
          <h1 className="font-poppins text-gray-400 font-bold tracking-[2px] text-center lg:text-left text-[35px] my-2">
            À PROPOS DE VOTRE PROCHAIN PROJET.
          </h1>
          <p className="font-poppins text-gray-400 font-medium  text-[15px] text-center lg:text-left my-2">
            Un premier contact pour discuter vos besoins et les objectifs de
            votre projet est la meilleure manière de vous aider à realiser votre
            stratégie digitale.
          </p>
        </div>
      </div>
      <div className='   h-auto flex justify-center items-center'>
        <div>
        <button className='px-7 py-5 border-2 border-purple-300 text-white rounded-md    bg-black uppercase font-poppins font-bold  '>Commencez dès maintenant</button>
        </div>
      </div>
    </div>
  );
};

export default Prochaine;
