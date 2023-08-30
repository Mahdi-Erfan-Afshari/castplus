import Podcast from '@/app/components/Podcast'
import LoadingPage from '../../loading'
const PodcastPage = ({params: { id }}) => {
  return (
	<div>
	 	 <Podcast id={id} />
	</div>
  )
}

export default PodcastPage
