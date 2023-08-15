import React from "react";
import "./NavBar.css";
import pic from "../../resources/profile-pic.jpg";
import { Link } from "react-scroll";

export const NavBar = () => {
	return (
		<>
			<nav className="h-screen fixed w-80 left-0 bg-indigo-950 items-center overflow-y-auto overflow-hidden transition-all ease-in-out duration-500 border border-slate-500 font-mono text-2xl">
				{/*<div className="burger" >*/}
				{/*  <img src="" alt="burger" />*/}
				{/*</div>*/}
				<div className="flex flex-col">
					<div className="block text-center w-full relative h-max border-b-2 border-slate-500 p-4">
						<img
							className="rounded-full text-center h-auto overflow-hidden self-center max-w-[75%] border-slate-500 border-solid border-8 inline-block"
							src={pic}
							alt="profile"
						/>
					</div>
					<div className="text-center my-3 justify-around pt-3">
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
