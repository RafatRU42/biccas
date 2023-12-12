import React from 'react'

const SingleTools = ({tools}) => {
	const {name,image} = tools
  return (
	<div className='mx- rounded-md mt-2 shadow-xl py-4 px-[90px]'>
		<img src={image} alt="" />
		<p>{name}</p>
	</div>
  )
}

export default SingleTools