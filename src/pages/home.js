import React from 'react';
import logo from '../assets/img/home/home-logo.png';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper';

const Home = () => {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/about');
	}

	return (
		<Wrapper style={{alignItems: 'center'}}>
			<section className="home-page--intro-block">
				<div className="home-page-logo">
				<img src={logo} alt="Jason Kollias"/>
				</div>
				<p className="home-blurb">Hi, My name is Jason Kollias and I am a Front End Developer/Designer based in New York.  My careful eye and strength in CSS and Javascript allows me to develop new and innovative site feature that strengthen brand identity while offering fulfilling experiences to site visitors.</p>
				<button onClick={handleClick} className="view-my-work--btn">View My Work</button>
			</section>
		</Wrapper>
	);
};

export default Home;

