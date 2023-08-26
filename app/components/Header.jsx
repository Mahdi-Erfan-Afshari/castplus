'use client'
import { nunito } from '../utils/fonts'
import Link from 'next/link';
import Image from 'next/image'
import Group from '@/app/img/Group.svg'

const Header = () => {
	const toggleHamburgerMenu = (e) => {
			let HamburgerButton = document.getElementById('menu-btn');
			let MobileMenu = document.getElementById('mobile-menu');
			MobileMenu.classList.toggle('hamburger-button-toggle')
			HamburgerButton.classList.toggle('open')
	}
	return (
		<div className={nunito.className}>
			<nav className='container mx-auto w-full '>
				<div className='lg:grid hidden grid-cols-5 items-center py-6'>
					<div className='flex justify-start col-span-1'>
						<Link href='/'><h1 className='relative flex items-center text-2xl font-semibold z-10'><Image className="inline-block pe-2" src={Group} alt=''/>CastPlus</h1></Link>
					</div>
					<div className='flex justify-center col-span-3'>
						<Link href='/'><button className='hover:text-black text-Gray mx-1 py-2 px-4 duration-150'>Home</button></Link>
						<Link href='/services'><button className='hover:text-black text-Gray mx-1 py-2 px-4 duration-150'>Services</button></Link>
						<Link href='/portfolio'><button className='hover:text-black text-Gray mx-1 py-2 px-4 duration-150'>Portfolio</button></Link>
						<Link href='/contactus'><button className='hover:text-black text-Gray mx-1 py-2 px-4 duration-150'>Contact Us</button></Link>
					</div>
					<div className='flex justify-end'>
						<Link href='/login-signup'><button className='hover:text-Blue hover:bg-SupLightBlue hover:shadow-none bg-Blue text-white border-2 border-Blue rounded-lg font-semibold shadow-lg shadow-LightBlue mx-1 py-3 px-5 duration-150 col-span-1'>Log In / Sign Up</button></Link>
					</div>
				</div>
				
				<div className='flex justify-between items-center w-full relative lg:hidden pt-6'>
					<Link href='/'><h1 className='relative flex items-center text-2xl font-semibold z-10'><Image className="inline-block pe-2" src={Group} alt=''/>CastPlus</h1></Link>
					<button id="menu-btn" class="flex items-center lg:hidden hover:bg-gray-100 w-10 h-10 rounded-lg duration-200 z-50" onClick={(e) => toggleHamburgerMenu(e)}>
						<div class="flex flex-col mx-auto space-y-1 hamburger-button">
							<span class="hamburger-top w-5 h-0.5 bg-black rounded-full duration-200"></span>
							<span class="hamburger-middle w-5 h-0.5 bg-black rounded-full duration-200"></span>
							<span class="hamburger-bottom w-5 h-0.5 bg-black rounded-full duration-200"></span>
						</div>
					</button>
				</div>
				<div id="mobile-menu" class="absolute pt-14 top-0 left-0 lg:hidden flex flex-col bg-white w-full mx-auto shadow-xl rounded-s-xl rounded-e-xl p-6 duration-200 hamburger-button-toggle z-40">
					<a href="#" class="hover:text-black hover:bg-BrightSupLightOrange text-Gray p-4 rounded-lg text-center duration-300 my-1">Home</a>
					<a href="#" class="hover:text-black hover:bg-BrightSupLightOrange text-Gray p-4 rounded-lg text-center duration-300 my-1">Services</a>
					<a href="#" class="hover:text-black hover:bg-BrightSupLightOrange text-Gray p-4 rounded-lg text-center duration-300 my-1">Portfolio</a>
					<a href="#" class="hover:text-black hover:bg-BrightSupLightOrange text-Gray p-4 rounded-lg text-center duration-300 my-1">Contact Us</a>
					<button class="hover:text-Blue hover:bg-SupLightBlue hover:shadow-none bg-Blue text-white border-2 border-Blue rounded-lg font-semibold shadow-lg shadow-LigthBlue mx-1 py-3 px-5 duration-150 mt-5">Log In / Sign Up</button>
				</div>

			</nav>
		</div>
	)
}

export default Header
