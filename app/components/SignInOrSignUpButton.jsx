'use client'
import { server } from '@/app/lib/server'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import {IoIosArrowDown} from 'react-icons/io'
import {IoLogOutOutline} from 'react-icons/io5'
import { GoChevronDown } from "react-icons/go";
import { VscChevronDown } from "react-icons/vsc";
const SignInButton = () => {
	const { data: session } = useSession()

	const toggleDropDown = () => {
		let dropDown = document.getElementById('drop-down');
		let dropDownArrow = document.getElementById('drop-down-arrow');
		dropDown.classList.toggle('hidden');
		dropDownArrow.classList.toggle('rotate-180');
	}

	const fetchUsers = async () => {
		const res = await fetch(`${server}/api/user_profiles`);
		const data = await res.json();
		return data;
	}

	const addUser = async () => {
		const checkIsUserAlreadyExist = async () => {
			const users = await fetchUsers()
			let isUserAlreadyExist = users.some((user) => {
				return session.user.email === user.email
			})
			return isUserAlreadyExist;
		}
	
		const isUserAlreadyExist = await checkIsUserAlreadyExist()
		if(session && !isUserAlreadyExist) {
			fetch(`${server}/api/user_profiles`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					email : session.user.email,
					name : session.user.name,
					favorites : [],
				}),
			   })
				.then((response) => response.json())
				.then((data) => {
				console.log(data);
				})
				.catch((error) => {
					console.error(error);
			});
		}
	}

	if(session) {
		addUser()
	}
	
	return (
    <>
      {session ? (
		<div>
			<div className='hover:bg-gray-100 flex items-center space-x-2 rounded-lg cursor-pointer px-4 py-2 duration-100 select-none' onClick={toggleDropDown}>
				<div className='w-[36px] h-[36px] rounded-full overflow-hidden border-[1px] border-border-gray'>
					<Image className='w-full h-full object-cover' src={session.user.image} width={100} height={100} alt='User Image'/>
				</div>
				{/* <div>
					<h1 className='text-gray-600 font-semibold truncate max-w-[105px]'>{session.user.name}</h1>
				</div> */}
				<div id='drop-down-arrow' className='duration-300'>
					<VscChevronDown className='text-gray-600 text-xl' />
				</div>
			</div>

			{/* Drop Down */}
			<div id='drop-down' className='hidden absolute right-[96px] top-[80px] flex flex-col bg-white  shadow-md rounded-xl space-y-4 py-4 z-50'>
				<div className='flex items-center space-x-2 duration-100 px-6'>
					<div className='w-12 h-12 rounded-full overflow-hidden'>
						<Image className='w-full h-full object-cover' src={session.user.image} width={100} height={100} alt='User Image'/>
					</div>
					<div className='leading-5 truncate'>
						<h1 className='text-black font-bold'>{session.user.name}</h1>
						<p className='text-Gray text-[15px]'>{session.user.email}</p>
					</div>
				</div>
				<div className='flex justify-center'>
					<span className='w-full h-[.5px] bg-[rgba(0,0,0,.12)]'></span>
				</div>
				<div className='flex flex-col justify-center space-y-1 px-3'>
					<div className='hover:bg-[#ff1c1c1c] text-Red flex items-center space-x-3 cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={() => signOut()}>
						<IoLogOutOutline className='text-xl ms-[2px]' />
						<Link href=''>Sign Out</Link>
					</div>
				</div>
			</div>
		</div>
      ) : (
		<Link href='/signin-signup' onClick={() =>signIn()}><button className='hover:text-gray-800 hover:bg-gray-100 text-Gray text-sm rounded-lg  mx-1 py-2 px-5 duration-150 col-span-1'>Sign In / Sign Up</button></Link>
      )}
    </>
  )
}

export default SignInButton
