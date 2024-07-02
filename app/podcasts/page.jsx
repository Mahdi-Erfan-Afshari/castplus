import {server} from '@/app/api/podcasts/route';
import PodcastsList from '@/app/components/PodcastsList'

const fetchPodcasts = async () => {
	const res = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
	const data = await res.json();
	return data
}

const PodcastsPage = async () => {
	const podcasts = await fetchPodcasts();

	return (
	<>
	  <PodcastsList podcasts={podcasts} />
	</>
  )
}

export default PodcastsPage
