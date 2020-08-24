import React from 'react';
import './styles/App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Intro />
			<Projects />
		</div>
	);
}

export default App;
