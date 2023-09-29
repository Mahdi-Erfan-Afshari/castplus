const AudioLoading = () => {
  return (
	<div id='audio-loading' className="audio-loading flex flex-col justify-center items-center">
		<div className="flex space-x-1 w-full h-[40px] items-center justify-center">
			<span className="loading-item loading-item1"></span>
			<span className="loading-item loading-item2"></span>
			<span className="loading-item loading-item3"></span>
			<span className="loading-item loading-item4"></span>
			<span className="loading-item loading-item5"></span>
		</div>
		<p className="ms-3 mt-1">Loading Audio...</p>
	</div>
  )
}

export default AudioLoading