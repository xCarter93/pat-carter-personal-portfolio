import React from "react";
import "./NavBar.css";
import pic from "../../resources/profile-pic.jpg";

export const NavBar = () => {
	return (
		<>
			<nav className="h-screen fixed w-80 left-0 bg-indigo-950 items-center overflow-y-auto overflow-hidden transition-all ease-in-out duration-500 border font-mono text-2xl">
				{/*<div className="burger" >*/}
				{/*  <img src="" alt="burger" />*/}
				{/*</div>*/}
				<div className="flex flex-col">
					<div className="block text-center w-full relative h-max border-b p-4">
						<img
							className="rounded-full text-center h-auto overflow-hidden self-center max-w-[75%] border-slate-800 border-solid border-8 inline-block"
							src={pic}
							alt="profile"
						/>
					</div>
					<div className="text-center my-3 justify-around pt-3">
						<div className="no-underline text-white">
							<div className="my-6 mr-3 pl-3 navbar__li rounded-r-md">
								<a href="#home" autoFocus={true}>
									Home
								</a>
							</div>
							<div className="my-6 mr-3 pl-3 navbar__li rounded-r-md">
								<a href="#about">About</a>
							</div>
							<div className="my-6 mr-3 pl-3 navbar__li rounded-r-md">
								<a href="#resume">Resume</a>
							</div>
							<div className="my-6 mr-3 pl-3 navbar__li rounded-r-md">
								<a href="#portfolio">Portfolio</a>
							</div>
							<div className="my-6 mr-3 pl-3 navbar__li rounded-r-md">
								<a href="#contact">Contact</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
