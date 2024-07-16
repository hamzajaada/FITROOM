import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { webdev, design, marketing } from "../assets";
import { FaArrowRight } from "react-icons/fa";

const CardDeal = () => {
  const [image, setImage] = useState(webdev);
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = (img) => {
    setFlipped(true);
    setTimeout(() => {
      setImage(img);
      setFlipped(false);
    }, 300); // Adjust this timeout to match the duration of your flip animation
  };

  const handleMouseLeave = () => {
    setFlipped(true);
    setTimeout(() => {
      setImage(webdev);
      setFlipped(false);
    }, 300);
  };

  return (
    <div className="w-full h-auto mb-10  ">
      <h1 className="font-poppins text-move font-semibold tracking-[5px] uppercase text-center cursor-pointer text-[35px]">
        Nos Services
      </h1>
      <h3 className="font-poppins text-white font-bold text-center cursor-pointer text-[25px]">
        VOTRE SOLUTION POUR UNE TRANSFORMATION DIGITALE RÉUSSIE
      </h3>
      <div className="w-44 h-2 bg-move mx-auto my-5 fade-in"></div>

      <div className="w-full grid lg:grid-cols-4 h-auto ">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-1 h-full bg-move"></div>
          <div className={`transition duration-500 ease-in-out transform hidden lg:block ${flipped ? 'rotateY-180' : ''}`}>
            <img src={image} className="w-72 h-96 rounded-r-xl transition duration-500 ease-in-out transform hover:scale-105 fade-left" />
            <div className="w-full h-1 bg-move"></div>
          </div>
        </div>
        <div className="w-full  lg:px-10 col-span-3 h-full">
          <div 
            className="grid border-b py-10    border-move w-full h-auto lg:grid-cols-4"
            onMouseEnter={() => handleMouseEnter(webdev)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-full   lg:flex lg:items-center">
              <p className=" font-poppins font-bold text-[35px] lg:text-left text-center text-white">1</p>
            </div>
            <div className="w-full h-full flex items-center">
              <p className="font-poppins text-white font-bold lg:text-left  text-center cursor-pointer text-[25px]">
                Web & Mobile Development
              </p>
            </div>
            <div className="lg:w-80 w-full  h-auto   my-3 lg:my-0 ">
              <p className="text-[15px] text-white font-poppins lg:text-justify text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque cupiditate, aliquam eos asperiores atque consequatur! Esse ullam perferendis dicta doloribus praesentium vitae reprehenderit consequuntur unde quasi, facilis a aspernatur?
              </p>
            </div>
            <div className="ml-24 w-32 h-full flex items-center my-5 lg:my-0 justify-center"> 
              <FaArrowRight className="ml-2 text-[35px] font-bold text-move" />
            </div>
          </div>
          <div 
            className="grid border-b py-10   border-move w-full h-auto lg:grid-cols-4"
            onMouseEnter={() => handleMouseEnter(design)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-full lg:flex lg:items-center">
              <p className="font-poppins font-bold text-[35px] lg:text-left text-center text-white">2</p>
            </div>
            <div className="w-full h-full  lg:flex lg:items-center">
              <p className="font-poppins text-white font-bold lg:text-left text-center cursor-pointer text-[25px]">
                Interaction Design
              </p>
            </div>
            <div className="lg:w-80 w-full h-auto my-3 lg:my-0">
              <p className="text-[15px] text-white font-poppins lg:text-justify text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque cupiditate, aliquam eos asperiores atque consequatur! Esse ullam perferendis dicta doloribus praesentium vitae reprehenderit consequuntur unde quasi, facilis a aspernatur?
              </p>
            </div>
            <div className="ml-24 w-32 h-full flex items-center my-5 lg:my-0 justify-center"> 
              <FaArrowRight className="ml-2 text-[35px] font-bold text-move" />
            </div>
          </div>
          <div 
            className="grid py-10 w-full h-auto lg:grid-cols-4"
            onMouseEnter={() => handleMouseEnter(marketing)}
            onMouseLeave={handleMouseLeave} 
          >
            <div className="w-full h-full lg:flex lg:items-center">
              <p className="font-poppins font-bold text-[35px] lg:text-left text-center text-white">3</p>
            </div>
            <div className="w-full h-full  lg:flex lg:items-center">
              <p className="font-poppins text-white font-bold lg:text-left text-center cursor-pointer text-[25px]">
                Digital <br /> Marketing
              </p>
            </div>
            <div className="lg:w-80 w-full h-auto my-3 lg:my-0">
              <p className="text-[15px] text-white font-poppins lg:text-justify text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque cupiditate, aliquam eos asperiores atque consequatur! Esse ullam perferendis dicta doloribus praesentium vitae reprehenderit consequuntur unde quasi, facilis a aspernatur?
              </p>
            </div>
            <div className="ml-24 w-32 h-full flex  my-5 lg:my-0 items-center justify-center"> 
              <FaArrowRight className="ml-2 text-[35px] font-bold text-move" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto grid lg:grid-cols-4">
        <div className="w-full h-full lg:border-r-2 lg:border-gray-300 flex justify-center items-center">
          <div>
            <p className="text-center font-poppins font-bold text-[35px] text-white">
              <CountUp end={48} duration={6} />
            </p>
            <p className="text-center font-poppins font-bold text-[20px] text-gray-500">
              Clients satisfaits
            </p>
          </div>
        </div>
        <div className="w-full h-full lg:border-r-2 lg:border-gray-300 flex justify-center items-center">
          <div>
            <p className="text-center font-poppins font-bold text-[35px] text-white">
              <CountUp end={61} duration={6} />
            </p>
            <p className="text-center font-poppins font-bold text-[20px] text-gray-500">
              Projets à succès
            </p>
          </div>
        </div>
        <div className="w-full h-full lg:border-r-2 lg:border-gray-300 flex justify-center items-center">
          <div>
            <p className="text-center font-poppins font-bold text-[35px] text-white">
              <CountUp end={6} duration={6} />
            </p>
            <p className="text-center font-poppins font-bold text-[20px] text-gray-500">
              Années d'expérience
            </p>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <p className="text-center font-poppins font-bold text-[35px] text-white">
              <CountUp end={7} duration={6} />
            </p>
            <p className="text-center font-poppins font-bold text-[20px] text-gray-500">
              Equipe professionnelle
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardDeal;
