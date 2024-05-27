"use client"
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from "react-hook-form"

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 lg:h-screen ">
      <div className="col-span-2  bg-secondaryGray md:h-screen h-1/3 ">
        <Image src='/login/armchair.svg' width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="flex justify-center gap-5 flex-col col-span-3 md:pl-20 md:pr-60 px-8 py-4 ">
        <h1 className='text-3xl font-medium'>Sign In</h1>
        <span className='text-darkGray'>Don't have an account yet? <Link className='text-green font-semibold' href='/'>Sign Up</Link></span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Your username or email address' 
            className='appearance-none bg-transparent h-14  w-full text-gray-700 border-b border-darkGray py-2 mr-3 px-2 leading-tight focus:outline-none' {...register("login", { required: true })}  />

        <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="appearance-none bg-transparent h-14 w-full text-gray-700 border-b border-darkGray py-2 mr-3 px-2 leading-tight focus:outline-none"
              {...register("password", { required: true })}
            />
            <img
              src="/login/eye.svg" 
              alt="Show password"
              className="absolute right-0 top-1/2 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
        </div>

          <div className='flex justify-between py-5'>
            <div className='flex items-center gap-1'>
              <input id='remember' type='checkbox' className='form-checkbox h-4 w-4 rounded border border-gray-300' />
              <label htmlFor="remember" className='text-darkGray'>Remember me</label>
            </div>

            <div>
              <span className='font-semibold'>Forgot password?</span>
            </div>

          </div>


          <Button text='Sign In' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Login
