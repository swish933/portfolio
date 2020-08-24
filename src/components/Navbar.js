import React from 'react';
import '../styles/Navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar className='Nav' sticky='top' variant='dark' expand='md'>
			<Container>
				<Navbar.Brand href='#home'>Nomso Ikem</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mx-md-auto'>
						<Nav.Link href='#work' className='mx-3'>
							Work
						</Nav.Link>
						<Nav.Link href='#about' className='mx-3'>
							About
						</Nav.Link>
						<Nav.Link href='#contact' className='mx-3'>
							Contact
						</Nav.Link>
					</Nav>
					<Navbar.Text>
						<div class='led-green'></div>
						Available for hire
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
