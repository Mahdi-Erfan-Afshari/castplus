'use client'
import { useState } from "react"
import Info from "./Info"

const Sections = ({ data , podcasts }) => {
  const audio = data
  const Podcasts = podcasts.sections
  const count = podcasts.count
  const [firstActive, setFirstActive] = useState(true)

  const getCurrentTime = () => {
	if(audio) {
	  const currentTime = parseInt(audio.currentTime / 60 , 10)
	  return currentTime
	}
  }

  const getSectionTime = () => {
	if(audio) {
	  const sectionTime = parseInt(audio.duration / 60 / count , 10)
	  return sectionTime
	}
  }

  const sectionTime = getSectionTime()

  const currentTime = getCurrentTime()
  const getSectionBtn = () => {
	if(typeof window == "object"){
	  const btn = document.querySelectorAll('#section-btn')
	  return btn
	}
  }

  const sectionBtn = getSectionBtn()

  const getInfoBtn = () => {
	if(typeof window == "object"){
	  const btn = document.querySelectorAll('#info-btn')
	  return btn
	}
  }

  const infoBtn = getInfoBtn()

  const activeIndex = () => {
	if(currentTime !== undefined  && sectionTime !== NaN) {
	  let index = parseInt(currentTime / sectionTime , 10)
	  if(index == sectionBtn.length){
		index = index - 1
	  }
	  return index
	}
  }

  let btnActiveIndex = activeIndex()

  const autoFirstActive = () => {
	if(audio){
	  if(firstActive){
		sectionBtn[0].classList.add('btn-active')
		infoBtn[0].classList.add('info-active')
		setFirstActive(false)
	  }
	  return audio.currentTime
	}
  }
  autoFirstActive()

  const getDuration = () => {
	if(audio){
	  const audioDuraion = audio.duration
	  return parseInt( audioDuraion / 60 / 5 , 10)
	}
  }
  const duration = getDuration()

  const inputValue = document.querySelector('#progressBar')
  const changeLable = (e) => {
	const time = Number(e.target.getAttribute('index')) * audio.duration / count
	inputValue.value = time /60 / count * 1000 / duration
	audio.currentTime = time
	for (let index = 0; index < sectionBtn.length; index++) {
	  sectionBtn[index].classList.remove('btn-active');
	}
	e.target.classList.add('btn-active');
  }

  const autoChangeLable = () => {
	if(btnActiveIndex !== undefined){
	  for (let index = 0; index < sectionBtn.length; index++) {
		sectionBtn[index].setAttribute('index', index)
	  }
	  for (let index = 0; index < sectionBtn.length; index++) {
		sectionBtn[index].classList.remove('btn-active');
	  }
	  sectionBtn[btnActiveIndex].classList.add('btn-active')
	}
  }

  const getTitle = () => {
	if(btnActiveIndex !== undefined){
	  return Podcasts[btnActiveIndex].title
	}
  }
  const title = getTitle()

  const getSummary = () => {
	if(btnActiveIndex !== undefined){
	  return Podcasts[btnActiveIndex].summary
	}
  }
  const summary = getSummary()

  const getTranscript = () => {
	if(btnActiveIndex !== undefined){
	  return Podcasts[btnActiveIndex].transcript
	}
  }
  const transcript = getTranscript()

  const getRefrences = () => {
	if(btnActiveIndex !== undefined){
	  return Podcasts[btnActiveIndex].refrences
	}
  }
  const refrences = getRefrences()

  autoChangeLable()

  return (
	<>
	  <div className="md:my-6 md:w-auto my-3 py-4 px-3 bg-white shadow-lg rounded-md flex lg:justify-center justify-between items-center btn-info md:overflow-auto overflow-x-scroll relative">
		{Podcasts.map((section) => (
			<button id="section-btn" className="font-semibold rounded-md md:py-4 py-3 px-3 w-44 mx-1 duration-150 block relative" onClick={(e) =>{ changeLable(e)}}>{section.title}</button>
		))}
	  </div>
	  <Info title={title} summary={summary} transcript={transcript} refrences={refrences} />
	</>
  )
}

export default Sections
