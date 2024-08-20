'use client'
import { useState } from "react"
import { vazir } from "../utils/fonts"

const Info = ({title, summary, transcript, refrences, tags}) => {
	const [displaySummery, setDisplaySummary] = useState(false)
	const [displayTranscript, setDisplayTranscript] = useState(true)
	const [displayRefrences, setDisplayRefrences] = useState(false)
	const [displayTags, setDisplayTags] = useState(false)

	const changeInfoLable = (e) => {
		let infoBtn = document.querySelectorAll('#info-btn')
		infoBtn.forEach((button) => {
			button.classList.remove('info-active');
		})
		e.target.classList.add('info-active');
	}
	console.log(tags);

  return (
	<div>
 	  <div className="md:my-6 my-5 md:w-auto rounded-xl flex flex-col justify-center items-center bg-white border-[1px] border-border-gray w-full">
 		<div className="px-2 pt-2 md:pt-0 flex justify-center w-full">
 		  <button id="info-btn" className="md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(true) 
			setDisplayTranscript(false)
			setDisplayRefrences(false)
			setDisplayTags(false)
			}}>Summary</button>
		  <button id="info-btn" className="info-active md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(true)
			setDisplayRefrences(false)
			setDisplayTags(false)
			}}>Transcript</button>
		  <button id="info-btn" className="md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(false)
			setDisplayRefrences(true)
			setDisplayTags(false)
			}}>Refrences</button>
		  <button id="info-btn" className="md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(false)
			setDisplayRefrences(false)
			setDisplayTags(true)
			}}>Tags</button>
		</div>

		<hr className="w-full" />
		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[500px] overflow-y-auto"  style={{display: displaySummery ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
		  <span className="flex justify-end text-gray-800 lg:mx-36 mx-0">
			<pre className={`${vazir.className} ${"leading-loose"}`}>
				{summary}
			</pre>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[500px] overflow-y-auto"  style={{display: displayTranscript ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
		  <span className="flex justify-end text-gray-800 lg:mx-36">
		  <pre className={`${vazir.className} ${"leading-loose w-full "}`}>
				{transcript}
			</pre>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[500px] overflow-y-auto"  style={{display: displayRefrences ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
		  <span className="flex justify-end text-gray-800 lg:mx-36">
		  <pre className={`${vazir.className} ${"leading-loose"}`}>
				{refrences}
			</pre>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[500px] overflow-y-auto"  style={{display: displayTags ? "block" : 'none'}} >
			<span className="flex justify-start text-gray-800 lg:mx-36">
			<div className={`${vazir.className} ${"space-y-1 space-x-1 "}`}>
				{tags ? tags.map((tag) => (
					<div className="inline-block text-blue-500 bg-blue-100 text-sm px-2 pt-1 rounded-md">{tag.name}</div>

				)) : ''}
			</div>
		  </span>
		</div>
	  </div>
	</div>
  )
}

export default Info