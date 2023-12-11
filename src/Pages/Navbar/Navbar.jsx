import React from 'react'

const Navbar = () => {
  return (
	<div className='flex justify-evenly'>
		<div>
			milestone
		</div>

		<div>
			<ul className='flex '>
				<li className='mx-2'>About</li>
				<li className='mx-2'>Pricing</li>
				<li className='mx-2'>Fetures</li>
				<li className='mx-2'>Integration</li>
				<li className='mx-2'>Blog</li>
				<li className='mx-2'>Contract</li>
			</ul>
		</div>

		<div className='flex'>
		   <p className='mx-2'>Cart</p>
		   <p className='mx-2'>Login</p>
		   <button className='mx-2'>Sign Up</button>
		</div>
	</div>
  )
}

export default Navbar