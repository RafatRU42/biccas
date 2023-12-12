import React from 'react'

const Navbar = () => {
	return (
		<div>
			<div className='bg-[#CAEF45] h-[48px] flex'>
				<p className='text-[15px] italic justify-center items-center mx-auto my-auto font-semibold'>Get Premium Webflow Templates, Build world-class SaaS website</p>
				<button><img className='justify-end h-5 w-5 my-auto mr-6' src="https://i.ibb.co/V3PyB5X/div-home-cross-icon-wrapper.png" alt="" /></button>
			</div>
			<div className='flex justify-evenly my-[40px]'>
				<div>
					<img src="https://i.ibb.co/5Bmc7Xs/623891ef81d2e4d287675658-Group-22-svg-fill.png" alt="" />
				</div>

				<div>
					<ul className='flex '>
						<button className='mx-3'>About</button>
						<button className='mx-3'>Pricing</button>
						<button className='mx-3'>Fetures</button>
						<button className='mx-3'>Integration</button>
						<button className='mx-3'>Blog</button>
						<button className='mx-3'>Contract</button>
					</ul>
				</div>

				<div className='flex'>
					<button className='flex'>
						<img className=' h-5' src="https://i.ibb.co/bQfrLY0/SVG-margin.png" alt="" />
						<p className='mr-2'>Cart <span className='text-red-400'>0</span></p>
					</button>
					<button className='mx-2 -mt-3'>Login</button>
					<button className='mx-2 -mt-3 bg-black text-white px-4 py-3 rounded-3xl'>Sign Up</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar