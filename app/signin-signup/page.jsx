'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Logo from '@/app/img/Group1.svg'
import { nunito } from '../utils/fonts';
import { useState , useEffect} from 'react';
import {VscEye, VscEyeClosed} from 'react-icons/vsc'
import GoogleSignInButton from '../components/GoogleSignInButton';

const LoginSignUpPage = () => {
	const router = useRouter()
	
	const changeToLoginForm = () => {
		let signUpBtn = document.getElementById('signup-btn');
		let loginBtn = document.getElementById('login-btn');
		let loginForm = document.getElementById('login-form');
		let signupForm = document.getElementById('signup-form');

		loginBtn.classList.add('form-btn-active');
		loginBtn.classList.add('rounded-t-xl');
		loginBtn.classList.remove('rounded-ee-xl');
		loginBtn.parentElement.classList.remove('bg-white');
		signUpBtn.classList.remove('form-btn-active');
		signUpBtn.classList.remove('rounded-t-xl');
		signUpBtn.classList.add('rounded-es-xl');
		signUpBtn.parentElement.classList.add('rounded-se-3xl');
		signUpBtn.parentElement.classList.add('bg-white');
		loginForm.classList.remove('remove');
		signupForm.classList.add('remove');
	}

	const changeToSignUpForm = () => {
		let signUpBtn = document.getElementById('signup-btn');
		let loginBtn = document.getElementById('login-btn');
		let loginForm = document.getElementById('login-form');
		let signupForm = document.getElementById('signup-form');

		signUpBtn.classList.add('form-btn-active');
		signUpBtn.classList.add('rounded-t-xl');
		signUpBtn.classList.remove('rounded-es-xl');
		signUpBtn.parentElement.classList.remove('bg-white');
		loginBtn.classList.remove('form-btn-active');
		loginBtn.classList.add('bg-[#efefef]');
		loginBtn.classList.add('rounded-ee-xl');
		loginBtn.parentElement.classList.add('rounded-ss-3xl');
		loginBtn.classList.remove('rounded-es-xl');
		loginBtn.classList.remove('rounded-b-xl');
		loginBtn.classList.remove('rounded-t-xl');
		loginBtn.parentElement.classList.add('bg-white');
		signupForm.classList.remove('remove');
		loginForm.classList.add('remove');
	}
	const checkPasswordAndUserName = () => {
		let username = document.getElementById('signin-username-input');
		let password = document.getElementById('signin-password-input');
		let loginError = document.getElementById('login-error')
		if(username.value === 'admin' && password.value === 'admin') {
			router.push('/podcasts', { scroll: false })
		} else {
			loginError.classList.remove('hidden');
			username.style.borderColor = '#f32e2e'
			username.style.color = '#f32e2e'
			password.style.borderColor = '#f32e2e'
			password.style.color = '#f32e2e'
			username.classList.add('input-form-red')
			password.classList.add('input-form-red')
			password.parentElement.classList.add('red-border-b')
		}
	}

	useEffect(() => {
		let username = document.getElementById('signin-username-input');
		let password = document.getElementById('signin-password-input');
		let loginLink = document.getElementById('login-link')
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
	const toggleSigninEye = () => {
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
		<div className="flex flex-col justify-center items-center md:w-[480px] sm:w-[550px] w-[340px] shadow-lg h-full overflow-hidden bg-white rounded-2xl my-10">
			<div className="flex w-full bg-[#efefef] rounded-2xl">
				<div className='w-1/2'>
					<button id="login-btn" className="form-btn-active text-lg w-full rounded-t-xl p-3" onClick={changeToLoginForm}>Sign In</button>
				</div>
				<div className='bg-white w-1/2'>
					<button id="signup-btn" className="text-lg bg-[#efefef] w-full rounded-es-xl p-3" onClick={changeToSignUpForm}>Sign Up</button>
				</div>
			</div>
			<p id='login-error' className='bg-LightRed rounded-lg mt-4 hidden font-semibold text-center text-Red p-3 w-full'>The username or password is not correct</p>
			<h1 className='text-2xl font-semibold mt-5'>CastPlus</h1>
			<div id="login-form" className="w-full mt-2 mb-5 px-5 sm:px-10">
				<input id="signin-username-input" type="text" className="input-form text-md border-b-2 border-[#ddd] w-full py-2 px-5" placeholder="User Name" />
				<div className='input-form flex items-center border-b-2 border-[#ddd] mt-8 duration-150'>
					<input id="signin-password-input" type="password" className="text-md w-full py-2 px-5" placeholder="Password" />
					<span className='text-2xl cursor-pointer text-[#666]' onClick={toggleSigninEye}>{!isSignInEyeToggle ?<VscEye /> : <VscEyeClosed/>}</span>
				</div>
				<p className="hover:underline text-Blue text-sm cursor-pointer mt-3 ms-2 duration-150 select-none">Forgot password?</p>
				<button id='login-link' onClick={checkPasswordAndUserName} type='submit' className="hover:bg-blue-700 text-md rounded-xl bg-Blue text-white w-full px-3 py-2 mt-5 duration-150">Sign In</button>
				<div className='flex items-center space-x-2 mt-3'>
					<span className='w-full h-[1px] bg-Gray'></span>
					<p className='text-Gray text-sm font-semibold'>Or</p>
					<span className='w-full h-[1px] bg-Gray'></span>
				</div>
				<GoogleSignInButton />				
				<span className="flex justify-center space-x-2 mt-4">
					<p className="text-sm ">Not a member?</p>
					<p className="hover:underline text-Blue text-sm cursor-pointer duration-150" onClick={changeToSignUpForm}>Sign Up now</p>
				</span>
			</div>
			<div id="signup-form" className="remove w-full mt-8 mb-3 px-10 +">
				<input id="signin-username-input" type="text" className="input-form text-md border-b-2 border-[#ddd] w-full py-2 px-5" placeholder="example@gmail.com" />
				<input id="signin-username-input" type="text" className="input-form text-md border-b-2 border-[#ddd] w-full my-8 py-2 px-5" placeholder="User Name" />
				<div className='input-form flex items-center border-b-2 border-[#ddd] duration-150'>
					<input id="signin-password-input" type="password" className="text-md w-full py-2 px-5" placeholder="Password" />
					<span className='text-2xl cursor-pointer text-[#666]' onClick={toggleSigninEye}>{!isSignInEyeToggle ?<VscEye /> : <VscEyeClosed/>}</span>
				</div>
				<button id='login-link' type='submit' className="hover:bg-blue-700 text-md rounded-xl bg-Blue text-white w-full px-3 py-2 mt-8 duration-150">Sign Up</button>
				<span className="flex justify-center space-x-2 mt-4">
					<p className="hover:underline text-Blue text-sm cursor-pointer duration-150" onClick={changeToLoginForm}>I have already registered</p>
				</span>
			</div>
		</div>
	</div>
  )
}

export default LoginSignUpPage