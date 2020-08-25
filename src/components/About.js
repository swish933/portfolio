import React from 'react';
import '../styles/About.css';
import {Container, Col, Image} from 'react-bootstrap';

const About = () => {
    return (
			<div className='About pt-5 pb-3 w-xs-100 w-md-75' id='about'>
				<Container fluid='md' className='p-2'>
					<p className='about-header mt-5'>About</p>
					<Col xs={12} md={8} className='about-description mt-5 pl-md-5'>
						<p>
							With a background in computer engineering, software development
							was a natural segue for me. I have collaborated with other
							developers to work on projects involving design and development
							using Version Control Systems
						</p>
						<p className='mt-4'>
							Responsible for converting mockups into functional Web Apps using
							tools such as HTML, CSS, JavaScript and ReactJs, Nodejs, Express
							and MongoDB.
						</p>
					</Col>
					<Col xs={12} className='pl-md-5 mt-4'>
						<p className='text-uppercase cv-link mt-2'>
							see my cv
							<span className='ml-1'>
								<Image src='/assets/button-arrow-up.svg' alt='arrow-down' />
							</span>
						</p>
					</Col>
				</Container>
			</div>
		);
}

export default About;
