import Tilt from "react-parallax-tilt";
import resume from "../../resources/resume_screenshot-min.webp";

const Resume = () => {
	return (
		<Tilt>
			<img
				src={resume}
				loading="lazy"
				alt="resume"
				className="h-auto w-auto sm:h-80 rounded-md"
			/>
		</Tilt>
	);
};

export default Resume;
