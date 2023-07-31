'use client'
import Link from "next/link"
import { useState } from "react"

const Info = ({ text , title , currentTime , duration  }) => {
  const [displaySummery, setDisplaySummary] = useState(false)
  const [displayTranscript, setDisplayTranscript] = useState(false)
  const [displayRefrences, setDisplayRefrences] = useState(false)

  const changeInfoLable = (e) => {
    let infoBtn = document.querySelectorAll('#info-btn')
      for (let index = 0; index < infoBtn.length; index++) {
        infoBtn[index].classList.remove('btn-active');
      }
      e.target.classList.add('btn-active');
    }

  return (
    <div className="">
      <div className="md:my-6 md:w-auto my-3 py-2 px-3 shadow-lg rounded-md flex flex-col justify-center items-center bg-white w-full">
        <div className="md:my-6 md:w-auto my-3 py-2 px-3 flex md:overflow-auto overflow-x-scroll w-full">
          <Link href='#'><button id="info-btn" className="font-semibold rounded-md md:py-4 md:px-5 py-2 px-8 mx-1 duration-150" onClick={(e) =>{
            changeInfoLable(e)
            setDisplaySummary(true) 
            setDisplayTranscript(false)
            setDisplayRefrences(false)
            }}>Summary</button>
          </Link>
          <Link href='#'><button id="info-btn" className="font-semibold rounded-md md:py-4 md:px-5 py-2 px-8 mx-1 duration-150" onClick={(e) =>{
            changeInfoLable(e)
            setDisplaySummary(false) 
            setDisplayTranscript(true)
            setDisplayRefrences(false)
            }}>Transcript</button>
          </Link>
          <Link href='#'><button id="info-btn" className="font-semibold rounded-md md:py-4 md:px-5 py-2 px-8 mx-1 duration-150" onClick={(e) =>{
            changeInfoLable(e)
            setDisplaySummary(false) 
            setDisplayTranscript(false)
            setDisplayRefrences(true)
            }}>Refrences</button>
          </Link>
        </div>
        <div className="w-full h-auto rounded-md p-3"  style={{display: displaySummery ? "block" : 'none'}} >
          <h1 className="text-center font-bold text-2xl mb-2">{!text ? 'Summary' :text ? text : title }</h1>
          <span className="text-gray-800 text-justify">
            <p className="text-center">
              {
               !text ? 'This is Summary' : text ? `This is a Summary for ${text}` : !text ? title : time / 60 < 30 ? `This is a Summary for ${title}` : time /60 < 60 ? `This is a Summary for ${title}` : time /60 > 60 ? `This is a Summary for ${title}` : 'This is Summary'
              }
            </p>
          </span>
        </div>

        <div className="w-full h-auto rounded-md p-3"  style={{display: displayTranscript ? "block" : 'none'}} >
          <h1 className="text-center font-bold text-2xl mb-2">{!text ? 'Transcript' :text ? text : title }</h1>
          <span className="text-gray-800 text-justify">
            <p className="text-center">
              {
               !text ? 'This is Transcript' : text ? `This is a Transcript for ${text}` : !text ? title : time / 60 < 30 ? `This is a Transcript for ${title}` : time /60 < 60 ? `This is a Transcript for ${title}` : time /60 > 60 ? `This is a Transcript for ${title}` : 'This is Transcript'
              }
            </p>
          </span>
        </div>

        <div className="w-full h-auto rounded-md p-3"  style={{display: displayRefrences ? "block" : 'none'}} >
          <h1 className="text-center font-bold text-2xl mb-2">{!text ? 'Refrences' :text ? text : title }</h1>
          <span className="text-gray-800 text-justify">
            <p className="text-center">
              {
               !text ? 'This is Refrences' : text ? `This is a Refrences for ${title}` : !text ? title : time / 60 < 30 ? `This is a Refrences for ${title}` : time /60 < 60 ? `This is a Refrences for ${title}` : time /60 > 60 ? `This is a Refrences for ${title}` : 'This is Refrences'
              }
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Info
