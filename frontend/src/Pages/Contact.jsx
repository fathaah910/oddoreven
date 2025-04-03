// import React from 'react'
// import Title from '../Components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../Components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title  text1={'CONTACT'} text2={'US'}/>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />

//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className='text-gray-600'>54709 Willms Station <br /> Suite 350,Washington, USA</p>
//           <p className='text-gray-600'>Tel:(321) 444-1233 <br /> Email:aaaaaaaaa.com</p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
//           <p className='text-gray-600'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact

import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <motion.div
        className='text-center text-2xl pt-10 border-t'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title text1={'CONTACT'} text2={'US'} />
      </motion.div>

      {/* Contact Content Section */}
      <motion.div
        className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Image */}
        <motion.img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt="Contact Us"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Contact Information */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <motion.p
            className='font-semibold text-xl text-gray-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Store
          </motion.p>
          <motion.p
            className='text-gray-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            54709 Willms Station <br /> Suite 350, Washington, USA
          </motion.p>
          <motion.p
            className='text-gray-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tel: (321) 444-1233 <br /> Email: aaaaaaaaa.com
          </motion.p>
          <motion.p
            className='font-semibold text-xl text-gray-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Careers at Forever
          </motion.p>
          <motion.p
            className='text-gray-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Learn more about our teams and job openings.
          </motion.p>
          <motion.button
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Explore Jobs
          </motion.button>
        </div>
      </motion.div>

      {/* Newsletter Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <NewsletterBox />
      </motion.div>
    </div>
  );
}

export default Contact;
