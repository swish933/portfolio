import React from 'react';
import '../styles/Contact.css';
import { Container, Col } from 'react-bootstrap';

const Contact = () => {
	return (
		<div className='Contact w-xs-100 w-md-75 py-5' id='contact'>
			<Container fluid='md' className='p-2'>
				<p className='contact-header mt-5'>Contact</p>
				<Col xs={12} md={8} className='contact-details pl-md-5 mt-5'>
					<h3 className='py-4 mb-4'>Starting a Project?</h3>
					<p>
						Call: <span className='contact-detail'>+2349036740436</span>
					</p>
					<p>
						Email:
						<span className='contact-detail text-uppercase'>
							ikemnomso@gmail.com
						</span>
					</p>
				</Col>
			</Container>
		</div>
	);
};

export default Contact;
