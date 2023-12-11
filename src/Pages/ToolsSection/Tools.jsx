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
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:3,
			name:'Hubspot',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:4,
			name:'Stack',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:5,
			name:'Intercom',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:6,
			name:'Zapier',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:7,
			name:'Kickstarter',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
		{
			id:6,
			name:'Mailchimp',
			image:'https://i.ibb.co/sKBYHkx/dropbox.png'
		},
	]
  return (
	<div>
		<div className='flex justify-evenly'>
		<p className='text-[53px] font-bold'>Works with all your <br /> favourite tools</p>
		<button className='uppercase h-10 my-auto'>all integrations</button>
	</div>

	<div className='grid grid-cols-4 mt-10 text-center'>
		{
			tools.map(tool=> <SingleTools key={tool.id} tools={tool}></SingleTools>)
		}
	</div>
	</div>
  )
}

export default Tools