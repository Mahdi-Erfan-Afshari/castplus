'use client'
import { useState, useRef, useEffect } from 'react'
import {BsPlayFill, BsPauseFill} from 'react-icons/bs'
import {ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute2} from 'react-icons/im'
import {RiForward30Line, RiReplay10Line} from 'react-icons/ri'
import {vazir , lalezar} from '@/app/utils/fonts'
import { TbRewindBackward10, TbRewindForward30 } from "react-icons/tb";

import Sections from './Sections'
import AudioLoading from './AudioLoading'
import Image from 'next/image'

const Controller = ({ url , episode }) => {
	const [play, setPlay] = useState(true);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(0.7);
	const [volumeToggle, setVolumeToggle] = useState(false);
	const [load, setLoad] = useState(true);
	const [previousVolume, setPreviousVolume] = useState(0);
	const [audioFirstLoad, setAudioFirstLoad] = useState(true);

	const audio = useRef();
	
	const togglePlay = () => {
		!play ? audio.current.play() : audio.current.pause();
		setPlay(!play)
	}

	const changeCurrentTime = () => {
		if(audio.current.duration && audio.current.currentTime){
			setCurrentTime(audio.current.currentTime)
			setDuration(audio.current.duration)
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
		setPlay(true);
		audio.current.play();
	}

	const backwardCurrentTime = () => {
		audio.current.currentTime -= 10
		setPlay(true);
		audio.current.play();
	}

	const volumeFadeIn = () => {
		var input = document.querySelector('.volume-input');
		input.style.opacity = 1
		setTimeout(() => {
			input.style.display = 'flex'
		}, 100)
	}

	const volumeFadeOut = () => {
		var input = document.querySelector('.volume-input');
		input.style.opacity = 0
		setTimeout(() => {
			input.style.display = 'none'
		}, 100)
	}

	const audioLoaded = () => {
		if(audioFirstLoad) {
			setLoad(false);
			audio.current.pause();
			setPlay(false);
			setDuration(audio.current.duration);
			setAudioFirstLoad(false);
		}
	}

  return (
	<div className={`${vazir.className}`}>
		<audio ref={audio} src={url} onTimeUpdate={(e) =>{changeCurrentTime(e)}} onEnded={togglePlay} onCanPlayThrough={audioLoaded} autoPlay></audio>

		<div className="controller w-full flex flex-row justify-center bg-white border-[1px] border-border-gray rounded-xl p-6 mt-3">
			{load ? <AudioLoading /> : <div className='flex flex-col w-full'>
				<div className="flex flex-col items-center w-full">
					<div className='relative flex md:flex-row flex-col justify-center items-center md:space-x-4 w-full md:mb-4 mb-8'>
						<div className='block justify-center mb-4'>
							<div className='lg:w-28 lg:h-28 md:w-24 md:h-24 w-28 h-28'>
								<Image className='rounded-2xl w-full h-full object-cover' src={episode.thumbnail} alt='podcast logo' width='250' height='250'/>
							</div>
						</div>
						<div>
							<h1 className='lg:text-xl md:text-lg sm:text-md text-sm font-bold text-center'>{episode.title}</h1>
							<span className={`${lalezar.className} ${'flex md:justify-start justify-center'}`}><p className='w-fit px-1 rounded-md pt-1 text-[#666] md:text-sm text-[12px] md:mt-2 sm:mt-2'>{`${episode.published_date} | ${episode.published_time}`}</p></span>
						</div>
					</div>
					<div className="flex items-center w-full">
						<div className='lg:flex hidden items-center volume-handler sm:w-full md:w-24 mt-3 md:mt-0'>
							<div className='volume-body flex relative'>
								<div className='volume-input flex items-center absolute bottom-[30px] right-[-170px] w-48 bg-white h-10 p-4 rounded-md shadow-md duration-100' onMouseEnter={volumeFadeIn} onMouseLeave={volumeFadeOut}>
									<input id='progressBar' className='w-full controller-input md:mx-3' type="range" min='0' max='100' onChange={(e) => volumeHandler(e)} value={volumeValueProgress()} onMouseEnter={volumeFadeIn}/>
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
						<div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mt-1">
							<div className='col-span-1'>
								<div className="flex justify-between md:hidden">
									<p className='text-xs'> {showTime(currentTime)} </p>
									<p className='text-xs'> {showTime(duration)} </p>
								</div>

							</div>
							<div className='flex justify-center items-center col-span-1 space-x-2 mt-2'>
								<span onClick={backwardCurrentTime} className='bg-white p-1 rounded-full border-[1px] border-border-gray text-2xl text-[#555]'><TbRewindBackward10 className='text-md text-gray-500' /></span>
								<div className='bg-Blue rounded-full w-fit p-2 hover:bg-[#382ef3] md:mt-0 duration-150' onClick={togglePlay}>
									{!play ? <BsPlayFill className='text-white text-3xl' /> : <BsPauseFill  className='text-white text-3xl'/>}
								</div>
								<span onClick={forwardCurrentTime} className='bg-white p-1 rounded-full border-[1px] border-border-gray text-2xl text-[#555]'><TbRewindForward30 className='text-md text-gray-500' /></span>
							</div>
						</div>
					</div>
			</div>}
		</div>
		
		{episode.sections.length === 0 ? '' : <Sections isAudioPlay={setPlay} data={audio.current} episodes={episode}/>}
	</div>
  )
}

export default Controller