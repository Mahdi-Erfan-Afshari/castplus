'use client'
import SearchEpisodeSectionByTags from "./SearchEpisodeSectionByTags";
import Link from "next/link";
import Image from "next/image";
import { vazir, lalezar, nunito } from "../utils/fonts";
import { MdOutlinePodcasts } from 'react-icons/md'
import { useState } from "react";

const EpisodeList = ({data}) => {
	const episodes = data.episodes
	// const [episodeIndex, setEpisodeIndex] = useState(0)
	// const [selectedTag, setSelectedTag] = useState('')
	// const [searchSection, setSearchSection] = useState()
	// const [searchTagModalRef, setsearchTagModalRef] = useState(null)
	// const tagsList = [];
	// const getNonRepeatingTags = () => {
	// 	let i = 0;
	// 	episodes.forEach(episode => {
	// 		tagsList.push({id: i, tags: []});
	// 		episode.sections.forEach(section => {
	// 			section.tags.forEach(tag => {
	// 				if (!tagsList[i].tags.includes(tag.name)) {
						
	// 					tagsList[i].tags.push(tag.name);
	// 				}
	// 			})
	// 		})
	// 		i++;
	// 	});
	// }
	// getNonRepeatingTags();

	// const searchTagModal = (modal) => {
	// 	setsearchTagModalRef(modal)
	// }

	// const showSearchTagModal = (e) => {
	// 	searchTagModalRef.classList.remove('hidden');
	// 	searchSection.changeInputValue(e)
	// 	setSelectedTag(e);
	// }

  return (
	<>
	  {episodes.length === 0 ? <div className={`${nunito.className} ${"flex justify-center w-full my-6 space-x-2"}`}><p className="text-2xl font-bold">No Episode Yet</p><MdOutlinePodcasts className="text-3xl" /></div> : 
	  	<div className="space-y-4">
	  		{episodes.map((episode) => (
				<div className="rounded-2xl overflow-hidden border-[1px] border-border-gray">
					<figure className="flex bg-white rounded-xl relative">
					  	<Link href={`/podcasts/${data.id}/${episode.id}`} key={episode.title} className={`${vazir.className} ${''}`}>
					  		<Image className="block h-full sm:min-w-[135px] min-w-[80px] w-20 sm:w-32 sm:min-w-32 object-cover border-e-[1px] border-gray" src={episode.thumbnail} alt="episode thumbnail" width="300" height="300" />
					  	</Link>
						<div className="p-2 md:space-y-2 space-y-1">
							<Link href={`/podcasts/${data.id}/${episode.id}`} key={episode.title} className={vazir.className}>
								<blockquote className="h-auto ">
									<h1 className='sm:text-base text-xs font-semibold'>{episode.title}</h1>
									<p className="sm:text-sm text-xs text-Gray font-medium mt-1 md:mt-2 line-clamp-1">{episode.description}</p>
								</blockquote>
							</Link>
							<figcaption className="font-medium">
								<div className="flexjustify-start text-gray-700 dark:text-gray-500">
									<span className={lalezar.className}>
										<p className='bg-gray-50 w-fit px-1 rounded-md pt-1 text-gray-500 sm:text-xs text-[10px]'>{`${episode.published_date} | ${episode.published_time}`}</p>
									</span>
								</div>
							</figcaption>
							{/* <div className="space-x-1 sm:mt-2 mt-0 line-clamp-1 text-blue-500">
								{tagsList.filter(tags => tags.id == episodes.indexOf(episode))[0].tags.map(tag => (
									<div className="hover:text-blue-600 inline-block text-blue-500 bg-blue-100 sm:text-xs text-[11px] sm:px-2 px-1 sm:py-[2px] py-[1px] rounded-md cursor-pointer duration-75" onClick={(e) => {setEpisodeIndex(episodes.indexOf(episode)); showSearchTagModal(e.target.innerHTML);}}>{tag}</div>
								))}
							</div> */}
						</div>
					</figure>
				</div>
			))}
	  	</div>}
		{/* <SearchEpisodeSectionByTags tagsData={tagsList[episodeIndex]} selectedTag={selectedTag} searchTagModalRefrence={searchTagModal} episodeData={episodes[episodeIndex]} setSearchSection={setSearchSection} /> */}
	</>
  )
}

export default EpisodeList
