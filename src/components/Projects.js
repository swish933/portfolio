import React from 'react';
import '../styles/Projects.css';
import Works from './Project';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className='Projects pt-5'>
			<Container className='w-xs-75 w-md-50'>
				<p className='projects-header mt-2'>Selected Projects</p>
				<Works />
			</Container>
		</div>
	);
};

export default Projects;
