import {server} from '@/app/lib/server';
import PodcastsList from '@/app/components/PodcastsList'

const fetchPodcasts = async () => {
	const res = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
	const data = await res.json();
	return data
}


const PodcastsPage = async () => {
	const podcasts = await fetchPodcasts();
	console.log(podcasts);
	return (
	<>
	  <PodcastsList podcasts={podcasts} />
	</>
  )
}

export default PodcastsPage
