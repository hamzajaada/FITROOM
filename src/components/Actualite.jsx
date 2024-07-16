import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { coding } from '../assets';

const Actualite = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full h-auto">
      <h2 className="font-poppins font-semibold text-center text-move text-[40px] sm:text-[50px]">
        LES DERNIÈRES
      </h2>
      <div className="w-24 h-1 bg-move mx-auto sm:w-44 sm:h-2"></div>
      <h1 className="font-poppins font-bold text-center text-gray-400 text-[30px] sm:text-[40px] mb-6 sm:mb-10">
        ACTUALITÉS
      </h1>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animationVariants}
              className="flex flex-col sm:flex-row"
            >
              <motion.div
                variants={animationVariants}
                whileHover="hover"
                className="w-full sm:w-1/2 h-full sm:h-96  border border-move grid grid-cols-1 sm:grid-cols-2 mb-5 sm:mb-0 mr-0 sm:mr-5"
              >
                <div className="w-full h-full">
                  <img src={coding} className="w-full h-full" alt="coding" />
                </div>
                <div className="w-full h-full bg-slate-900 py-3 px-5 pt-5">
                  <h1 className="font-poppins font-semibold text-move text-[16px] sm:text-[20px]">LABOOK DIGITAL</h1>
                  <div className="w-24 h-1 bg-move mb-3 sm:w-44 sm:mb-5"></div>
                  <p className="font-poppins font-bold text-gray-400 text-[12px] sm:text-[15px] mb-6 sm:mb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi inventore dicta a dolor numquam eveniet corrupti sit
                    unde facere repudiandae! Veniam suscipit esse in explicabo
                    atque officia nulla laborum. Culpa!
                  </p>
                  <button className='px-4 py-2 sm:px-5 sm:py-3 text-white rounded-2xl bg-purple-600 uppercase font-poppins font-semibold tracking-[1px] sm:tracking-[2px]'>Lire la suite</button>
                </div>
              </motion.div>
              <motion.div
                variants={animationVariants}
                whileHover="hover"
                className="w-full sm:w-1/2 h-full sm:h-96  border border-move grid grid-cols-1 sm:grid-cols-2"
              >
                <div className="w-full h-full">
                  <img src={coding} className="w-full h-full" alt="coding" />
                </div>
                <div className="w-full h-full bg-slate-900 py-3 px-5 pt-5">
                  <h1 className="font-poppins font-semibold text-move text-[16px] sm:text-[20px]">LABOOK DIGITAL</h1>
                  <div className="w-24 h-1 bg-move mb-3 sm:w-44 sm:mb-5"></div>
                  <p className="font-poppins font-bold text-gray-400 text-[12px] sm:text-[15px] mb-6 sm:mb-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi inventore dicta a dolor numquam eveniet corrupti sit
                    unde facere repudiandae! Veniam suscipit esse in explicabo
                    atque officia nulla laborum. Culpa!
                  </p>
                  <button className='px-4 py-2 sm:px-5 sm:py-3 text-white rounded-2xl bg-purple-600 uppercase font-poppins font-semibold tracking-[1px] sm:tracking-[2px]'>Lire la suite</button>
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Actualite;
