import {vazir , lalezar} from '@/app/utils/fonts'
import {CgSearch} from 'react-icons/cg';
import Link from 'next/link';
import Image from 'next/image';

const Podcasts = ({data}) => {
  return (
	<div>
		{data.map((podcast) => (
		  	<Link href={`/podcasts/${podcast.id}`} key={podcast.id} className={vazir.className}>
				<div className="mt-5 rounded-2xl overflow-hidden shadow-md">
					<figure class="sm:flex bg-white rounded-xl p-5 sm:p-0">
					  	<Image class="hidden sm:block w-32 h-32 sm:w-48 sm:h-auto object-cover border-e-[1px] border-gray" src={podcast.thumbnail} alt="podcast thumbnail" width="0" height="0" />
						<div className='flex items-center'>
					  		<Image class="w-20 h-20 sm:w-48 sm:h-auto sm:rounded-none object-cover rounded-lg block sm:hidden" src={podcast.thumbnail} alt="podcast thumbnail" width="0" height="0" />
					  		<h1 className='text-md font-semibold ms-4 block sm:hidden'>{podcast.title}</h1>
						</div>
					  <div class="sm:pt-6 pt-1 sm:p-5 text-center sm:text-left space-y-4">
					    <blockquote>
							<h1 className='sm:text-2xl lg:text-3xl font-semibold hidden sm:block'>{podcast.title}</h1>
					    	<p class="lg:text-lg sm:text-sm text-xs text-Gray font-medium mt-2 md:mt-4">{podcast.description}</p>
					    </blockquote>
					    <figcaption class="font-medium">
					      <div class="flex justify-center sm:justify-start text-slate-700 dark:text-slate-500">
						  	<span className={lalezar.className}><p className='bg-[#eee] w-fit px-1 rounded-md pt-1 text-[#666] text-xs md:mt-2 sm:mt-2 '>{`${podcast.published_date} | ${podcast.published_time}`}</p></span>
					      </div>
					    </figcaption>
					  </div>
					</figure>
				</div>
		  	</Link>
		))}
	</div>
  )
}

export default Podcasts
