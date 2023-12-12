import React from 'react'

const BannerSection = () => {
	return (
		<div>
			<div className=''>
				<div className='flex'>
					<p className=' font-bold text-[87px] mx-auto text-center'><span><img src="https://i.ibb.co/XXNpt64/623d5980fbc033885da2c334-Highlight-05-svg-fill.png" alt="" /></span> Save more and<span className='italic'>get <br /> visibility </span> on your finances</p>
				</div>
			</div>

			<div className='flex'>
				<p className='mx-auto text-center text-[19px] my-6'>Know where your spend is going and manage your finances more <br />
					efficiently with Milestone.</p>
			</div>
			<button className='flex mx-auto bg-black text-white uppercase px-10 py-4 rounded-full text-lg	'>Try it on Browser <span>  <img className='ml-4' src="https://i.ibb.co/gzNcLJp/6238747d9d3f5e4e5097b087-Arrow-Up-Right-svg.png" alt="" /></span></button>


			<img className='mx-auto mt-6' src="https://i.ibb.co/5s6CkH3/div-cta-company-holder.png" alt="" />

			<section className='flex'>
				<div className='ml-24 mt-80'>
					<img className='mb-20' src="https://i.ibb.co/NnCWQYS/62541da38c93a25ba4b4b6e2-Burst-pucker-1-svg-fill.png" alt="" />
					<img src="https://i.ibb.co/0qRHR8y/62541da3a25b95a9a99b5142-Vector-96-svg.png" alt="" />
				</div>

				<div className='w-[1000px] h-[800px] flex -ml-8 mx-auto mt-10'>
					<img className='w-[1080px] h-[850px]' src="https://i.ibb.co/nsC7mvV/div-home-hero-image-container.png" alt="" />
				</div>
			</section>

		</div>




	)
}

export default BannerSection