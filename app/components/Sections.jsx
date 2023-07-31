'use client'
import Link from "next/link"
import { useState   } from "react"
import Info from "./Info"

const Sections = ({ data }) => {
    const audio = data
    
  const getTime = () => {
    if(audio){
      return audio.currentTime
    }
  }
  const time = getTime()
  const getDuration = () => {
    if(audio){
      const audioDuraion = audio.duration
      return parseInt( audioDuraion / 60 / 5 , 10)
    }
  }
  const duration = getDuration()
  const btnText = document.querySelector('.btn-active')
  const getText = () => {if(btnText){
    return btnText.innerText
  }}

  const text = getText()

  const [title , SetTitle] = useState('...') 
    const changeLable = (e) => {
        let infoBtn = document.querySelectorAll('#section-btn')
          for (let index = 0; index < infoBtn.length; index++) {
            infoBtn[index].classList.remove('btn-active');
          }
        e.target.classList.add('btn-active');
        SetTitle(e.target.innerText)
      }

  return (
    <>
      <div className="md:my-6 md:w-auto my-3 py-2 px-3 bg-white shadow-lg rounded-md flex lg:justify-center justify-between items-center btn-info md:overflow-auto overflow-x-scroll relative">
        <Link href='#'><button id="section-btn" className="btn-active font-semibold rounded-md md:py-4 py-3 px-3 w-44 mx-1 duration-150 block relative" onClick={(e) =>{ changeLable(e)}}>{duration == NaN ? 'Section 1' : duration ? `section 0 Until ${duration}` : 'section 1'}</button></Link>
        <Link href='#'><button id="section-btn" className="font-semibold rounded-md md:py-4 py-3 px-3 w-44 mx-1 duration-150 block" onClick={(e) =>{ changeLable(e) }}>{duration == NaN ? 'Section 2' : duration ? `section ${duration} Until ${duration * 2}` : 'section 2'}</button></Link>
        <Link href='#'><button id="section-btn" className="font-semibold rounded-md md:py-4 py-3 px-3 w-44 mx-1 duration-150 block" onClick={(e) =>{ changeLable(e) }}>{duration == NaN ? 'Section 3' : duration ? `section ${duration * 2} Until ${duration * 3}` : 'section 3'}</button></Link>
        <Link href='#'><button id="section-btn" className="font-semibold rounded-md md:py-4 py-3 px-3 w-44 mx-1 duration-150 block" onClick={(e) =>{ changeLable(e) }}>{duration == NaN ? 'Section 4' : duration ? `section ${duration * 3} Until ${duration * 4}` : 'section 4'}</button></Link>
        <Link href='#'><button id="section-btn" className="font-semibold rounded-md md:py-4 py-3 px-3 w-44 mx-1 duration-150 block" onClick={(e) =>{ changeLable(e) }}>{duration == NaN ? 'Section 5' : duration ? `section ${duration * 4} Until ${duration * 5}` : 'section 5'}</button></Link>
      </div>
      <Info text={text} title={title} currentTime={time} duration={duration} />
    </>
  )
}

export default Sections
