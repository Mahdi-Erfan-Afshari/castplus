import Podcast from '@/app/components/Podcast'
import { server } from '@/app/api/podcasts/route';

const fetchPodcasts = async () => {
	const res = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
	const data = await res.json();
	return data
}

async function fetchUsers() {
	const response = await fetch(`${server}/api/user_profiles`);
	const users = await response.json();
	return users;
}

const PodcastPage = async ({params: { id }}) => {
	const users = await fetchUsers()
	const podcasts = await fetchPodcasts();
  return (
	<div>
	 	<Podcast data={podcasts} users={users} id={id} />
	</div>
  )
}

export default PodcastPage
