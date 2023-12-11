import React from 'react'

const BannerSection = () => {
	return (
		<div>
			<div className=''>
				<div className='flex'>
					<p className='mt-20 font-bold text-[87px] mx-auto text-center'>Save more and<span className='italic'>get <br /> visibility </span> on your finances</p>
				</div>
			</div>
			<div className='flex'>
				<p className='mx-auto text-center'>Know where your spend is going and manage your finances more <br />
					efficiently with Milestone.</p>
			</div>
			<button className='flex mx-auto'>Try it on Browser</button>

			<div className='w-[1000px] h-[800px] flex mx-auto mt-10'>
				<img className='w-[1080px] h-[850px]' src="https://i.ibb.co/nsC7mvV/div-home-hero-image-container.png" alt="" />
			</div>

		</div>
		

	

	)
}

export default BannerSection