import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'
import Header from "./Header";
import Image from 'next/image'
import Vector1 from '@/app/img/Vector1.svg'

const HomePage = () => {
  return (
    <div className="p-6">
        <div className="lg:flex lg:flex-row lg:justify-center lg:mt-10 lg:flex-row-reverse">
            <div><Image className="w-full" src={Vector1} /></div>
            <div>
                <h1 className="lg:mt-20 mt-3 text-4xl"><div className="mb-2">The Podcast</div> stream is endless</h1>
                <p className="text-xl my-3 text-Gray">Discover millions of well curated podcasts that connect with you.</p>
                <Link href='/podcasts' className="">
                    <button className="lg:mt-0 mt-12 lg:w-auto w-full hover:bg-DarkBlue flex justify-center items-center bg-Blue rounded-full text-white lg:text-xl text-2xl lg:px-6 lg:py-3 px-10 py-5 duration-150">
                        <p className='pe-2'>Get Started </p>
                        <BsArrowRight className="lg:text-2xl text-3xl"/>
                    </button>
                </Link>
            </div>
        </div>
        
        
    </div>
  )
}

export default HomePage
