import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Project = () => {
	return (
		<Container className='Project mt-3'>
			<Row>
				<Col xs={12} md={5}>
					<h2 className='Project-name'>Coin Price</h2>
					<p className='tech'>
						HTML, CSS, Bootstrap, JavaScript, Jquery, Coinbase API
					</p>
				</Col>
				<Col xs={12} md={7}>
					<p className='description'>
						Web app that uses the coin base API to show current prices of
						certain cryptocurrencies in some physical currency.
					</p>
				</Col>
			</Row>

			<Row className='d-flex'>
				<Col
					className='justify-content-md-end justify-content-xs-start'
					xs={12}
					md={6}>
					<p className='text-uppercase project-link'>
						see project
						<span className='ml-1'>
							<Image src='/assets/button-arrow-up.svg' alt='arrow-down' />
						</span>
					</p>
				</Col>
			</Row>

			<hr style={{ backgroundColor: 'light-gray' }} />
		</Container>
	);
};

export default Project;
