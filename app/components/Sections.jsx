'use client'
import { useState } from "react"
import Info from "./Info"

const Sections = ({data, podcasts, isAudioPlay}) => {
	var audio = data;
	var podcastSections = podcasts.sections;
	const sectionBtn = document.querySelectorAll('#section-btn');

	var btnIndex = 0;
	
	const changeCurrentTime = (e) => {
		var timeStart = Number(e.target.getAttribute('timeStart'));
		var audioTag = document.getElementsByTagName('audio')[0];
		audioTag.currentTime = timeStart;
		audioTag.play();
		isAudioPlay(true);
		sectionBtn.forEach((button) => {
			button.classList.remove('btn-active')
		})
		e.target.classList.add('btn-active')
	}

	const changeActiveBtn = () => {
		var i = 0;
		while(i < sectionBtn.length) {
			var timeStart = Number(sectionBtn[btnIndex].getAttribute('timeStart'));
			var latestTimeStart = Number(sectionBtn[(sectionBtn.length - 1)].getAttribute('timeStart'));
			var nextTimeStart;
			if(btnIndex == (sectionBtn.length - 1)) {
				nextTimeStart = Number(sectionBtn[btnIndex].getAttribute('timeStart'));
			} else {
				nextTimeStart = Number(sectionBtn[btnIndex + 1].getAttribute('timeStart'));
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
			console.log('latestTimeStart' ,latestTimeStart);
			console.log('timeStart' ,timeStart);
			console.log('duration' ,audio.duration);
			console.log('btnIndex' ,btnIndex);
			i++
		}
	}

	if(audio) {
		changeActiveBtn();
	}

	const getTitle = () => {
		return podcastSections[btnIndex].title;
	}
	var title = getTitle();

	const getSummary = () => {
		return podcastSections[btnIndex].summary;
	}
	var summary = getSummary();

	const getTranscript = () => {
		return podcastSections[btnIndex].transcript;
	}
	var transcript = getTranscript();

	const getRefrences = () => {
		return podcastSections[btnIndex].refrences;
	}
	var refrences = getRefrences();
	
	return (
		<>
			<div className="py-4 border-4 border-b-0 border-white mt-5 bg-white shadow-md rounded-xl overflow-x-auto scroll-smooth">
				<div className="inline-flex px-2">
 					{podcastSections.map((section) => (
						<button id="section-btn" timeStart={section.timeStart} sectionNumber={podcastSections.indexOf(section)} className="rounded-lg bg-White md:py-4 py-3 px-3 md:w-44 sm:w-36 w-28 sm:text-md md:text-[16px] text-sm mx-1 duration-150 inline-block" onClick={(e) => changeCurrentTime(e)}>{section.title}</button>
					))}
				</div>
			</div>
			<Info title={title} summary={summary} transcript={transcript} refrences={refrences}/>
		</>
  )
}

export default Sections