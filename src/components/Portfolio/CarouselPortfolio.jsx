import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import smartbrain from "../../resources/smartbrain-project-min.webp";
// import crownclothing from "../../resources/crown-clothing-min.webp";
import ecommerce from "../../resources/nextjs-ecommerce.webp";
import yelpcamp from "../../resources/yelpcamp.png";
import imagegallery from "../../resources/image-gallery.webp";
import flowbrain from "../../resources/flowbrain.webp";
import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import { Reveal } from "../MainHero/MainHero";

const MARGIN = 20;

const BREAKPOINTS = {
	sm: 640,
	lg: 1044,
};

const CardCarousel = () => {
	const [ref, { width }] = useMeasure();
	const [offset, setOffset] = useState(0);
	const size = useWindowSize();

	const CARD_WIDTH = size.width > BREAKPOINTS.sm ? 300 : 230;
	const CARD_HEIGHT = 350;

	const CARD_SIZE = CARD_WIDTH + MARGIN;

	const CARD_BUFFER =
		width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

	const CAN_SHIFT_LEFT = offset < 0;

	const CAN_SHIFT_RIGHT =
		Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

	const shiftLeft = () => {
		if (!CAN_SHIFT_LEFT) {
			return;
		}
		setOffset((pv) => (pv += CARD_SIZE));
	};

	const shiftRight = () => {
		if (!CAN_SHIFT_RIGHT) {
			return;
		}
		setOffset((pv) => (pv -= CARD_SIZE));
	};

	return (
		<section
			id="portfolio"
			className="lg:h-screen flex justify-center items-center"
		>
			<div className="relative overflow-hidden ml-[25%] items-center justify-center font-mono px-5">
				<h1 className="flex pointer-events-auto font-black text-slate-100 my-10 text-4xl md:text-6xl lg:text-8xl items-center justify-center px-5">
					Portfolio
				</h1>
				{/* CARDS */}
				<Reveal>
					<div ref={ref} className="max-w-6xl overflow-hidden">
						<motion.div
							animate={{
								x: offset,
							}}
							className="flex"
						>
							{items.map((item) => {
								return (
									<Card
										key={item.id}
										{...item}
										height={CARD_HEIGHT}
										width={CARD_WIDTH}
									/>
								);
							})}
						</motion.div>
						{/* BUTTONS */}
						<motion.button
							initial={false}
							animate={{
								x: CAN_SHIFT_LEFT ? "0%" : "-100%",
							}}
							className="absolute left-0 top-[60%] z-30 rounded-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
							onClick={shiftLeft}
						>
							<FiChevronLeft />
						</motion.button>
						<motion.button
							initial={false}
							animate={{
								x: CAN_SHIFT_RIGHT ? "0%" : "100%",
							}}
							className="absolute right-0 top-[60%] z-30 rounded-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
							onClick={shiftRight}
						>
							<FiChevronRight />
						</motion.button>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

const Card = ({ imgUrl, category, title, description, url, height, width }) => {
	return (
		<Link to={url} target="_blank" rel="noopener noreferrer">
			<div
				className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
				style={{
					width: width,
					height: height,
					marginRight: MARGIN,
					backgroundImage: `url(${imgUrl})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
					<span className="text-xs font-semibold uppercase text-violet-300">
						{category}
					</span>
					<p className="my-2 text-3xl font-bold">{title}</p>
					<p className="text-lg text-slate-300">{description}</p>
				</div>
			</div>
		</Link>
	);
};

export default CardCarousel;

const items = [
	{
		id: 1,
		imgUrl: flowbrain,
		category: "OpenAI, Pinecone, Next.js, Shadcn UI, Clerk",
		title: "FlowBrain",
		description: "An intelligent note-taking app with AI integration",
		url: "https://nextjs-notesapp-ai.vercel.app/",
	},
	{
		id: 2,
		imgUrl: ecommerce,
		category: "Typescript, ReactJS, MongoDB, Prisma, DaisyUI",
		title: "Flowmazon (Amazon Clone)",
		description:
			"Amazon clone that allows you to add products to a cart, sign in, sign out, etc.",
		url: "https://nextjs-ecommerce-xcarter93.vercel.app/",
	},
	{
		id: 3,
		imgUrl: imagegallery,
		category: "Typescript, NextJS, Unsplash API",
		title: "NextJS Image Gallery",
		description: "Image gallery built with NextJS and the Unsplash API",
		url: "https://nextjs13-image-gallery-eh4xhm4f0-xcarter93.vercel.app/",
	},
	{
		id: 4,
		imgUrl: smartbrain,
		category: "ReactJS, Express, PostregSQL, Clarifai API",
		title: "SmartBrain",
		description:
			"Single page React App that uses ML to do face recognition on image URLs",
		url: "https://smartbrain-project-six.vercel.app/",
	},
	{
		id: 5,
		imgUrl: yelpcamp,
		category: "Javascript, EJS, Express, MongoDB",
		title: "Yelp Camp",
		description: "Yelp clone for campsites around the world.",
		url: "https://yelpcamp-hu87.onrender.com/",
	},
];
