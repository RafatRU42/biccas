import React from 'react'
import BlogsCard from '../../Components/BlogsCard'

const Blogs = () => {

	const cardsInfo= [
		{
			id:1,
			title:"The worst advice we've heard about web design",
			time:'. 8 min read',
			image:'https://i.ibb.co/th89Hwp/div-w-dyn-list.png',
			bg:'black'
		},
		{
			id:2,
			title:"The History of web Design",
			time:'. 8 min read',
			image:'https://i.ibb.co/5s2RMg4/62431cabbf37c6801e34934e-Rectangle-192-1-png.png'
		},
		{
			id:3,
			title:"10 Things nobody told about being a web Designer",
			time:'. 8 min read',
			image:'https://i.ibb.co/Kzr1761/62431cab7bf46b216841efce-Rectangle-194-1-png.png'
		}
	]

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

		{/* Card Section =>>>> */}
			<section className='grid grid-cols-3 gap-[120px] my-10'>
				{
					cardsInfo.map(card => <BlogsCard key={card.id} cardInfo={card}></BlogsCard>)
				}
			</section>
		</div>
	)
}

export default Blogs