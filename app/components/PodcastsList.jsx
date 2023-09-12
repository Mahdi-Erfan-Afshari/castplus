import {server} from '../api/podcasts/route';
import Podcasts from './Podcasts';

const PodcastPage = async () => {
	const fetchPodcasts = async () => {
		const res = await fetch(`${server}/api/podcasts`, { cache: 'no-store' }, {
			next: {
			  revalidate: 60
			}
		});
		const data = await res.json();
		return data
	}
	
	const podcasts = await fetchPodcasts();

  return (
	<div className='xl:container xl:mx-auto container mx-auto p-6'>
		<Podcasts data={podcasts} />
	</div>
  )
}

export default PodcastPage
