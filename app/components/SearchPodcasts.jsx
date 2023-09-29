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
		<>
			<div className={`${vazir.className} ${'flex justify-between search w-full bg-white sm:ps-8 sm:pe-2 ps-2 pe-1 sm:py-2 py-1 mb-6 rounded-xl border-[1px] border-gray-100'}`}>
				<input onKeyUp={e => {e.keyCode === 13 ? handleSubmit() : ''}} onChange={ (e) => setQuery(e.target.value)} className='input w-full sm:text-xl text-sm' type="text" placeholder='Search The Podcast Here...' />
				<button onClick={handleSubmit} className='hover:bg-blue-700 flex justify-center items-center bg-Blue text-xl rounded-xl text-white sm:px-8 sm:py-3 p-[10px] duration-150'>
					<p className='sm:block hidden sm:me-1'>search</p>
					<CgSearch className='sm:mt-[2px] sm:me-0 me-[2px]'/>
				</button>
			</div> 
		</>
	)
}

export default SearchPodcasts
