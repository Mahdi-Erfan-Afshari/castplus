'use client'
import { useState, useEffect } from 'react';
import {server} from '../api/podcasts/route';
import Podcasts from './Podcasts';
import SearchPodcasts from './SearchPodcasts';

const PodcastPage = () => {
	const [podcasts, setPodcast] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log(loading);

	useEffect(() => {
		const fetchPodcasts = async () => {
			const res = await fetch(`${server}/api/podcasts`, { cache: 'no-store' }, {
				next: {
				  revalidate: 60
				}
			});
			const data = await res.json();
			setPodcast(data);
			setLoading(true);
		}
		fetchPodcasts();
	}, []);

  return (
	<div className='xl:container xl:mx-auto container mx-auto p-6'>
	  <SearchPodcasts setLoading={setLoading} getSearchResults={(results) => setPodcast(results)}/>
		{loading && podcasts.length === 0 ? <p className='text-center'>This Podcast Is Not Found</p> : <Podcasts data={podcasts} />}
	</div>
  )
}

export default PodcastPage
