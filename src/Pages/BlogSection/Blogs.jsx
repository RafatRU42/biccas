import React from 'react'

const Blogs = () => {
	return (
		<div>
			<div>
				<p className='text-[56px] font-bold'>Recent<span className='text-[46px]'>bolgs</span></p>
			</div>

			<section className='mt-10 flex justify-between'>
				<div>
					<img className='w-[560px]' src="https://i.ibb.co/th89Hwp/div-w-dyn-list.png" alt="" />
				</div>

				<div className='w-[440px]'>
					<div className='uppercase font-bold flex text-[14px]'>
						<p className='mr-6 bg-yellow-200 rounded-xl px-3'>Business</p>
						<p>. 8 min read</p>
					</div>
					<div>
						<p className='text-[30px] font-bold my-6'>The Worst Advice We've Ever Heard About Web Design</p>
						<p className='text-[16px] '>Leverage agile frameworks to provide a robust synopsis
							for high level overviews. Iterative approaches to
							corporate strategy foster collaborative thinking overpass
							is important</p>
					</div>
					<button className='mt-10'>Read more</button>
				</div>
			</section>
		</div>
	)
}

export default Blogs