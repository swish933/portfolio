import React from 'react';
import '../styles/Projects.css';
import Works from './Project';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className='Projects pt-5'>
			<Container className='w-75'>
				<p className='projects-header mt-5' id='work'>Selected Projects</p>
				<Works />
			</Container>
		</div>
	);
};

export default Projects;
