import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import smartbrain from "../../resources/smartbrain-project-min.webp";
import crownclothing from "../../resources/crown-clothing-min.webp";
import notesapp from "../../resources/notes-app-min.webp";
import { Reveal } from "../MainHero/MainHero";
import { Link } from "react-router-dom";

const ColorChangeCards = () => {
	return (
		<div
			className="px-5 ml-[25%] lg:h-screen flex flex-col items-center justify-center font-mono"
			id="portfolio"
		>
			<h1 className="pointer-events-auto font-black text-slate-100 my-10 text-4xl md:text-6xl lg:text-8xl">
				Portfolio
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
				<Reveal>
					<Link
						to="https://smartbrain-project-six.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card
							heading="Smart Brain"
							description="ReactJS, Express, PostregSQL, Clarifai API"
							imgSrc={smartbrain}
						/>
					</Link>
				</Reveal>
				<Reveal>
					<Link
						to="https://crown-clothing-sepia.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card
							heading="Crown Clothing"
							description="ReactJS, Firebase"
							imgSrc={crownclothing}
						/>
					</Link>
				</Reveal>
				<Reveal>
					<Card
						heading="Notes App"
						description="Typescript, ReactJS, MongoDB, Express"
						imgSrc={notesapp}
					/>
				</Reveal>
			</div>
		</div>
	);
};

const Card = ({ heading, description, imgSrc }) => {
	return (
		<motion.div
			transition={{
				staggerChildren: 0.035,
			}}
			whileHover="hover"
			className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
		>
			<div
				className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
				style={{
					backgroundImage: `url(${imgSrc})`,
					backgroundSize: "auto 100%",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			<div className="p-4 relative z-20 h-full text-black group-hover:text-black transition-colors duration-500 flex flex-col justify-between">
				<FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
				<div>
					<h4>
						{heading.split("").map((l, i) => (
							<ShiftLetter letter={l} key={i} />
						))}
					</h4>
					<p className="text-sm md:text-base">{description}</p>
				</div>
			</div>
		</motion.div>
	);
};

const ShiftLetter = ({ letter }) => {
	return (
		<div className="inline-block overflow-hidden h-[25px] md:h-[36px] font-semibold text-xl md:text-3xl">
			<motion.span
				className="flex flex-col min-w-[4px]"
				style={{
					y: "0%",
				}}
				variants={{
					hover: {
						y: "-50%",
					},
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<span>{letter}</span>
				<span>{letter}</span>
			</motion.span>
		</div>
	);
};

export default ColorChangeCards;
