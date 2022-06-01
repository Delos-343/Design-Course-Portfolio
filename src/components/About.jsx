import React from 'react'

const About = () => {
  return (
    <div className='container mt-32 block sm:flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pb-14 leading-10 sm:leading-0'>
        <section className="w-full">
          <h1 className='text-6xl font-bold'> About Me </h1>
				  <p className="section-paragraph pt-5 pb-10">As a frontend developer, I have had the pleasure of working with multiple startups and companies on both national and international scales, where I design UI/UX for digital products, as well as implementing both frontend and backend.</p>

				  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					  <img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover" alt="work 1" />
					  <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover" alt="work 2" />
					  <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover" alt="work 3" />
					  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt="work 4" />
					  <img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt="work 5" />
					  <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt="work 6" />
					  <img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt="work 7" />
					  <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" alt="work 8" />
					  <img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover" alt="work 9" />
          </div>
			</section>
    </div>
  )
}

export default About