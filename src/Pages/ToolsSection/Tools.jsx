import React from 'react'
import SingleTools from '../../Components/SingleTools'

const Tools = () => {
	const tools = [
		{
			id:1,
			name:'Dropbox',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:2,
			name:'Shopify',
			image:'https://i.ibb.co/zhRQySz/6239d32b1e64bb5003aa4c3e-Logo-18-png.png'
		},
		{
			id:3,
			name:'Hubspot',
			image:'https://i.ibb.co/k6r4mPL/6239d336e7f5e944b156f7b6-Logo-20-png.png'
		},
		{
			id:4,
			name:'Stack',
			image:'https://i.ibb.co/3W5HMLF/6239d34085c26c7be0edf0c5-Logo-2-png.png'
		},
		{
			id:5,
			name:'Intercom',
			image:'https://i.ibb.co/Lnb2Nnw/6239d34ac9cf70b4c2ac6d1a-Logo-22-png.png'
		},
		{
			id:6,
			name:'Zapier',
			image:'https://i.ibb.co/ymCMsHD/6239d355e9b6165b7ca4bb93-Logo-9-png.png'
		},
		{
			id:7,
			name:'Kickstarter',
			image:'https://i.ibb.co/4SNHgWQ/6239d3613de54e544c3ceba8-Logo-10-png.png'
		},
		{
			id:8,
			name:'Mailchimp',
			image:'https://i.ibb.co/35XSTzS/6239d36dd176a8f99dd4fdf7-Logo-16-png.png'
		},
	]
  return (
	<div className='mx-[150px] mt-[180px]'>
		<div className='flex justify-between'>
		<p className='text-[53px] font-bold'>Works with all your <br /> <span className='italic'>favourite tools</span></p>
		<button className='uppercase flex  h-10 my-auto bg-black text-white px-12 items-center py-8  rounded-full font-bold'>all integrations <span><img className='ml-4' src="https://i.ibb.co/gzNcLJp/6238747d9d3f5e4e5097b087-Arrow-Up-Right-svg.png" alt="" /></span></button>
		
	</div>

	<div className='grid grid-cols-4 mt-10 gap-4 text-center'>
		{
			tools.map(tool=> <SingleTools key={tool.id} tools={tool}></SingleTools>)
		}
	</div>
	</div>
  )
}

export default Tools