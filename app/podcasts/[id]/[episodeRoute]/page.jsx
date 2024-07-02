import Episode from '@/app/components/Episode'

const PodcastPage = ({params: { episodeRoute, id }}) => {
  return (
	<div className='container mx-auto'>
		 <Episode episodeRoute={episodeRoute} id={id} />
	</div>
  )
}

export default PodcastPage
