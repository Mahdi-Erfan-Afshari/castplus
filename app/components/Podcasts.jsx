'use client'
import {vazir , lalezar} from '@/app/utils/fonts'
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import SearchPodcasts from './SearchPodcasts';
import { useState } from 'react';

const Podcasts = ({data}) => {
	const [podcasts, setPodcasts] = useState(data);

  return (
	<>
		<SearchPodcasts getSearchResults={(results) => setPodcasts(results)}/>
		{podcasts.length === 0 ? <p className='text-center'>This Podcast Is Not Found</p> : <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mx-0 mx-4 gap-x-6 gap-y-10 mt-16'>
			{podcasts.map((podcast) => (
				<>
			  	<Link href={`/podcasts/${podcast.id}`} key={podcast.id} className={vazir.className}>
				  	<div className='flex flex-col items-center bg-white w-full rounded-xl overflow-hidden shadow-md'>
						<div className='w-full h-48 overflow-hidden'>
							<div className='flex items-center w-full '>
								<Image className='w-full h-48 object-cover' src={podcast.thumbnail} alt='podcast image' width='25' height='25' />
							</div>
						</div>
						<div className='px-3 py-4'>
							<h1 className='text-xl text-center font-semibold '>{podcast.name}</h1>
							<p className='text-center text-sm text-Gray my-3'>{podcast.about}</p>
							<div className='flex items-center justify-between mt-6'>
								<span className='flex gap-x-1 text-amber-400 text-sm ms-1'>
									<AiFillStar className='text-lg' />
									<p>{podcast.stargazers_count}</p>
								</span>
								<span className={`${lalezar.className} ${'bg-[#0034ff14] px-1 rounded-md text-[#2e56f3ab] text-sm'}`}>
									<p className=''>Number of episodes: {podcast.episodes.length}</p>
								</span>
							</div>
						</div>
					</div>
			  	</Link>
				</>
			))}
		</div>}
	</>
  )
}

export default Podcasts