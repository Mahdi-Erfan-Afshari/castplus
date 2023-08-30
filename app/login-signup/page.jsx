'use client'
import Image from 'next/image';
import Logo from '@/app/img/Group1.svg'
import LogoBlack from '@/app/img/Group.svg'
import { nunito } from '../utils/fonts';
import Link from 'next/link';
import { useState , useEffect} from 'react';
import {VscEye, VscEyeClosed} from 'react-icons/vsc'

const LoginSignUpPage = () => {
	var [url, setUrl] = useState('');

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
	
	const checkPasswordAndUserName = () => {
		let username = document.getElementById('signin-username-input');
		let password = document.getElementById('signin-password-input');
		let loginError = document.getElementById('login-error')
		let loginLink = document.getElementById('login-link')
		if(username.value === 'admin' && password.value === 'admin') {
			username.classList.remove('input-form-red')
			password.parentElement.classList.remove('red-border-b')
			setUrl('/podcasts')
		} else {
			loginError.classList.remove('hidden');
			username.style.borderColor = '#f32e2e'
			username.style.color = '#f32e2e'
			password.style.borderColor = '#f32e2e'
			password.style.color = '#f32e2e'
			username.classList.add('input-form-red')
			password.parentElement.classList.add('red-border-b')
		}
	}

	useEffect(() => {
		let username = document.getElementById('signin-username-input');
		let password = document.getElementById('signin-password-input');
		let loginLink = document.getElementById('login-link')
		if(username.value !== '' && password.value !== '') {
			loginLink.click()
		}
		password.addEventListener('focus', () => {
			password.parentElement.classList.add('blue-border-b')
		})
		password.addEventListener('focusout', () => {
			password.parentElement.classList.remove('blue-border-b')
		})

		password.parentElement.addEventListener('keyup', (e) => {
			if(e.keyCode == 13) {
				loginLink.click()
			}
		})

		username.addEventListener('keyup', (e) => {
			if(e.keyCode == 13) {
				loginLink.click()
			}
		})
	})

	const [isSignInEyeToggle, setIsSignInEyeToggle] = useState(false)
	const toggleEye = () => {
		let password = document.getElementById('signin-password-input');
		if(isSignInEyeToggle) {
			password.setAttribute('type', 'password')
		} else {
			password.setAttribute('type', 'text')
		}
		setIsSignInEyeToggle(!isSignInEyeToggle)
	}

	const [isSignUpEyeToggle, setIsSignUpEyeToggle] = useState(false)
	const toggleSignUpEye = () => {
		let password = document.getElementById('signup-password-input');
		if(isSignUpEyeToggle) {
			password.setAttribute('type', 'password')
		} else {
			password.setAttribute('type', 'text')
		}
		setIsSignUpEyeToggle(!isSignUpEyeToggle)
	}

  return (
	<div className={`${nunito.className} ${"flex justify-center"}`}>
		<div className="flex flex-col justify-center items-center p-8 md:w-[550px] sm:w-[550px] w-[340px] shadow-lg h-full bg-white rounded-2xl my-10">
			<div className='bg-Blue shadow-md shadow-LightBlue rounded-full py-4 px-5 mb-4'>
				<Image className='w-14 h-auto' src={Logo} />
			</div>
			<h1 className="text-3xl font-[600]">Cast Plus</h1>
			<div className="bg-white shadow-md rounded-2xl mt-6 p-2 w-full">
				<button id="login-btn" className="form-btn-active text-xl rounded-xl w-1/2 p-3" onClick={changeToLoginForm}>Sign In</button>
				<button id="signup-btn" className="text-xl rounded-xl w-1/2 p-3" onClick={changeToSignUpForm}>Sign Up</button>
			</div>
			<p id='login-error' className='bg-LightRed rounded-lg mt-4 hidden font-semibold text-center text-Red p-3 w-full'>The username or password is not correct</p>
			<div id="login-form" className="w-full mt-8 mb-5">
				<input id="signin-username-input" type="text" className="input-form text-xl border-b-2 border-[#ddd] w-full py-2 px-5" placeholder="User Name" />
				<div className='input-form flex items-center border-b-2 border-[#ddd] mt-10 duration-150'>
					<input id="signin-password-input" type="password" className="text-xl w-full py-2 px-5" placeholder="Password" />
					<span className='text-2xl cursor-pointer text-[#666]' onClick={toggleEye}>{!isSignInEyeToggle ?<VscEye /> : <VscEyeClosed/>}</span>
				</div>
				<p className="hover:underline text-Blue text-lg cursor-pointer mt-6 ms-2 duration-150">Forgot password?</p>
				<Link id='login-link' onClick={checkPasswordAndUserName} href={url}><button href='/podcasts' className="hover:text-Blue hover:bg-white hover:shadow-none border-2 border-Blue text-xl rounded-2xl bg-Blue text-white shadow-lg shadow-LightBlue w-full px-3 py-4 mt-5 duration-150">Log In</button></Link>
				<span className="flex justify-center space-x-2 mt-8">
					<p className="text-lg ">Not a member?</p>
					<p className="hover:underline text-Blue text-lg cursor-pointer duration-150" onClick={changeToSignUpForm}>Sign Up now</p>
				</span>
			</div>
			<div id="signup-form" className="remove w-full mt-8 mb-5">
				<input id="" type="text" className="input-form text-xl border-b-2 border-[#ddd] w-full py-2 px-3" placeholder="User Name" />
				<div className='input-form flex items-center border-b-2 border-[#ddd] mt-10 duration-150'>
					<input id="signup-password-input" type="password" className="text-xl w-full py-2 px-5" placeholder="Password" />
					<span className='text-2xl cursor-pointer text-[#666]' onClick={toggleSignUpEye}>{!isSignUpEyeToggle ?<VscEye /> : <VscEyeClosed/>}</span>
				</div>
				<input id="" type="password" className="input-form text-xl border-b-2 border-[#ddd] w-full py-2 px-3 mt-10" placeholder="Confrim Password" />
				<button className="hover:text-Blue hover:bg-white hover:shadow-none border-2 border-Blue text-xl rounded-2xl bg-Blue text-white shadow-lg shadow-LightBlue w-full px-3 py-4 mt-5 duration-150">Sign Up</button>
			</div>
		</div>
	</div>
  )
}

export default LoginSignUpPage