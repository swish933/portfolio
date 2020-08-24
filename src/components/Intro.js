import React from 'react';
import '../styles/Intro.css';
import { Container, Image, Col, Row } from 'react-bootstrap';

const Intro = () => {
	return (
		<div className='hero-image'>
			<div className='layer'>
				<Container className='hero-text p-4 d-flex' fluid='lg'>
					<Row className=' align-content-center justify-content-sm-center'>
						<Col className='mb-3 pl-sm-5' xs={9} sm={8} >
							<div className='title display-4'>Full stack web developer</div>
						</Col>
						<Col className='mb-4 pl-sm-5' xs={10} sm={8} >
							<p>
								I build useful and functional web applications for innovative
								startups and companies.
							</p>
						</Col>
						<Col className='pl-sm-5' xs={8} >
							<p id='work-btn'>
								SEE MY WORK
								<span className='ml-1'>
									<Image src='/assets/button-arrow-down.svg' alt='arrow-down' />
								</span>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};
export default Intro;
