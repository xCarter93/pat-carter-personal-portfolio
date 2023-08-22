import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./ParticleOptions";
import { NavBar } from "./components/NavBar/NavBar";
import * as React from "react";
import TerminalContact from "./components/ContactForm/Contact";
import WaterDropHero from "./components/MainHero/MainHero";
import AboutMe from "./components/AboutMe/AboutMe";
import CardCarousel from "./components/Portfolio/CarouselPortfolio";

function App() {
	const particlesInit = useCallback(async (engine) => {
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={options}
			/>

			<NavBar />
			<div className="grid grid-cols-1">
				<WaterDropHero />
				<AboutMe />
				<CardCarousel />
				<TerminalContact />
			</div>
		</>
	);
}

export default App;
