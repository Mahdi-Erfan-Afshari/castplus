'use client'
import { useState } from 'react';
import {vazir } from '@/app/utils/fonts'
import {CgSearch} from 'react-icons/cg';

const SearchPodcasts = ({ getSearchResults }) => {
	const [query, setQuery] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch(`/api/podcasts/search?query=${query}`);
		const podcasts = await res.json();
		getSearchResults(podcasts);
	}
	
	return (
		<div className={`${vazir.className} ${'flex justify-between search w-full bg-white shadow-md sm:ps-8 sm:pe-4 ps-5 pe-2 py-2 mb-6 rounded-full'}`}>
			<input onKeyUp={handleSubmit} onChange={ (e) => setQuery(e.target.value)} className='input w-full sm:text-xl' type="text" placeholder='Search The Podcast Here...' /><button onClick={handleSubmit} className='hover:text-Blue hover:bg-white hover:shadow-none border-2 border-Blue flex justify-center items-center shadow-md shadow-LightBlue bg-Blue text-xl rounded-full text-white sm:px-8 sm:py-3 p-[10px] duration-150'><p className='sm:block hidden sm:mb-[3px] sm:me-1'>search</p><CgSearch className='sm:mt-[2px] sm:me-0 me-[2px]'/></button>
		</div>
	)
}

export default SearchPodcasts
