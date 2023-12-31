'use client'
import { server } from '@/app/lib/server'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

export const FavoriteDesktopButton = ({ podcasts, id, users }) => {
	const podcast = podcasts.filter((podcast) => podcast.id == id)[0];
	const {data: session} = useSession()
	const [favorite, setFavorite] = useState(false);
	const [load, setLoad] = useState(true);

	const checkIsThisPodcastInfavorites = () => {
		if(session) {
			const usersData = users
			const user = usersData.filter((user) => user.email === session.user.email)[0];
			let favoriteList = user.favorites
	
			const isInFavorites = favoriteList.some((favorite) => {
				return favorite === podcast.id
			})
			return isInFavorites;
		}
	}
	
	const isThisPodcastfavorites = checkIsThisPodcastInfavorites()
	const [isThisPodcastInfavorites, setIsThisPodcastInfavorites] = useState(isThisPodcastfavorites)

	if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
		if(session) {
			let isFavorite = checkIsThisPodcastInfavorites()
			if(isFavorite && load) {
				setIsThisPodcastInfavorites(true)
				setLoad(false)
			}
		}
	}

	const changeFavorite = () => {
		const addFavorite = async () => {
			const res = await fetch(`${server}/api/user_profiles`)
			const users = await res.json()
			const user = users.filter((user) => user.email === session.user.email)[0];
			let favoriteList = user.favorites
			const isInFavorites = favoriteList.some((favorite) => {
				return favorite === podcast.id
			})
			if (!favorite && !isInFavorites) {
				favoriteList.push(podcast.id)
				fetch(`${server}/api/editUser`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						email : session.user.email,
						favorites : favoriteList,
					}),
				   })
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.error(error);
				});
			} else {
				let favoritIndex = favoriteList.indexOf(podcast.id)
				favoriteList.splice(favoritIndex, 1)
				fetch(`${server}/api/editUser`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						email : session.user.email,
						favorites : favoriteList,
					}),
				   })
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.error(error);
				});
			}
		}
		setIsThisPodcastInfavorites(!isThisPodcastInfavorites)
		addFavorite()
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
		<div className='flex'>
			<span className='w-[.8px] h-[30px] bg-[rgb(232,234,237)] me-3'></span>
			<div className='favorite-body'>
				<div className='flex flex-col justify-center items-center'>
					<button id='favorite' className='text-xl duration-150 select-none' onClick={changeFavorite}>
						{isThisPodcastInfavorites ? <BsStarFill className='text-amber-500 sm:text-2xl text-xl'/> : <BsStar className='sm:text-2xl text-xl'/>}
					</button>
					<p className='text-xs text-Gray mt-[2px]'>add to favorite</p>
				</div>
			</div>
		</div>
		: ''}
	</div>
  )
}

export const FavoriteMobileButton = ({ podcasts, id, users }) => {
	const podcast = podcasts.filter((podcast) => podcast.id == id)[0];
	const {data: session} = useSession()
	const [favorite, setFavorite] = useState(false);
	const [load, setLoad] = useState(true);

	const checkIsThisPodcastInfavorites = () => {
		if(session) {
			const usersData = users
			const user = usersData.filter((user) => user.email === session.user.email)[0];
			let favoriteList = user.favorites
	
			const isInFavorites = favoriteList.some((favorite) => {
				return favorite === podcast.id
			})
			return isInFavorites;
		}
	}
	
	const isThisPodcastfavorites = checkIsThisPodcastInfavorites()
	const [isThisPodcastInfavorites, setIsThisPodcastInfavorites] = useState(isThisPodcastfavorites)

	if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
		if(session) {
			let isFavorite = checkIsThisPodcastInfavorites()
			if(isFavorite && load) {
				setIsThisPodcastInfavorites(true)
				setLoad(false)
			}
		}
	}

	const changeFavorite = () => {
		const addFavorite = async () => {
			const res = await fetch(`${server}/api/user_profiles`)
			const users = await res.json()
			const user = users.filter((user) => user.email === session.user.email)[0];
			let favoriteList = user.favorites
			const isInFavorites = favoriteList.some((favorite) => {
				return favorite === podcast.id
			})
			if (!favorite && !isInFavorites) {
				favoriteList.push(podcast.id)
				fetch(`${server}/api/editUser`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						email : session.user.email,
						favorites : favoriteList,
					}),
				   })
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.error(error);
				});
			} else {
				let favoritIndex = favoriteList.indexOf(podcast.id)
				favoriteList.splice(favoritIndex, 1)
				fetch(`${server}/api/editUser`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify({
						email : session.user.email,
						favorites : favoriteList,
					}),
				   })
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.error(error);
				});
			}
		}
		setIsThisPodcastInfavorites(!isThisPodcastInfavorites)
		addFavorite()
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
		<div className='flex'>
			<span className='w-[.8px] h-[30px] bg-[rgb(232,234,237)] me-3'></span>
			<div className='favorite-body'>
				<div className='flex flex-col justify-center items-center'>
					<button id='favorite' className='text-xl duration-150 select-none' onClick={changeFavorite}>
						{isThisPodcastInfavorites ? <BsStarFill className='text-amber-500 sm:text-2xl text-xl'/> : <BsStar className='sm:text-2xl text-xl'/>}
					</button>
					<p className='text-xs text-Gray mt-[2px]'>add to favorite</p>
				</div>
			</div>
		</div>
		: ''}
	</div>
  )
}