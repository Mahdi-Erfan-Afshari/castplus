const AudioLoading = () => {
  return (
	<div className="flex flex-col justify-center items-center">
		<div className="flex w-full h-[40px] items-center justify-center space-x-1">
			<span className="loading-item1"></span>
			<span className="loading-item2"></span>
			<span className="loading-item3"></span>
			<span className="loading-item4"></span>
			<span className="loading-item5"></span>
		</div>
		<p className="ms-3 mt-1">Loading Audio...</p>
	</div>
  )
}

export default AudioLoading