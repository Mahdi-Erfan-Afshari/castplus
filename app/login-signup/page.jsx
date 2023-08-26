'use client'
import Image from 'next/image';
import Logo from '@/app/img/Group1.svg'
import LogoBlack from '@/app/img/Group.svg'
import { nunito } from '../utils/fonts';

const LoginSignUpPage = () => {

	const changeToLoginForm = () => {
		let signUpBtn = document.getElementById('signup-btn');
		let loginBtn = document.getElementById('login-btn');
		let loginForm = document.getElementById('login-form');
		let signupForm = document.getElementById('signup-form');

		loginBtn.classList.add('form-btn-active');
		signUpBtn.classList.remove('form-btn-active');
		loginForm.classList.remove('remove');
		signupForm.classList.add('remove');
	}

	const changeToSignUpForm = () => {
		let signUpBtn = document.getElementById('signup-btn');
		let loginBtn = document.getElementById('login-btn');
		let loginForm = document.getElementById('login-form');
		let signupForm = document.getElementById('signup-form');

		signUpBtn.classList.add('form-btn-active');
		loginBtn.classList.remove('form-btn-active');
		signupForm.classList.remove('remove');
		loginForm.classList.add('remove');
	}

  return (
	<div className={`${nunito.className} ${"flex justify-center"}`}>
		<div className="flex flex-col justify-center items-center p-8 md:w-[600px] sm:w-[550px] w-[450px] shadow-lg h-full bg-white rounded-2xl my-10">
			<div className='bg-Blue shadow-md shadow-LightBlue rounded-full py-4 px-5 mb-4'>
				<Image className='w-14 h-auto' src={Logo} />
			</div>
			<h1 className="text-3xl font-[600]">Cast Plus</h1>
			<div className="bg-white shadow-md rounded-2xl mt-6 p-2 w-full">
				<button id="login-btn" className="form-btn-active text-xl rounded-xl w-1/2 p-3" onClick={changeToLoginForm}>Log In</button>
				<button id="signup-btn" className="text-xl rounded-xl w-1/2 p-3" onClick={changeToSignUpForm}>Sign Up</button>
			</div>
			<div id="login-form" className="remove w-full mt-8 mb-5">
				<input id="input-form" type="text" className="text-xl border-b-2 border-[#ddd] w-full py-4 px-5" placeholder="Email Address" />
				<input id="input-form" type="password" className="text-xl border-b-2 border-[#ddd] w-full py-4 px-5 mt-10" placeholder="Password" />
				<p className="hover:underline text-Blue text-lg cursor-pointer mt-6 ms-2 duration-150">Forgot password?</p>
				<button className="hover:text-Blue hover:bg-white hover:shadow-none border-2 border-Blue text-xl rounded-2xl bg-Blue text-white shadow-lg shadow-LightBlue w-full px-3 py-4 mt-5 duration-150">Log In</button>
				<span className="flex justify-center space-x-2 mt-8">
					<p className="text-lg ">Not a member?</p>
					<p className="hover:underline text-Blue text-lg cursor-pointer duration-150" onClick={changeToSignUpForm}>Sign Up now</p>
				</span>
			</div>
			<div id="signup-form" className="w-full mt-8 mb-5">
				<input id="input-form" type="text" className="text-xl border-b-2 border-[#ddd] w-full py-2 px-3" placeholder="Email Address" />
				<input id="input-form" type="password" className="text-xl border-b-2 border-[#ddd] w-full py-2 px-3 mt-10" placeholder="Password" />
				<input id="input-form" type="password" className="text-xl border-b-2 border-[#ddd] w-full py-2 px-3 mt-10" placeholder="Confrim Password" />
				<button className="hover:text-Blue hover:bg-white hover:shadow-none border-2 border-Blue text-xl rounded-2xl bg-Blue text-white shadow-lg shadow-LightBlue w-full px-3 py-4 mt-5 duration-150">Sign Up</button>
			</div>
		</div>
	</div>
  )
}

export default LoginSignUpPage
