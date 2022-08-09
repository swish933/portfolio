import React from 'react';
import '../styles/Projects.css';
import Works from './Project';
import {projects, clones} from '../data/data';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className='Projects pt-5' id='work'>
			<Container fluid='md' className='py-3'>
				<p className='projects-header mt-3'>Selected Projects</p>
				{projects.map((project) => {
					return <Works project={project} />;
				})}
			</Container>
			<Container fluid='md' className='py-3'>
				<p className='projects-header mt-5 '>Cloned Pages</p>
				{clones.map((project) => {
					return <Works project={project} />;
				})}
			</Container>
		</div>
	);
};

export default Projects;
