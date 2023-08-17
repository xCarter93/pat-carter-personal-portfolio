import { FaPython, FaSalesforce, FaReact, FaJsSquare } from "react-icons/fa";
import { Reveal } from "../MainHero/MainHero";

const AboutMe = () => {
	return (
		<div
			id="about"
			className="md:h-screen ml-[25%] font-mono flex flex-col items-center justify-center py-20 px-5"
		>
			<h1 className="pointer-events-auto font-black text-slate-100 my-10 text-4xl md:text-6xl lg:text-8xl">
				About Me
			</h1>

			<div className="mb-10 pointer-events-auto max-w-4xl text-sm text-slate-300 md:text-base bg-slate-800 border rounded-md p-5 flex w-full">
				<h4 className="font-extrabold inline mr-4">School:</h4>
				<p className="mb-5">Marist College</p>
			</div>

			<h2 className="text-2xl font-black text-slate-100 mb-5 text-center">
				Technologies / Frameworks
			</h2>

			<div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-100">
				<Reveal>
					<div className="flex items-center justify-center border rounded-md p-5 bg-slate-800">
						<FaPython className="text-6xl text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								Python
							</h3>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-center">
						<FaSalesforce className="text-6xl text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								Salesforce
							</h3>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-center">
						<FaReact className="text-6xl text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								React
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-center">
						<FaJsSquare className="text-6xl text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								JavaScript
							</h3>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
};

export default AboutMe;
