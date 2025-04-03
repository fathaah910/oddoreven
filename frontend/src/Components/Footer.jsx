import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <h1 className='text-[#2b2b2b] text-3xl font-bold tracking-widest sm:text-4xl font-serif mb-5'>
                Glamzy
                </h1>
                <p className='w-full md:w-2/3 text-gray-600 '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vero ad veritatis perferendis exercitationem veniam sit eum reprehenderit quod. Earum, ipsa. Amet quisquam hic, beatae perferendis velit excepturi libero reiciendis odit illo?
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 999 999 9999</li>
                    <li>contact@you.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Glamzy.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer