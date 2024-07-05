'use client'
import { useState } from 'react';
import {vazir } from '@/app/utils/fonts'
import {CgSearch} from 'react-icons/cg';
import { server } from '@/app/lib/server'

const SearchPodcasts = ({ getSearchResults, setLoading }) => {
	const [query, setQuery] = useState('');
	const handleSubmit = async (e) => {
		setLoading(true)
		fetch(`${server}/api/search`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				query : query,
			}),
		   })
			.then((response) => response.json())
			.then((data) => {
				setLoading(false)
				getSearchResults(data);
			})
			.catch((error) => {
				console.error(error);
		});
	}
	
	return (
		<div className='flex mb-6'>
			<div className={`${vazir.className} ${'flex justify-between search w-full bg-[#efefef] sm:ps-8 sm:pe-2 ps-2 pe-1 sm:py-1 py-2 border-[1px] border-border-gray rounded-s-xl '}`}>
				<input onKeyUp={e => {e.keyCode === 13 ? handleSubmit() : ''}} onChange={ (e) => setQuery(e.target.value)} className='input w-full sm:text-lg text-sm' type="text" placeholder='Search The Podcast Here...' />
			</div> 
			<button onClick={handleSubmit} className='hover:bg-blue-700 flex justify-center items-center bg-Blue text-xl rounded-e-xl text-white sm:px-8 sm:py-2 p-[10px] duration-150'>
				<p className='sm:block hidden sm:me-1 sm:mb-1'>search</p>
				<CgSearch className='sm:me-0 me-[2px]'/>
			</button>
		</div>
	)
}

export default SearchPodcasts
