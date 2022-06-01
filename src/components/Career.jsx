import React from 'react'
import GenBroaden from '../assets/logos/broaden-creative-fff.png'
import iBiG from '../assets/logos/ibig-acad-logo.png'
import IPL from '../assets/logos/ipl-logo-icon.png'

const Career = () => {
  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
		<section className="w-full leading-10">
            <h1 className='text-6xl font-bold'> Career </h1>
			<p className="section-paragraph pt-5">
				I have had the pleasure of working with multiple startups, designing and implementing both frontend and UI/UX;
				the following list of careers showcases my active and or ongoing job positions.
			</p>

			<div className="space-y-12 my-16">
				<div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						
					<div className="mb-0">
						<img src={GenBroaden} alt="broaden-creative" />
					</div>
					<div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
						<h3 className="text-gray-100 text-3xl font-semibold">Broaden Creative by Expecto</h3>

						<div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">May 2022 - Present</div>
                            <span className='space-x-10 hidden sm:block'> | </span>
                            <div className="badge">Frontend Developer Intern</div>
						</div>

						<p className="text-secondary">
                            I designed prototypes in Figma, each with variations in layout and modular components pending approval
                            and translated approved UI designs to code (responsive webpages. keyframe animations, PWA)
                            <br /><br />
                            In addition, I cooperated with HR and Content to perform user-research, SEO, market analysis via web scraping and data analytics
                        </p>
					</div>

				</div>
				<div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
					
					<div className="mb-0">
						<img src={iBiG} alt="ibig-academy" />
					</div>
					<div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
						<h3 className="text-gray-100 text-3xl font-semibold">iBiG Academy</h3>

						<div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
							<div className="badge">Sept 2021 - Present</div>
                            <span className='space-x-10 hidden sm:block'> | </span>
                            <div className="badge">Coding Teacher</div>
						</div>

						<p className="text-secondary">
                            I taught children (age 6-17) on block programming as the core subject, followed by JavaScript and Python, as well as web development with HTML, CSS, and JavaScript to make web pages, ending in final projects to build a full website.
                        </p>
					</div>

				</div>
				<div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
					<div className="mb-0">
						<img src={IPL} alt="indonesia-peerleaders" />
					</div>
					<div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
						<h3 class="text-gray-100 text-3xl font-semibold">Indonesia Peerleaders</h3>

						<div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
							<div className="badge">Jan 2022 - Present</div>
                            <span className='space-x-10 hidden sm:block'> | </span>
                            <div className="badge">Social Media Officer</div>
						</div>

						<p class="text-secondary">
							As the team's web developer, I designed and (is currently) developing the IPL website with low-code and full-code methodologies.
							<br /><br />
							I cooperated with Operations and Marketing to create an online content management system (CMS), then managing the CMS as an admin and aid in the organization of upcoming events.
						</p>
					</div>

				</div>
			</div>

		</section>
	</div>
  )
}

export default Career
