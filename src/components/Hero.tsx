"use client"
import React from 'react'
import Wrapper from "@/components/Wrapper"
import Button from '@/components/Button'
import Image from "next/image"
import HeroImg from "@/assets/images/hero.jpg";
import HeroImg2 from "@/assets/images/hero2.png";
import { AiOutlineShoppingCart } from "react-icons/ai"
import PumaImg from "@/assets/images/puma.png"
import AdidasImg from "@/assets/images/adidas.png"
import NikeImg from "@/assets/images/nike.png"
import ReebokImg from "@/assets/images/reebok.png"

const Hero = () => {
  return (
    <div className='  w-full block my-10'>

      {/* <!-- Hero --> */}
      {/* <!-- Hero --> */}
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl ">An Industrial Take on Streetwear</h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full sm:w-auto">
                <label className="sr-only">Search</label>
                <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full xl:min-w-[18rem] border-2 border-gray-300 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500  " placeholder="What are you looking for? "></input>
              </div>
              <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                Start Shopping
              </a>
            </div>

            {/* <!-- Brands --> */}
            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium text-gray-800 uppercase ">Trusted by:</span>

              <div className="mt-4 flex gap-x-8">
                
                <Image src={AdidasImg} alt=''className = "w-[60px]"/>
                <Image src={PumaImg} alt=''className = "w-[60px]"/>
                <Image src={AdidasImg} alt=''className = "w-[60px]"/>
              </div>
            </div>
            {/* <!-- End Brands --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Image Description"></img>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hero --> */}

    </div>


  )
}

export default Hero