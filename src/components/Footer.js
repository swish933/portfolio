import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className='Footer'>
			<Container className='p-1'>
				<Row xs={10} className='px-3 px-sm-0'>
					<Col>
						<p className='mt-4 float-left '>Developed by me.</p>
					</Col>
					<Col>
						<p className='mt-4 float-right '>Copyright 2020.</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
