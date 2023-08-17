import { FaPython, FaSalesforce, FaReact, FaJsSquare } from "react-icons/fa";
import { Reveal } from "../MainHero/MainHero";

const AboutMe = () => {
	return (
		<div
			id="about"
			className="h-screen ml-[20%] font-mono flex flex-col items-center justify-center py-20 px-5"
		>
			<h1 className="pointer-events-auto font-black text-slate-100 my-10 text-4xl md:text-6xl lg:text-8xl">
				About Me
			</h1>

			<p className="text-center mb-10 pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
				risus eget purus feugiat malesuada.
			</p>

			<div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-100">
				<Reveal>
					<div className="flex items-center border rounded p-5 bg-slate-800">
						<FaPython className="text-8xl text-white mr-5" />
						<div>
							<h3 className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base mb-2">
								Python
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								vehicula, ipsum in posuere placerat.
							</p>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded p-5 bg-slate-800">
						<FaSalesforce className="text-8xl text-white mr-5" />
						<div>
							<h3 className="text-xl font-bold mb-2">Salesforce</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								vehicula, ipsum in posuere placerat.
							</p>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex items-center border rounded p-5 bg-slate-800">
						<FaReact className="text-8xl text-white mr-5" />
						<div>
							<h3 className="text-xl font-bold text-slate-100 mb-2">React</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								vehicula, ipsum in posuere placerat.
							</p>
						</div>
					</div>
				</Reveal>
				<Reveal>
					<div className="flex items-center border rounded p-5 bg-slate-800">
						<FaJsSquare className="text-8xl text-white mr-5" />
						<div>
							<h3 className="text-xl font-bold text-slate-100 mb-2">
								JavaScript
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								vehicula, ipsum in posuere placerat.
							</p>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
};

export default AboutMe;
