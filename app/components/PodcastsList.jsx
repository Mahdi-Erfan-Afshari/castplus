import {CgSearch} from 'react-icons/cg';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '@/app/img/podcast.png';
import {server} from '../api/podcasts/route';

async function fetchPodcasts() {
    // const response = await fetch('https://podcastnextjs.netlify.app/podcasts/api/podcasts', { cache: 'no-store' }, {
    const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' }, {
      next: {
        revalidate: 60 
      }
    });
  
    const podcasts = await response.json();
    return podcasts;
}

const PodcastPage = async () => {
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
                    <div className='w-4/12 md:w-40 me-5'><Image className='rounded-xl' src={img1} /></div>
                    <h1 className='w-8/12 md:hidden text-4xl font-bold'>{podcast.title}</h1>
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
  
 export default PodcastPage
  