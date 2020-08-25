import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Intro />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
