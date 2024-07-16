import React from 'react'
import {st1 , st2} from '../assets'

const Clients = () => {
  return (
    <div className='w-full h-auto  mb-10'>
      <div className='grid  lg:grid-cols-2 w-full h-full '>
        
        <div className='w-auto h-auto  '>
     
       <img src={st1} className=''/>
        </div>
        <div className='   lg:relative  flex  justify-center items-center  w-auto h-auto '>
        <div className="w-full lg:relative hidden lg:block lg:right-7 h-1 bg-move mb-5 "></div>
          <div className='lg:absolute lg:right-4 '>
            <h1 className=' lg:relative lg:right-7 font-poppins text-center lg:text-left text-move font-bold tracking-[5px] uppercase  cursor-pointer text-[65px]'> <span className='text-white'>Abo</span><span className='text-move'>ut</span></h1>
            <p className='lg:relative lg:right-7  font-poppins text-center lg:text-left text-gray-300 font-semibold cursor-pointer  text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati repellendus numquam eos laudantium minus odio veritatis eligendi nisi accusamus quia adipisci est saepe id facere expedita doloribus, aperiam necessitatibus?</p>
          </div>



        </div>
      
        <div className='     w-auto h-auto '>
          <div className=' lg:px-10'>
             <h1 className=' font-poppins text-move text-center lg:text-left font-bold tracking-[5px] uppercase  cursor-pointer text-[65px]'>U<span className='text-white'>S</span> </h1>
             <div className="w-full h-1 bg-move mb-5 hidden lg:block"></div>
            <p className=' font-poppins text-gray-300 font-semibold cursor-pointer text-center lg:text-left   text-[16px]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem obcaecati repellendus numquam eos laudantium minus odio veritatis eligendi nisi accusamus quia adipisci est saepe id facere expedita doloribus, aperiam necessitatibus?</p>
          </div>
        </div>
        <div className='w-auto lg:relative lg:right-10   lg:bottom-4 h-auto '>
        <img src={st2} className=' hidden lg:block rounded-2xl'/>
          </div>
          
      </div>
    </div>
  )
}

export default Clients