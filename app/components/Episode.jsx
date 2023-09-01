import {server} from '../api/podcasts/route';
import Controller from '@/app/components/Controller'
import Image from 'next/image';
import { vazir, lalezar } from '../utils/fonts';

async function fetchPodcast() {
  const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
  const podcasts = await response.json();
  return podcasts;
}

const Episode = async ({ episodeRoute }) => {
  const podcasts = await fetchPodcast();
  const episodes = podcasts[0].episodes
  const episode = episodes.filter((episode) => episode.id == episodeRoute);

  return (
	<>
		{episode.map((episode) => (
			<div  className={`${vazir.className}`}>
				<div className='flex w-full justify-center items-center mt-4'>
					<div className='relative flex items-center'>
						<div className='block justify-center'>
							<div className='md:w-28 md:h-28 sm:w-28 sm:h-28 w-20 h-20'>
								<Image className='rounded-full border-8 border-white w-full h-full object-cover' src={episode.thumbnail} alt='podcast logo' width='25' height='25'/>
							</div>
						</div>
						<div className='ms-4'>
							<h1 className='lg:text-2xl md:text-xl sm:text-lg text-sm font-bold text-start'>{episode.title}</h1>
							<span className={`${lalezar.className} ${'flex justify-start'}`}><p className='bg-SupLightBlue shadow-md w-fit px-1 rounded-md pt-1 text-[#666] text-sm md:mt-2 sm:mt-2 '>{`${episode.published_date} | ${episode.published_time}`}</p></span>
						</div>
					</div>
				</div>
				<Controller url={episode.url} episode={episode} />
			</div>
	   ))}
	</>
  )
}

export default Episode
