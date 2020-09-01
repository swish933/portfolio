import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Project = () => {
	return (
		<Container className='Project mt-5 p-3'>
			<Row>
				<Col xs={12} md={6} lg={5} className='pl-md-4'>
					<div className='project-name display-4'>Coin Price</div>
					<p>
						<sub className='project-tech'>
							HTML, CSS, Bootstrap, JavaScript, Jquery, Coinbase API
						</sub>
					</p>
				</Col>
				<Col xs={12} md={6} lg={7}>
					<p className='project-description pt-md-3'>
						Web app that uses the coin base API to show current prices of
						certain cryptocurrencies in some physical currency.
					</p>
				</Col>
			</Row>

			<Row>
				<Col className='d-flex justify-content-md-end' xs={12}>
					<p className='text-uppercase project-link'>
						see project
						<span className='arrow-up'>
							<Image src='/assets/button-arrow-up.svg' alt='arrow-down' />
						</span>
					</p>
				</Col>
			</Row>

			<hr style={{ backgroundColor: 'gray' }} />
		</Container>
	);
};

export default Project;
