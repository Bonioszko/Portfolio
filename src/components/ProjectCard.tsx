import ReactLogo from "../../public/react-2.svg";
import ExpressLogo from "../../public/express-109.svg";
import MongoDBLogo from "../../public/mongodb-icon-1.svg";
import GithubIcon from "../assets/icons/GithubIcon";
import LiveSiteIcon from "../assets/icons/LiveSiteIcon";
import CurrentProject from "./CurrentProject";
import data from "../assets/helpers/projects.js";
import { Section } from "./Section.js";
import { useState } from "react";
// const data = [
//     {
//         name: "TrainingApp",
//         imageLink: "../../public/TrainingApp.jpg",
//         description:
//             "I wanted to create application to track my personaltrainings. Application allows you to create your own trainings and exercises. Based on created trainings you cancreate specific training with repetitions, sets and weigthused. Interesting functionality is a built in timer, so youdo not need to use separate application to track timebetween sets. To access content you need to firstly registerand then login into you account",
//         technologies: ["React", "Express", "MongoDB"],
//         githubLink: "https://github.com/Bonioszko/TrainingApp",
//         liveSiteLink: "trainingappfull.onrender.com",
//     },
//     {
//         name: "Portfolio",
//         imageLink: "https://example.com/image2.jpg",
//         description: "This is a description for Project 2",
//         technologies: ["item4", "item5", "item6"],
//         githubLink: "ss",
//         liveSiteLink: "trainingappfull.onrender.com",
//     },
//     {
//         name: "BoardGameCollector",
//         imageLink: "https://example.com/image3.jpg",
//         description: "This is a description for Project 3",
//         technologies: ["item7", "item8", "item9"],
//         githubLink: "ss",
//         liveSiteLink: "trainingappfull.onrender.com",
//     },
//     {
//         name: "Server",
//         imageLink: "https://example.com/image3.jpg",
//         description: "This is a description for Project 3",
//         technologies: ["item7", "item8", "item9"],
//         githubLink: "ss",
//         liveSiteLink: "trainingappfull.onrender.com",
//     },
//     // Add more objects as needed
// ];
function ProjectCard() {
    const [active, setActive] = useState(0);
    return (
        <Section left={false}>
            <h1 className="text-text-color text-5xl font-bold">
                Personal projects
            </h1>
            <div className="flex gap-4">
                {data.map((project, index) => (
                    <h1
                        onClick={() => setActive(index)}
                        key={project.name}
                        className={`text-text-color border-b-2 cursor-pointer transition-all duration-1000 ease-in-out ${
                            index === active
                                ? " animate-slideInFromLeft  border-secondary-color"
                                : "border-transparent"
                        }`}
                    >
                        {project.name}
                    </h1>
                ))}
            </div>
            <div className=" flex flex-col sm:flex-row gap-4">
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
        </Section>
    );
}
export default ProjectCard;
