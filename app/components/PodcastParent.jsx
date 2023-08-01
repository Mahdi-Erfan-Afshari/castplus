import Controller from '@/app/components/Controller'
import {server} from '../api/podcasts/route';
import Sections from './Sections'
import Info from "./Info"


async function fetchPodcast() {
    // const audio = useRef();
    const response = await fetch(`${server}/api/podcasts`, { cache: 'no-store' });
  
    const podcasts = await response.json();
    return podcasts;
}

const PodcastParent = async ({id}) => {
    const podcasts = await fetchPodcast();
    const podcast = await podcasts.filter((podcast) => podcast.id == id);
  return (
    <>
        <Controller podcast={podcast} url={podcast.url} />
        <Sections id={id} />
        <Info />
    </>
  )
}

export default PodcastParent
