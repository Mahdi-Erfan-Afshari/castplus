import Podcasts from './Podcasts';

const PodcastPage = async ({ podcasts }) => {
	
  return (
	<div className='xl:container xl:mx-auto container mx-auto  mt-6'>
		<Podcasts data={podcasts} />
	</div>
  )
}

export default PodcastPage
