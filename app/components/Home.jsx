import {lightRoboto, passionOne, roboto, vazir} from '../utils/fonts'
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/app/img/Home.svg'
import MobileHome from '@/app/img/Mobile-Home.svg'

const HomePage = () => {
  return (
	<div className="container mx-auto p-6">
		<div className='relative z-10 xl:mt-0 lg:mt-4 md:mt-20 mt-6'>
			<div className={roboto.className}><h1 className="text-center text-darkBlue lg:text-5xl md:text-4xl text-3xl font-black"><span className=''>THE PODCAST</span> STREAM IS ENDLESS</h1></div>
			<div className={lightRoboto.className}></div><p className="text-center md:text-xl text-md mt-4 text-Gray">Discover millions of well curated podcasts that connect with you.</p>
			<div className='flex justify-center'><Link href='/podcasts'><button className="mt-8 flex justify-center items-center bg-Blue text-white border-2 border-Blue rounded-lg font-semibold shadow-lg shadow-LightBlue py-3 px-5 home-btn duration-150">
				<p className='pe-2 text-lg'>Get Started </p>
				<span><BsArrowRight className="text-2xl"/></span>
			</button></Link></div>
		</div>

		<div className='flex justify-center mt-4'>
			<Image className='md:block hidden xl:w-[1000px] lg:w-[850px] md:w-[700px] xl:top-48 lg:top-64 md:top-82 top-auto w-11/12 box-border absolute  z-0 mt-2' src={Home} />
			<Image className='md:hidden block xl:w-[1000px] lg:w-[850px] md:w-[700px] xl:top-48 lg:top-58 md:top-60 top-auto w-full box-border absolute  z-0 mt-2' src={MobileHome} />
		</div>
	</div>
  )
}

export default HomePage
