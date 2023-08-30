import { lalezar } from "../utils/fonts";
import Info from "./Info"
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {BsPlayFill} from 'react-icons/bs'

const Sections = ({data, podcasts, isAudioPlay}) => {
	var audio = data;
	var podcastSections = podcasts.sections;
	const sectionBtn = document.querySelectorAll('#section-btn');

	var btnIndex = 0;

	const changeActiveBtn = () => {
		var timeStart = Number(sectionBtn[btnIndex].getAttribute('timeStart'));
		var latestTimeStart = Number(sectionBtn[(sectionBtn.length - 1)].getAttribute('timeStart'));
		var nextTimeStart;
		var i = 0;
		while(i < sectionBtn.length) {			
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
	}

	const changeCurrentTime = (e) => {
		var timeStart = Number(e.target.getAttribute('timeStart'));
		var audioTag = document.getElementsByTagName('audio')[0];
		audioTag.currentTime = timeStart;
		audioTag.play();
		isAudioPlay(true);
		sectionBtn.forEach((button) => {
			button.classList.remove('btn-active')
		})
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
	
	sectionDuration()

	const scrollForward = () => {
		var scrollWidth = document.getElementById('section-btn').scrollWidth
		var sectionBody = document.getElementById('section-body')
		sectionBody.scrollLeft += (scrollWidth + 10)
	}

	const scrollBackward = () => {
		var scrollWidth = document.getElementById('section-btn').scrollWidth
		var sectionBody = document.getElementById('section-body')
		sectionBody.scrollLeft -= (scrollWidth + 10)
	}

	return (
		<>
			<div className="relative overflow-hidden rounded-xl h-fit mt-5">
				<span onClick={scrollBackward} className="hover:text-[#666] absolute top-0 left-0 flex justify-between items-center h-full cursor-pointer bg-white text-3xl text-[#aaa] px-[5px] z-50 duration-150"><IoIosArrowBack /></span>
				<span onClick={scrollForward} className="hover:text-[#666] absolute top-0 right-0 flex justify-between items-center h-full cursor-pointer bg-white text-3xl text-[#aaa] px-[5px] z-50 duration-150"><IoIosArrowForward /></span>
				<div id="section-body" className="relative py-4 px-2 border-4 border-b-0 border-white bg-white shadow-md rounded-xl overflow-x-auto scroll-smooth">
					<div className="inline-flex relative px-8">
 						{podcastSections.map((section) => (
							 <div className="relative">
								<button id="section-btn" className="rounded-lg bg-White md:py-5 py-4 px-3 md:w-52 w-40 sm:text-md md:text-[16px] text-sm mx-1 duration-150 inline-block select-none" timeStart={section.timeStart} sectionNumber={podcastSections.indexOf(section)} onClick={(e) => changeCurrentTime(e)}> {section.title}</button>
								<p className={`${lalezar.className} ${"section-duration absolute top-[4px] right-[12px] text-lg text-[#bbb] select-none"}`}><BsPlayFill /></p>
								<p className={`${lalezar.className} ${"section-duration absolute top-[4px] left-[12px] text-sm text-[#bbb] select-none"}`}>{sectionDurations[podcastSections.indexOf(section)]}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Info title={title} summary={summary} transcript={transcript} refrences={refrences}/>
		</>
  )
}

export default Sections