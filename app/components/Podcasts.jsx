'use client'
import {vazir , lalezar, nunito} from '@/app/utils/fonts'
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import SearchPodcasts from './SearchPodcasts';
import { useState } from 'react';
import SearchLoading from "@/app/components/SearchLoading"
import NoResult from '@/app/img/NoResult.svg'

const Podcasts = ({data}) => {
	const [podcasts, setPodcasts] = useState(data);
	const [loading, setLoading] = useState(false);

  return (
	<>
		<SearchPodcasts setLoading={setLoading} getSearchResults={(results) => setPodcasts(results)}/>
		{loading ? <SearchLoading /> : podcasts.length === 0 ? <div className={`${nunito.className} ${'flex items-center justify-center h-[400px] w-full text-lg'}`}><Image src={NoResult} /></div> : 
		<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mx-0 gap-x-6 gap-y-4 sm:px-0 mt-8'>
			{podcasts.map((podcast) => (
			  	<Link href={`/podcasts/${podcast.id}`} key={podcast.id} className={vazir.className}>
				  	<div className='hidden sm:flex flex-col items-center bg-white w-full rounded-xl overflow-hidden border-[1px] border-gray-150'>
						<div className='w-full h-48 overflow-hidden'>
							<div className='flex items-center w-full '>
								<Image className='w-full h-48 object-cover' src={podcast.thumbnail} alt='podcast image' width='300' height='300' />
							</div>
						</div>
						<div className='px-3 py-4 max-w-full'>
							<h1 className='text-xl text-center font-semibold truncate'>{podcast.name}</h1>
							<p className='h-[40px] overflow-hidden text-center text-sm text-Gray my-3'>{podcast.about}</p>
							<div className='flex items-center justify-between mt-6'>
								<span className='flex gap-x-1 text-amber-400 text-sm ms-1'>
									<AiFillStar className='text-lg' />
									<p>{podcast.stargazers_count}</p>
								</span>
								<span className={`${lalezar.className} ${'bg-[#0034ff14] px-1 rounded-md text-[#2e56f3ab] text-sm'}`}>
									<p className=''>episodes: {podcast.episodes.length}</p>
								</span>
							</div>
						</div>
					</div>

					{/* in mobile */}
					<div className="sm:hidden block rounded-xl overflow-hidden border-[1px] border-gray-100">
						<div class="flex bg-white rounded-xl">
								<Image className="w-28 h-full object-cover border-e-[1px] border-gray" src={podcast.thumbnail} alt="podcast thumbnail" width="300" height="300" />
						 	<div className="flex items-center p-[6px] text-left space-y-1">
								<div className='flex flex-col justify-center w-full h-full space-y-1'>
										<h1 className='text-md font-semibold'>{podcast.name}</h1>
						    			<p class="h-[60px] overflow-hidden text-sm text-Gray font-medium">{podcast.about}</p>
								</div>
							</div>
						</div>
					</div>
			  	</Link>
			))}
		</div>}
	</>
  )
}

export default Podcasts