import React from "react";
import { EC } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NosClient = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="w-full h-auto grid gap-4 lg:grid-cols-3 p-4" ref={ref}>
      <div className="w-full h-full flex  lg:pl-20 items-center">
        <div>
          <motion.h2
            className="font-poppins text-move font-semibold tracking-[5px] text-[20px] md:text-[25px]"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            CLIENTS
          </motion.h2>
          <motion.div
            className="w-32 md:w-44 h-2 bg-move my-2"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.h1
            className="font-poppins text-gray-400 font-bold tracking-[2px] text-[30px] md:text-[40px]"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            Nos Client
          </motion.h1>
        </div>
      </div>
      <div className="w-full h-full col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="w-full h-24 md:h-full flex items-center justify-center p-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={EC} alt={`client-logo-${index}`} className="max-w-full max-h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NosClient;
