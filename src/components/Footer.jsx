import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"; // Import des icônes
import { logobb } from "../assets";

const Footer = () => {
  return (
    <div className="w-full h-full   grid lg:grid-cols-3   my-10  border-t-2 border-gray-200 ">
      <div className=" w-full h-full  ">
        <div className="  w-full  h-2/3 lg:pr-20    ">
          <div>
            <img src={logobb} alt="" className=" w-full h-36" />
            <p className=" font-poppins text-gray-400 font-medium text-center lg:text-justify cursor-pointer text-[14px]">
              Que vous soyez une start-up ambitieuse, une PME ou un groupe de
              renom, nous pouvons répondre à vos enjeux de visibilité et
              d’efficacité de vos activités sur tous les niveaux du sourcing
              digital
            </p>
          </div>
        </div>
        <div className=" w-full h-1/3 flex flex-col items-start p-4">
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2  text-white" /> {/* Icône d'email */}
            <span className="text-white">email@example.com</span>
            <div></div>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-white" /> {/* Icône de téléphone */}
            <span className="text-white">(123) 456-7890</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-white" />{" "}
            {/* Icône d'adresse */}
            <span className="text-white">123 Rue Exemple, Ville, Pays</span>
          </div>
        </div>
      </div>
      <div className=" w-full h-full py-10 lg:pl-28  ">
        <h1 className="font-poppins text-white mb-10 uppercase tracking-[5px] font-bold text-center lg:text-justify cursor-pointer text-[17px]">
          Menu
        </h1>
        <h2 className="font-poppins text-white mb-2 uppercase tracking-[5px] font-medium text-center lg:text-justify cursor-pointer text-[14px]">
          Accueil
        </h2>
        <h2 className="font-poppins text-white mb-2 uppercase tracking-[5px] font-medium text-center lg:text-justify cursor-pointer text-[14px]">
          L'agence
        </h2>
        <h2 className="font-poppins text-white mb-2 uppercase tracking-[5px] font-medium text-center lg:text-justify cursor-pointer text-[14px]">
          Nos Services
        </h2>
        <h2 className="font-poppins text-white mb-2 uppercase tracking-[5px] font-medium text-center lg:text-justify cursor-pointer text-[14px]">
          Portfolio
        </h2>
      </div>
      <div className=" w-full h-full py-10 lg:pl-28">
        <h1 className="font-poppins text-white mb-10 uppercase tracking-[5px] font-bold text-center lg:text-justify cursor-pointer text-[17px]">
          Suivez Nous
        </h1>
        
        <div className="flex justify-center lg:block">
          <div className="flex space-x-4">
          <FaFacebook className="text-white text-2xl cursor-pointer" />{" "}
          {/* Icône de Facebook */}
          <FaInstagram className="text-white text-2xl cursor-pointer" />{" "}
          {/* Icône d'Instagram */}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
