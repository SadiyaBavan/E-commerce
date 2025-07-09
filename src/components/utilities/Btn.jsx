import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Btn = ({ children, variant = "primary", type = "Button", isIconShow = true }) => {


  const baseStyle = "p-[2px] !rounded-full transition duration-200 cursor-pointer";

  const variants = {
    primary: "bg-orange text-white",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };
  // const baseStyle = "p-[2px] rounded-full transition duration-200 cursor-pointer";

  //  const variants = {
  //   primary: "bg-orange text-white",
  //   secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  // };

  return (

    <div>
      <button type={type} className={baseStyle + " " + variants[variant] + " flex justify-center items-center"}>
        {isIconShow && <span className="w-[52px] h-[52px] bg-white text-orange rounded-full flex justify-center items-center">
          <FaArrowRight size={18} />
        </span>}
        <span className="pl-[39px] pr-[73px] text-[18px]">{children}</span>
      </button>

    </div>
  )
}

export { Btn }
