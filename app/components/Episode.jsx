'use client'
import Controller from '@/app/components/Controller'
import { useState } from 'react';
import SearchEpisodeSectionByTags from './SearchEpisodeSectionByTags';
import { vazir, lalezar } from '../utils/fonts';
import { BsFilter } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";

const Episode = async ({ data, episodeRoute, id }) => {
	const podcasts = data;
	const podcast = podcasts.filter((podcast) => {
	  return podcast.id === id
	})
	const episode = podcast[0].episodes.filter((episode) => {
	  return episode.id === episodeRoute
	})

	const [searchTagModalRef, setsearchTagModalRef] = useState(null)
	const tagsList = [];
	const getNonRepeatingTags = () => {
		episode[0].sections.forEach(section => {
			section.tags.forEach(tag => {
				if (!tagsList.includes(tag.name)) {
					tagsList.push(tag.name);
				}
			})
		})
	}
	getNonRepeatingTags();

	const searchTagModal = (modal) => {
		setsearchTagModalRef(modal)
	}

	const showSearchTagModal = () => {
		searchTagModalRef.classList.remove('hidden');
	}

  return (
	<>
	  {episode.map((episode) => (
	  	<div  className={`${vazir.className} ${'mt-8'}`}>
        	<div className='flex items-center space-x-2'>
				<div className='flex space-x-1 text-gray-600 border-gray-300 border-e-[1px] px-2'>
					<BsFilter className='text-xl' />
					<span className=''>Filter</span>
				</div>
				<div className='hover:text-gray-600 flex items-center bg-white py-1 px-4 border-border-gray border-[1px] rounded-full cursor-pointer duration-75' onClick={showSearchTagModal}>
					<p className=''>Tags</p>
					<VscChevronRight />
				</div>
			</div>
	  		<Controller url={episode.url} episode={episode} />

			<SearchEpisodeSectionByTags tags={tagsList} searchTagModalRefrence={searchTagModal} episodeData={episode} />

	  	</div>
	   ))}
	</>
  )
}

export default Episode
