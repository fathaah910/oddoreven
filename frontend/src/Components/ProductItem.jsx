import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} =useContext(ShopContext)
  return (
    <div>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition' src={image[0]} alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    </div>
  )
}

export default ProductItem

// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <motion.div
//       className=" shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <Link className="text-gray-700 cursor-pointer block" to={`/product/${id}`}>
//         {/* Image section with hover scaling effect */}
//         <motion.div
//           className="relative overflow-hidden "
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           <img
//             className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
//             src={image[0]}
//             alt={name}
//           />
//         </motion.div>
        
//         {/* Text section */}
//         <div className="pt-4 pb-2 text-sm">
//           <motion.p
//             className="text-sm font-medium text-gray-800 hover:text-gray-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {name}
//           </motion.p>
//           <motion.p
//             className="text-sm font-semibold text-gray-900"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             {currency}{price}
//           </motion.p>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductItem;
