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

			<div className="mb-10 pointer-events-auto max-w-6xl text-sm text-slate-300 md:text-base bg-slate-800 border rounded-md p-5 flex flex-col lg:flex-row items-center w-full">
				<div
					className="mb-5 md:mb-0 flex-1"
					style={{ flexBasis: "min-content" }}
				>
					<span className="font-extrabold text-md mb-5 block">
						School:{" "}
						<span className="font-thin text-sm lg:text-md">Marist College</span>
					</span>
					<span className="font-extrabold text-md mb-5 block">
						Concentration:{" "}
						<span className="font-thin text-sm lg:text-md">Mathematics</span>
					</span>
					<span className="font-extrabold text-md mb-5 block">
						About Me:{" "}
						<span className="font-thin text-sm lg:text-md">
							I have grown up in and around the Boston area my entire life. I
							went to school in New York in hopes to graduate with a Computer
							Science degree, however, ended up shifting to Mathematics my
							freshman year. Just because I made that change did not mean I lost
							the interest in becoming a developer. Directly after graduating
							college I did not think much about trying to learn to program,
							until COVID-19 hit. Once everyone was forced inside I thought it
							would be the perfect time to begin working towards a better
							future.
							<br />
							<br />I started out learning Python and leveraged multiple
							resources such as Udemy, Codecademy, The App Brewery, Zero To
							Mastery and more. I was even able to leverage Python in my day to
							day at my current role by writing a Python script that interacted
							with our Salesforce environment. After getting comfortable with
							Python I moved on to learning Web Development. Starting with HTML,
							CSS, and vanilla Javascript. From there I went on to learn more
							advanced topics like React, Redux, and NextJS and am currently
							working to develop my skills in these areas. I have received
							multiple certifications for my courses in Python and Web
							Development and am looking to start the next chapter in my life
							where I can use these skills on a day to day basis solving real
							world issues.
						</span>
					</span>
				</div>
				<a
					href={ResumePDF}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 w-auto justify-center md:ml-5 inline-flex"
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
