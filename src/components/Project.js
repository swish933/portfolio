import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Project = ({ project }) => {
	return (
		<Container className='Project mt-5 p-3'>
			<Row>
				<Col xs={12} md={6} lg={5} className='pl-md-4'>
					<div className='project-name display-5'>{project.name}</div>
					<p>
						<sub className='project-tech'>{project.tools}</sub>
					</p>
				</Col>
				<Col xs={12} md={6} lg={7}>
					<p className='project-description pt-md-3'>{project.description}</p>
				</Col>
			</Row>

			<Row>
				<Col className='d-flex justify-content-md-end' xs={12}>
					<a
						className='text-uppercase project-link'
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'>
						see project
						<span className='arrow-up'>
							<Image src='/assets/button-arrow-up.svg' alt='arrow-down' />
						</span>
					</a>
				</Col>
			</Row>

			<hr style={{ backgroundColor: 'gray' }} />
		</Container>
	);
};

export default Project;
