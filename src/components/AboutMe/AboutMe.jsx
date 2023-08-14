import { FaPython, FaSalesforce, FaReact, FaJsSquare } from "react-icons/fa";

const AboutMe = () => {
	return (
		<div
			id="about"
			className="h-screen ml-80 font-mono flex flex-col items-center justify-center"
		>
			<h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl my-10">
				About Me
			</h1>

			<div className="grid md:grid-cols-3 lg:grid-cols-4 text-8xl text-white w-full place-items-center">
				<FaPython />
				<FaSalesforce />
				<FaReact />
				<FaJsSquare />
			</div>
		</div>
	);
};

export default AboutMe;
