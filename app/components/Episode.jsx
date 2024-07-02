import {server} from '../api/podcasts/route';
import Controller from '@/app/components/Controller'
import Image from 'next/image';
import { vazir, lalezar } from '../utils/fonts';

async function fetchPodcast() {
  const response = await fetch(`${server}/api/podcasts`, { cache: 'no-cache' });
  const podcasts = await response.json();
  return podcasts;
}

const Episode = async ({ episodeRoute, id }) => {
  const podcasts = await fetchPodcast();
  const podcast = podcasts.filter((podcast) => {
    return podcast.id === id
  })
  const episode = podcast[0].episodes.filter((episode) => {
    return episode.id === episodeRoute
  })

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
