'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { nunito } from '../utils/fonts'
import Link from 'next/link';
import Image from 'next/image'
import Group from '@/app/img/Group.svg'
import SignInOrSignUpButton from '@/app/components/SignInOrSignUpButton'
import { BiHomeAlt2 } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'
import {IoLogOutOutline} from 'react-icons/io5'

const Header = () => {
	const { data: session } = useSession()

	const toggleHamburgerMenu = (e) => {
		let hamburgerButton = document.getElementById('menu-btn');
		let mobileMenu = document.getElementById('mobile-menu');
		let mobileMenuBody = document.getElementById('mobile-menu-body');
		mobileMenuBody.classList.toggle('w-9/12');
		mobileMenuBody.classList.toggle('w-0');
		mobileMenu.classList.toggle('hamburger-button-toggle');
		hamburgerButton.classList.toggle('open');
	}
	return (
		<div className={nunito.className}>
			<nav className='container mx-auto w-full '>
				<div className='lg:grid hidden grid-cols-5 items-center py-6'>
					<div className='flex justify-start col-span-1'>
						<Link href='/'><h1 className='relative flex items-center text-2xl font-semibold'><Image className="inline-block pe-2" src={Group} alt='Logo'/>CastPlus</h1></Link>
					</div>
					<div className='flex justify-center col-span-3'>
						<Link href='/'><button className='hover:text-black text-Gray mx-1 py-2 px-4 duration-150'>Home</button></Link>
						<Link href='/contactus'><button className='hover:text-black text-Gray mx-1 py-2 px-4 duration-150'>Contact Us</button></Link>
					</div>
					<div className='flex justify-end col-span-1'>
						<SignInOrSignUpButton />
					</div>
				</div>
				
				{/* Mobile Menu */}
				<div className='flex justify-between items-center w-full relative lg:hidden pt-6'>
					<Link href='/'><h1 className='relative flex items-center text-2xl font-semibold z-10'><Image className="inline-block pe-2" src={Group} alt='Logo'/>CastPlus</h1></Link>
					<button id="menu-btn" className="flex items-center lg:hidden hover:bg-gray-100 w-10 h-10 rounded-lg duration-200 z-50" onClick={(e) => toggleHamburgerMenu(e)}>
						<div className="flex flex-col mx-auto space-y-1 hamburger-button">
							<span className="hamburger-top w-5 h-0.5 bg-black rounded-full duration-200"></span>
							<span className="hamburger-middle w-5 h-0.5 bg-black rounded-full duration-200"></span>
							<span className="hamburger-bottom w-5 h-0.5 bg-black rounded-full duration-200"></span>
						</div>
					</button>
				</div>
				{session ? 
				<div id='mobile-menu-body' className='fixed top-0 right-0 lg:hidden w-0 h-full bg-white shadow-xl rounded-s-xl duration-300 z-40'>
					<div id="mobile-menu" className="flex flex-col pt-14 p-3 duration-200 hamburger-button-toggle">
						<div className='flex items-center space-x-2 duration-100 px-4 mt-2'>
							<div className='min-w-fit min-h-fit w-10 h-10 rounded-full overflow-hidden'>
								<Image className='min-w-fit w-full h-full object-cover' src={session.user.image} width={100} height={100} alt='User Image'/>
							</div>
							<div className='leading-5 max-w-[210px]'>
								<h1 className='text-black text-md font-bold truncate'>{session.user.name}</h1>
								<p className='text-Gray text-[14px] truncate'>{session.user.email}</p>
							</div>
						</div>
						<div className='flex justify-center my-4'>
							<span className='w-full h-[.5px] bg-[rgba(0,0,0,.12)]'></span>
						</div>
						<Link href='/' className='hover:bg-[#1c85ff1c] hover:text-Blue flex items-center space-x-3 cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
							<BiHomeAlt2 className='text-xl ms-[2px]' />
							<p className='mt-1'>Home</p>
						</Link>
						<Link href='/contactus' className='hover:bg-[#1c85ff1c] hover:text-Blue flex items-center space-x-3 cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
							<BsHeadset className='text-xl ms-[2px]' />
							<p className='mt-1'>Contact Us</p>
						</Link>
						<div className='flex justify-center my-4'>
							<span className='w-full h-[.5px] bg-[rgba(0,0,0,.12)]'></span>
						</div>
						<div className='flex flex-col justify-center space-y-2'>
							<div className='hover:bg-[#ff1c1c1c] text-Red flex items-center space-x-3 cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={() => {signOut(); toggleHamburgerMenu()}}>
								<IoLogOutOutline className='text-xl ms-[2px]' />
								<Link href=''>Sign Out</Link>
							</div>
						</div>
					</div>
				</div> : 
					<div id='mobile-menu-body' className='fixed top-0 right-0 lg:hidden w-0 h-full bg-white shadow-xl rounded-s-xl duration-300 z-40'>
						<div id="mobile-menu" className="flex flex-col pt-14 p-3 duration-200 hamburger-button-toggle">
							<Link href='/' className='hover:bg-[#1c85ff1c] hover:text-Blue flex items-center space-x-3 cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
								<BiHomeAlt2 className='text-xl ms-[2px]' />
								<p className='mt-1'>Home</p>
							</Link>
							<Link href='/contactus' className='hover:bg-[#1c85ff1c] hover:text-Blue flex items-center space-x-3 cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
								<BsHeadset className='text-xl ms-[2px]' />
								<p className='mt-1'>Contact Us</p>
							</Link>
							<Link href='/signin-signup' onClick={() => signIn()}><button className='hover:bg-blue-700 bg-Blue text-white rounded-lg font-semibold shadow-lg shadow-LightBlue py-3 px-5 duration-150 w-full mt-2'>Sign In / Sign Up</button></Link>
						</div>
					</div>
				}
			</nav>
		</div>
	)
}

export default Header
