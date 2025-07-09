import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Btn } from '../../../components/utilities'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className=''>
        <div className='benner-title  bg-orange h-[229px]'>
          <h1 className='py-5 text-white text-center'>Welcome Back! <br />
            Let's Get Started</h1>
        </div>

        <form className='mb-6'>
          <div className='form-card h-[353px] w-[353px] mx-[auto] rounded-2xl p-3 mt-[-50px] bg-white shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]" '>
            <h3 className='text-[20px] mb-[14px]'>Access Your Account and Explore More</h3>
            {/* Email */}
            <label className='my-1'>Email Address<span className='text-red'>*</span></label>
            <input type="email" className='py-2 px-1 w-full border-gray border-[1px] rounded-[5px]' placeholder='' />

            {/* Password */}
            <label className='my-1'>Password <span className='text-red'>*</span></label>
            <input type="email" className='py-2 px-1 w-full border-gray border-[1px] rounded-[5px]' placeholder='' />

            <div className='py-3'>
              <span className='underline text-gray-dark'>Forgot Password?</span>
            </div>

            {/* Button */}

            <div className="flex items-center justify-center mt-4 relative z-99">
              <Btn children="Sign In" type='submit' variant='primary'></Btn>
            </div>

          </div>
        </form>

        <div className="text-center mt-5">
          <span className='text-black'>Not a member?</span> <Link className="font-medium text-black underline">Create an account</Link>
        </div>
      </div >
    </>
  )
}

export { Login }
