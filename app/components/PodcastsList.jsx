// import {server} from '../api/podcasts/route';
import Podcasts from './Podcasts';

// const fetchPodcasts = async () => {
// 	const res = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
// 	const data = await res.json();
// 	return data
// }

const PodcastPage = async ({ podcasts }) => {
	// const podcasts =  podcasts();
	
  return (
	<div className='xl:container xl:mx-auto container mx-auto  mt-6'>
		<Podcasts data={podcasts} />
	</div>
  )
}

export default PodcastPage
