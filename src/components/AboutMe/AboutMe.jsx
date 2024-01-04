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

const technologies = [
	{ key: 0, name: "Python", icon: FaPython },
	{ key: 1, name: "Salesforce", icon: FaSalesforce },
	{ key: 2, name: "React", icon: FaReact },
	{ key: 3, name: "Javascript", icon: FaJsSquare },
	{ key: 4, name: "PostgreSQL", icon: SiPostgresql },
	{ key: 5, name: "MongoDB", icon: SiMongodb },
	{ key: 6, name: "Typescript", icon: SiTypescript },
	{ key: 7, name: "Firebase", icon: SiFirebase },
	{ key: 8, name: "HTML5", icon: FaHtml5 },
	{ key: 9, name: "CSS", icon: FaCss3 },
];

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
						I am Patrick Carter, a dedicated and experienced professional
						specializing in operational excellence within the SaaS industry.
						Over the past five years, I have developed a strong skill set in
						leading global teams and enhancing Quote to Cash processes. My
						expertise includes leveraging advanced tools like Salesforce and
						Python to optimize operations significantly. Having worked
						internationally, I bring a wide-ranging perspective to process
						optimization, which aids me in promoting cross-departmental
						collaboration and increasing stakeholder value.
						<br />
						<br />
						As a lifelong learner and proactive problem-solver, I pride myself
						on my adaptability and hands-on approach to challenges. In 2023, I
						earned three Salesforce certifications, reflecting my commitment to
						staying abreast of technological advancements. My dedication and
						attention to detail have been recognized consistently throughout my
						career. I am passionate about driving process improvements and excel
						in environments that challenge me to apply my automation and
						coordination skills for business growth.
						<br />
						<br />
						My resume not only showcases my technical and managerial
						capabilities but also my ability to work collaboratively and
						innovate. I have successfully led diverse teams across different
						continents, ensuring efficient operational workflows and high team
						engagement. My tenure at Datadog highlights my capacity to turn
						complex challenges into streamlined, effective solutions. Combining
						technical knowledge with leadership acumen, I consider myself a
						valuable asset to any forward-thinking organization.
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
				{technologies.map((tech) => (
					<Reveal key={tech.key}>
						<div className="flex items-center justify-around border rounded-md p-5 bg-slate-800">
							<tech.icon className="text-[25px] text-white mr-3 flex-none" />
							<div>
								<h3 className="pointer-events-auto text-xs xl:text-lg font-bold">
									{tech.name}
								</h3>
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	);
};

export default AboutMe;
