import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import smartbrain from "../../resources/smartbrain-project.png";
import crownclothing from "../../resources/crown-clothing.png";
import notesapp from "../../resources/notes-app.png";
import { Reveal } from "../MainHero/MainHero";

const ColorChangeCards = () => {
	return (
		<div
			className="p-4 md:p-8 ml-80 h-screen flex flex-col items-center justify-center"
			id="portfolio"
		>
			<Reveal>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
					<Card
						heading="Smart Brain"
						description="Allows you to provide a link to a picture and it will detect any faces in the picture.  Built using React and Express"
						imgSrc={smartbrain}
					/>
					<Card
						heading="Crown Clothing"
						description="Online clothing store built using React"
						imgSrc={crownclothing}
					/>
					<Card
						heading="Notes App"
						description="Notes app built using the MERN (MongoDB, Express, React, Node.js) tech stack."
						imgSrc={notesapp}
					/>
				</div>
			</Reveal>
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
					<p>{description}</p>
				</div>
			</div>
		</motion.div>
	);
};

const ShiftLetter = ({ letter }) => {
	return (
		<div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
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