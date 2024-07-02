// import {server} from '@/app/api/podcasts/route';
import Image from 'next/image';
import { vazir, vazirBold, lalezar, nunito } from '../utils/fonts';
import EpisodeList from '@/app/components/EpisodeList'
import Banner from '@/app/img/banner.svg'
import { FavoriteDesktopButton, FavoriteMobileButton } from './FavoriteButton';

// async function fetchPodcast() {
// 	const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
// 	const podcasts = await response.json();
// 	return podcasts;
// }

// async function fetchUsers() {
// 	const response = await fetch(`${server}/api/user_profiles`);
// 	const users = await response.json();
// 	return users;
// }

const Podcast = async ({ id, data, usersData }) => {
	const podcasts =  data;
	const podcast = podcasts.filter((podcast) => podcast.id == id);
	const users = usersData;

  return (
	<div>
	  	{podcast.map((podcast) => (
			<div className='xl:container xl:mx-auto container mx-auto p-6'>
				<div className='relative bg-white overflow-hidden rounded-xl mb-6 md:mb-8 h-full'>
					<div className='w-full'>
						<Image className='object-cover w-full lg:h-full md:h-52 sm:h-44 h-24' src={Banner} alt='Banner' />
					</div>
					<div className='lg:block hidden'>
						<div className='relative flex flex-row pt-3 px-6'>
							<div className='relative top-[-60px] block justify-center'>
								<div className='xl:ms-6 lg:ms-0 md:w-40 md:h-40 h-32'>
									<Image className='rounded-full border-8 border-white w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='300' height='300'/>
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
										<div className='flex flex-col justify-center items-center'>
											<FavoriteDesktopButton podcasts={data} id={id} users={users} />
										</div>
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
										<Image className='rounded-full sm:border-8 border-4 border-white w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='300' height='300'/>
									</div>
								</div>
								<div className='flex lg:flex-row flex-col justify-between w-full h-full mt-2'>
									<div className='flex items-center w-full sm:ms-6 ms-2'>
										<div className='relative flex items-center sm:space-x-5 space-x-3'>
											<div className='flex flex-col justify-center items-center'>
												<p className='font-semibold text-md'>{podcast.episodes.length}</p>
												<p className='text-xs text-Gray'>episodes</p>
											</div>
											<div className='flex flex-col justify-center items-center'>
												<FavoriteMobileButton podcasts={data} id={id} users={users} />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='sm:px-6 px-2 mb-2'>
								<div className='flex flex-col h-full'>
									<h1 className={`${vazirBold.className} ${'md:text-2xl sm:text-xl font-black'}`}>{podcast.name}</h1>
									<p className={`${vazir.className} ${'md:text-sm text-xs text-Gray mt-1 w-full'}`}>{podcast.about}</p>
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
