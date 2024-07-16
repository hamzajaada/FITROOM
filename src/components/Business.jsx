import React from 'react'
import PercentageCards from './PercentageCard'

const Business = () => {
  return (
    <div className=''>
      <h1 className="font-poppins text-move font-semibold tracking-[5px] uppercase text-center cursor-pointer text-[35px] mb-5">
        Nos Statistiques
      </h1>
      <h3 className="font-poppins text-white font-bold text-center cursor-pointer text-[25px]">
        VOTRE SOLUTION POUR UNE TRANSFORMATION DIGITALE RÉUSSIE
      </h3>
      <div className="w-44 h-2 bg-move mx-auto my-5 fade-in"></div>
     <PercentageCards/>
    </div>
  )
}

export default Business