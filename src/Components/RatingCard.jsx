import React from 'react'

const RatingCard = ({ratingInfo}) => {
	const {image,star,title} = ratingInfo;
  return (
	<div>
		<img className='flex mx-auto my-3' src={star} alt="" />
		<p className='my-2 flex mx-auto'>{title}</p>
		<img className='flex mx-auto' src={image} alt="" />
	</div>
  )
}

export default RatingCard