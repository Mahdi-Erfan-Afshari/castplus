'use server'
import Podcast from '@/app/components/Podcast'

const PodcastPage = ({params: { id }}) => {
  return (
	<div>
	  <Podcast id={id} />
	</div>
  )
}

export default PodcastPage
