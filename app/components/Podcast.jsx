import {server} from '../api/podcasts/route';
import { AiFillStar } from 'react-icons/ai';
import Image from 'next/image';
import { vazir, vazirBold, lalezar, nunito } from '../utils/fonts';
import EpisodeList from '@/app/components/EpisodeList'
import Banner from '@/app/img/banner.svg'

async function fetchPodcast() {
  const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
  const podcasts = await response.json();
  return podcasts;
}

const Podcast = async ({ id }) => {
  const podcasts = await fetchPodcast();
  const podcast = await podcasts.filter((podcast) => podcast.id == id);

  return (
	<div>
	  	{podcast.map((podcast) => (
			<div className='xl:container xl:mx-auto container mx-auto p-6'>
				{/* <div className='bg-white rounded-xl overflow-hidden shadow-md'>
					<div className='flex items-end rounded-xl overflow-hidden'>
						<Image className='w-full object-cover h-64' src={Banner} />
					</div>
					<div className='grid grid-cols-6 relative px-6'>
						<div className='col-sapn-1 relative left-6 top-[-50px] flex justify-start'>
							<div>
								<Image src={podcast.thumbnail} width='80' height='80' className='rounded-full object-cover border-8 border-white sm:w-40 sm:h-40 w-24 h-24' alt='podcast thumbnail'/>
							</div>
						</div>
						<div className='col-span-4 2xl:ms-0 xl:ms-8 mt-2'>
							<h1 className={`${vazirBold.className} ${'md:text-3xl sm:text-2xl text-xl font-black mt-4'}`}>{podcast.name}</h1>
							<p className={`${vazir.className} ${'text-md text-Gray text-end mt-1'}`} style={{direction: 'rtl'}}>{podcast.about}</p>
							<div className='flex flex-col mt-2'>
								<span className='flex gap-x-1 text-amber-400 font-semibold text-md ms-1'>
									<AiFillStar className='text-xl mt-[2px]' />
									<p>{podcast.stargazers_count}</p>
								</span>
								<span className={`${nunito.className} ${'block bg-[#0034ff14] w-fit font-[800] px-1 rounded-md text-[#2e56f3ab] text-md mt-2'}`}>
									<p>Number of episodes: {podcast.episodes.length}</p>
								</span>
							</div>
						</div>
						<div className='xl:col-span-1 col-span-2 flex justify-center items-center'>
							<button className='hover:bg-white hover:text-Blue border-2 hover:shadow-none border-Blue bg-Blue text-white text-xl shadow-lg shadow-LightBlue rounded-lg px-14 py-3 duration-150'>Follow</button>
						</div>
					</div>
				</div> */}
				<div className='relative bg-white overflow-hidden rounded-xl shadow-md mb-12 lg:h-full md:h-[530px] sm:h-[450px] h-[460px]'>
					<div className='w-full'>
						<Image className='object-cover w-full lg:h-full md:h-52 h-44' src={Banner} alt='Banner' />
					</div>
					<div className='relative lg:top-0 sm:top-[-90px] top-[-80px] flex lg:flex-row flex-col pt-3 px-6'>
						<div className='relative lg:top-[-60px] top-0 lg:block flex justify-center'>
							<div className='xl:ms-6 md:ms-0 md:w-40 md:h-40 h-32'>
								<Image className='rounded-full border-8 border-white w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='25' height='25'/>
							</div>
						</div>
						<div className='flex lg:flex-row flex-col items-center justify-between w-full h-full mt-2'>
							<div className='lg:ms-4 ms-0'>
								<h1 className={`${vazirBold.className} ${'lg:text-start text-center md:text-3xl sm:text-2xl text-xl font-black'}`}>{podcast.name}</h1>
								<p className={`${vazir.className} ${'lg:text-start text-center md:text-md text-sm text-Gray mt-1'}`} style={{direction: 'rtl'}}>{podcast.about}</p>
								<div className='lg:flex hidden flex-col lg:items-start items-center'>
									<span className='flex gap-x-1 text-amber-400 font-semibold text-md ms-1'>
										<AiFillStar className='text-xl mt-[2px]' />
										<p>{podcast.stargazers_count}</p>
									</span>
									<span className={`${nunito.className} ${'block bg-[#0034ff14] w-fit font-[800] px-1 rounded-md text-[#2e56f3ab] text-md mt-2'}`}>
										<p>Number of episodes: {podcast.episodes.length}</p>
									</span>
								</div>
							</div>
							<div className='lg:me-4 me-0 lg:mt-0 mt-6'>
								<button className='hover:bg-white hover:text-Blue border-2 hover:shadow-none border-Blue bg-Blue text-white md:text-xl text-md shadow-lg shadow-LightBlue rounded-full md:px-16 px-10 md:py-3 py-2 duration-150'>Follow</button>
							</div>
							<div className='lg:hidden flex justify-between items-center w-full mt-8'>
								<span className='flex gap-x-1 text-amber-400 font-semibold text-sm'>
									<AiFillStar className='text-lg mt-[1px]' />
									<p>{podcast.stargazers_count}</p>
								</span>
								<span className={`${nunito.className} ${'block bg-[#0034ff14] w-fit font-[800] px-1 rounded-md text-[#2e56f3ab] text-sm'}`}>
									<p>Number of episodes: {podcast.episodes.length}</p>
								</span>
							</div>
						</div>
					</div>
				</div>
				<EpisodeList data={podcast} />
			</div>
	  	))}

	</div>
  )
}

export default Podcast
