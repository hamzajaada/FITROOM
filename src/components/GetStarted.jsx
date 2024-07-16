import React from 'react'

const GetStarted = () => {
  return (
    <div className='w-full h-auto lg:h-96 grid py-5 lg:py-0 lg:grid-cols-4 rounded-3xl  bg-grad px-5 bg-grad  mb-10'>
      <div className='flex justify-center items-center px-10 lg:col-span-3'>
         <div className='  h-auto  '>
       <h1 className="font-poppins uppercase text-white font-bold cursor-pointer text-center sm:text-left mb-2 text-[35px] ">Explorez nos services dès maintenant !</h1>
       <p className="font-poppins text-white font-medium cursor-pointer lg:text-justify text-center  text-[16px] ">Notre agence de communication excelle dans la technologie, le graphisme et le marketing, offrant des solutions innovantes et créatives dans le développement web, le design, le référencement (SEO) et les applications mobiles.</p>
      </div>
      </div>
     
      <div className=' my-5  lg:my-0 h-auto flex justify-center items-center'>
        <div>
        <button className='px-7 py-5 text-white rounded-3xl   bg-purple-600 uppercase font-poppins font-bold  '>Commencez dès maintenant</button>
        </div>
      </div>
      
    </div>
  )
}

export default GetStarted