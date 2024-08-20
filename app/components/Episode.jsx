import Controller from '@/app/components/Controller'
import { vazir, lalezar } from '../utils/fonts';


const Episode = async ({ data, episodeRoute, id }) => {
  const podcasts = data;
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
