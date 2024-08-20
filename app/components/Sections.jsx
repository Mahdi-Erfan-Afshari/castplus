'use client'
import { lalezar, vazir } from "../utils/fonts";
import Info from "./Info"
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const SectionsPage = ({data, episodes, isAudioPlay}) => {
	const [sectionScrollLeft, setSectionScrollLeft] = useState(0)
	const [isCheckNumberOfSections, setIsCheckNumberOfSections] = useState(false)
	var audio = data;
	var sections = episodes.sections;
	const sectionBtn = document.querySelectorAll('#section-btn');
	const searchParams = useSearchParams();

	const sectionBeingPlayIndex = () => {
		if(audio) {
			let firstIndex = sections.filter((section) => {
				return section.timeStart <= audio.currentTime;
			});

			let sectionIndex = firstIndex.length > 0 ? firstIndex[firstIndex.length - 1].number : 0;
			return sectionIndex;
		}
	}
	const sectionIndex = sectionBeingPlayIndex();

	const autoChangeActiveBtn = () => {
		if(sectionBtn[sectionIndex]) {
			sectionBtn.forEach((Button) => {
				Button.classList.remove('btn-active')
			})
			sectionBtn[sectionIndex].classList.add('btn-active')
		}
	}

	const sectionProgressBarHandler = () => {
		let timeStart = sections[sectionIndex].timeStart;
		let nextTimeStart = null;
		let activeButton = sectionBtn[sectionIndex];
		let sectionProgressBar = activeButton.getElementsByTagName('span')[0];
		let progressBarWidth = activeButton.offsetWidth;
		let progressBarRange = null;
		let progressBarRangeWidth = null;

		if(sectionIndex < (sectionBtn.length - 1)) {
			nextTimeStart = sections[sectionIndex + 1].timeStart;
		} else if(sectionIndex == (sectionBtn.length - 1)) {
			nextTimeStart = sections[sectionIndex].timeStart;
		}
		
		if(audio.currentTime > sections[sections.length - 1].timeStart && audio.currentTime <= audio.duration) {
			progressBarRange = (audio.currentTime - timeStart) * (progressBarWidth / (audio.duration - timeStart));
			progressBarRangeWidth = progressBarRange + 'px';
			sectionProgressBar.style.width = progressBarRangeWidth;
		} else if (audio.currentTime >= timeStart && audio.currentTime < nextTimeStart) {
			progressBarRange = (audio.currentTime - timeStart) * (progressBarWidth / (nextTimeStart - timeStart));
			progressBarRangeWidth = progressBarRange + 'px';
			sectionProgressBar.style.width = progressBarRangeWidth;
		}
	}
	
	const changeCurrentTime = (e) => {
		sectionBtn.forEach((Button) => {
			Button.classList.remove('btn-active');
		});

		if (e.target.tagName === 'SPAN' && e.target.id === 'section-progressbar') {
			e.target.parentElement.classList.add('btn-active');
			audio.currentTime = e.target.parentElement.getAttribute('timeStart');
		} else if (e.target.tagName === 'SPAN') {
			e.target.parentElement.parentElement.firstElementChild.classList.add('btn-active');
			audio.currentTime = e.target.parentElement.parentElement.firstElementChild.getAttribute('timeStart');
		} else if (e.target.tagName === 'P') {
			e.target.parentElement.firstElementChild.classList.add('btn-active');
			audio.currentTime = e.target.parentElement.firstElementChild.getAttribute('timeStart');
		} else {
			e.target.classList.add('btn-active');
			audio.currentTime = e.target.getAttribute('timeStart');
		}
		isAudioPlay(true);
		audio.play();
	}
	
	useEffect(() => {
		if(audio) {
			autoChangeActiveBtn();
		}
	}, [sectionIndex]);

	useEffect(() => {
		if(audio) {
			sectionProgressBarHandler()
		}
	})

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

	const checkNumberOfSection = () => {
		if(!isCheckNumberOfSections) {
			let buttonWidth = document.getElementById('section-btn').scrollWidth;
			let sectionBody = document.getElementById('section-body');
			let sectionBodyWidth = document.getElementById('section-body').offsetWidth;
			let scrollForwardBtn = document.getElementById('scroll-forward-btn');
			let scrollBackwardBtn = document.getElementById('scroll-backward-btn');
	
			if (buttonWidth * sections.length < sectionBodyWidth) {
				sectionBody.classList.add('flex');
				sectionBody.classList.add('justify-center');
				scrollForwardBtn.classList.add('hidden');
				scrollBackwardBtn.classList.add('hidden');
			} else {
				sectionBody.classList.remove('flex');
				sectionBody.classList.remove('justify-center');
			}

			setIsCheckNumberOfSections(true);
		}
	}
	
	useEffect(() => {
		removeScrollBtn()
		checkNumberOfSection()
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

	useEffect(() => {
		var scrollWidth = document.getElementById('section-btn').scrollWidth;
		var sectionBody = document.getElementById('section-body');

		sectionBody.scrollTo(Number((sectionIndex - Math.trunc((sectionBody.clientWidth / scrollWidth) - 2)) * scrollWidth) , 0);
		setSectionScrollLeft(Number((sectionIndex - Math.trunc((sectionBody.clientWidth / scrollWidth) - 2)) * scrollWidth));
	}, [sectionIndex]);
	
	if (audio) {
		const getTitle = () => {
			return sections[sectionIndex].title;
		}
		var title = getTitle();
		
		const getSummary = () => {
			return sections[sectionIndex].summary;
		}
		var summary = getSummary();
		
		const getTranscript = () => {
			return sections[sectionIndex].transcript;
		}
		var transcript = getTranscript();
		
		const getRefrences = () => {
			return sections[sectionIndex].refrences;
		}
		var refrences = getRefrences();

		const getTags = () => {
			return sections[sectionIndex].tags;
		}
		var tags = getTags();
	}

	useEffect(() => {
		if(audio) {
			audio.currentTime = searchParams.get('timeStart')
			autoChangeActiveBtn()
		}
		console.log('log');
	}, [audio])

	return (
		<>
			<div className={`${vazir.className} ${"relative bg-white border-[1px] border-border-gray overflow-hidden rounded-xl h-fit mt-5"}`}>
				<span id="scroll-backward-btn" className="hover:text-[#382ef3] absolute top-0 left-0 flex justify-between items-center h-full cursor-pointer bg-white text-3xl text-Blue duration-150" onClick={scrollBackward}><IoIosArrowBack /></span>
				<span id="scroll-forward-btn" className="hover:text-[#382ef3] absolute top-0 right-0 flex justify-between items-center h-full cursor-pointer bg-white text-3xl text-Blue duration-150" onClick={scrollForward}><IoIosArrowForward /></span>
				<div className="relative ms-8 me-8">
					<div id="section-body" className="snap-x relative bg-white overflow-x-auto px-2 py-2 scroll-smooth">
						<div className="section-child inline-flex relative">
 							{sections.map((section) => (
								<div className="snap-end relative">
									<div className="">
										<button id="section-btn" className={`${vazir.className} ${"overflow-hidden relative rounded-lg bg-White py-4 px-3 md:w-[180px] w-[160px] sm:text-md vazir text-sm mx-1 duration-150 inline-block select-none truncate"}`} timeStart={section.timeStart} sectionNumber={sections.indexOf(section)} onClick={changeCurrentTime}>
											{section.title}
											<span id="section-progressbar" className="inline-block absolute top-0 left-0 bg-[#b8c7ff26] w-0 h-full z-10" ></span>
										</button>
										<p className={`${lalezar.className} ${"section-duration absolute top-[2px] left-[12px] text-xs text-[#bbb] select-none"}`} onClick={changeCurrentTime}>
											<span>{ Math.round(section.duration / 60) < 10 ? '0' + Math.round(section.duration / 60).toString() : Math.round(section.duration / 60).toString()}</span>:
											<span>{ section.duration % 60 < 10 ? '0' + (section.duration % 60).toString() : (section.duration % 60).toString()}</span>
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Info title={title} summary={summary} transcript={transcript} refrences={refrences} tags={tags} />
		</>
	)
}

export default SectionsPage