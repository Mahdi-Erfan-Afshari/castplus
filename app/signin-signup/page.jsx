'use client'
import { useRouter } from 'next/navigation'
import { nunito } from '../utils/fonts';
import { useState , useEffect} from 'react';
import {VscEye, VscEyeClosed} from 'react-icons/vsc'
import GoogleSignInButton from '../components/GoogleSignInButton';

const LoginSignUpPage = () => {
  return (
	<div className={`${nunito.className} ${"flex justify-center"}`}>
		<div className="flex flex-col justify-center items-center md:w-[480px] sm:w-[550px] w-[340px] shadow-lg h-full overflow-hidden bg-white rounded-2xl my-12">
			<h1 className='text-2xl font-semibold mt-6'>CastPlus</h1>
			<div id="login-form" className="w-full mt-2 mb-6 px-5 sm:px-10">
				<GoogleSignInButton />
			</div>
		</div>
	</div>
  )
}

export default LoginSignUpPage