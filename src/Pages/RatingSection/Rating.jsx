import React from 'react'
import RatingCard from '../../Components/RatingCard'

const Rating = () => {
	const ratingInfo=[
		{
			id:1,
			title:'"the interface is excellent"',
			star:'https://i.ibb.co/xY8kK82/div-star-icon-container.png',
			image:'https://i.ibb.co/fdyNsPw/623b5214c5b243b69610544b-Frame-54-png.png'
		},
		{
			id:2,
			title:'"improvements in every release"',
			star:'https://i.ibb.co/xY8kK82/div-star-icon-container.png',
			image:'https://i.ibb.co/2M5gRj9/623b521441aa1f7a6fe37f78-Frame-55-png.png'
		},
		{
			id:3,
			title:'"it is my main workhorse now"',
			star:'https://i.ibb.co/xY8kK82/div-star-icon-container.png',
			image:'https://i.ibb.co/tB0m6kV/623b52145c8a7f3ab180c433-Frame-56-png.png'
		},
	]
	return (
		<div>
			<div className='mt-20 flex text-center'>
				<p className='mx-auto text-[51px] font-bold'>Customers have consistently <br /> <span className='italic'>reted</span> milestone 4.9/6</p>

			</div>

			<div className='flex my-10 mx-auto justify-center  gap-36'>
				{/* <img className='mx-auto' src="https://i.ibb.co/JpJRrFD/div-w-layout-grid.png" alt="" /> */}
				{
					ratingInfo.map(rating=> <RatingCard key={rating.id} ratingInfo={rating}></RatingCard>)
				}

			</div>
		</div>

	)
}

export default Rating