// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400 '>
//         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                 </div>

//                 <button>explore</button>

//             </div>
//         </div>

//         <img className='w-full sm:w-1/2' src={assets.newhero} alt="" />
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row py-10 sm:py-0 bg-gray-100 rounded-lg">
      
      {/* Left Section - Text and Button */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start sm:pl-10 px-5">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <div className="flex items-center gap-3 mb-3">
            <p className="w-10 md:w-12 h-[2px] bg-gray-800"></p>
            <p className="font-semibold text-sm md:text-base uppercase tracking-wider text-gray-500">OUR BESTSELLERS</p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-snug text-gray-900"
          >
            Latest Arrivals
          </motion.h1>

          <div className="flex items-center gap-3 mt-4">
            <p className="font-semibold text-sm md:text-base text-gray-700">SHOP NOW</p>
            <p className="w-10 md:w-12 h-[2px] bg-gray-800"></p>
          </div>

          <Link to='/collection'>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 px-8 py-2 text-white bg-black rounded-md text-sm font-medium hover:bg-gray-800 transition duration-300"
          >
            Explore
          </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full sm:w-1/2 mt-10 sm:mt-0"
      >
        <img className="w-full h-full object-cover rounded-lg shadow-lg" src={assets.newhero} alt="New Arrivals" />
      </motion.div>
    </div>
  )
}

export default Hero;
