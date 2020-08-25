import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className='Footer'>
			<Container className='p-1'>
				<Row>
					<Col xs={6} className='d-flex justify-content-start '>
						<p className='pt-4'>Developed by me.</p>
					</Col>
					<Col xs={6} className='d-flex justify-content-end '>
						<p className='pt-4'>Copyright 2020.</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
