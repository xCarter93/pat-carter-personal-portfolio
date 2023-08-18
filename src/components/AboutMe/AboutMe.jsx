import { FaPython, FaSalesforce, FaReact, FaJsSquare } from "react-icons/fa";
import { Reveal } from "../MainHero/MainHero";
import Resume from "../Resume/Resume";
import ResumePDF from "../../resources/Patrick_Carter_Resume_17-08-2023-16-32-51.pdf";

const AboutMe = () => {
	return (
		<div
			id="about"
			className="md:h-screen ml-[25%] font-mono flex flex-col items-center justify-center py-20 px-5"
		>
			<h1 className="pointer-events-auto font-black text-slate-100 my-10 text-4xl md:text-6xl lg:text-8xl">
				About Me
			</h1>

			<div className="mb-10 pointer-events-auto max-w-6xl text-sm text-slate-300 md:text-base bg-slate-800 border rounded-md p-5 flex w-full">
				<div className="flex-1">
					<span className="font-extrabold text-lg mb-5 block">
						School: <span className="font-thin">Marist College</span>
					</span>
					<span className="font-extrabold text-lg mb-5 block">
						Concentration: <span className="font-thin">Mathematics</span>
					</span>
					<span className="font-extrabold text-lg mb-5 block">
						About Me:{" "}
						<span className="font-thin">
							I have grown up in and around the Boston area my entire life. I
							went to school in New York in hopes to graduate with a Computer
							Science degree, however, ended up shifting to Mathematics my
							freshman year. Just because I made that change did not mean I lost
							the interest in becoming a developer. Directly after graduating
							college I did not think much about trying to learn to program,
							until COVID-19 hit. Once everyone was forced inside I thought it
							would be the perfect time to begin working towards a better
							future.
						</span>
					</span>
				</div>
				<a href={ResumePDF} target="_blank" rel="noopener noreferrer">
					<div className="flex-1">
						<Resume />
					</div>
				</a>
			</div>

			<h2 className="text-2xl font-black text-slate-100 mb-5 text-center">
				Technologies / Frameworks
			</h2>

			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-100">
				<Reveal>
					<div className="flex items-center justify-evenly border rounded-md p-5 bg-slate-800">
						<FaPython className="text-white mr-5 text-[50px]" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								Python
							</h3>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaSalesforce className="text-[50px] text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								Salesforce
							</h3>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaReact className="text-[50px] text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto text-lg md:text-xl font-bold mb-2">
								React
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaJsSquare className="text-[50px] text-white mr-5" />
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
