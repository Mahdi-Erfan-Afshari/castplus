import Image from 'next/image';
import { vazir, vazirBold, lalezar, nunito } from '../utils/fonts';
import EpisodeList from '@/app/components/EpisodeList'
import Banner from '@/app/img/banner.svg'
import { FavoriteDesktopButton, FavoriteMobileButton } from './FavoriteButton';

const Podcast = async ({ id, data, usersData }) => {
	const podcasts =  data;
	const podcast = podcasts.filter((podcast) => podcast.id == id);
	const users = usersData;

  return (
	<div>
	  	{podcast.map((podcast) => (
			<div className='xl:container xl:mx-auto container mx-auto p-6'>
				<div className='lg:hidden block relative bg-white overflow-hidden rounded-xl mb-6 md:mb-8 border-[1px] border-border-gray lg:col-span-4 col-span-1 lg:sticky lg:top-40 lg:right-0 w-full h-fit ltr'>
					<div>
						<div className='relative flex flex-col p-3'>
							<div className='flex items-center h-full space-x-2'>
								<div className='relative justify-center'>
									<div className='md:w-32 md:h-32 sm:w-28 sm:h-28 w-20 h-20'>
										<Image className='rounded-full w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='300' height='300'/>
									</div>
								</div>
								<div className='flex flex-col justify-center w-full h-full'>
									<div className='flex items-center w-full ms-2'>
										<div className='relative flex items-center space-x-1'>
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
							<div className='px-2 mt-2'>
								<div className='flex flex-col h-full'>
									<h1 className={`${vazirBold.className} ${'md:text-2xl sm:text-xl font-black'}`}>{podcast.name}</h1>
									<p className={`${vazir.className} ${'md:text-sm text-xs text-Gray mt-1 w-full'}`}>{podcast.about}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='grid lg:grid-cols-12 grid-cols-1 gap-8 h-full w-full rtl'>
						<div className='lg:col-span-8 col-span-1 w-full space-y-4 ltr'>
							<div className='flex items-center space-x-1'>
								<span className='w-full h-[.8px] bg-Gray'></span>
								<p className='mb-1 text-Gray text-sm font-semibold'>episodes</p>
								<span className='w-full h-[.8px] bg-Gray'></span>
							</div>
							<div className='lg:col-span-8 col-span-1 w-full ltr'>
								<EpisodeList data={podcast} />
							</div>
						</div>
						<div className='lg:block hidden relative bg-white overflow-hidden rounded-xl mb-8 pb-4 border-[1px] border-border-gray col-span-4 lg:sticky lg:top-10 lg:right-0 w-full h-fit ltr'>
							<div className=''>
								<div className='relative flex flex-col pt-3 px-6'>
									<div className='relative flex space-x-3'>
										<div className='md:w-24 md:h-24 h-24'>
											<Image className='rounded-full w-full h-full object-cover' src={podcast.thumbnail} alt='podcast logo' width='300' height='300'/>
										</div>
										<div className='flex flex-col items-center justify-center'>
											<div className='relative flex items-center space-x-2'>
												<div className='flex flex-col justify-center items-center'>
													<p className='font-semibold'>{podcast.episodes.length}</p>
													<p className='text-[11px] text-Gray'>episodes</p>
												</div>
												<FavoriteDesktopButton podcasts={data} id={id} users={users} />
											</div>
										</div>
									</div>
									<div className='flex lg:flex-row flex-col justify-between w-full h-full mt-2'>
										<div className='flex flex-col h-full lg:ms-4 ms-0'>
											<h1 className={`${vazirBold.className} ${'lg:text-start text-center md:text-lg sm:text-md text-sm font-black'}`}>{podcast.name}</h1>
											<p className={`${vazir.className} ${'lg:text-start text-center text-xs text-Gray mt-1 2xl:max-w-[550px] xl:max-w-[450px] lg:max-w-[380px]'}`}>{podcast.about}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	  	))}
	</div>
  )
}

export default Podcast
