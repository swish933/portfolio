import React from 'react';
import '../Intro.css';
import { Image, Col, Row } from 'react-bootstrap';

const Intro = () => {
	return (
		<div className='hero-image'>
			<div className='layer d-flex'>
				<div className='hero-text mx-auto my-auto p-3 w-sm-75 w-md-50'>
					<Row className='mb-2'>
						<Col xs={9} md={12}>
							<h1 className='display-4 '>Full stack web developer</h1>
						</Col>
					</Row>
					<Row className='mb-4'>
						<Col md={8}>
							<p>
								I build useful and functional web applications for innovative
								startups and companies.
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<p id='work'>
								SEE MY WORK
								<span className='ml-1'>
									<Image src='/assets/button-arrow-down.svg' alt='arrow-down' />
								</span>
							</p>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};
export default Intro;
