import React from "react";
import "./NavBar.css";
import pic from "../../resources/profile-pic.jpg";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NavBar = () => {
	return (
		<>
			<nav className="h-screen fixed w-1/5 left-0 bg-indigo-950 items-center overflow-y-auto overflow-hidden transition-all ease-in-out duration-500 border border-slate-500 font-mono opacity-90">
				{/*<div className="burger" >*/}
				{/*  <img src="" alt="burger" />*/}
				{/*</div>*/}
				<div className="flex flex-col">
					<div className="block text-center w-full relative h-max border-b-2 border-slate-500 p-4 text-2xl">
						<img
							className="rounded-full text-center h-auto overflow-hidden self-center max-w-[75%] border-slate-500 border-solid border-4 md:border-8 inline-block"
							src={pic}
							alt="profile"
						/>
						<div className="flex justify-center mt-4 space-x-4 relative">
							<a
								href="https://github.com/xCarter93"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="text-white text-2xl hover:text-gray-300" />
							</a>

							<a
								href="https://www.linkedin.com/in/patrick-carter-306746a8/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="text-white text-2xl hover:text-gray-300" />
							</a>
						</div>
					</div>
					<div className="text-center my-3 justify-around pt-3 text-xs sm:text-sm md:text-lg lg:text-2xl">
						<div className="no-underline text-white flex flex-col cursor-pointer">
							<Link
								className="my-6 mr-3 pl-3 navbar__li rounded-r-md"
								to="home"
								smooth={true}
								duration={500}
							>
								Home
							</Link>
							<Link
								className="my-6 mr-3 pl-3 navbar__li rounded-r-md"
								to="about"
								smooth={true}
								duration={500}
							>
								About
							</Link>
							<Link
								className="my-6 mr-3 pl-3 navbar__li rounded-r-md"
								to="resume"
								smooth={true}
								duration={500}
							>
								Resume
							</Link>
							<Link
								className="my-6 mr-3 pl-3 navbar__li rounded-r-md"
								to="portfolio"
								smooth={true}
								duration={500}
							>
								Portfolio
							</Link>
							<Link
								className="my-6 mr-3 pl-3 navbar__li rounded-r-md"
								to="contact"
								smooth={true}
								duration={500}
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
