import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Websites from "./pages/websites";
import Landing from "./pages/landing";
import Scripts from "./pages/landing";
import Games from "./pages/games";
import About from "./pages/about";

function App() {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/websites" element={<Websites/>} />
				<Route path="/landing" element={<Landing/>} />
				<Route path="/scripts" element={<Scripts/>} />
				<Route path="/games" element={<Games/>} />
				<Route path="/about" element={<About/>} />
			</Routes>
		</Router>
	);
}
export default App;
