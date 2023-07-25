import Image from 'next/image';
import img1 from '@/app/img/podcast.png'

async function fetchPodcast() {
  const response = await fetch(`http://localhost:3000/api/podcasts`);
  const res = await response.json();
  return res;
}

const Podcast = async ({ id }) => {
  const podcasts = await fetchPodcast(id);
  const podcast = podcasts.filter((podcast) => podcast.id == id);
  console.log(podcast);
  return (
    <div className='container mx-auto p-3'>
      {podcast.map((podcast) => (
        <div className='md:flex md:items-center justify-center p-5'>
          {/* <div className='flex flex-col justify-center'>
            <div className='w-28 md:w-full w-full me-5'><Image className='rounded-xl w-full' src={img1} /></div>
            <h1 className='md:hidden text-4xl font-bold mt-8 md:mt-0'>{podcast.title}</h1>
          </div>
          <div>
            <h1 className='hidden md:block text-4xl text-center font-bold mt-3 md:ms-4 md:mt-0'>{podcast.title}</h1>
            <p className='text-lg mt-3 md:ms-3 text-Gray'>{podcast.description}</p>
          </div> */}
          <audio src={podcast.url} controls autoPlay></audio>
        </div>
      ))}
    </div>
  )
}

export default Podcast
