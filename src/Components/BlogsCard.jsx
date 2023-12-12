import React from 'react'

const BlogsCard = ({cardInfo}) => {
	const {title,time,image,bg}= cardInfo;
  return (
	<div className={`${bg && 'bg-black text-white'} flex w-[365px] h-[162px] shadow-md rounded-lg`}>
		<div className='mx-6 mt-6'>
			<img className='h-[88px]' src={image} alt="" />
		</div>
		<div className='mt-6 font-bold'>
			<p className='uppercase'>{time}</p>
			<p className='text-lg mr-6'>{title}</p>
		</div>
	</div>
  )
}

export default BlogsCard