import { FaPython, FaSalesforce, FaReact, FaJsSquare } from "react-icons/fa";

const AboutMe = () => {
	return (
		<div
			id="about"
			className="h-screen ml-80 font-mono flex flex-col items-center justify-center py-20"
		>
			<h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl my-10">
				About Me
			</h1>

			<p className="max-w-2xl text-center text-slate-100 text-xl mb-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
				risus eget purus feugiat malesuada.
			</p>

			<div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-100">
				<div className="flex items-center border rounded p-5 bg-slate-800">
					<FaPython className="text-8xl text-white mr-5" />
					<div>
						<h3 className="text-xl font-bold text-slate-100 mb-2">Python</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							vehicula, ipsum in posuere placerat.
						</p>
					</div>
				</div>

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
			</div>
		</div>
	);
};

export default AboutMe;
