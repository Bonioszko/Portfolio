import ReactLogo from "../../public/react-2.svg";
import ExpressLogo from "../../public/express-109.svg";
import MongoDBLogo from "../../public/mongodb-icon-1.svg";
import GithubIcon from "../assets/icons/GithubIcon";
import LiveSiteIcon from "../assets/icons/LiveSiteIcon";
import CurrentProject from "./CurrentProject";
import { useState } from "react";
const data = [
    {
        name: "TrainingApp",
        imageLink: "../../public/TrainingApp.jpg",
        description:
            "I wanted to create application to track my personaltrainings. Application allows you to create your own trainings and exercises. Based on created trainings you cancreate specific training with repetitions, sets and weigthused. Interesting functionality is a built in timer, so youdo not need to use separate application to track timebetween sets. To access content you need to firstly registerand then login into you account",
        technologies: ["React", "Express", "MongoDB"],
        githubLink: "https://github.com/Bonioszko/TrainingApp",
        liveSiteLink: "trainingappfull.onrender.com",
    },
    {
        name: "Portfolio",
        imageLink: "https://example.com/image2.jpg",
        description: "This is a description for Project 2",
        technologies: ["item4", "item5", "item6"],
        githubLink: "ss",
        liveSiteLink: "trainingappfull.onrender.com",
    },
    {
        name: "BoardGameCollector",
        imageLink: "https://example.com/image3.jpg",
        description: "This is a description for Project 3",
        technologies: ["item7", "item8", "item9"],
        githubLink: "ss",
        liveSiteLink: "trainingappfull.onrender.com",
    },
    {
        name: "Server",
        imageLink: "https://example.com/image3.jpg",
        description: "This is a description for Project 3",
        technologies: ["item7", "item8", "item9"],
        githubLink: "ss",
        liveSiteLink: "trainingappfull.onrender.com",
    },
    // Add more objects as needed
];
function ProjectCard() {
    const [active, setActive] = useState(0);
    return (
        <div className="bg-gradient-to-l from-secondary-color to-primary-color w-full  sm:w-3/4 p-2 flex flex-col items-center gap-5 rounded-3xl">
            <h1 className="text-white text-5xl font-bold">Personal projects</h1>
            <div className="flex gap-4">
                {data.map((project, index) => (
                    <h1
                        onClick={() => setActive(index)}
                        key={project.name}
                        className={`text-white border-b-2 cursor-pointer transition-colors duration-1000 ease-in-out ${
                            index === active
                                ? "bord border-secondary-color"
                                : "border-transparent"
                        }`}
                    >
                        {project.name}
                    </h1>
                ))}
            </div>
            <div className=" flex flex-col sm:flex-row gap-4">
                {" "}
                {data.map((project, index) => (
                    <CurrentProject
                        key={index}
                        name={project.name}
                        imageLink={project.imageLink}
                        description={project.description}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        liveSiteLink={project.liveSiteLink}
                        active={index === active ? true : false}
                    ></CurrentProject>
                ))}
            </div>

            {/* <div className="w-3/5">
                <div className="flex">
                    {data.map((project) => (
                        <div className="text-white"> {project.name}</div>
                    ))}
                </div>

                <h1>asdasdasdasdasdasdasdasdasdasd</h1>
                <img
                    src="../../public/TrainingApp.jpg"
                    alt="TrainingApp"
                    className=" w-full rounded-3xl"
                />
            </div>

            <div className=" h-13 w-full flex flex-col justify-center items-center gap-5">
                <h1 className="col text-white text-3xl">TrainingApp</h1>
                <div className="flex justify-center gap-5  ">
                    <img src={ReactLogo} alt="" className="w-10 " />
                    <img src={ExpressLogo} alt="" className="w-10 " />
                    <img
                        src={MongoDBLogo}
                        alt=""
                        className="w-10  text-black rounded-full"
                    />
                </div>

                <p className="text-white">
                    I wanted to create application to track my personal
                    trainings. Application allows you to create your own
                    trainings and exercises. Based on created trainings you can
                    create specific training with repetitions, sets and weigth
                    used. Interesting functionality is a built in timer, so you
                    do not need to use separate application to track time
                    between sets. To access content you need to firstly register
                    and then login into you account
                </p>
                <div className="flex justify-center gap-3">
                    <a
                        href="https://github.com/Bonioszko/TrainingApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon className="fill-white hover:fill-green-500" />
                    </a>
                    <a
                        href="https://github.com/Bonioszko/TrainingApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LiveSiteIcon className="fill-black hover:fill-red-600" />
                    </a>
                </div>
            </div> */}
        </div>
    );
}
export default ProjectCard;
