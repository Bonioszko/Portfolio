import CurrentProject from "./CurrentProject";
import data from "../assets/helpers/projects.js";
import { Section } from "./Section.js";
import { useState } from "react";
import SectionHeading from "./SectionHeading.js";
const ProjectCard: React.FC = () => {
    const [active, setActive] = useState(0);
    return (
        <Section left={false} id="Projects">
            <SectionHeading text="Projects"></SectionHeading>
            <div className="flex gap-4">
                {data.map((project, index) => (
                    <h1
                        onClick={() => setActive(index)}
                        key={project.name}
                        className={`text-text-color border-b-2 font-semibold sm:text-xl cursor-pointer  ${
                            index === active
                                ? " transition-border-color  border-secondary-color"
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
};
export default ProjectCard;
