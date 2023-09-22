import {server} from '../api/podcasts/route';
import Controller from '@/app/components/Controller'
import Image from 'next/image';
import { vazir, lalezar } from '../utils/fonts';

async function fetchPodcast() {
  const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
  const podcasts = await response.json();
  return podcasts;
}

const Episode = async ({ episodeRoute }) => {
  const podcasts = await fetchPodcast();
  const episodes = podcasts[0].episodes
  const episode = episodes.filter((episode) => episode.id == episodeRoute);

  return (
	<>
		{episode.map((episode) => (
			<div  className={`${vazir.className}`}>
				<Controller url={episode.url} episode={episode} />
			</div>
	   ))}
	</>
  )
}

export default Episode
