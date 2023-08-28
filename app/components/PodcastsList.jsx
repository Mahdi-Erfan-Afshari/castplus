import {vazir , lalezar} from '@/app/utils/fonts'
import {CgSearch} from 'react-icons/cg';
import Link from 'next/link';
import Image from 'next/image';
import {server} from '../api/podcasts/route';

async function fetchPodcasts() {
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
	<div className='xl:container xl:mx-auto container mx-auto p-6'>
	  <div className={`${vazir.className} ${'flex justify-between search w-full bg-white shadow-md sm:ps-8 sm:pe-4 ps-5 pe-2 py-2 mb-6 rounded-full'}`}>
		<input className='input w-full sm:text-xl' type="text" placeholder='Search The Podcast Here...' /><button className='hover:text-Blue hover:bg-white hover:shadow-none border-2 border-Blue flex justify-center items-center shadow-md shadow-LightBlue bg-Blue text-xl rounded-full text-white sm:px-8 sm:py-3 p-[10px] duration-150'><p className='sm:block hidden sm:mb-[3px] sm:me-1'>search</p><CgSearch className='sm:mt-[2px] sm:me-0 me-[2px]'/></button>
	  </div>
	  {
		podcasts.map((podcast) => (
		  	<Link href={`/podcasts/${podcast.id}`} key={podcast.id} className={vazir.className}>
				<div className="mt-5 rounded-2xl overflow-hidden shadow-md">
					<figure class="sm:flex bg-white rounded-xl p-5 sm:p-0">
					  	<Image class="hidden sm:block w-32 h-32 sm:w-48 sm:h-auto object-cover border-e-[1px] border-gray" src={podcast.thumbnail} alt="" width="0" height="0" />
						<div className='flex items-center'>
					  		<Image class="w-20 h-20 sm:w-48 sm:h-auto sm:rounded-none object-cover rounded-lg block sm:hidden" src={podcast.thumbnail} alt="" width="0" height="0" />
					  		<h1 className='text-md font-semibold ms-4 block sm:hidden'>{podcast.title}</h1>
						</div>
					  <div class="sm:pt-6 pt-1 sm:p-5 text-center sm:text-left space-y-4">
					    <blockquote>
							<h1 className='sm:text-2xl lg:text-3xl font-semibold hidden sm:block'>{podcast.title}</h1>
					    	<p class="lg:text-lg sm:text-sm text-xs text-Gray font-medium mt-2 md:mt-4">{podcast.description}</p>
					    </blockquote>
					    <figcaption class="font-medium">
					      <div class="flex justify-center sm:justify-start text-slate-700 dark:text-slate-500">
						  	<span className={lalezar.className}><p className='bg-[#eee] w-fit px-1 rounded-md pt-1 text-[#666] text-xs md:mt-2 sm:mt-2 '>{`${podcast.published_date} | ${podcast.published_time}`}</p></span>
					      </div>
					    </figcaption>
					  </div>
					</figure>
				</div>
		  	</Link>
		))
	  }
	</div>
  )
}

export default PodcastPage
