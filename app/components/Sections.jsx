'use client'
import { lalezar } from "../utils/fonts";
import Info from "./Info"
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { useEffect, useState } from "react";

const Sections = ({data, episodes, isAudioPlay}) => {
	var audio = data;
	var episodeSections = episodes.sections;
	const sectionBtn = document.querySelectorAll('#section-btn');
	var btnIndex = 0;

	const changeActiveBtn = () => {
		var latestTimeStart = Number(sectionBtn[(sectionBtn.length - 1)].getAttribute('timeStart'));
		var nextTimeStart;
		var i = 0;
		while(i < sectionBtn.length) {			
			var timeStart = Number(sectionBtn[btnIndex].getAttribute('timeStart'));
			
			if(btnIndex < (sectionBtn.length - 1)) {
				nextTimeStart = Number(sectionBtn[btnIndex + 1].getAttribute('timeStart'));
			} else if(btnIndex == (sectionBtn.length - 1)) {
				btnIndex--;
				nextTimeStart = Number(sectionBtn[btnIndex].getAttribute('timeStart'));
			}
			
			if(audio.currentTime > latestTimeStart && audio.currentTime <= audio.duration) {
				sectionBtn[i].classList.remove('btn-active');
				sectionBtn[(sectionBtn.length - 1)].classList.add('btn-active');
				btnIndex = (sectionBtn.length - 1);
			} else if (audio.currentTime >= timeStart && audio.currentTime < nextTimeStart) {
				sectionBtn[i].classList.remove('btn-active');
				sectionBtn[btnIndex].classList.add('btn-active');
			} else {
				sectionBtn[i].classList.remove('btn-active');
				btnIndex++;
			}
			i++
		}

		var activeBtn;
		var sectionProgressBar;
		var progressBarWidth;
		var progressBarRange;
		var progressBarRangeWidth;
		
		if(audio.currentTime > latestTimeStart && audio.currentTime <= audio.duration) {
			activeBtn = sectionBtn[(sectionBtn.length - 1)]
			sectionProgressBar = document.querySelector('.btn-active').lastElementChild;
			progressBarWidth = activeBtn.offsetWidth;
			progressBarRange = (audio.currentTime - timeStart) * (progressBarWidth / (audio.duration - timeStart));
			progressBarRangeWidth = progressBarRange + 'px'
			sectionProgressBar.style.width = progressBarRangeWidth

		} else if (audio.currentTime >= timeStart && audio.currentTime < nextTimeStart) {
			activeBtn = document.querySelector('.btn-active');
			sectionProgressBar = document.querySelector('.btn-active').lastElementChild;
			progressBarWidth = activeBtn.offsetWidth;
			progressBarRange = (audio.currentTime - timeStart) * (progressBarWidth / (nextTimeStart - timeStart));
			progressBarRangeWidth = progressBarRange + 'px'
			sectionProgressBar.style.width = progressBarRangeWidth
		}
	}

	const changeCurrentTime = (e) => {
		var timeStart = Number(e.target.getAttribute('timeStart'));
		audio.currentTime = timeStart;
		audio.play();
		isAudioPlay(true);
		sectionBtn.forEach((button) => {
			button.classList.remove('btn-active')
		})
	}

	var sectionDurations = []
	const sectionDuration = () => {
		var duration;
		for(var i = 0; i < sectionBtn.length; i++) {
			var timeStart = Number(sectionBtn[i].getAttribute('timeStart'));
			var nextTimeStart;
			if (i !== (sectionBtn.length - 1)) {
				nextTimeStart = sectionBtn[i + 1].getAttribute('timeStart');
			} else {
				nextTimeStart = audio.duration;
			}
			
			if((nextTimeStart - timeStart) / 60 < 1) {
				duration = Math.ceil((nextTimeStart - timeStart) / 60) + ' Min';
			} else {
				duration = Math.floor((nextTimeStart - timeStart) / 60) + ' Min';
			}
			sectionDurations.push(duration)
		}
	}
	
	const [sectionScrollLeft, setSectionScrollLeft] = useState(0)
	const removeScrollBtn = () => {
		var sectionBody = document.getElementById('section-body')
		var scrollWidth = document.getElementById('section-btn').scrollWidth
		var scrollForwardBtn = document.getElementById('scroll-forward-btn')
		var scrollBackwardBtn = document.getElementById('scroll-backward-btn')
		if(sectionScrollLeft <= 0) {
			scrollBackwardBtn.style.color = '#ededed'
		} else {
			scrollBackwardBtn.style.color = '#2e56f3'
		}
		
		if(sectionScrollLeft >= (sectionBody.scrollWidth - sectionBody.clientWidth - scrollWidth)) {
			scrollForwardBtn.style.color = '#ededed'
		} else {
			scrollForwardBtn.style.color = '#2e56f3'
		}
	}
	
	useEffect(() => {
		removeScrollBtn()
	});
		
	const scrollForward = () => {
		var scrollWidth = document.getElementById('section-btn').scrollWidth
		var sectionBody = document.getElementById('section-body')
		sectionBody.scrollLeft += (scrollWidth + 10)
		setSectionScrollLeft(sectionBody.scrollLeft += (scrollWidth + 10))
		removeScrollBtn()
	}

	const scrollBackward = () => {
		var scrollWidth = document.getElementById('section-btn').scrollWidth
		var sectionBody = document.getElementById('section-body')
		sectionBody.scrollLeft -= scrollWidth
		setSectionScrollLeft(sectionBody.scrollLeft -= (scrollWidth + 10))
		removeScrollBtn();
	}
	
	if(audio) {
		changeActiveBtn();
		sectionDuration();
		var activeButton;
		var activeBtnIndex;

		if(btnIndex < (sectionBtn.length - 1)) {
			activeButton = document.querySelector('.btn-active');
			activeBtnIndex = Number(activeButton.getAttribute('sectionnumber'))
		} else if(btnIndex == (sectionBtn.length - 1)) {
			activeBtnIndex = sectionBtn.length - 1
		}
	}

	useEffect(() => {
		var scrollWidth = document.getElementById('section-btn').scrollWidth;
		var sectionBody = document.getElementById('section-body');

		sectionBody.scrollTo(Number((activeBtnIndex - Math.trunc((sectionBody.clientWidth / scrollWidth) - 2)) * scrollWidth) , 0);
		setSectionScrollLeft(Number((activeBtnIndex - Math.trunc((sectionBody.clientWidth / scrollWidth) - 2)) * scrollWidth));
	}, [activeBtnIndex])
	
	const getTitle = () => {
		return episodeSections[btnIndex].title;
	}
	var title = getTitle();
	
	const getSummary = () => {
		return episodeSections[btnIndex].summary;
	}
	var summary = getSummary();
	
	const getTranscript = () => {
		return episodeSections[btnIndex].transcript;
	}
	var transcript = getTranscript();
	
	const getRefrences = () => {
		return episodeSections[btnIndex].refrences;
	}
	var refrences = getRefrences();

	return (
		<>
			<div className="relative bg-white overflow-hidden rounded-xl h-fit mt-5">
				<span id="scroll-backward-btn" onClick={scrollBackward} className="hover:text-[#382ef3] absolute top-0 left-0 flex justify-between items-center h-full cursor-pointer bg-white text-3xl text-Blue z-50 duration-150"><IoIosArrowBack /></span>
				<span id="scroll-forward-btn" onClick={scrollForward} className="hover:text-[#382ef3] absolute top-0 right-0 flex justify-between items-center h-full cursor-pointer bg-white text-3xl text-Blue z-50 duration-150"><IoIosArrowForward /></span>
				<div className="relative ms-8 me-8">
					<div id="section-body" className="snap-x relative bg-white overflow-x-auto px-2 py-4 scroll-smooth">
						<div className="section-child inline-flex relative">
 							{episodeSections.map((section) => (
								 <div className="snap-end relative">
									<button id="section-btn" className="overflow-hidden relative rounded-lg bg-White md:py-8 py-7 px-3 md:w-[210px] w-[170px] sm:text-md md:text-[16px] text-sm mx-1 duration-150 inline-block select-none" timeStart={section.timeStart} sectionNumber={episodeSections.indexOf(section)} onClick={(e) => changeCurrentTime(e)}>
										<span className="inline-block absolute top-0 left-0 w-full h-full z-20">
											<span className="flex items-center justify-center w-full h-full" timeStart={section.timeStart} sectionNumber={episodeSections.indexOf(section)} onClick={(e) => changeCurrentTime(e)}>
												{section.title}
											</span>
										</span>
										<span className="inline-block absolute top-0 left-0 bg-[#b8c7ff26] w-0 h-full z-10" ></span>
									</button>
									<p className={`${lalezar.className} ${"section-duration absolute top-[4px] left-[12px] text-sm text-[#bbb] select-none"}`}>{sectionDurations[episodeSections.indexOf(section)]}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Info title={title} summary={summary} transcript={transcript} refrences={refrences}/>
		</>
	)
}

export default Sections