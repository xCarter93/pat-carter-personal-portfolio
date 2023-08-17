import Tilt from "react-parallax-tilt";
import resume from "../../resources/resume_screenshot-min.webp";

const Resume = () => {
	return (
		<Tilt className="m-4">
			<img
				src={resume}
				loading="lazy"
				alt="resume"
				className="h-auto sm:h-80 rounded-md"
			/>
		</Tilt>
	);
};

export default Resume;
