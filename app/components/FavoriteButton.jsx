'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

export const FavoriteDesktopButton = () => {
	const {data: session} = useSession()
	const [favorite, setFavorite] = useState(false);

	const changeFavorite = () => {
		setFavorite(!favorite);
		showModal();
	}

	const hideModal = () => {
		let favoritModal = document.getElementById('favorite-modal');
		favoritModal.classList.add('hidden');
		favoritModal.classList.remove('flex');
	}

	const showModal = () => {
		if(!favorite) {
			let favoritModal = document.getElementById('favorite-modal');
			let favoritModalText = document.getElementById('favorite-modal-text');
			favoritModal.classList.remove('hidden')
			favoritModal.classList.add('flex')
			favoritModalText.innerHTML = 'Added to your favorites list. You can go to your favorites page to view.'
		}

		if(favorite) {
			let favoritModal = document.getElementById('favorite-modal');
			let favoritModalText = document.getElementById('favorite-modal-text');
			favoritModal.classList.remove('hidden')
			favoritModal.classList.add('flex')
			favoritModalText.innerHTML = 'This podcast has been removed from your favorites list'
		}

		setTimeout(() => {
			hideModal()
		}, 3000)
	}

  return (
	<div className='relative flex flex-col justify-center items-center'>
		<div id='favorite-modal' className='favorite-modal z-50 hidden justify-center fixed top-[24px] left-0 w-full'>
			<div className='flex flex-col rounded-lg bg-Blue w-96 shadow-lg shadow-LightBlue pt-2 pb-4 px-4'>
				<span className='flex justify-end w-full h-fit'><IoClose className='text-xl text-white cursor-pointer w-fit h-fit p-1' onClick={hideModal}/></span>
				<p id='favorite-modal-text' className='text-white'>Added to your favorites list. You can go to your favorites page to view.</p>
				<div className='flex justify-end mt-1'>
					<button className='rounded-md px-4 py-1 border-2 border-white text-white font-medium w-fit' onClick={hideModal}>ok</button>
				</div>
			</div>
		</div>
		{session ? 
			<div className='favorite-body'>
				<div className='tooltip flex flex-col absolute top-[-52px] right-[-37px] items-center'>
					<div className='flex items-center justify-center w-32 h-10 rounded-lg bg-Gray'><p className='text-white'>add to favorite</p></div>
					<div className='absolute top-[28px] w-4 h-4 bg-Gray rotate-45'></div>
				</div>
				<button id='favorite' className='sm:bg-white bg-[#f5f6fe] text-xl rounded-xl sm:p-[14px] p-2 duration-150 select-none' onClick={changeFavorite}>
					{favorite? <MdFavorite className='text-Red sm:text-2xl text-xl'/> : <MdFavoriteBorder className='sm:text-2xl text-xl'/>}
				</button>
			</div>
		: ''}
	</div>
  )
}

export const FavoriteMobileButton = () => {
	const {data: session} = useSession()
	const [favorite, setFavorite] = useState(false);

	const changeFavorite = () => {
		setFavorite(!favorite);
		showModal();
	}

	const hideModal = () => {
		let favoritModal = document.getElementById('favorite-mobile-modal');
		favoritModal.classList.add('hidden');
		favoritModal.classList.remove('flex');
	}

	const showModal = () => {
		if(!favorite) {
			let favoritModal = document.getElementById('favorite-mobile-modal');
			let favoritModalText = document.getElementById('favorite-mobile-modal-text');
			favoritModal.classList.remove('hidden')
			favoritModal.classList.add('flex')
			favoritModalText.innerHTML = 'Added to your favorites list. You can go to your favorites page to view.'
		}

		if(favorite) {
			let favoritModal = document.getElementById('favorite-mobile-modal');
			let favoritModalText = document.getElementById('favorite-mobile-modal-text');
			favoritModal.classList.remove('hidden')
			favoritModal.classList.add('flex')
			favoritModalText.innerHTML = 'This podcast has been removed from your favorites list'
		}

		setTimeout(() => {
			hideModal()
		}, 3000)
	}

  return (
	<div className='relative flex flex-col justify-center items-center'>
		<div id='favorite-mobile-modal' className='favorite-mobile-modal z-50 hidden justify-center fixed top-[24px] left-0 w-full'>
			<div className='flex flex-col rounded-lg bg-Blue w-80 shadow-lg shadow-LightBlue pt-2 pb-4 px-4'>
				<span className='flex justify-end w-full h-fit'><IoClose className='text-xl text-white cursor-pointer w-fit h-fit p-1' onClick={hideModal}/></span>
				<p id='favorite-mobile-modal-text' className='text-white'>Added to your favorites list. You can go to your favorites page to view.</p>
				<div className='flex justify-end mt-1'>
					<button className='rounded-md px-4 py-1 border-2 border-white text-white font-medium w-fit' onClick={hideModal}>ok</button>
				</div>
			</div>
		</div>
		{session ? 
			<div className='favorite-body'>
				<div className='tooltip flex flex-col absolute top-[-52px] right-[-37px] items-center'>
					<div className='flex items-center justify-center w-32 h-10 rounded-lg bg-Gray'><p className='text-white'>add to favorite</p></div>
					<div className='absolute top-[28px] w-4 h-4 bg-Gray rotate-45'></div>
				</div>
				<button id='favorite' className='sm:bg-white bg-[#f5f6fe] text-xl rounded-xl sm:p-[14px] p-2 duration-150 select-none' onClick={changeFavorite}>
					{favorite? <MdFavorite className='text-Red sm:text-2xl text-xl'/> : <MdFavoriteBorder className='sm:text-2xl text-xl'/>}
				</button>
			</div>
		: ''}
	</div>
  )
}