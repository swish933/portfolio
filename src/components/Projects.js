import React from 'react';
import '../styles/Projects.css';
import Works from './Project';
import data from '../data/data';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className='Projects pt-5' id='work'>
			<Container fluid='md' className='py-3'>
				<p className='projects-header mt-5'>Selected Projects</p>
				{data.map((project) => {
					return <Works project={project} />;
				})}
			</Container>
		</div>
	);
};

export default Projects;
