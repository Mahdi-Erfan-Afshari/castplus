import Podcast from '@/app/components/Podcast'
import { server } from '@/app/api/podcasts/route';

const PodcastPage = async ({params: { id }}) => {
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
	<div>
	 	<Podcast data={podcasts} id={id} />
	</div>
  )
}

export default PodcastPage
