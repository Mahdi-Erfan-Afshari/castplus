import Link from "next/link";
import Image from "next/image";
import { vazir, lalezar } from "../utils/fonts";

const EpisodeList = ({data}) => {
	const episodes = data.episodes
  return (
	<>
	  {episodes.map((episode) => (
		  	<Link href={`/podcasts/${data.id}/${episode.id}`} key={episode.title} className={vazir.className}>
				<div className="mt-4 md:mt-5 lg:mt-6 rounded-2xl overflow-hidden border-gray-100">
					<figure class="sm:flex bg-white rounded-xl p-3 sm:p-0 relative">
					  	<Image class="hidden sm:block h-full w-32 sm:w-36 object-cover border-e-[1px] border-gray" src={episode.thumbnail} alt="episode thumbnail" width="0" height="0" />
						<div className='flex items-center'>
					  		<Image class="w-20 h-20 sm:w-48 sm:h-auto sm:rounded-none object-cover rounded-lg block sm:hidden" src={episode.thumbnail} alt="episode thumbnail" width="0" height="0" />
					  		<h1 className='text-md font-semibold ms-4 block sm:hidden'>{episode.title}</h1>
						</div>
					  <div class="pt-1 md:p-3 sm:p-2 text-center sm:text-left md:space-y-4 space-y-1">
					    <blockquote>
							<h1 className='sm:text-xl md:text-2xl font-semibold hidden sm:block'>{episode.title}</h1>
					    	<p class="md:text-md sm:text-sm text-xs text-Gray font-medium mt-2 md:mt-2">{episode.description}</p>
					    </blockquote>
					    <figcaption class="font-medium">
					      <div class="flex justify-center sm:justify-start text-slate-700 dark:text-slate-500">
						  	<span className={lalezar.className}>
								<p className='bg-[#0034ff14] w-fit px-1 rounded-md pt-1 text-[#2e56f3ab] sm:text-xs text-[10px] md:mt-0 sm:mt-2 '>{`${episode.published_date} | ${episode.published_time}`}</p>
							</span>
					      </div>
					    </figcaption>
					  </div>
					</figure>
				</div>
		  	</Link>
		))}
	</>
  )
}

export default EpisodeList
