import Episode from '@/app/components/Episode'

const PodcastPage = ({params: { episodeRoute }}) => {
  return (
	<div className='container mx-auto'>
		 <Episode episodeRoute={episodeRoute} />
	</div>
  )
}

export default PodcastPage
