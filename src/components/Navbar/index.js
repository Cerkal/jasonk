import { React, useState } from "react";
import NavbarSlide from "../NavbarSlide";
import { useNavigation } from "react-router-dom";
import siteLogo from '../../assets/img/jkollias-logo-black.png';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const openNav = () => {
		setOpen(open => open = !open);
		console.log('open', open);
	};

	const update = () => {
		setOpen(false);
	}

	document.addEventListener('selected', (e => {
		update();
	}
	));

	return (
		<>
		<header className="site-header">
			<nav>
				<div class="site-logo">
					<img src={siteLogo} alt="Jason Kollias | Frontend Developer"/>
				</div>
				<div className="menu-wrapper">
					Menu
					<div className="menu-icon" onClick={openNav}>
						<div className='bar'></div>
						<div className='bar'></div>
						<div className='bar'></div>
					</div>
				</div>
			</nav>
			<NavbarSlide display={open} navigation={useNavigation}/>
		</header>
		</>
	);
};

export default Navbar;
