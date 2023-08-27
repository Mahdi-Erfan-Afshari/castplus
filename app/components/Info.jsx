'use client'
import { useState } from "react"

const Info = ({title, summary, transcript, refrences}) => {
	const [displaySummery, setDisplaySummary] = useState(false)
	const [displayTranscript, setDisplayTranscript] = useState(true)
	const [displayRefrences, setDisplayRefrences] = useState(false)

	const changeInfoLable = (e) => {
		let infoBtn = document.querySelectorAll('#info-btn')
		infoBtn.forEach((button) => {
			button.classList.remove('info-active');
		})
		e.target.classList.add('info-active');
	}

  return (
	<div>
 	  <div className="md:my-6 md:w-auto my-3 shadow-lg rounded-xl flex flex-col justify-center items-center bg-white w-full">
 		<div className="px-2 pt-2 md:pt-0 flex justify-center w-full">
 		  <button id="info-btn" className="md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(true) 
			setDisplayTranscript(false)
			setDisplayRefrences(false)
			}}>Summary</button>
		  <button id="info-btn" className="info-active md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(true)
			setDisplayRefrences(false)
			}}>Transcript</button>
		  <button id="info-btn" className="md:pt-5 sm:text-md text-sm pb-2 md:px-8 sm:px-4 py-2 px-3 duration-150 border-b-[3px] border-transparent" onClick={(e) =>{
			changeInfoLable(e)
			setDisplaySummary(false) 
			setDisplayTranscript(false)
			setDisplayRefrences(true)
			}}>Refrences</button>
		</div>

		<hr className="w-full" />
		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[650px] overflow-y-auto"  style={{display: displaySummery ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
		  <span className="flex justify-center text-gray-800">
			<p className="text-center text-justify">
				{summary}
			</p>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[650px] overflow-y-auto"  style={{display: displayTranscript ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
		  <span className="flex justify-center text-gray-800">
			<p className="text-center text-justify">
				{transcript}
			</p>
		  </span>
		</div>

		<div className="w-full h-auto rounded-md py-3 px-6 mt-8 mb-4 max-h-[650px] overflow-y-auto"  style={{display: displayRefrences ? "block" : 'none'}} >
		  <h1 className="text-center font-bold text-2xl mb-2">{title}</h1>
		  <span className="flex justify-center text-gray-800">
			<p className="text-center text-justify">
				{refrences}
			</p>
		  </span>
		</div>
	  </div>
	</div>
  )
}

export default Info