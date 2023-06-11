"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import Button from "./Button";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";


const NavBar = () => {
  return (

    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-6 relative max-w-[97rem] w-full bg-white  border-2 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto  " aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold " href="#" aria-label="Brand">Brand</a>
          <div className="flex flex-row justify-between items-center gap-4 md:hidden">

          <div className='relative cursor-pointer '>
              <AiOutlineShoppingCart size={28}/>
              <span className='absolute pl-[7px] pr-[7px] rounded-full  top-[-4px] right-[-4px] text-[10px] bg-red-500 text-white py-[0px] '>6</span>
            </div>




            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"></button>


          </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <a className="font-medium text-blue-600 md:py-6 dark:text-blue-500" href="#" aria-current="page">Mens</a>
            <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 " href="#">Womens</a>
            <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 " href="#">Kids</a>
            <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 " href="#">All Products</a>

            <div className=" md:py-4">
              <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium   ">
                Dropdown
                <AiOutlineDown size={12} className="mt-1"/>
              </button>


            </div>

            <div>
              <label className="sr-only">Label</label>
              <div className="relative flex rounded-md shadow-sm">
                <input type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" className="py-2 px-4 pl-11 block w-full  border-2  rounded-full text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Search.."></input>
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <BsSearch size={16}/>
                </div>
                
              </div>
            </div>

            <div className='relative cursor-pointer '>
              <AiOutlineShoppingCart size={28}/>
              <span className='absolute pl-[7px] pr-[7px] rounded-full  top-[-4px] right-[-4px] text-[10px] bg-red-500 text-white py-[0px] '>6</span>
            </div>

            <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6" href="#">

              {/* avatar icon */}
              <RxAvatar size={20}/>
              Log in
            </a>
            

          </div>
        </div>
      </nav>
    </header>

  );
};

export default NavBar;
