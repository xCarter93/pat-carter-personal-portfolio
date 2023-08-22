import {
	FaPython,
	FaSalesforce,
	FaReact,
	FaJsSquare,
	FaHtml5,
	FaCss3,
} from "react-icons/fa";
import {
	SiPostgresql,
	SiMongodb,
	SiTypescript,
	SiFirebase,
} from "react-icons/si";
import { Reveal } from "../MainHero/MainHero";
import Resume from "../Resume/Resume";
import ResumePDF from "../../resources/Patrick_Carter_Resume.pdf";

const AboutMe = () => {
	return (
		<div
			id="about"
			className="lg:h-screen ml-[25%] font-mono flex flex-col items-center justify-center py-20 px-5"
		>
			<h1 className="pointer-events-auto font-black text-slate-100 my-10 text-4xl md:text-6xl lg:text-8xl">
				About Me
			</h1>

			<div className="mb-10 pointer-events-auto max-w-6xl text-sm text-slate-300 md:text-base bg-slate-800 border rounded-md p-5 flex flex-col lg:flex-row items-center w-full">
				<div className="mb-5 md:mb-0 flex-1">
					<span className="font-thin text-sm lg:text-md">
						Hello! I'm Patrick Carter, a passionate, self-taught developer with
						a strong foundation in mathematics, having graduated from Marist
						College with a degree in the subject. My journey into the tech world
						began with my deep-rooted love for automation. Back in 2020, I
						delved into the realm of Python, primarily using it for scripting
						tasks that made everyday processes more efficient.
						<br />
						<br />
						As time passed, my interests transitioned towards the expansive
						domain of web development. Starting with the basics of HTML, CSS,
						and vanilla JavaScript, I quickly developed a fondness for creating
						intuitive and interactive web interfaces. This passion only grew
						stronger as I immersed myself in the React ecosystem, and currently,
						I'm honing my skills in NextJS, a cutting-edge framework that offers
						unparalleled performance and scalability.
						<br />
						<br />
						Now, as I stand at the cusp of an exciting new chapter in my life,
						I'm eager to leverage my skills and knowledge in a professional
						setting. I'm on the lookout for opportunities that will challenge
						me, help me grow as a developer, and allow me to contribute to
						meaningful projects. If you're in search of a dedicated and
						enthusiastic developer with a unique blend of mathematical insight
						and technical prowess, let's connect!
					</span>
				</div>
				<a
					href={ResumePDF}
					target="_blank"
					rel="noopener noreferrer"
					className="w-auto justify-center m-10 inline-flex"
				>
					<Resume />
				</a>
			</div>

			<h2 className="text-2xl font-black text-slate-100 mb-5 text-center">
				Technologies / Frameworks
			</h2>

			<div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-100">
				<Reveal>
					<div className="flex items-center justify-evenly border rounded-md p-5 bg-slate-800">
						<FaPython className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								Python
							</h3>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaSalesforce className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								Salesforce
							</h3>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaReact className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								React
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaJsSquare className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								JavaScript
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<SiPostgresql className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								PostgreSQL
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<SiMongodb className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								MongoDB
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<SiTypescript className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								Typescript
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<SiFirebase className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								Firebase
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaHtml5 className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								HTML5
							</h3>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded-md p-5 bg-slate-800 justify-evenly">
						<FaCss3 className="text-[30px] text-white mr-3" />
						<div>
							<h3 className="pointer-events-auto text-sm xl:text-lg font-bold">
								CSS
							</h3>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
};

export default AboutMe;
