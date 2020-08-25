import React from 'react';
import '../styles/Projects.css';
import Works from './Project';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className='Projects pt-5 w-xs-100 w-md-75' id='work'>
			<Container fluid='md'>
				<p className='projects-header mt-5'>Selected Projects</p>
				<Works />
			</Container>
		</div>
	);
};

export default Projects;
