import React from 'react'

const Management = () => {
	// <img src="https://i.ibb.co/H4F3G2g/div-process-section.png" alt="" />
	return (
		<div className=' bg-black text-white font-bold'>
			<section className='py-[120px]'>
				<p className='mx-[140px] text-[53px]'><span className='text-gray-400 italic'>The 4 step route</span> to better finacial management. Smarter accounting for <br /> faster growth.</p>

				<div className='flex'>
					<div className=' flex'>
						<img className='-mt-28' src="https://i.ibb.co/mbM0d4g/div-process-gradient-div.png" alt="" />
						<img className='mt-48 -ml-56 w-[122px] h-[215px]' src="https://i.ibb.co/27BvBB8/625423fc54493dd057a1fed7-Vector-97-svg.png" alt="" />
						<img className='-ml- mt-20 h-16 w-16' src="https://i.ibb.co/XFRMYS8/625423fcf5ad7c8ecdf44828-Burst-pucker-1-svg.png" alt="" />
					</div>

					<div className='ml-32 mt-24 flex'>
						<div className='w-[360px]'>
							<p className='font-bold text-7xl italic'>01. </p>
							<p className='my-10 font-bold text-4xl'>Manage Invoices</p>
							<p className='font-lg'>Scan invoices, automate data-entry <br /> and route approvals, effortlessly, <br /> automatically.</p>
						</div>

						<div>
							<p className='font-bold text-4xl ml-10'>02.</p>
							<p className='rotate-90 mt-20 text-xl'>Track expenses</p>
						</div>

						<div>
							<p className='font-bold text-4xl ml-10'>03.</p>
							<p className='rotate-90 mt-28 -ml-8 text-xl'>Send & get payments</p>
						</div>

						<div>
							<p className='font-bold text-4xl ml-10'>04.</p>
							<p className='rotate-90 mt-24 text-xl'>Analyse cachflow</p>
						</div>
					</div>
				</div>

			</section>
		</div>
	)
}

export default Management