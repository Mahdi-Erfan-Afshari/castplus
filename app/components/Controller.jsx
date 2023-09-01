'use client'
import { useState, useRef } from 'react'
import {BsPlayFill, BsPauseFill, BsVolumeDownFill, BsVolumeUpFill, BsVolumeMuteFill} from 'react-icons/bs'
import {ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute2} from 'react-icons/im'
import {RiForward30Line, RiReplay10Line} from 'react-icons/ri'
import {TbRewindForward30, TbRewindBackward10} from 'react-icons/tb'
import {vazir , lalezar} from '@/app/utils/fonts'
import Sections from './Sections'
import Image from 'next/image'
import AudioLoading from './AudioLoading'

const Controller = ({ url , podcast }) => {
	const [play, setPlay] = useState(true);
	const [autoPlay, setAutoPlay] = useState(true)
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(0.7);
	const [volumeToggle, setVolumeToggle] = useState(false);
	const [previousVolume, setPreviousVolume] = useState(0);

	const audio = useRef();
	
	const togglePlay = () => {
		const audio = document.querySelector('audio');
		!play ? audio.play() : audio.pause();
		setPlay(!play)
	}
	
	if(typeof document !== 'undefined') {
		if(audio.current !== undefined && autoPlay == true){
			togglePlay()
			setAutoPlay(false)
		}
	}
	
	const changeCurrentTime = (event) => {
		if(event.target.duration && event.target.currentTime){
			setCurrentTime(event.target.currentTime)
			setDuration(event.target.duration)
		}
	}

	const showTime = (time) => {
		if(time > 60 ){
			let hour =  parseInt(time / 3600)
			let min = parseInt(time % 3600 / 60 , 10 )
			let second = parseInt(time % 60 )

			if(hour < 10) {
				hour = `0${hour}`
			}

			if(min < 10) {
				min = `0${min}`
			}

			if(second < 10) {
				second = `0${second}`
			} return `${hour}:${min}:${second}`
		}
		if(time / 60 < 60) {
			let hour = "00"
			let min = parseInt(time / 60, 10)
			let second = parseInt(time % 60 )

			if(min < 10) {
				min = `0${min}`
			}

			if(second < 10) {
				second = `0${second}`
			} return `${hour}:${min}:${second}`
		}

		else {
			time = parseInt(time, 10)
			if(time < 10) {
				time = `0${time}`
			}
			return `0:${time}`
		}
	}

	const valueProgress = () => {
		var value = (currentTime * 1000) / duration;
		if(isNaN(value)) {
			value = 0;
		}
		return value
	}

	const controllerHandler = (e) => {
		setCurrentTime((e.target.value * duration) / 1000)
		audio.current.currentTime = (e.target.value * duration) / 1000
		audio.current.play()
		setPlay(true)
	}

	const volumeValueProgress = () => {
		var value = volume * 100;
		if(isNaN(value)) {
			value = 100;
		}
		return value
	}

	const volumeHandler = (e) => {
		setVolume((e.target.value / 100));
		audio.current.volume = (e.target.value / 100);
		volumeValueProgress();
	}

	const toggleVolume = () => {
		if(!volumeToggle) {
			setPreviousVolume(volume);
			setVolumeToggle(true);
			setVolume(0)
			audio.current.volume = 0;
		} else {
			setVolumeToggle(false);
			setVolume(previousVolume);
			audio.current.volume = previousVolume;
		}
	}

	const forwardCurrentTime = () => {
		audio.current.currentTime += 30
	}

	const backwardCurrentTime = () => {
		audio.current.currentTime -= 10
	}

	const volumeFadeIn = () => {
		var icon = document.querySelector('.volume-icon');
		var input = document.querySelector('.volume-input');
		input.style.opacity = 1
		setTimeout(() => {
			input.style.display = 'flex'
		}, 100)
	}

	const volumeFadeOut = () => {
		var icon = document.querySelector('.volume-icon');
		var input = document.querySelector('.volume-input');
		input.style.opacity = 0
		setTimeout(() => {
			input.style.display = 'none'
		}, 100)
	}

  return (
	<div className={`${vazir.className} ${'container mx-auto'}`}>
			<audio ref={audio} src={url} onTimeUpdate={(e) =>{changeCurrentTime(e)}
			} onEnded={togglePlay} autoPlay></audio>
		<div className='flex w-full justify-center '>
			<div className='rounded-full overflow-hidden'>
				<Image width='80' height='80' className='object-cover sm:w-40 sm:h-40 w-24 h-24' alt='podcast thumbnail' src={podcast.thumbnail}/>
			</div>
		</div>
		<h1 className='md:text-3xl sm:text-2xl text-xl font-bold mt-6 text-center'>{podcast.title}</h1>
		<span className={`${lalezar.className} ${'flex justify-center'}`}><p className='bg-SupLightBlue shadow-md w-fit px-1 rounded-md pt-1 text-[#666] text-sm md:mt-2 sm:mt-2 '>{`${podcast.published_date} | ${podcast.published_time}`}</p></span>

		<div className="controller w-full flex flex-row justify-center bg-white rounded-xl p-6 shadow-md mt-12">

			{audio.current == undefined ? <AudioLoading /> : <div className='flex flex-col w-full'>
				<div className="flex items-center w-full">
					<div className='lg:flex hidden items-center volume-handler sm:w-full md:w-24 mt-3 md:mt-0'>
						<div className='volume-body flex relative'>
							<div className='volume-input flex items-center absolute bottom-[110px] right-[-85px] w-48 bg-white rotate-[-90deg] h-10 p-4 rounded-md shadow-md duration-100' onMouseEnter={volumeFadeIn} onMouseLeave={volumeFadeOut}>
								<input id='volume-range' className='w-full' type="range" min='0' max='100' onChange={(e) => volumeHandler(e)} value={volumeValueProgress()} onMouseEnter={volumeFadeIn}/>
							</div>
							<span className='volume-icon w-fit h-fit rounded-full p-2 duration-150 me-[-10px]' onMouseEnter={volumeFadeIn} onMouseLeave={volumeFadeOut} onClick={toggleVolume}>
								{volume == 0 ? <ImVolumeMute2 className='text-lg text-[#333444]'/> : volume > 0 && volume <= .33 ? <ImVolumeLow className='text-lg text-[#333444]'/> : volume > .33 && volume <= .66 ? <ImVolumeMedium className='text-lg text-[#333444]'/> : <ImVolumeHigh className='text-lg text-[#333444]' />}
							</span>
						</div>
						<p className='mt-[3px] p-2'>{(volume * 100).toFixed() + '%'}</p>
					</div>
					<div className='flex justify-center items-center w-full mt-1'>
						<p className='hidden md:block md:text-md text-sm mt-3 md:mt-0'> {showTime(currentTime)} </p>
						<input id='progressBar' className="controller-input md:mx-3" type="range" min="0" max="1000" onChange={(e) => controllerHandler(e)} value={valueProgress()}/>
						<p className='hidden md:block md:text-md text-sm mt-3 md:mt-0'> {showTime(duration)} </p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-3">
					
					<div className='col-span-1'>
						<div className="flex justify-between md:hidden mt-1">
							<p className='md:text-md text-sm md:mt-auto'> {showTime(currentTime)} </p>
							<p className='md:text-md text-sm md:mt-auto'> {showTime(duration)} </p>
						</div>
						
					</div>
					<div className='flex justify-center items-center col-span-1 space-x-2 mt-2'>
						<span onClick={backwardCurrentTime} className='bg-white p-2 rounded-full shadow-md text-2xl text-[#555]'><RiReplay10Line /></span>
						<div className='bg-Blue rounded-full w-fit p-2 shadow-md shadow-LightBlue hover:bg-[#382ef3] mt-2 md:mt-0 duration-150' onClick={togglePlay}>
							{!play ? <BsPlayFill className='text-white text-3xl' /> : <BsPauseFill  className='text-white text-3xl'/>}
						</div>
						<span onClick={forwardCurrentTime} className='bg-white p-2 rounded-full shadow-md text-2xl text-[#555]'><RiForward30Line /></span>
					</div>
				</div>
			</div>}
		</div>
		
		<Sections isAudioPlay={setPlay} data={audio.current} podcasts={podcast}/>
	</div>
  )
}

export default Controller