import React from 'react';
// import Logo from "../Components/Assests/bag.png";
import { IoCall, IoCart, IoMenu, IoSearch } from "react-icons/io5";
// import { PiLineVerticalLight } from "react-icons/pi";
// import { FaLocationDot, FaPerson } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt, BiUser } from 'react-icons/bi';
import Logo from "./Assets/grocery-cart_2203206.png"

const Navbar = () => {
  return (
    <div className=' bg-green-100 mx-auto max-w-screen-2xl items-center text-green-700 '> 
      <div className="flex p-4 ml-6 space-x-8 justify-center items-center">
        {/* <IoMenu className="" size={28} /> */}
        <div className='flex space-x-1'>
        <img src={Logo} alt="" className="w-12 h-12 object-cover" />
        <h1 className=" text-4xl font-semibold">Fresh Market</h1>
        </div>
        
        <div className='search-cont'>
                    <BiSearchAlt className='icon' />
                    <input type="text" placeholder='Search Products' />
                </div>

        {/* <PiLineVerticalLight className=" text-[#706868] mt-2" size={24} /> */}
        
        <div className="flex space-x-2 p-2 items-center">
          {/* <FaLocationDot className='text-[#706868]' size={20} /> */}
          <h1 className="">Vellore, 632007</h1>
        </div>
        
        {/* <PiLineVerticalLight className=" text-[#706868] mt-2" size={24} /> */}
        
        <div className=" text-[#706868] p-2 flex space-x-4">
          <IoMdCall className='icon' size={24} />
          <FaHeart size={24} />
          <CgProfile size={24} />
          <IoCart size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
