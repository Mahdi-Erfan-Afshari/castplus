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
				<div className='relative bg-white overflow-hidden rounded-xl sm:mb-6 md:mb-8 h-full'>
					<div className='w-full'>
						<Image className='object-cover w-full lg:h-full md:h-52 sm:h-44 h-24' src={Banner} alt='Banner' />
					</div>
					<div className='lg:block hidden'>
						<div className='relative flex flex-row pt-3 px-6'>
							<div className='relative top-[-60px] block justify-center'>
								<div className='xl:ms-6 lg:ms-0 md:w-40 md:h-40 h-32'>
									<Image className='rounded-full border-8 border-white w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='25' height='25'/>
								</div>
							</div>
							<div className='flex lg:flex-row flex-col justify-between w-full h-full mt-2'>
								<div className='flex flex-col h-full lg:ms-4 ms-0'>
									<h1 className={`${vazirBold.className} ${'lg:text-start text-center md:text-3xl sm:text-2xl text-xl font-black'}`}>{podcast.name}</h1>
									<p className={`${vazir.className} ${'lg:text-start text-center md:text-md text-sm text-Gray mt-1 2xl:max-w-[550px] xl:max-w-[450px] lg:max-w-[380px]'}`}>{podcast.about}</p>
								</div>
								<div className='flex flex-col items-center justify-center 2xl:me-16 xl:me-8 lg:me-4 mt-2'>
									<div className='relative flex items-center space-x-5'>
										<div className='flex flex-col justify-center items-center'>
											<p className='font-semibold'>{podcast.episodes.length}</p>
											<p className='text-xs text-Gray'>episodes</p>
										</div>
										<span className='w-[.8px] h-[30px] bg-[rgb(232,234,237)]'></span>
										<div className='flex flex-col justify-center items-center'>
											<p className='font-semibold'>24</p>
											<p className='text-xs text-Gray'>followers</p>
										</div>
										<span className='w-[.8px] h-[30px] bg-[rgb(232,234,237)]'></span>
										<div className='flex flex-col justify-center items-center'>
											<p className='font-semibold'>5</p>
											<p className='text-xs text-Gray'>following</p>
										</div>
									</div>
									<div className='my-6'>
										<button className='hover:bg-blue-700 border-Blue bg-Blue text-white md:text-xl text-md rounded-xl shadow-lg shadow-LightBlue py-3 px-20 duration-150 w-full'>Follow</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='lg:hidden block'>
						<div className='relative flex flex-col sm:pt-3 sm:px-6 px-2'>
							<div className='relative flex md:h-[80px] sm:h-[70px] h-[55px]'>
								<div className='relative sm:top-[-60px] top-[-30px] block justify-center'>
									<div className='md:w-32 md:h-32 sm:w-28 sm:h-28 w-20 h-20'>
										<Image className='rounded-full sm:border-8 border-4 border-white w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='25' height='25'/>
									</div>
								</div>
								<div className='flex lg:flex-row flex-col justify-between w-full h-full mt-2'>
									<div className='flex items-center w-full sm:ms-6 ms-2'>
										<div className='relative flex items-center sm:space-x-5 space-x-3'>
											<div className='flex flex-col justify-center items-center'>
												<p className='font-semibold text-md'>{podcast.episodes.length}</p>
												<p className='text-xs text-Gray'>episodes</p>
											</div>
											<span className='w-[.8px] h-[30px] bg-[rgb(232,234,237)]'></span>
											<div className='flex flex-col justify-center items-center'>
												<p className='font-semibold text-md'>24</p>
												<p className='text-xs text-Gray'>followers</p>
											</div>
											<span className='w-[.8px] h-[30px] bg-[rgb(232,234,237)]'></span>
											<div className='flex flex-col justify-center items-center'>
												<p className='font-semibold text-md'>5</p>
												<p className='text-xs text-Gray'>following</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='sm:px-6 px-2'>
								<div className='flex flex-col h-full'>
									<h1 className={`${vazirBold.className} ${'md:text-2xl sm:text-xl font-black'}`}>{podcast.name}</h1>
									<p className={`${vazir.className} ${'md:text-sm text-xs text-Gray mt-1 w-full'}`}>{podcast.about}</p>
								</div>

								<div className='sm:my-6 my-3'>
									<button className='hover:bg-blue-700 border-Blue bg-Blue text-white md:text-xl sm:text-md text-sm rounded-xl md:px-16 px-10 py-2 duration-150 w-full'>Follow</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center space-x-1'>
					<span className='w-full h-[.8px] bg-Gray'></span>
					<p className='mb-1 text-Gray text-sm font-semibold'>episodes</p>
					<span className='w-full h-[.8px] bg-Gray'></span>
				</div>
				<EpisodeList data={podcast} />
			</div>
	  	))}

	</div>
  )
}

export default Podcast
