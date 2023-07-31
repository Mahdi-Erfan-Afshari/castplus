'use client'
import { useState, useRef } from 'react'
import {PiPlayDuotone} from 'react-icons/pi'
import {PiPauseDuotone} from 'react-icons/pi'
import Sections from './Sections'

const Controller = ({ url , podcast }) => {
    const [play, setPlay] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audio = useRef();
    const togglePlay = () => {
        const audio = document.querySelector('audio');
        !play ? audio.play() : audio.pause();
        setPlay(!play)
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
        return (currentTime * 1000) / duration
    }

    const controllerHandler = (e) => {
        setCurrentTime((e.target.value * duration) / 1000)
        audio.current.currentTime = (e.target.value * duration) / 1000
        audio.current.play()
        setPlay(true)
        // togglePlay()
    }

  return (
    <div className='container mx-auto md:px-6 lg:px-12 xl:px-24'>
        <h1 className='text-4xl font-bold mb-3 text-center'>{podcast.title}</h1>
        <div className="controller w-full flex flex-row justify-center bg-white rounded-md p-4 shadow-lg md:px-32 pe-10 md:pe-32">
            <div className="flex justify-center">
                <span className='flex justify-center md:me-auto me-2' onClick={togglePlay}>
                    {!play ? <PiPlayDuotone className='text-Blue text-3xl' /> : <PiPauseDuotone  className='text-Blue text-3xl'/>}
                </span>
            </div>
            <audio ref={audio} src={url} onTimeUpdate={(e) =>{changeCurrentTime(e)}
            } onEnded={togglePlay} autoPlay></audio>

            <div className='flex flex-col md:flex-row mt-3 md:mt-auto md:items-center justify-center w-full'>
                <p className='hidden md:inline-block md:text-md text-sm mt-3 md:mt-auto md:mx-3'> {showTime(currentTime)} </p>
                    <input type="range" min="0" max="1000" onChange={(e) => controllerHandler(e)} value={valueProgress()} className="controller-input mx-3"/>
                
                <div className='flex justify-between w-full md:w-auto'><p className='inline-block md:hidden md:text-md text-sm mt-3 md:mt-auto md:mx-3 ps-6'> {showTime(currentTime)} </p>
                <p className='md:text-md text-sm mt-3 md:mt-auto md:mx-3'> {showTime(duration)} </p></div>
            </div>
        </div>
        <Sections data={audio.current}/>

    </div>
  )
}

export default Controller
