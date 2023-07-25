import {CgSearch} from 'react-icons/cg';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '@/app/img/podcast.png'

async function fetchPodcasts() {
  const response = await fetch('http://localhost:3000/api/podcasts',
  {
    next: {
      revalidate: 5,
    },
  });

  const podcasts = await response.json();
  return podcasts;
}

const page = async () => {
  const podcasts = await fetchPodcasts();
  
  return (
    <div className='container mx-auto p-6'>
      <div className='flex justify-between search w-full bg-none  px-6 py-3 rounded-full'>
        <input className='input w-full' type="text" placeholder='Search The Podcast Here...' /><Link href='#'><CgSearch className='inline-block text-2xl' /></Link>
      </div>
      {
        podcasts.map((podcast) => (
          <Link href={`/podcasts/${podcast.id}`}>
          <div className='grid grid-cols-1 gap-3 mt-5'>
            <div className='md:flex md:items-center bg-white p-5 rounded-lg shadow-xl shadow-gray-100'>
              <div className='flex'>
                <div className='w-28 md:w-40 me-5'><Image className='rounded-xl' src={img1} /></div>
                <h1 className='md:hidden text-4xl font-bold mt-8 md:mt-0'>{podcast.title}</h1>
              </div>
              <div>
                <h1 className='hidden md:block text-4xl font-bold mt-3 md:mt-0'>{podcast.title}</h1>
                <p className='text-lg mt-3 text-Gray'>{podcast.description}</p>
              </div>
            </div>
          </div>
          </Link>
        ))
      }      
    </div>
  )
}

export default page
