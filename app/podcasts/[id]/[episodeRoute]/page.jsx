import { server } from '@/app/lib/server';
import Episode from '@/app/components/Episode'

async function fetchPodcast() {
	const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
	const podcasts = await response.json();
	return podcasts;
}

const PodcastPage = async ({params: { episodeRoute, id }}) => {
	const res = await fetchPodcast();
  return (
	<div className='container mx-auto'>
		 <Episode data={res} episodeRoute={episodeRoute} id={id} />
	</div>
  )
}

export default PodcastPage
