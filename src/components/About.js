import React from 'react';
import '../styles/About.css';
import { Container, Col, Image } from 'react-bootstrap';

const About = () => {
	return (
		<div className='About pt-5' id='about'>
			<Container fluid='md' className='p-2'>
				<p className='about-header mt-5'>About</p>
				<Col xs={12} md={8} className='about-description mt-5 pl-md-5'>
					<p>
						With a background in computer engineering, software development was
						a natural segue for me. I have collaborated with other developers to
						work on projects involving design and development using Version
						Control Systems
					</p>
					<p className='mt-4'>
						Responsible for converting mockups into functional Web Apps using
						tools such as HTML, CSS, JavaScript and ReactJs, Nodejs, Express and
						MongoDB.
					</p>
				</Col>
				<Col xs={12} className='pl-md-5 mt-4'>
					<a
						className='text-uppercase cv-link mt-2 '
						href='https://docs.google.com/document/d/1da7OaeM_I21N72hpVS2zboO11B2lORHHVdskjIgQxOU/edit?usp=sharing'
						target='_blank'
						rel='noopener noreferrer'>
						see my resume
						<span className='ml-5 arrow-up'>
							<Image src='/assets/button-arrow-up.svg' alt='arrow-down' />
						</span>
					</a>
				</Col>
				<Col xs={12} className='pl-md-5 mt-3'>
					<a
						className='text-uppercase cv-link mt-2 '
						href='https://github.com/swish933'
						target='_blank'
						rel='noopener noreferrer'>
						github
						<span className='arrow-up'>
							<Image src='/assets/button-arrow-up.svg' alt='arrow-down' />
						</span>
					</a>
				</Col>
			</Container>
		</div>
	);
};

export default About;
