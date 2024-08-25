'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline  } from "react-icons/io5";
import { vazir } from '../utils/fonts';
import { usePathname } from 'next/navigation';


const SearchEpisodeSectionByTags = ({ tags, searchTagModalRefrence, episodeData }) => {
	const episode = episodeData;
	const pathName = usePathname();
	const [filteredSections, setFilteredSections] = useState([])
	const searchTagModalRef = useRef(null)
	const searchTagInputRef = useRef(null)
	const hideSearchTagModal = () => {
		let searchTagModal = searchTagModalRef.current;
		searchTagModal.classList.add('hidden');
	}

	const filterSections = () => {
		let tagFilter = searchTagInputRef.current.value
		const sections = episode.sections.filter((section) => {
			let isIncludesTagfilter = section.tags.some((tag) => {
				return tag.name === tagFilter;
			})
			return isIncludesTagfilter
		})
		setFilteredSections(sections);
	}

	const changeInputValue = (e) => {
		searchTagInputRef.current.value = e;
		filterSections();
	}
	
	useEffect(() => {
		searchTagModalRefrence(searchTagModalRef.current);
	}, [episode])
	return (
		<div ref={searchTagModalRef} className={`${vazir.className} ${"hidden fixed top-0 left-0 flex justify-center items-center w-full h-full bg-transparent-black-50 ms-0 z-50"}`}>
			<div className="sm:w-[90vh] w-full sm:h-96 h-full bg-white sm:rounded-lg py-2 px-4">
				<div className='flex justify-end w-full p-1 mb-3 cursor-pointer' onClick={hideSearchTagModal}>
					<IoCloseOutline className='hover:text-gray-500 text-xl text-gray-400 duration-75' />
				</div>
				<div className="flex justify-between items-center w-full px-2 sm:py-1 py-2 rounded-md bg-gray-100">
					<input ref={searchTagInputRef} className="w-full outline-none border-none bg-gray-100 items-center text-sm" type="text" placeholder="Search Tag..." onKeyUpCapture={filterSections}/>
					<CiSearch className='text-xl text-gray-400' />
				</div>
				<div className='overflow-y-scroll sm:max-h-72 h-[calc(100%_-_62px)] no-scrollbar'>
					<div className='mt-6'>
						<p className='text-gray-400 text-sm mb-1 mt-3'>episode tags</p>
						{tags.map((tag) => (
							<div className='hover:text-blue-600 inline-block text-blue-500 bg-blue-100 text-xs px-2 py-[2px] mx-0.5 rounded-md cursor-pointer duration-75' onClick={(e) =>changeInputValue(e.target.innerHTML)}>{tag}</div>
						))}
					</div>
					<div className='sm:mt-6 mt-8 w-full'>
						<h2 className='text-gray-400 text-sm mb-1 mt-3'>sections</h2>
						{filteredSections.length === 0 ? 
							<div className='flex justify-center w-full mt-6 text-sm text-gray-500'>
								<p>No sections were found with this tag</p>
							</div> :
							<>
								{filteredSections.map((section) => (
									<>
										<Link href={`${pathName}?timeStart=${section.timeStart}`} className='cursor-pointer' onClick={hideSearchTagModal}>
											<div className='hover:bg-gray-100 grid grid-cols-12 p-1 rounded-md cursor-pointer duration-75'>
												<div className='col-span-10 space-y-1'>
													<h1 className='text-sm'>{section.title}</h1>
													<p className='text-xs text-gray-600 truncate'>{section.summary}</p>
												</div>
												<div className='flex justify-end items-center col-span-2'>
													<p className='text-gray-600 text-xs'>{Math.floor(section.duration / 3600) >= 10 ? Math.floor(section.duration / 3600) : '0' +  Math.floor(section.duration / 3600).toString()}:</p>
													<p className='text-gray-600 text-xs'>{Math.floor(section.duration % 3600 / 60) >= 10 ? Math.floor(section.duration % 3600 / 60) : '0' +  Math.floor(section.duration % 3600 / 60).toString()}:</p>
													<p className='text-gray-600 text-xs'>{Math.floor(section.duration % 60) >= 10 ? Math.floor(section.duration % 60) : '0' +  Math.floor(section.duration % 60).toString()}</p>
													{/* <p className='text-gray-600 text-xs'>{Math.floor(section.duration / 3600) + ':' + Math.floor(section.duration % 3600 / 60) + ':' + Math.floor(section.duration % 60)}</p> */}
												</div>
											</div>
										</Link>
										{filteredSections.indexOf(section) !== filteredSections.length-1 ? <hr className='my-1' /> : ''}
									</>
								))}
							</>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchEpisodeSectionByTags
